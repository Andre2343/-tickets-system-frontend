import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { GET_TICKETS_QUERY } from './useGetTickets';

const ADD_TICKET_MUTATION = gql`
  mutation addTicket($input: TicketInput) {
    addTicket(input: $input) {
      _id
      title
      assignee
    }
  }
`;

export default () => {
  const [addTicketMutation] = useMutation(ADD_TICKET_MUTATION, { refetchQueries: [{ query: GET_TICKETS_QUERY }] });

  const handleAddTicket = useCallback(
    async ({ title, assignee }, { resetForm }) => {
      try {
        await addTicketMutation({ variables: { input: { title, assignee } } });
        resetForm();
        toast.success('Successfully added');
      } catch (error) {
        toast.error(error.message);
      }
    },
    [addTicketMutation],
  );

  return handleAddTicket;
};

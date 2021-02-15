import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { GET_TICKET_QUERY } from './useGetTicket';

const UPDATE_TICKET_MUTATION = gql`
  mutation updateTicket($ticketId: ID!, $input: TicketInput!) {
    updateTicket(ticketId: $ticketId, input: $input) {
      _id
      title
      assignee
    }
  }
`;

export default (ticketId) => {
  const history = useHistory();
  const [updateTicketMutation] = useMutation(UPDATE_TICKET_MUTATION, {
    refetchQueries: [{ query: GET_TICKET_QUERY, variables: { ticketId } }],
  });

  const handleUpdateTicket = useCallback(
    async ({ title, assignee }) => {
      try {
        await updateTicketMutation({ variables: { ticketId, input: { title, assignee } } });
        history.goBack();
        toast.success('Successfully updated');
      } catch (error) {
        toast.error(error.message);
      }
    },
    [updateTicketMutation, ticketId, history],
  );

  return handleUpdateTicket;
};

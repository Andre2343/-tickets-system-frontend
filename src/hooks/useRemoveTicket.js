import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { GET_TICKETS_QUERY } from './useGetTickets';

const REMOVE_TICKET_MUTATION = gql`
  mutation removeTicket($ticketId: ID!) {
    removeTicket(ticketId: $ticketId)
  }
`;

export default () => {
  const [removeTicketMutation] = useMutation(REMOVE_TICKET_MUTATION, {
    refetchQueries: [{ query: GET_TICKETS_QUERY }],
  });

  const handleRemoveTicket = useCallback(
    async (ticketId) => {
      try {
        await removeTicketMutation({ variables: { ticketId } });
        toast.success('Successfully removed');
      } catch (error) {
        toast.error(error.message);
      }
    },
    [removeTicketMutation],
  );

  return handleRemoveTicket;
};

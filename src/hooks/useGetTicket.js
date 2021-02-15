import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

export const GET_TICKET_QUERY = gql`
  query ticket($ticketId: ID!) {
    ticket(ticketId: $ticketId) {
      _id
      title
      assignee
    }
  }
`;

export default (ticketId) => {
  const { data, loading } = useQuery(GET_TICKET_QUERY, { variables: { ticketId } });
  const ticket = get(data, 'ticket', null);
  return [ticket, loading];
};

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

export const GET_TICKETS_QUERY = gql`
  query tickets {
    tickets {
      _id
      title
      assignee
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(GET_TICKETS_QUERY);
  const tickets = get(data, 'tickets', []);
  return [tickets, loading, error];
};

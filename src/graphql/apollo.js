import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import settings from '../config/settings';

const link = ApolloLink.from([
  setContext((_, { headers }) => {
    return { headers };
  }),
  onError(({ graphQLErrors, networkError, response }) => {
    const code = response?.errors[0]?.extensions?.code;
    if (code === 'UNAUTHENTICATED') {
      window.location.replace(window.location.origin);
    }
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  new HttpLink({
    uri: settings.graphqlServerUrl,
  }),
]);

const cacheIndexBlacklist = [];

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    freezeResults: true, // new
    dataIdFromObject: ({ _id, __typename }) => {
      if (cacheIndexBlacklist.includes(__typename)) return null;
      return _id ? `${__typename}___${_id}` : null;
    },
  }),
  assumeImmutableResults: true, // new
});

export default client;

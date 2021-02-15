import React from 'react';
import RootRouter from 'router/RootRouter';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastContainer } from 'react-toastify';
import apolloClient from './graphql/apollo';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RootRouter />
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;

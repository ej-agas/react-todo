import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './components/Root';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60, // 60 seconds
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 1000 * 60,
      refetchIntervalInBackground: false,
      suspense: false,
    },
    mutations: {
      retry: false,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

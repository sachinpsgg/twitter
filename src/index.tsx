import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

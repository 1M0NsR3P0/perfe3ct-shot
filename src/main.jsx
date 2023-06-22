import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Components/Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Layouts/AuthProviders/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xxl mx-auto'>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </div>
    </QueryClientProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)

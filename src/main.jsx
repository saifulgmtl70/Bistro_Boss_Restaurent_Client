import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import { router } from './Components/Routes/Routes.jsx';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
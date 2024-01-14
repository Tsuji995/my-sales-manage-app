import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from "./components/Home"
import Invoice from "./components/Invoice"
import { Route, RouterProvider } from 'react-router-dom';
import RouterApp from './components/RouterApp';
import OrganizationSales from './components/OrganizationSales';

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Invoice" element={<Invoice />} />
      <Route path="OrganizationSales" element={<OrganizationSales />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={routesLink} />

);


import Login from '@/components/Login.tsx';
import Register from '@/components/Register.tsx';
import AuthLayout from '@/layouts/AuthLayout.tsx';
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx';
import './index.css';

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>˚
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

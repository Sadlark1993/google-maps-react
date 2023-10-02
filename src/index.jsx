import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SimpleMap } from './components/SimpleMap';
import { PlaceAutocompleteInput } from './components/PlaceAutocompleteInput';
import { SideNav } from './components/SideNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<SimpleMap />} />
          <Route path="/place-autocomplete" element={<PlaceAutocompleteInput />} />
        </Routes>
      </BrowserRouter>
    </Home>
  </React.StrictMode>,
);

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Components/Main/Main';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Main}/>
    </BrowserRouter>
  );
}

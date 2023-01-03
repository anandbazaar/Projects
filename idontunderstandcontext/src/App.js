import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component1, Component2 } from './components';
import { Home } from './pages';
import { UserProvider } from './common/UserProvider';


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Component1/>}/>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;

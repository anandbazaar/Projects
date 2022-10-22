import logo from './logo.svg';
import './App.css';
import all, { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = () =>{
  return(
    <div>Home</div>
  )
}
const User = () =>{
  return(
    <div>User</div>
  )
}
const Shop = () =>{
  return(
    <div>Shop</div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={cd</Home>}></Route>
        <Route path='/user' element={<User></User>}><User></User></Route>
        <Route path='/shop' element={<Shop></Shop>}><Shop></Shop></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

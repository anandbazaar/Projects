import './App.css';
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Outlet,
  useLocation,
} from "react-router-dom";

const Home = () =>{
  return(
    <div>Home</div>
  )
}
const Users = () => {
  return(
    <div>Users:</div>
  )
}
const Shop = () => {
  return(
    <div>Shop</div>
  )
}
const User = () =>{
  const params = useParams();
  console.log(params)
}
const Andy = () => {
  return(
    <div>andy</div>
  )
}



function App() {
  return (
    <BrowserRouter>
    <div className='asd'>
    <Link to='/'>Home</Link>
    <Link to='/users'>users</Link>
    <Link to='/shop'>shop</Link>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/users"} element={<Users/>}>
          <Route path = {"/andy"} element={<Andy/>}/>
          <Route path={":username"} element={<User/>} />
        </Route>
        <Route path={"/shop"} element={<Shop/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

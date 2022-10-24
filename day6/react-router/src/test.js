import {
    Link,
    BrowserRouter,
    Routes,
    Route,
    useParams,
    Outlet,
    useLocation,
  } from "react-router-dom";
  
  const Home = () => {
    return <div>Home</div>;
  };
  
  const Users = () => {
    return (
      <div>
        Users <Link to="andy">Andy</Link>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };
  
  const User = () => {
    const params = useLocation();
  
    console.log("params", params);
  
    return <div>User: {params.username}</div>;
  };
  
  const Shop = () => {
    return <div>Shop</div>;
  };
  
  const Andy = () => {
    return <div>Andy</div>;
  };
  
  export const App = () => {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
  
          <Link to="/users">Users</Link>
  
          <Link to="/shop">Shop</Link>
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users">
              <Route path=":username" element={<User />} />
              <Route path="andy" element={<Andy />} />
            </Route>
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
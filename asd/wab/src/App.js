import logo from "./logo.svg";
import "./App.css";
import { Review } from "./components";




function App() {
  return (
    <div className="App">
      <Review
        numStar={3}
        name ='andy'
        text="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
      ></Review>
    </div>
  );
}

export default App;

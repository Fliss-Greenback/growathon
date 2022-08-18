import { store } from "./store";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import Header from "./header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Forms/Registration";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Registration/>}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

import { store } from "./store";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import Header from "./header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

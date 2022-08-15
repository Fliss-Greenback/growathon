import { store } from "./store";
import { Provider } from "react-redux";
import PlantDetail from "./myplants/PlantDetail";
import OrigSiteInjector from "./general/OrigSiteInjector";
import MyPlants from "./myplants/MyPlants";
import OfferDetails from "./rewards/RewardDetails";
import Offers from "./rewards/Rewards";
import Home from "./Pages/Home";
import Login from "./auth/Login";
import Header from "./header/Header";
import UpdatePlant from "./myplants/UpdatePlant";
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import CarWithPageNavigation from "./pages/CarWithPageNavigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/:PageNo?"
            element={<CarWithPageNavigation />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

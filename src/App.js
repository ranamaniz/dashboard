import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Datasets from './pages/Datasets';
import Projects from './pages/Projects';
import GrepsrFacility from './pages/GrepsrFacility';
import MainContainer from './components/Layout/MainContainer';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContainer />} >
          <Route index element={<Projects />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/grepsr_facility" element={<GrepsrFacility />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
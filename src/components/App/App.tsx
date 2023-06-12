import type { FC } from "react";
import "./App.css";
import Navbar from '../Navbar/Navbar';

import Agents from "../Agents/Agents";

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Agents />
    </div>
  );
};

export default App;

import type { FC } from "react";
import "./App.css";
import Navbar from '../Navbar/Navbar';
import { ModalProvider } from "../Context/modalContext";
import Agents from "../Agents/Agents";

const App: FC = () => {
  return (
    <ModalProvider>
      <div className="app">
        <Navbar />
        <Agents />
      </div>
    </ModalProvider>
  );
};

export default App;

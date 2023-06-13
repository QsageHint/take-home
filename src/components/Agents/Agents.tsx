import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agents.css'
import Modal from '../Modal/Modal';

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
  }, []);

  return (
    <div className="agents">
      {agents.map((agent) => (
        <Agent key={agent.id} agent={agent} />
      ))}
      <Modal />
    </div>
  );
};

export default Agents;

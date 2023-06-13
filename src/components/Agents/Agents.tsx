import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agents.css'
import Modal from '../Modal/Modal';
import { useModalContext } from '../../Hook/useModalContext'

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const { needReload, searchString } = useModalContext();

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
  }, [needReload]);

  useEffect(() => {
    async function fetchSearchData(searchString: string) {
      const response = await axios.post("/search", {
        searchString
      });
      console.log(response.data);
      setAgents(response.data);
    }
    fetchSearchData(searchString);
  }, [searchString]);

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

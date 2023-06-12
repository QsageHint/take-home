import { IsformProps } from './Agent'

export interface modalContextData {
    needReload: boolean;
    isModalOpen: boolean;
    isform: string;
    agentReview: String;
    searchString: string;
    openModal: () => void;
    closeModal: () => void;
    reload: () => void;
    set_Isform: (key: IsformProps) => void;
    setSearchString: (key: string) => void;
}
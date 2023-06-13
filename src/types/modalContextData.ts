export interface modalContextData {
    needReload: boolean;
    isModalOpen: boolean;
    isform: string;
    searchString: string;
    openModal: () => void;
    closeModal: () => void;
    reload: () => void;
    set_Isform: (key: string) => void;
    setSearchString: (key: string) => void;
}
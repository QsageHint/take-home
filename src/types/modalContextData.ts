export interface modalContextData {
    needReload: boolean;
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    reload: () => void;
}
import { createContext, ReactNode, useState } from "react";
import { modalContextData } from '../../types/modalContextData';

interface ModalProviderProps {
    children: ReactNode
}

export const ModalContext = createContext<modalContextData>({} as modalContextData);

export function ModalProvider({children}: ModalProviderProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [needReload, setNeedReload] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const reload = () => {
        setNeedReload(!needReload);
    }

    return (
        <ModalContext.Provider
            value={{
                needReload,
                isModalOpen,
                openModal,
                closeModal,
                reload
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
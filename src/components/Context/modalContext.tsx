import { createContext, ReactNode, useState } from "react";
import { modalContextData } from './modalType';

interface ModalProviderProps {
    children: ReactNode
}

export const ModalContext = createContext<modalContextData>({} as modalContextData);

export function ModalProvider({children}: ModalProviderProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
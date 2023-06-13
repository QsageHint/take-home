import { useContext } from "react";
import { ModalContext } from "../Context/modalContext";

export function useModalContext() {
    const context = useContext(ModalContext);
    return context;
}
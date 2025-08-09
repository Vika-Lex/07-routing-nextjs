import {ReactNode} from "react";

interface ModalLayoutProps {
    children: ReactNode;
    modal?: ReactNode;
}


const ModalLayout = ({children, modal}: ModalLayoutProps) => {
    return (
        <>
            {children}
            {modal}
        </>
    );
};
export default ModalLayout
interface ModalLayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
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
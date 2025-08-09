export default function ModalLayout({
                                        children
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <div className="modal-wrapper">
            {children}
        </div>
    );
}
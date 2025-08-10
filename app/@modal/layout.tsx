import { ReactNode } from 'react';

interface ModalLayoutProps {
    children: ReactNode;
    modal: string;
}

export default function ModalLayout({ children, modal }: ModalLayoutProps) {
    return (
        <div>
            {children}
            {modal}
        </div>
    );
}
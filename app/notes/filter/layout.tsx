import css from './layout.module.css';
import {ReactNode} from "react";

interface LayoutProps {
    sidebar: ReactNode;
    children: ReactNode;
    modal?: ReactNode;
}

const NotesLayout = ({sidebar, children, modal}: LayoutProps) => {
    return (
        <div className={css.container}>
            <div className={css.sidebar}>
                {sidebar}
            </div>
            <div className={css.main}>
                {children}
                {modal}
            </div>
        </div>
    );
};
export default NotesLayout
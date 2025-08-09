import Modal from "@/components/Modal/Modal";
import {getNoteById} from "@/lib/api";

interface PageProps {
    params: Promise<{ id: string }>;
}

const ModalPage = async ({params}: PageProps) => {
    const {id} = await params;
    const note = await getNoteById(id);


    return (
        <Modal>
            <div style={{padding: '20px', maxWidth: '600px'}}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
            </div>
            <div style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                display: 'inline-block'
            }}
            >
                {note.tag}
            </div>
        </Modal>
    );
};
export default ModalPage
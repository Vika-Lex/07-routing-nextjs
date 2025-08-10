'use client';

import Modal from "@/components/Modal/Modal";
import {getNoteById} from "@/lib/api";
import {useQuery} from "@tanstack/react-query";
import {useParams, useRouter} from "next/navigation";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Loading from "@/app/loading";
import React from "react";



export default function NotePreviewClient () {
    const {id} = useParams<{id: string}>();
    // const router = useRouter();
    const {data: note, isLoading, isError} = useQuery({
        queryKey: ['note', id],
        queryFn: () => getNoteById(id),
        refetchOnMount: false,
    });


    if (isLoading) return <Loading/>;

    if( isError)  return <ErrorMessage message='Could not fetch the list of notes.'/>

    if (!note) return null

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



























// 'use client';
//
// import Modal from "@/components/Modal/Modal";
// import {getNoteById} from "@/lib/api";
//
//
// interface PageProps {
//     params: Promise<{ id: string }>;
// }
//
// const NotePreview = async ({params}: PageProps) => {
//     const {id} = await params;
//     const note = await getNoteById(id);
//
//
//     return (
//         <Modal>
//             <div style={{padding: '20px', maxWidth: '600px'}}>
//                 <h2>{note.title}</h2>
//                 <p>{note.content}</p>
//             </div>
//             <div style={{
//                 marginTop: '10px',
//                 padding: '5px 10px',
//                 backgroundColor: '#f0f0f0',
//                 borderRadius: '4px',
//                 display: 'inline-block'
//             }}
//             >
//                 {note.tag}
//             </div>
//         </Modal>
//     );
// };
// export default NotePreview
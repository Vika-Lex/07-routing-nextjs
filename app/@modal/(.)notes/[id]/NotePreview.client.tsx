'use client';

import Modal from "@/components/Modal/Modal";
import {getNoteById} from "@/lib/api";
import {useQuery} from "@tanstack/react-query";
import {useParams, useRouter} from "next/navigation";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Loading from "@/app/loading";
import React, {useEffect, useState} from "react";
import {Note} from "@/types/note";
import css from './NotePreview.module.css';

export default function NotePreviewClient() {
    const router = useRouter();
    const {id} = useParams<{ id: string }>();
    const [noteNew, setNoteNew] = useState<Note | null>(null)

    const {data: note, isLoading, isError} = useQuery({
        queryKey: ['note', id],
        queryFn: () => getNoteById(id),
        refetchOnMount: false,
    });

    const handleCloseModal = () => {
        router.back();
    };

    useEffect(() => {
        if (!note) return
        const fn = async () => {
            const res = await getNoteById(note.id);
            setNoteNew(res)
        };
        fn();
    }, [note]);


    if (isLoading) return <Loading/>;

    if (isError) return <ErrorMessage message='Could not fetch the list of notes.'/>

    if (!note) return null

    return (
        <>
            {note && (
                <Modal>
                    <button className={css.backBtn}
                            onClick={handleCloseModal}
                    >← Back
                    </button>
                    <div className={css.item}>
                        <h2 className={css.header}>{note.title}</h2>

                        <p className={css.content}> {note.content}</p>
                    </div>

                    <div className={css.footerModal}>
                        <p className={css.tag}>
                            {note.tag}
                        </p>
                        {note.createdAt && (
                            <div className={css.date}>
                                {new Date(note.createdAt).toLocaleDateString()}
                            </div>
                        )}
                    </div>
                </Modal>
            )}
        </>
    );
};



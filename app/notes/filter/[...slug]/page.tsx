import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import {getAllNotes, Sorting} from "@/lib/api";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

interface PageProps {
    params: Promise<{ slug: string[] }>;
}
const Page = async ({params}:PageProps) => {
    const {slug} = await params;
    const filterValue = slug[0];

    const tag = filterValue === 'All' ? undefined : filterValue;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', '', 1, tag],
        queryFn: () => getAllNotes('', 1, Sorting.CREATED, 10, tag),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient filterTag={tag}/>
        </HydrationBoundary>

    );
};
export default Page
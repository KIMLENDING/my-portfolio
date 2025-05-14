import DetailPage from "@/components/portfolio/layout/DetailPage";


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div>
            <DetailPage id={id} />
        </div>
    );
}


export default Page;

import { axiosInstance } from "@/utils/utils";

export default async function Home() {
    const res = await axiosInstance.get("/personagens");
    console.log(res.data)
    return (
        <main className="w-full flex justify-center items-center">
            <section className="w-1/2 p-5 flex justify-center items-center flex-col bg-slate-500">
                <header className="w-1/2 bg-red-200 py-4 text-center">Personagens</header>
                <div className="py-4 text-center">
                    <p>asd</p>
                </div>
            </section>
        </main>
    );
}

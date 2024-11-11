import Column1 from "@/components/Column1";
import Column2 from "@/components/Column2";
import Column3 from "@/components/Column3";
import Header from "@/components/Header";

export default async function Home() {
    return (
        <main className="w-full bg-slate-300">
            <Header name="Marico" role="Ladrão" userName="Maricock"/>
            <div className="grid grid-cols-3">
                <section className="w-full bg-blue-300">
                    <Column1 />
                </section>
                <section className="w-full bg-blue-400">
                    <Column2 />
                </section>
                <section className="w-full bg-blue-500">
                    <Column3 />
                </section>
            </div>
        </main>
    )
}

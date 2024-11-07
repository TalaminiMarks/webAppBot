import Column1 from "@/components/Column1";
import Header from "@/components/Header";

export default async function Home() {
    return (
        <main className="w-full bg-slate-300">
            <Header name="Marico" role="Ladrão" userName="Maricock"/>

            <section className="w-1/3 bg-blue-300">
                <Column1 />

            </section>
            <section className="w-1/3"></section>
            <section className="w-1/3"></section>
        </main>
    )
}

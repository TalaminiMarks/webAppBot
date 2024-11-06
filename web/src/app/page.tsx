import Header from "@/components/Header";

export default async function Home() {
    return (
        <main className="w-full bg-slate-300">
            <Header name="Marico" role="Ladrão" userName="Maricock"/>

            <section>
                <div className="bg-yellow-200 w-1/3">
                    <div className="w-28">
                        <div>
                            <p>Força</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Destreza</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Constituição</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Inteligência</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Sabedoria</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Carisma</p>
                            <p>1</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center gap-10 bg-slate-200">
                        <p className="w-14">12</p>
                        <p className="w-full">Inspiração</p>
                    </div>
                </div>


            </section>
        </main>
    )
}

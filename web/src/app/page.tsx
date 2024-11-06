export default async function Home() {
    return (
        <main className="w-full bg-slate-300">
            <header className="py-6 flex justify-between items-center">
                <section className="w-1/3 bg-red-300">
                    <span>algum nome</span>
                    <p>Nome do personagem</p>
                </section>

                <section className="w-2/3 grid grid-cols-3 justify-center items-center bg-blue-200">
                    <div>
                        <span>..;</span>
                        <p>Classe e nivel</p>
                    </div>
                    <div>
                        <span>..;</span>
                        <p>Antecedente</p>
                    </div>
                    <div>
                        <span>..;</span>
                        <p>Nome do jogador</p>
                    </div>
                    <div>
                        <span>..;</span>
                        <p>Raça</p>
                    </div>
                    <div>
                        <span>..;</span>
                        <p>Tendência</p>
                    </div>
                    <div>
                        <span>..;</span>
                        <p>Pontos de Experiencia</p>
                    </div>
                </section>
            </header>

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

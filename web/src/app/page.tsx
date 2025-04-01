import Link from "next/link"
import { cookies } from "next/headers"
import { jwtDecode, JwtPayload } from "jwt-decode";
import catWorking from "@/public/working.gif"
import Image from "next/image";

import LogOut from "@/components/LogOut"
import LogIn from "@/components/LogIn";

interface JwtPayloadCustom extends JwtPayload {
    name?: string;
}

export default async function Home() {
    const token = (await cookies()).get("token");

    function getUserName(){
        if(token){
            const payload = jwtDecode<JwtPayloadCustom>(token.value);
            return payload.name;
        }
        else{
            return "Usuário"
        }
    }
    return (
        <>
            <header className="w-full flex justify-between items-center gap-2 py-4">
                <span>Bem vindo! <strong>{getUserName()}</strong>!</span>
                <div className="flex gap-2">
                    <Link className="px-4 py-2 bg-purple-400 rounded-xl" href="/personagem">Personagem</Link>
                    {token ? <LogOut /> : <LogIn />}
                </div>
            </header>
            <main className="w-full h-full flex flex-col items-center mt-32">
                <div className="w-full flex justify-center items-center">
                    <Image src={catWorking} alt="Cat typing on notebook" width={350}/>
                </div>
                <section className="w-[50%]">
                    <p className="text-center">
                        Essa pagina está em construção 🔨
                    </p>
                </section>
            </main>
        </>
    )
}

import DiscordBtn from "@/components/DiscordBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login"
}

export default function Page(){
    return (
        <div className="w-full h-full flex flex-col items-center py-10 gap-32">
            <div>
                <h2>Pagina de login</h2>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-10">
                <div>
                    <DiscordBtn />
                </div>

                <h2>Porque usar só o discord para Login?</h2>

                <div className="w-3/4 mt-8 flex flex-col gap-8">
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam quia voluptates! Impedit pariatur hic quasi culpa magni. Iste reiciendis animi repellendus perspiciatis, expedita in excepturi quibusdam laborum ullam facere!</p>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae, atque sit totam consectetur quibusdam eveniet quidem non ullam laudantium molestias, quisquam modi ea neque, incidunt rerum error! Explicabo, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo provident tempore. Saepe laudantium voluptatibus, exercitationem et in culpa dicta nulla odit soluta officiis tenetur at, totam dolorem! Sed, maiores!</p>
                </div>
            </div>
        </div>
    )
}
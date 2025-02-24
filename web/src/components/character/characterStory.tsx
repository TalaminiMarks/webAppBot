"use client"

import { ReactNode, useState } from "react"
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"

interface TextFieldProps {
    title: string;
    children: ReactNode;
}

function TextField({ title, children }: TextFieldProps){
    const [isOpen, setIsOpen] = useState(false);

    function showText(){
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col bg-blue-200 p-2">
            <button onClick={showText} className="w-full flex justify-between items-center">
                <h2>{title}</h2>
                {isOpen ? <ChevronLeftIcon width={30} height={30}/> : <ChevronDownIcon width={30} height={30}/>}
            </button>
            <div className={`${isOpen ? "h-auto" : "h-0"} overflow-hidden transition-[height]`}>
                {children}
            </div>
        </div>
    )
}

export default function CharacterStory(){

    return (
        <>
            <TextField title="Tendencia">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque accusamus hic maxime iste quas?</p>
            </TextField>

            <TextField title="Personalidade">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque ac
                    cusamus hic maxime iste quas?</p>
            </TextField>
            <TextField title="Ideais">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque accusamus hic maxime iste quas?</p>
            </TextField>

            <TextField title="Ligações">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque accusamus hic maxime iste quas?</p>
            </TextField>

            <TextField title="Defeitos">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque accusamus hic maxime iste quas?</p>
            </TextField>

            <TextField title="Antecedentes">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque accusamus hic maxime iste quas?</p>
            </TextField>

            <TextField title="Historia">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis earum provident et labore unde, illo rerum dolorum nisi aut rem? Aspernatur dolor esse cumque accusamus hic maxime iste quas?</p>
            </TextField>
        </>
    )
}
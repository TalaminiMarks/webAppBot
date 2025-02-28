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
            <div className={`${isOpen ? "h-full" : "h-0"} overflow-hidden transition-[height]`}>
                <div className="py-2 border-t border-black">
                    {children}
                </div>
            </div>
        </div>
    )
}

interface CharacterStoryProps {
    affiliation: string;
    previous: string;
    defect: string;
    ideas: string;
    personality: string;
    story: string;
    tendency: string;   
}

export default function CharacterStory({ affiliation, defect, story, ideas, personality, previous, tendency}: CharacterStoryProps){
    return (
        <div className="w-full h-[70%] flex flex-col gap-2 overflow-y-auto">
            <TextField title="Tendencia">
                <p>{tendency}</p>
            </TextField>

            <TextField title="Personalidade">
                <p>{personality}</p>
            </TextField>

            <TextField title="Ideais">
                <p>{ideas}</p>
            </TextField>

            <TextField title="Ligações">
                <p>{affiliation}</p>
            </TextField>

            <TextField title="Defeitos">
                <p>{defect}</p>
            </TextField>

            <TextField title="Antecedentes">
                <p>{previous}</p>
            </TextField>

            <TextField title="Historia">
                <p>{story}</p>
            </TextField>
        </div>
    )
}
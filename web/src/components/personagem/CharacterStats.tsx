"use client"

import { useState, useEffect, useRef } from "react";

import { api } from "@/utils/utils";
import { characterAttributes, characterExpertise, DataInfo } from "@/utils/interfaces";

interface CharacterStatsProps {
    characterAttributes: characterAttributes[];
    characterExpertise: characterExpertise[];
    attributes: DataInfo[];
    expertise: DataInfo[];
}

export default function CharacterStats({ characterAttributes, characterExpertise, attributes, expertise }: CharacterStatsProps){
    return (
        <div>
            <button>Stats</button>
            {/* <div ref={modalRef} className="fixed top-0 left-0 w-full h-full hidden bg-black bg-opacity-50 justify-center items-center z-50" onClick={handleClickOutside} onKeyDown={handleKeyDown} aria-modal="true">

            </div> */}
        </div>
    )
}
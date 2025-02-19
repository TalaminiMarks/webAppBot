import { FormEvent } from "react";

import { api } from "@/utils/utils";
import { characterAttributes, characterExpertise, DataInfo } from "@/utils/interfaces";
import AttrField from "./characterStatusComponents/AttrField";

interface AttributesProps {
    characterAttributes: characterAttributes[];
    characterExpertise: characterExpertise[];
}

export default async function Attributes({ characterAttributes, characterExpertise }: AttributesProps){
    return (
        <div>a</div>
    )
}
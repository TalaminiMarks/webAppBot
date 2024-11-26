import TextAreaField from "./column3/TextAreaField";

interface CharacterInfo{
    personality: string,
    ideas: string,
    affiliation: string,
    defect: string,
    particulars: string
}

export default function Column3({affiliation, defect, ideas, particulars, personality}: CharacterInfo){
    return (
        <div className="w-full flex flex-col items-center justify-center px-8 gap-2">
            <TextAreaField description="traços de personalidade" id="personality" value={personality}/>
            <TextAreaField description="ideais" id="ideas" value={ideas}/>
            <TextAreaField description="ligaçoes" id="affiliation" value={affiliation}/>
            <TextAreaField description="defeitos" id="defect" value={defect}/>
            <TextAreaField description="características e habilidades" id="particulars" rows={25} value={particulars}/>
        </div>
    )
}
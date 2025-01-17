import TextAreaField from "./geral/TextAreaField";

interface Column3Props{
    personality: string,
    ideas: string,
    affiliation: string,
    defect: string,
    particulars: string
}

export default function Column3({affiliation, defect, ideas, particulars, personality}: Column3Props){
    return (
        <div className="w-full flex flex-col items-center justify-center px-8 gap-2">
            <TextAreaField description="traços de personalidade" id="personality" defaultValue={personality}/>
            <TextAreaField description="ideais" id="ideas" defaultValue={ideas}/>
            <TextAreaField description="ligaçoes" id="affiliation" defaultValue={affiliation}/>
            <TextAreaField description="defeitos" id="defect" defaultValue={defect}/>
            <TextAreaField description="características e habilidades" id="particulars" rows={25} defaultValue={particulars}/>
        </div>
    )
}
import TextAreaField from "./column3/TextAreaField";

export default function Column3(){
    return (
        <div className="w-full flex flex-col items-center justify-center px-8 gap-2">
            <TextAreaField description="traços de personalidade" id="personality" />
            <TextAreaField description="ideais" id="ideas" />
            <TextAreaField description="ligaçoes" id="contacts" />
            <TextAreaField description="defeitos" id="defect" />
            <TextAreaField description="características e habilidades" id="particulars" rows={25}/>
        </div>
    )
}
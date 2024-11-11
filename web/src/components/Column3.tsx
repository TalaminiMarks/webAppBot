import Field from "./column3/Field";

export default function Column3(){
    return (
        <div className="w-full flex flex-col items-center justify-center px-8 gap-2">
            <Field description="traços de personalidade"/>
            <Field description="ideis"/>
            <Field description="ligaçoes"/>
            <Field description="defeitos"/>
            <Field description="características e habilidades" rows={25}/>
        </div>
    )
}
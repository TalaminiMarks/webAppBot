interface FieldProps {
    numericPosition: number
}

function Field({numericPosition}: FieldProps){
    return (
        <div className="w-full flex justify-between items-center gap-2">
            <input type="text" name={"weapon" + numericPosition} className="w-1/3"/>
            <input type="text" name={"bonus" + numericPosition} className="w-1/3"/>
            <input type="text" name={"type" + numericPosition} className="w-1/3"/>
        </div>
    )
}

export default function Hits(){
    return (
        <div className="w-full p-2 flex flex-col bg-yellow-300 gap-2">
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between items-center gap-2">
                    <p className="w-1/3">Nome</p>
                    <p className="w-1/3 text-center">bonus</p>
                    <p className="w-1/3 text-center">dano/tipo</p>
                </div>
                <Field numericPosition={1} />
                <Field numericPosition={2} />
                <Field numericPosition={3} />
            </div>
            <div>
                <textarea name="obs" id="attackObs" rows={10} className="resize-none w-full p-2"></textarea>
                <p className="w-full text-center uppercase">ataques e magias</p>
            </div>
        </div>
    )
}
import SingleField from "./column2/SingleField";

export default function Column2(){
    return(
        <div className="w-full flex justify-center items-center px-8">
            <div className="w-full flex justify-between items-center">
                <SingleField description="classe armd"/>
                <SingleField description="iniciativa"/>
                <SingleField description="desloc."/>
            </div>
        </div>
    )
}
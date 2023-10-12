
interface IprogressoBar{
    value:number
}

export function ProgressoBar(props: IprogressoBar){
    return(
        <div className="w-full h-3 bg-blackCustum01 rounded-sm">
            <div className={`h-full drop-shadow-md shadow-lg rounded-sm ${props.value < 65 ? 'bg-green-800' : 'bg-red-800' }`}
              style={{ width: `${props.value}%` }}
            ></div>
        </div> 
    )
}
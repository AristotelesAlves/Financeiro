import { Hamburger } from "phosphor-react"
import { ProgressoBar } from "../components/ProgressoBar";

interface ICategoria {
    porcentagem: number;
    categoria: string;
    valor: number;
}

export function ProgressoBarCategoria(props: ICategoria){
    return(
        <div className="flex items-center h-[50px] gap-1 bg-blackCustum03 p-2 rounded-md w-full">
            <div className="p-1 mt-1 bg-teal-500 rounded-lg drop-shadow-lg shadow-lg">
                <Hamburger size={25} />
            </div>
            <div className="flex w-full flex-col">
                <div className="w-full flex items-center justify-between">
                    <p className="text-base">
                        {props.categoria}
                    </p>
                    <p className="text-xs">
                        R${props.valor}
                    </p>
                </div>
                <ProgressoBar value={props.porcentagem}/>
            </div>
        </div>
    )
}
import { Hamburger } from "phosphor-react";
import { BarraProgresso } from "../BarraProgresso";

interface props{
    title: string;
    value: number;
    porcentage: number;
}


export function CategoriaProgresso({title, value, porcentage} : props){
    return (
        <div className="w-full flex gap-2 items-center h-fit">
            <div className="p-2 bg-white rounded-md text-black">
                <Hamburger size={30}/>
            </div>
            <div className="w-full flex flex-col justify-center">
                <div className="flex justify-between items-center w-full px-1">
                    <p>
                        {title}
                    </p>
                    <p>
                        R$ {value}
                    </p>
                </div>
                <div className="-mt-2">
                    <BarraProgresso width={porcentage}/>
                </div>
            </div>
        </div>
    )
}
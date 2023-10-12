import { HouseLine  } from "phosphor-react"

export function CardUltimaOperacao(){
    return (
        <ul className="w-full flex items-center justify-between bg-blackCustum02 rounded-lg py-2 px-2 text-white text-opacity-80">
            <li className="w-[35%] font-normal flex items-center gap-1">
                <div className="p-2 rounded-lg bg-teal-500">
                    <HouseLine  size={20} />
                </div>
                Lampada RGB
            </li>
            <li className=" w-[10%] font-normal">
                09/10/2023
            </li>
            <li className="w-[10%] font-normal ">
                Casa
            </li>
            <li className="w-[20%] font-normal">
                R$100,00
            </li>
        </ul>
    )
}
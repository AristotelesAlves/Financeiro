import { ForkKnife, MagnifyingGlass, XCircle } from "phosphor-react"
import { SideBar } from "../components/SideBar"
import { useState } from "react"

export function Dispesas(){

    const [filter, setFilter] = useState(false)

    return(
        <div className="flex">
            <SideBar/>
            <div className="h-screen w-screen bg-blackCustum01 p-4 flex flex-col gap-2">
                {/* header  */}
                <div className="flex justify-between items-center"> 
                    <div className="flex gap-2 items-center w-full">
                        <div className="flex justify-between gap-2 w-full rounded-md">
                            
                            {/* barra de busca */}
                            <div className="flex flex-col gap-2 w-[60%]">

                                <div className="flex gap-2 w-full items-center">
                                    <input type="text" className="flex h-[35px] w-[75%] px-2 rounded-md  bg-blackCustum02 text-white drop-shadow-md"/>
                                    <button className=" bg-blackCustum02 text-white h-[35px] w-[35px] flex items-center justify-center rounded-md drop-shadow-md">
                                        <MagnifyingGlass size={23}/>
                                    </button>
                                    <button className="text-white px-1 border-b-[1px] text-sm"
                                      onClick={() => setFilter(!filter)}
                                    >
                                        Busca avançado
                                    </button>
                                </div>
                                 {/* Filtro de busca */}
                                <div className={`bg-blackCustum02 text-white w-fit drop-shadow-md p-4 rounded-md flex flex-col gap-2 justify-center ${filter == true ? "":"hidden"}`}>
                                    <div className="flex justify-between">
                                        <strong>
                                            Filtro de busca
                                        </strong>
                                        <button onClick={() => setFilter(!filter)}>
                                            <XCircle size={23}/>
                                        </button>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col gap-1 ">
                                            <label>Data de lançamento</label>
                                            <input 
                                              className="bg-blackCustum03 rounded-md py-1 px-2"
                                              type="text" 
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Metodo de pagamento</label>
                                            <input 
                                              className="bg-blackCustum03 rounded-md py-1 px-2"
                                              type="text" 
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col gap-1">      
                                            <label>Categoria</label>
                                            <input 
                                              className="bg-blackCustum03 rounded-md py-1 px-2"
                                              type="text" 
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Valor</label>
                                            <input 
                                              className="bg-blackCustum03 rounded-md py-1 px-2"
                                              type="text" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lançar dispesa */}
                            <div className="text-white bg-blackCustum02 h-[35px] drop-shadow-md px-3 rounded-md flex items-center justify-center">
                                Lançar dispesa
                            </div>

                        </div>
                    </div>
                </div>
                
                {/* dispesas */}
                <div className="w-full h-full bg-blackCustum02 rounded-md flex flex-col gap-2 overflow-y-scroll">

                    
                    <ul className="flex text-white mx-2 p-3 py-2 text-sm">
                        <li className="w-[30%]">
                            Nome
                        </li>
                        <li className="w-[20%]">
                            Categoria
                        </li>
                        <li className="w-[20%]">
                            Data
                        </li>
                        <li className="w-[20%]">
                            Pagamento
                        </li>
                        <li className="w-[10%]">
                            Valor
                        </li>
                    </ul>
                    {/* Totalizando 15 card */}
                    <ul className="flex text-white mx-2 py-2 text-sm rounded-md bg-blackCustum03 p-3 items-center">
                        <li className="w-[30%] flex gap-2 items-center">
                            <div className="p-1 rounded-md bg-sky-300">
                                <ForkKnife size={20} />
                            </div>
                            Açai com nutella
                        </li>
                        <li className="w-[20%]">
                            Comida
                        </li>
                        <li className="w-[20%]">
                            14/10/23
                        </li>
                        <li className="w-[20%]">
                            Debito
                        </li>
                        <li className="w-[10%]">
                            R$13,00
                        </li>
                    </ul>
            

                </div>
                {/* paginação */}
                <div className="flex w-full justify-end items-center gap-2 text-white">
                    <ul className="flex gap-2">
                        <li className="h-[35px] w-[35px] bg-blackCustum03 flex text-sm  items-center justify-center rounded-md">
                            1
                        </li>
                        <li className="h-[35px] w-[35px] bg-blackCustum02 flex text-sm  items-center justify-center rounded-md">
                            2
                        </li>
                        <li className="h-[35px] w-[35px] bg-blackCustum02 flex text-sm  items-center justify-center rounded-md">
                            3
                        </li>
                    </ul>
                    <button className="h-[35px] bg-blackCustum02 drop-shadow-md text-sm px-2 rounded-md">
                        Proxima página
                    </button>
                </div>
            </div>
        </div>
    )
}

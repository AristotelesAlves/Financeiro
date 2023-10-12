import { ArcoProgresso } from "../components/ArcoProgresso";
import { CardUltimaOperacao } from "../components/CardUltimasOperacao";
import { Cartao } from "../components/Cartao";
import { ProgressoBarCategoria } from "../components/ProgressoBarCategoria";
import { SideBar } from "../components/SideBar";



export function Home(){

    return(
        <div className="h-screen w-screen bg-blackCustum01">
            {/* header */}
            <div> 

            </div>
            {/* corpo do site */}
            <div className="flex gap-3 items-center">
                {/* Side bar */ }
                <div>
                    <SideBar/>
                </div>

                {/* Conteudo */}
                <div className="flex justify-center gap-3 w-full h-full">
                    {/* Conteudo A */}
                    <div>

                        <div className="flex gap-3">
                            <Cartao type="debito"/>
                            <Cartao type="credit"/>   
                        </div> 
                        <div className="w-[710px]">
                            <strong className="text-xl text-white">
                                Ultimas operações
                            </strong>
                                <ul className="w-full flex justify-between py-1 px-2 text-white">
                                    <li className="w-[35%] font-normal">
                                        Nome
                                    </li>
                                    <li className=" w-[10%] font-normal">  
                                        Data
                                    </li>
                                    <li className="w-[10%] font-normal ">
                                        Categoria
                                    </li>
                                    <li className="w-[20%] font-normal">
                                        Valor
                                    </li>
                                </ul>
                                <div className="flex flex-col gap-2 h-[300px] overflow-hidden overflow-scroll">
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                    <CardUltimaOperacao/>
                                </div>
                        </div>     

                    </div>
                     {/* Conteudo B */}
                    <div className="h-full w-full text-white">
                        <div className="bg-blackCustum02 w-[350px] h-full p-4 rounded-md drop-shadow-lg shadow-xl">
                            {/* conteudo A */}
                            <div className="bg-blackCustum03 w-fit flex flex-col rounded-lg">
                                <div className="flex flex-col items-center py-3 ml-4">
                                    <strong className="w-full">
                                        Orçamento
                                    </strong>
                                    <ArcoProgresso porcentagem={60}/>
                                    <p className="-mt-8 text-2xl font-semibold ">
                                        60%
                                    </p>
                                    <p className="text-xl font-semibold">
                                        R$100,00
                                    </p>
                                </div>  
                            </div>
                            {/* conteudo B */}
                            <div className="mt-2">
                                <strong className="mb-2 text-lg">
                                    Resumo por categoria
                                </strong>
                                <div className=" flex flex-col gap-2 mt-1 h-[340px] overflow-scroll">
                                    <ProgressoBarCategoria categoria="casa" porcentagem={90} valor={90.00} />
                                    <ProgressoBarCategoria categoria="casa" porcentagem={70} valor={70.00} />
                                    <ProgressoBarCategoria categoria="casa" porcentagem={50} valor={50.00} />
                                    <ProgressoBarCategoria categoria="casa" porcentagem={30} valor={30.00} />
                                    <ProgressoBarCategoria categoria="casa" porcentagem={20} valor={20.00} />
                                    <ProgressoBarCategoria categoria="casa" porcentagem={10} valor={10.00} />
                                    <ProgressoBarCategoria categoria="Droga" porcentagem={5} valor={5.55} />
                                    <ProgressoBarCategoria categoria="Droga" porcentagem={5} valor={5.55} />
                                    <ProgressoBarCategoria categoria="Droga" porcentagem={5} valor={5.55} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
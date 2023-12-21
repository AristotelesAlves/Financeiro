import { ArrowUp } from "phosphor-react";
import { Tabela } from "../components/Tabela/Index";
import { CategoriaProgresso } from "../components/CategoriaProgresso";

export function CartaoCredito(){
    return(
        <section className="flex p-5 gap-5 h-full w-full">
            <div className="w-[30%] flex flex-col gap-5">
                <div className="w-full p-5 bg-blackCustum01 rounded-lg drop-shadow-lg flex flex-col justify-between gap-4 text-white">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl">
                            Nubank
                        </h1>
                        <p>
                            <ArrowUp/>
                        </p>
                    </div>
                    <p>
                        A. Oliveira
                    </p>
                    <p>
                        **** **** **** 2073
                    </p>
                    <p>
                        26/24
                    </p>
                </div>
                <div className="h-full w-full p-5 rounded-lg drop-shadow-lg flex flex-col overflow-y-scroll bg-blackCustum01 text-white gap-2">
                    <h1 className="font-bold text-xl">
                        Resumo por categoria
                    </h1>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>
                    <CategoriaProgresso porcentage={50} title="Comida" value={250}/>    
                </div>
            </div>
            <div className="w-full h-full flex-1">
                <div className="bg-blackCustum01 text-white h-full w-full flex flex-col gap-1 rounded-md drop-shadow-lg">
                    <div>
                        <ul className="flex items-center justify-center gap-10 py-2">
                            <li>
                                Outubro
                            </li>
                            <li>
                                Novembro
                            </li>
                            <li className="font-semibold text-lg">
                                Dezembro
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-red-600 py-3">
                        <h1 className="font-bold text-xl">
                            R$ 1.000,00
                        </h1>
                        <p className="">
                            Fatura fechada
                        </p>
                    </div>
                    <div className="px-5">
                    <Tabela body={
                        [
                            {
                              element:['Iphone 13 pro MAX','R$ 1.200,00','R$200,00 3/12','...'],
                              icon:"Phone"
                            },
                            {
                                element:['Iphone 13 pro MAX','R$ 1.200,00','R$200,00 3/12','...'],
                                icon:"Phone"
                              }
                          ]
                    } header={['Descrição','Valor Total', 'Parcela', 'Ação']}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
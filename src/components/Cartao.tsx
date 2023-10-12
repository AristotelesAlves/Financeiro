import { ArrowLineDownRight, ArrowLineUpRight, CreditCard  } from "phosphor-react"
interface ICardProps {
    type: string
}


export function Cartao(props:ICardProps){
    

    return (
        <div className="flex flex-col gap-2 text-white">
            <div className="w-[350px] px-5 py-3 bg-blackCustum02 rounded-lg flex flex-col gap-2 drop-shadow-xl">
                <div>
                    <p>
                        {props.type != 'credit'? 'Saldo': 'Fatura'}
                    </p>
                    <strong className="text-xl">
                        R$ 100.00
                    </strong>
                </div>
                <p>
                    ***223
                </p>
                {
                    props.type != 'credit'?
                        <strong className="w-full text-right">
                            Nu - Debito
                        </strong>
                        :
                        <div className="flex justify-between items-center">
                            <p className="text-sm">
                                25/23
                            </p>
                            <strong>
                                Nu - Credito
                            </strong>
                        </div>
                }
            </div>
            <div className="w-full">
                {
                    props.type != 'credit'?
                    <div className="flex justify-between gap-2">
                        <div className="flex items-center gap-2 px-2 w-full py-2 rounded-lg bg-blackCustum02">
                            <div className="p-2 bg-green-800 rounded-lg mt-1"> 
                                <ArrowLineUpRight  size={24}/>
                            </div>
                            <div>
                                <p>
                                    Receitas
                                </p>
                                <p>
                                    R$ 100.00
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-2 w-full py-2 rounded-lg bg-blackCustum02">
                            <div className="p-2 bg-red-800 rounded-lg mt-1"> 
                                <ArrowLineDownRight   size={24}/>
                            </div>
                            <div>
                                <p>
                                    Despesas
                                </p>
                                <p>
                                    R$ 100.00
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center gap-2 px-2 w-full py-2 rounded-lg bg-blackCustum02">
                            <div className="p-2 bg-red-800 rounded-lg mt-1"> 
                                <CreditCard   size={24}/>
                            </div>
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between w-[100%]">
                                <p>
                                    Proxima fatura
                                </p>
                                <p className="text-sm">
                                    25/11/23
                                </p>
                            </div>
                            <p>
                                R$ 100,00
                            </p>
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}

interface ICardProps {
    type: string
}


export function Cartao(props:ICardProps){
    

    return (
        <div className="flex flex-col gap-2">
            <div className="w-[350px] px-5 py-3 bg-slate-400 rounded-lg flex flex-col gap-2">
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
                        <div className="flex gap-2 px-5 w-full py-2 rounded-lg bg-red-500">
                            <div> - </div>
                            <div>
                                <p>
                                    Receitas
                                </p>
                                <p>
                                    R$ 100.00
                                </p>
                            </div>
                        </div>
                        <div className=" flex gap-2 w-full px-5 py-2 rounded-lg bg-red-500">
                            <div> + </div>
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
                    <div className="w-full flex px-5 py-2 bg-red-500 rounded-lg">
                        <div> - </div>
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
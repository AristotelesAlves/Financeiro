import { ArrowLineDownRight, ArrowLineUpRight, ArrowsCounterClockwise, Bank, Bookmarks, Cardholder, ChartPieSlice, CreditCard, CurrencyCircleDollar, SignOut } from "phosphor-react";

import logo from '../assets/ideogram-removebg.png'

export function SideBar(){
    return(
        <div className="h-screen bg-blackCustum02 w-[250px] text-white px-5 flex flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex py-3 gap-1 items-center">
                    <img className="h-[30px] w-[30px]"
                      src={logo} 
                      alt="" />
                      <strong className="text-lg">
                        Financeiro
                      </strong>
                </div>
                <ul className="flex flex-col gap-1">
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <ArrowLineUpRight  size={24}/>
                        Despesa
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <ArrowLineDownRight   size={24}/>
                        Receita
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <ArrowsCounterClockwise size={24} />
                        Transferencia
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <Cardholder size={24} />
                        Contas a receber
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <CurrencyCircleDollar size={24} />
                        Contas a pagar
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <CreditCard size={24} />
                        Cartão de credito
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <Bank size={24} />
                        Conta bancaria
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <ChartPieSlice size={24} />
                        Orçamento
                    </li>
                    <li className="flex gap-1 items-center px-1 py-2 hover:bg-blackCustum03 rounded-lg">
                        <Bookmarks size={24} />
                        categorias
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center flex-col bg-blackCustum03 py-3 rounded-lg gap-2 mb-2">
                <img 
                className="w-[50px] h-[50px] rounded-full"
                  src="https://i.pinimg.com/736x/40/3c/6e/403c6e5bd46ac212351fd80f63a9849f.jpg" 
                  alt=""
                />
                <div className="w-full flex flex-col items-center">
                    <strong className="">
                        Aristoteles Alves
                    </strong >
                    <button className="flex fap-2 items-center text-sm">
                        Desconectar
                        <SignOut size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}
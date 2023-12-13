import logo from '../../assets/logo.png'

interface SliderBarProps{
    active: string;
}

export function SlideBar(props: SliderBarProps){
    return(
        <div className="w-[20%] h-screen bg-blackCustum01 p-3 text-white drop-shadow-xl border-r border-blackCustum02">
            <ul className='flex flex-col gap-1'>
                <div className="border-b border-blackCustum02 pb-2 flex items-center">
                    <img className="h-16"
                      src={logo}
                      alt="logo"
                    />
                    <h1 className="font-bold text-2xl">
                        Capitalleal
                    </h1>
                </div>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Dashboard
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Receitas
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Despesas
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Metas
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Orçamento
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Cartão de credito
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Conta bancaria
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Contas a pagar
                    </a>
                </li>
                <li className=" flex items-center gap-1 w-full rounded-md hover:bg-blackCustum02 px-2 py-1">
                    <a href="">
                        Contas a receber
                    </a>
                </li>
            </ul>
        </div>
    )
}
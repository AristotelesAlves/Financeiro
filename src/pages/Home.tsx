import { ArcoProgresso } from "../components/ArcoProgresso";
import { Cartao } from "../components/Cartao";
export function Home(){

    return(
        <div className="h-screen w-screen flex justify-center">
            <div className="flex-1">
                <div className="flex gap-3">
                    <Cartao type="debito"/>
                    <Cartao type="credit"/>
                </div>
        
                <div className="w-full mt-2 flex flex-col gap-1">
                    <strong className="text-xl">
                        Ultimas operações
                    </strong>
                    <ul className="w-full flex justify-between py-1 px-2">
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
                    <ul className="w-full flex items-center justify-between bg-zinc-600 rounded-lg py-2 px-2">
                        <li className="w-[35%] font-normal flex items-center gap-1">
                            <img className="h-[30px] w-[30px] rounded-full bg-white"
                              src="" 
                              alt=""
                            />
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
                    
                </div>
            </div>
            <div className="h-screen w-full">
                <div className="bg-blue-400 rounded-lg w-[200px] h-[100px] flex flex-col justify-center items-center">
                    <ArcoProgresso porcentagem={50}/>
                    <p className="-mt-5">
                        50%
                    </p>
                </div>





                {/* <div className="w-full h-4 bg-gray-300 rounded-lg">
                    <div
                      className="h-full bg-blue-500 rounded-lg"
                      style={{ width: `${2}%` }}
                    ></div>
                </div> */}
            </div>
        </div>
    )
}
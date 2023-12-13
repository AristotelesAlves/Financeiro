import { CardResumo } from "../components/CardResumo";
import Grafico from "../components/Grafico/Index";
import { SlideBar } from "../components/SlideBar/Index";
import { Tabela } from "../components/Tabela/Index";


export function Home(){
  return(
    <div className="bg-blackCustum02 flex w-screen h-screen">
      <SlideBar active="oi"/>
      <div className="w-full flex flex-col gap-4 p-5">
        <div className="w-full h-fit flex gap-5">
          <CardResumo/>
          <CardResumo/>
          <CardResumo/>
          <CardResumo/>
        </div>
        <div className="flex w-full h-full overflow-hidden">
          <div className="w-full h-full flex gap-5 flex-col"> {/* lado esquerdo */}
              <div className="h-full w-full bg-blackCustum01 rounded-md p-3">
                <div className="h-full w-full">
                  <Grafico/>
                </div>
              </div>
              <div className="w-full bg-blackCustum01 text-white p-5 rounded-md">
                <div className="flex w-full items-center justify-between py-3">
                  <h2 className="font-bold text-xl">
                    Ultimas movimentações
                  </h2>
                  <button className="px-2 py-[2px] border border-whitecustom rounded-md text-sm text-whitecustom">
                    Todas
                  </button>
                </div>
                <Tabela/>
              </div>
          </div>
          <div className="w-[40%]"> {/* lado direito */}

          </div>
        </div>
      </div>
    </div>
  )
}
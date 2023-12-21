import { IconsCatalog } from "../icons/Icons"

interface CardresumoProps{
  icon: string
  nome: string
  saldo: string
}

export function CardResumo({icon,nome,saldo}:CardresumoProps){

    const resultIcon = 
      icon === 'banco' ? IconsCatalog.banco 
      : icon === 'cartao' ? IconsCatalog.cartao 
      : icon === 'despesa' ? IconsCatalog.despesa
      : icon === 'receita' ? IconsCatalog.receita 
      : null;

    
    return (
        <div className="w-full h-fit flex min-w-[200px] gap-5">
          <div className="bg-blackCustum01 w-full h-fit rounded-lg p-4 flex items-center gap-2 drop-shadow-md">
              <div className="bg-orange-500 text-white drop-shadow-xl h-12 w-12 rounded-lg flex items-center justify-center text-4xl font-bold">
                {resultIcon}
              </div>
              <div>
                <p className="text-whitecustom text-sm font-semibold">
                  {nome}
                </p>
                <h2 className="text-white font-semibold text-xl">
                  R$ {saldo}
                </h2>
              </div>
          </div>
        </div>
    )
}
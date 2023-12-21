import { CardResumo } from "../components/CardResumo";
import { CategoriaProgresso } from "../components/CategoriaProgresso";
import Grafico from "../components/Grafico/Index";
import { Tabela } from "../components/Tabela/Index";

export function Dashboard(){
    const categories = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
      ];
      const dataThree = [
        840, 700, 1100, 700, 1000, 800,
        859, 900, 900, 1000, 1100, 1100,
      ];
      const dataOne = [
        10, 20, 10, 50, 25, 30,10, 20, 10, 50, 25, 30,
      ];
      const dataTwo = [
        100.3, 10.0, 290, 10, 150, 200,100.3, 10.0, 290, 10, 150, 200
      ];
    return(
        <section className=" h-full w-full flex flex-col">
            <div className="w-full h-full flex flex-col gap-4 p-5">
              <div className="w-full h-fit flex gap-5">
                <CardResumo nome="Conta bancaria" icon="banco" saldo="100,10" key={'c1'}/>
                <CardResumo nome="Receitas" icon="receita" saldo="1.200,00" key={'c3'}/>
                <CardResumo nome="Despesas" icon="despesa" saldo="2.000,00" key={'c2'}/>
                <CardResumo nome="Cartão de credito" icon="cartao" saldo="900,00" key={'c4'}/>
              </div>
              <div className="flex w-full h-full overflow-hidden gap-5">
                <div className="w-full h-full flex gap-5 flex-col"> {/* lado esquerdo */}
                    <div className="h-full w-full bg-blackCustum01 rounded-md drop-shadow-xl">
                      <div className="h-full w-full px-3">
                        <Grafico
                          dataNameThree=""
                          dataThree={dataThree} 
                          titulo="Dezembro - 2023"
                          categories={categories}
                          dataNameOne="Receitas"
                          dataOne={dataOne}
                          dataNameTwo="Despesas"
                          dataTwo={dataTwo}
                          pilha={false}
                          grid
                          valores
                        />
                      </div>
                    </div>
                    <div className="w-full bg-blackCustum01 text-white p-5 h-full overflow-y-scroll rounded-md drop-shadow-xl">
                      <h2 className="font-bold text-xl">
                        Últimas movimentações
                      </h2>
                      <div>
                        <Tabela
                        body={[
                          {
                            element:['Iphone 13 pro MAX','Despesa','Eletronico','13.400,20'],
                            icon:"Phone"
                          },
                          {
                            element:['Iphone 13 pro MAX','Despesa','Eletronico','13.400,20'],
                            icon:"Phone"
                          }
                          ,
                          {
                            element:['Iphone 13 pro MAX','Despesa','Eletronico','13.400,20'],
                            icon:"Phone"
                          }
                        ]}
                        header={["Descrição", "Tipo", "Categoria", "Valor"]}
                      />  
                      </div>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col gap-5"> {/* lado direito */}
                  <div className="w-full h-full overflow-scroll bg-blackCustum01 rounded-md drop-shadow-xl flex flex-col px-3 text-white">
                        <h1 className="w-full py-3 font-semibold text-xl">
                          Despesas por categoria
                        </h1>
                        <CategoriaProgresso porcentage={89} title="Comida" value={650} key={1}/>
                        <CategoriaProgresso porcentage={60} title="Casa" value={500} key={2}/>
                        <CategoriaProgresso porcentage={57} title="Faculdade" value={450} key={3}/>
                        <CategoriaProgresso porcentage={34} title="Farra" value={100} key={4}/>
                        <CategoriaProgresso porcentage={20} title="Eletronico" value={60} key={5}/>
                        <CategoriaProgresso porcentage={5}  title="Remedio" value={25} key={6}/>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}
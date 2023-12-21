import { Horse } from "phosphor-react";

interface PropsTabela {
    header: Array<string>;
    body: Array<{
      element: Array<string | number>;
      icon: string;
    }>;
  }



export function Tabela ({header, body}: PropsTabela){

    return(
    <div className="overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-white border-separate border-spacing-y-2 bg-none">
            <thead className="text-xs text-whitecustom uppercase">
                <tr className="py-2">
                    {header.map((element) => {
                        return (
                            <th scope="Row" className="my-2">
                                {element}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {body.map((element, index) =>{
                    return(
                        <tr key={index} className="border-spacing-2">
                            {element.element.map((elementRow, indexRow) => (
                                    indexRow === 0 ? 
                                    <th scope="row" className="px-2 py-2 border-spacing-2 bg-blackCustum02 rounded-l-md font-medium text-white whitespace-nowrap dark:text-white flex items-center gap-1">
                                        <div className="p-2 bg-white text-black rounded-md">
                                            <Horse size={20}/>
                                        </div>
                                        {elementRow}
                                    </th>
                                    : 
                                    <th scope="row" className={`px-2 my-2 bg-blackCustum02 border-spacing-2  ${element.element.length -1 === indexRow ? 'rounded-r-md' : null}`}>
                                        
                                        {elementRow}
                                    </th> 
                                )
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}
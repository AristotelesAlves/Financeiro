import { Horse,Target,Scroll,Money, Bank, CreditCard, Coins, Wallet } from "phosphor-react"

interface IconInterface {
    [key: string]: React.ReactNode;
}

export const IconsCatalog : IconInterface = {
    casa: <Horse/>,
    Money: <Money/>,
    Scroll: <Scroll/>,
    Target: <Target/>,
    banco: <Bank/>,
    cartao: <CreditCard/>,
    despesa: <Coins/>,
    receita: <Wallet/>
    
}


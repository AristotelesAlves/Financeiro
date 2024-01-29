import { Bus, Coffee, Coins, CreditCard, GameController, Hamburger, HandCoins, MopedFront, Receipt, SealWarning, Storefront, Target, Train } from "phosphor-react-native"

interface Iicons{
    [key:string] : React.ReactNode
}

export const Icons : Iicons = {
    Lanche: <Hamburger size={35}/>,
    Eletronico: <Hamburger size={35}/>,
    Credito: <CreditCard size={35}/>,
    Game: <GameController size={35}/>,
    Casa: <Hamburger size={35}/>,
    UberMoto: <MopedFront size={35}/>,
    Onibus: <Bus size={35}/>,
    Trem: <Train size={35}/>,
    Error: <SealWarning size={35}/>,
    Cafe: <Coffee size={35}/>,
    Salario: <Coins size={35}/>,
    Gorjeta: <HandCoins size={35}/>,
    Despesagit : <Receipt size={35}/>,
    Mercado : <Storefront size={35}/>,
    Cartao : <CreditCard size={35}/>,
    Metas : <Target size={35}/>,
    
}
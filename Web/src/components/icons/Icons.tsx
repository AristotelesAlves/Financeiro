import { Horse,Target,Scroll,Money } from "phosphor-react"

interface IconInterface {
    [key: string]: React.ReactNode;
}

export const IconsCatalog : IconInterface = {
    casa: <Horse/>,
    Money: <Money/>,
    Scroll: <Scroll/>,
    Target: <Target/>
}


import { createContext, useContext } from "react";

const productContext = createContext();

export const userItemsTobuy = ()=>{
    const [itemsToBuy, setItemsToBuy] = useContext([]);

    const loadItemsTobuy = ()=>{
        setItemsToBuy(prevItemTobuy => [prevItemTobuy])
    }

    return(
        <></>
    )
}
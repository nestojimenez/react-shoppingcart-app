import { useContext } from "react"
import { itemsToShop } from "../App"

const ItemsToShop = () =>{
    const {listToShop, setItemsToShop} = useContext(itemsToShop);
    let sum = 0;
    return(
        <>
            Items to Shop
            
            {
                
                listToShop.map((item, index) =>{
                sum = sum + Number(item.cost);
                return <p key={index}>{'Name: ' + item.name + ' Price: ' + item.cost}</p>
            })}
            <p>Total to Pay: {sum}</p>
            <button type="button" className="btn btn-primary m-3">Pay</button>
        </>

        
    )
}

export default ItemsToShop
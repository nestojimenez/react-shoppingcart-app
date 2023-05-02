import { useContext } from "react"
import { cartContext } from "../App"

const Cart = () => {
    const {cart, setCart} = useContext(cartContext);

    return (
        <> Your Cart
            
                {cart.map((item, index) =>{
                    return(
                        <div className='m-1'>
                        <img src={`https://picsum.photos/id/${index+200}/100/100`}/>
                        <button type="button" className="btn btn-primary m-3">{item}</button>
                        </div>
                    )
                    
                })}
                
            
        </>
    )
}

export default Cart
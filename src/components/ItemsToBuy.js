import {useContext, useEffect, useState} from 'react';
import { productContext, cartContext, itemsToShop } from '../App';


const ItemsToBuy = () =>{

    const myItems = 
        {"data":[{"id":1,"attributes":{"name":"Banana","country":"Mexico","cost":5,"instock":24,"createdAt":"2023-05-01T19:11:31.793Z","updatedAt":"2023-05-01T20:11:05.085Z","publishedAt":"2023-05-01T19:11:32.651Z"}},{"id":2,"attributes":{"name":"Apples","country":"USA","cost":4,"instock":19,"createdAt":"2023-05-01T19:11:51.447Z","updatedAt":"2023-05-01T19:11:52.484Z","publishedAt":"2023-05-01T19:11:52.480Z"}},{"id":3,"attributes":{"name":"Oranges","country":"Mexico","cost":2,"instock":21,"createdAt":"2023-05-01T20:52:44.990Z","updatedAt":"2023-05-01T20:52:45.875Z","publishedAt":"2023-05-01T20:52:45.873Z"}},{"id":4,"attributes":{"name":"Avocado","country":"Mexico","cost":7,"instock":15,"createdAt":"2023-05-01T20:53:13.447Z","updatedAt":"2023-05-01T20:53:14.171Z","publishedAt":"2023-05-01T20:53:14.169Z"}},{"id":5,"attributes":{"name":"Grapes","country":"Thailand","cost":6,"instock":30,"createdAt":"2023-05-01T20:53:31.800Z","updatedAt":"2023-05-01T20:53:32.711Z","publishedAt":"2023-05-01T20:53:32.708Z"}}]
    }

    const {itemsToBuy, setItemsToBuy} = useContext(productContext);
    const {cart, setCart} = useContext(cartContext);
    const {listToShop, setItemsToShop} = useContext(itemsToShop);

    let result = [];
    let myData=[];

    //const [itemsToBuy, setItemsToBuy] = useState([]);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

        const fetchData = async () =>{
            const response = await fetch("http://localhost:1337/api/productos-to-starts", requestOptions);
            const text = await response.text();
            console.log(text);
            result = await response.json()
            setItemsToBuy(result.data);
                       
        }

        const findItemIndex = (e) =>{
            return itemsToBuy.find(item => item.attributes.name == e.target.name)
        }

        const removeFromListAvailable = (foundIndex) =>{
            const currentList = [...itemsToBuy];
            const newStock = foundIndex.attributes.instock -1;
            console.log('New Stock', newStock);
            const index = currentList.findIndex(item=> item.id == foundIndex.id);
            console.log('my Index ', index);
            currentList[index].attributes.instock = newStock;
            console.log('NewList', currentList)
        }

        const addToCart = (e) =>{
            const foundIndex = findItemIndex(e);
            console.log('Foud Index',foundIndex);
            console.log(e);
            const newCart = e.target.name;
            setCart([...cart, newCart]);
            const newListToShop = {name: e.target.name, cost:foundIndex.attributes.cost}
            setItemsToShop([...listToShop, newListToShop])
            removeFromListAvailable(foundIndex);

        }

        useEffect(()=>{
        //fetchData();
            setItemsToBuy(myItems.data)
        }, [])

    const image = 'https://picsum.photos/'
    return (
        <div>
            Available Items
            {itemsToBuy.map((item, index)=>{
                console.log(item);
                return(
                    <div className='m-1'>
                        <img src={`${image}id/${index+100}/100/100`}/>
                        <button type="button" className="btn btn-primary m-3">{'Items: ' + item.attributes.name + ' Stock: ' + item.attributes.instock}</button>
                        <button name={item.attributes.name} type="submit" className="m-3" onClick={addToCart}>Buy</button>
                    </div>
                ) 
            })}
            <button type="button" className="btn btn-primary m-3">ReStock Items</button>
        </div>
    )
}

export default ItemsToBuy
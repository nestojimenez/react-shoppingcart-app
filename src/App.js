import './App.css';
import Navbar from './components/Navbar.js'
import ItemsToBuy from './components/ItemsToBuy'
import Cart from './components/Cart'
import ItemsToShop from './components/ItemsToShop'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react';


export const productContext = createContext();
export const cartContext = createContext();
export const itemsToShop = createContext();

function App() {

  const [itemsToBuy, setItemsToBuy] = useState([]);
  const [cart, setCart] = useState([]);
  const [listToShop, setItemsToShop] = useState([]);

  return (
    <div className="App">
      
        <Navbar/>
            <div className='container-fluid'>
              <productContext.Provider value={{itemsToBuy, setItemsToBuy}}>
                <cartContext.Provider value={{cart, setCart}}>
                  <itemsToShop.Provider value = {{listToShop, setItemsToShop}}>
                    <div className='row'>
                        <div className='col-4'>
                          <ItemsToBuy/>
                        </div>
                        <div className='col-4'>
                          <Cart/>
                        </div>
                        <div className='col-4'>
                          <ItemsToShop/>
                        </div>
                      </div>

                  </itemsToShop.Provider>
                    
                </cartContext.Provider>
                  
              </productContext.Provider>
              
            </div>

        
    </div>
  );
}

export default App;

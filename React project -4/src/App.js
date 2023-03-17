import Header from './Component/Header/Header'
import AvailableMedicineProvider from "./Store/AvailableMedicineProvider";
import CartProvider from './Store/CartProvider';
import InputMedicine from "./Component/InputMedicine/InputMedicine";
import ShowAvailableMedicine from "./Component/InputMedicine/ShowAvailableMedicines";
import Cart from './Component/Cart/Cart'
import { useState } from 'react';
function App() {

  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(true);
  };
  const removeModalHandler = () => {
    setIsModal(false);
  };
  return (
   <CartProvider>
    <AvailableMedicineProvider>
    {isModal && <Cart onRemoveModel={removeModalHandler} />}
    <div>
    <Header onClickModal={ModalHandler}/>
    <InputMedicine/>
  <ShowAvailableMedicine/>
    </div>
    </AvailableMedicineProvider>
    </CartProvider>
  );
}

export default App;

import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = isThere(product.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }

    Swal.fire({
      text: 'Producto añadido al carrito!',
      icon: 'success',
      timer: '1300'
    })

  };

  const isThere = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const cleanBuying = () => {
    setCart([])
  }

  const cleanCart = () => {
    Swal.fire({
    title: "¿Deseas eliminar todos los productos de tu carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Sí",
    denyButtonText: `No`
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("El carrito fue limpiado", "", "success");
      setCart([]);
    } else if (result.isDenied) {
      Swal.fire("Ningun producto eliminado", "", "info");
    }
  });
  };

  const removeItem = (id) => {
    Swal.fire({
      title: "¿Deseas eliminar este producto de tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        let newArray = cart.filter((elemento) => elemento.id !== id);
        setCart(newArray);
        Swal.fire("Producto eliminado", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Ningun producto eliminado", "", "info");
      }
    });
  };

  const totalQuantity = () => {
    let getQuantity = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return getQuantity;
  };

  const totalPrice = ()=> {
    let total = cart.reduce((acc, elemento)=> {
      return acc + elemento.quantity * elemento.price 
    }, 0)
    let totalForm = total.toLocaleString()
    return totalForm
  }

  const totalQuantityId = ( id ) => {
    let product = cart.find( (elemento)=> elemento.id === id )
    if(product){
      return product.quantity
    }else{
      return product
    }
  }

  let data = {
    cart,
    addToCart,
    cleanCart,
    removeItem,
    totalQuantity,
    totalPrice,
    totalQuantityId,
    cleanBuying
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

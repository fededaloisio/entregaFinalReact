import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import styles from "../../../css/CartContainer.module.css";

export const CartContainer = () => {
  const { cart, cleanCart, removeItem, totalPrice } = useContext(CartContext);
  let totalForm = totalPrice();

  return (
    <div className={styles.container}>
      <main className={styles.productCartDetail}>
        {cart.map(({ title, id, img, quantity, price }) => (
          <div key={id}>
            <div className={styles.infoCartProduct}>
              <img src={img} alt={title} />
              <div>
                <h2>{title}</h2>
                <h2>Precio: ${price}</h2>
                <h2>Cantidad: {quantity}</h2>
                <button onClick={() => removeItem(id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className={styles.totalProductsContainer}>
        <div>
          <h3>¡Completa tu pago con nuestros métodos disponibles!</h3>
          <h3>Total: ${totalForm}</h3>
          <h3>Total productos: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}</h3>
        </div>

        <div style={{ marginBottom: "150px" }}>
          {cart.length > 0 ? (
            <div>
              <button onClick={cleanCart}>Limpiar carrito</button>
              <Link to={"/checkout"}>
                <button>Terminar la compra</button>
              </Link>
              <Link to="/">
              <button> Agregar productos </button>
            </Link>
            </div>
          ) : (
            <Link to="/">
              <button> Agregar productos </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import styles from "../../../css/Checkout.module.css";
import { Link } from "react-router-dom";

export const Checkout = ({ submitForm, get, orderId, userInfo }) => {
  const { cart } = useContext(CartContext);

  const { name, phone, email } = userInfo;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {orderId ? (
        <div className={styles.containerPostCompra}>
          <h2 style={{ fontSize: "40px" }}>
            ¡Muchas gracias por realizar tu compra!
          </h2>
          <h2>
            En breve nos comunicaremos por los medios de contacto que le
            solicitamos, su orden de seguimiento es {orderId}
          </h2>
          <h2>Datos brindados:</h2>
          <div className={styles.containerDatos}>
            <h3>Nombre: {name}</h3>
            <h3>Correo electrónico: {email}</h3>
            <h3>Numero de teléfono: {phone}</h3>
          </div>
          <Link style={{ alignSelf: "center" }} to={"/"}>
            <button>Volver al inicio</button>
          </Link>
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Completá tus datos para finalizar la compra.</h2>
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              onChange={get}
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Ingresa tu teléfono"
              onChange={get}
              name="phone"
              required
            />
            <input
              type="text"
              placeholder="Ingresa tu email"
              onChange={get}
              name="email"
              required
            />
            {cart.length > 0 ? (
              <button type="submit">Comprar</button>
            ) : (
              <button
                disabled
                style={{ backgroundColor: "gray", cursor: "default" }}
              >
                Comprar
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
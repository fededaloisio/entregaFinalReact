import styles from "../../../css/ProductDetail.module.css"
import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

export const ItemDetail = ({ title, price, description, img, stock, onAdd, initial }) => {
  return (
    <div className={styles.productContainer}>
      <h3 className={styles.productTitle}>{title}</h3>
      <h3 className={styles.productDescription} >Descripción: {description}</h3>
      <img className={styles.productImage} src={img} alt={title} />
      <h3 className={styles.productPrice}>Precio: ${price}</h3>
      <ItemCountContainer stock={stock} onAdd={onAdd} initial={initial}/>
      {
        initial ? <h2 style={{marginTop: "10px"}}>Unidades en tu carrito: {initial}</h2> : <h2 style={{marginTop: "10px"}}>Unidades en el carrito: 0</h2>
      }
    </div>
  );
};

export default ItemDetail;
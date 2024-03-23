import styles from "../../../css/ItemCount.module.css"

export const ItemCount = ({ counter, addOne, subOne, onAdd}) => {
  return (
    <>
      <div className={styles.counterContainer}>
        <button className={styles.counterButton} onClick={subOne}>Restar</button>
        <h2 className={styles.counterDisplay}>{counter}</h2>
        <button className={styles.counterButton} onClick={addOne}>Sumar</button>
      </div>
      <button onClick={ ()=> onAdd(counter) } className={styles.addCarrito} >Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
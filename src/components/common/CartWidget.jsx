import { FaShoppingCart } from "react-icons/fa";
import styles from "../../css/Navbar.module.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const { totalQuantity } = useContext( CartContext )

    let total = totalQuantity()

return (
<div className={styles.cartIconContainer}>
    <span>
        <FaShoppingCart />
    </span>
    {<h2>{total}</h2>}
</div>
)
}

export default CartWidget
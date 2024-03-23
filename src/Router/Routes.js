import CartContainer from "../components/pages/Cart/CartContainer";
import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer,
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer ,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer,
    },
]
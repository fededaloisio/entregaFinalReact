import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import CardSkeleton from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, totalQuantityId } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true)

    let itemsCollection = collection( db, "products" )
    let refDoc = doc(itemsCollection, id)
    getDoc( refDoc ).then(res => (
      setProduct({...res.data(), id: res.id})
    )).finally(() => setIsLoading(false))

  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...product,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  let initial = totalQuantityId(id);

  return (
    <>
      {isLoading ? (
        <div style={{display: "flex", marginTop: "15px", justifyContent: "space-around"}}>
          <CardSkeleton />
        </div>
      ) : (
        <ItemDetail {...product} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};

export default ItemDetailContainer;

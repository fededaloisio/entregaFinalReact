import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSkeleton from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta = itemsCollection;

    if (category) {
      let itemesCollFilter = query(
        itemsCollection,
        where("category", "==", category)
      );
      consulta = itemesCollFilter;
    }

    getDocs(consulta)
      .then((res) => {
        let newArr = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setItems(newArr);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            marginTop: "15px",
            justifyContent: "space-around",
          }}
        >
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;

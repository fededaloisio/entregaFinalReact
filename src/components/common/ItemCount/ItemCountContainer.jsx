import { useState } from "react"
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'

const ItemCountContainer = ({ stock, onAdd, initial=1 }) => {
    const [counter, setCounter] = useState( initial );

    const addOne = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            Swal.fire({
                title: '¡Stock máximo!',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
        }
    };

    const subOne = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            Swal.fire({
                title: '¡La cantidad mínima es 1!',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
        }
    };

  return <ItemCount counter={counter} addOne={addOne} subOne={subOne} onAdd={onAdd} />
  
}

export default ItemCountContainer;
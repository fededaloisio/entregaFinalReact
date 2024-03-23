import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Context/CartContext.jsx";
import AppRouter from "./Router/AppRouter.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;


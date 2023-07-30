import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meal/Meals";
import CartProvider from "./store/CartProvider";

const FoodOrder = () => {
    const [open, setOpen] = useState(false);

    return (
        <CartProvider>
            {open && <Cart onClose={() => setOpen(false)} />}
            <div className="w-full h-screen overflow-y-auto bg-slate-900 relative">
                <Header onOpen={() => setOpen(true)} />
                <main>
                    <Meals />
                </main>
            </div>
        </CartProvider>
    );
};

export default FoodOrder;

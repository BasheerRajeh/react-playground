import CartButton from "../Cart/CartButton";

import mealsImage from "./../../assets/meals.jpg";

const Header = () => {
    return (
        <>
            <header className="bg-red-950 h-16 flex justify-between items-center px-24 z-10">
                <h1 className="text-slate-100 font-bold text-2xl">React Meals</h1>
                <CartButton />
            </header>
            <div>
                <img src={mealsImage} alt="A table full of food" className="w-full h-[24rem]  object-cover" />
            </div>
        </>
    );
};

export default Header;

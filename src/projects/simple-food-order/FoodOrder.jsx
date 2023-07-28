import Header from "./components/layout/Header";
import Meals from "./components/meal/Meals";

const FoodOrder = () => {
    return (
        <div className="w-full h-screen overflow-y-auto bg-slate-900 relative">
            <Header />
            <main>
                <Meals />
            </main>
        </div>
    );
};

export default FoodOrder;

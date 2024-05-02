import { useEffect, useState } from "react";

const useRestaurantMenu = async (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.545163&lng=73.9168766&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const jsonData = await data.json();
        setResInfo(jsonData.data);
    };
    return resInfo;
}

export default useRestaurantMenu;
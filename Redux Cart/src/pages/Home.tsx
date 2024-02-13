import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addProduct, removeProduct } from "../features/cart/CartSlice";
interface apiDataType{
    [key:string] : string
}
const Home = () => {

    const [apiData, setApiData] = useState<apiDataType[]>();
    const { cart } = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    const handleAddProduct = (idOfItem:string) => {
        dispatch(addProduct(idOfItem))
    }
    const handleRemoveProduct = (idOfItem:string) => {
        dispatch(removeProduct(idOfItem))
    }
    
    console.log(cart.cartArray)

    const fetchData = async () => {
        const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=apple");
        const Data = await response.json();
        setApiData(Data.data.recipes);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {
                (apiData && apiData.length > 0) ? (
                    apiData.map((eachFoodItem) => {
                        return (
                            <div key={eachFoodItem.id} >
                                <img src={eachFoodItem.image_url} alt="food" />
                                <button onClick={cart.cartArray.some((eachId) => {
                                    return (eachId === eachFoodItem.id)
                                }) ? ()=>{handleRemoveProduct(eachFoodItem.id)} : ()=>{handleAddProduct(eachFoodItem.id)}}>
                                    {cart.cartArray.some((eachId) => {
                                    return (eachId === eachFoodItem.id)
                                }) ? "Remove From Cart" : "Add to Cart"}
                                </button>
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    )
}

export default Home
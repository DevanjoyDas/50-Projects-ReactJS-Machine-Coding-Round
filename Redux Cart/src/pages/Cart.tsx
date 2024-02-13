
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { removeProduct } from '../features/cart/CartSlice'

const Cart = () => {

    const { cart } = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    const handleRemoveProduct = (idOfItem:string) => {
        dispatch(removeProduct(idOfItem))
    }

  return (
    <div>
        {
                (cart  && cart.cartArray.length > 0) ? (
                    cart.cartArray.map((eachId) => {
                        return (
                            <div key={eachId} >
                                <span>{eachId}</span>
                                <button onClick={()=>{
                                    handleRemoveProduct(eachId)
                                }}>
                                    Remove from cart
                                </button>
                            </div>
                        )
                    })
                ) : null
            }
    </div>
  )
}

export default Cart
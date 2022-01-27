import CartItem from '../CartItem/CartItem';
//Styles
import { Wrapper } from './Cart.styles'
// Types
import { CartItemType } from '../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const calcilateTotal = (items: CartItemType[]) => {
        return items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    }

    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 && <p>No items in cart.</p>}
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
            ))}
            <h2>Total: ${calcilateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  cartItems: [],
  cartTotalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // cart total of current cart state + new item price * new item amount
    const currentCartTotal =
      state.cartTotalAmount + action.item.price * action.item.amount;

    // findIndex method used to find the index of the already existing item. we need this to be able to increase the amount of this item in the cart, instead of adding an entire new object
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );

    // if an item already exists it's value will be stored here so we can increase the amount of this item later in the function
    const existingCartItem = state.cartItems[existingItemIndex];

    // declaring our variable which will store the value of our updated items array
    let updatedItems;

    // if the newly added item already exists
    if (existingCartItem) {
      // create a variable and assign it the value of the pre-existing item. using our already defined existingCartItem variable. and increase it's 'amount' by adding the new amount to the old amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      // assign our updatedItems variable with the value of the pre-existing cartItems array which contains all items added up to this point
      updatedItems = [...state.cartItems];

      // then locate the pre-existing item in our updatedItems array and assign the pre-existing item the value of updatedItem, which is equal to the pre-existing item with the increased 'amount' value
      // this enables us to add additional items that already exist in the shopping cart without having to add duplicate items/objects. this way we can simply increase the 'amount' of an item to reflect the new cart value
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // if the item does not already exist, simply add it to the cart items array
      updatedItems = state.cartItems.concat(action.item);
    }

    // return our new cart state which contains either our newly added item or our updated item with a new 'amount'. and our new shopping cart total amount
    return {
      cartItems: updatedItems,
      cartTotalAmount: currentCartTotal,
    };
  }

  if (action.type === 'REMOVE') {
    let currentCartTotal = state.cartTotalAmount - action.item.price;
    
    let existingItemIndex = state.cartItems.findIndex((item) => item.id === action.item.id);

    let existingCartItem = state.cartItems[existingItemIndex]

    let updatedItems;

    if (existingCartItem.amount === 1) {
      // return array that does not include selected item
      updatedItems = state.cartItems.filter((item) => item.id !== action.item.id)
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex] = updatedItem
    }
   
    
    return {
      cartItems: updatedItems,
      cartTotalAmount: currentCartTotal
    }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cart, setCartAction] = useReducer(cartReducer, defaultCartState);

  const addCartItem = (item) => {
    setCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeCartItem = (item) => {
    setCartAction({
      type: "REMOVE",
      item: item,
    });
  };

  console.log(cart);

  const cartContext = {
    cartItems: cart.cartItems,
    cartTotalAmount: cart.cartTotalAmount,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

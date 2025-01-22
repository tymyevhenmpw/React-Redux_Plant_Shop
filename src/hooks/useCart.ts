import { useSelector, useDispatch } from 'react-redux';
import { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity,
  selectCartItems,
  selectTotalItems,
  selectTotalCost
} from '../store/cartSlice';
import type { Plant } from '../types';

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  return {
    cartItems,
    addToCart: (plant: Plant) => dispatch(addToCart(plant)),
    removeFromCart: (plantId: number) => dispatch(removeFromCart(plantId)),
    increaseQuantity: (plantId: number) => dispatch(increaseQuantity(plantId)),
    decreaseQuantity: (plantId: number) => dispatch(decreaseQuantity(plantId)),
    getTotalItems: () => totalItems,
    getTotalCost: () => totalCost,
  };
};
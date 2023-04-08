import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div>
      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
      <div>
        <img src={item.image} alt="product-img" />
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div>
        {cart?.some((p) => p.id === item.id) ? (
          <button onClick={removeFromCart}> Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;

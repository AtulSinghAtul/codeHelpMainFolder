import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = (props) => {
  const dispatch = useDispatch();
  console.log(props.item.id);

  const removeFromCart = () => {
    dispatch(remove(props.item.id));
    toast.success("item removed");
  };

  return (
    <div>
      <div>
        <div>
          <img src={props.item.image} alt="cart-img" />
        </div>
        <div>
          <h1>{props.item.title}</h1>
          <h1>{props.item.description}</h1>
          <div>
            <p>{props.item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

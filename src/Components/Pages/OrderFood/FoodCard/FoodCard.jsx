import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";



const FoodCard = ({ item }) => {
  const {_id, name, image, price, recipe } = item;

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();

  const [ , refetch ] = useCart();




  const handleAddToCart = () => {
    if (user && user.email) {
      // Fetch the current cart items from the server
      axiosSecure.get('/carts', { params: { email: user.email } })
        .then((response) => {
          const cartItems = response.data;

          // Check if the item already exists in the cart
          const isItemInCart = cartItems.some((cartItem) => cartItem.menuId === _id);

          if (isItemInCart) {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: `${name} is already in your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            return; // Exit the function if the item is already in the cart
          }

          // If the item is not in the cart, send cart item to the database
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price,
          };

          axiosSecure.post('/carts', cartItem)
            .then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${name} added to your cart`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                // refetch cart to update the cart items count
                refetch();
              }
            })
            .catch((error) => {
              console.error("Error adding item to cart:", error);
              // Handle error, show alert, etc.
            });
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
          // Handle error, show alert, etc.
        });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ff4321",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };



 

  return (
    <div className="card w-full  relative overflow-hidden rounded-sm bg-[#F3F3F3] shadow-xl">
      <figure className=" hover:relative overflow-hidden duration-1000 ">
        <img
          src={image}
          alt="Shoes"
          className=" overflow-hidden hover:scale-105 duration-1000 ease-in-out w-full h-auto lg:h-[240px] object-cover "
        />
      </figure>
      <p className=" absolute top-6 right-7 bg-[#333] text-[#fff] font-bold px-5 py-2 rounded-sm">
        {" "}
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-[20px] text-center">{name}</h2>
        <p className="text-[16px] text-center">{recipe}</p>
        <div className=" text-center">
          <button
             onClick={() => handleAddToCart(item)}
            className="btn bg-[#D2D2D2] mt-3 font-medium hover:bg-[#111827] transition-all delay-200 border-b border-b-[#D1A054] text-[#D1A054] uppercase px-12 rounded-md"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
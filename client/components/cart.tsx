import React, { useEffect, useState } from "react";
import { cartActions } from "@/store/cart-slice";
import { useCartSelector, useCartDispatch } from "@/store/cart-hooks";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAuth } from "@/contexts/auth-context";

export default function Cart() {
  const dispatch = useCartDispatch();
  const { auth } = useAuth();
  // console.log(auth);

  interface cartItemsType {
    authId: number;
    id: string;
    price: number;
    quantity: number;
    totalPrice: number;
    description: string;
  }
  const cartSelector = useCartSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState<cartItemsType[]>([]);

  const addItemHandler = (
    id: string | null = null,
    price: number | null = null
  ) => {
    dispatch(
      cartActions.addQtyInCart({
        id,
        price,
      })
    );
  };

  const removeItemHandler = (id: string) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  useEffect(() => {
    const storeItems = localStorage.getItem("myCart");
    if (storeItems) setCartItems(JSON.parse(storeItems));
  }, [cartSelector]);

  return (
    <>
      <h1 className="bg-zinc-200 h-[70px] leading-[70px] text-[30px] flex justify-center ">
        購物車
      </h1>
      <ul>
        <li>
          {cartItems
            ?.filter((v) => v.authId === auth.data.id)
            .map((v) => {
              return (
                <div
                  key={v.id}
                  className="card bg-base-100 shadow-xl flex-col items-center"
                >
                  <div className="bg-base-100 flex lg:w-[800px] my-3 rounded-lg border-2">
                    <img
                      src="/images/women.jpg"
                      alt="Shoes"
                      className="m-5 size-[150px]"
                    />{" "}
                    <div className="card-body">
                      <h2 className="card-title">
                        {`${v.id}號潮流女裝`}
                        <div className="badge badge-secondary hidden sm:block">
                          NEW
                        </div>
                      </h2>
                      <div className="badge badge-secondary sm:hidden">NEW</div>
                      <p>{v.description}</p>
                      <div className="card-actions sm:space-x-5 flex sm:items-center flex-col sm:flex-row justify-start">
                        <div className="">單價: &#36;{`${v.price}`}</div>
                        <div className="flex items-center">
                          <span className="w-[70px]">數量: {v.quantity}</span>
                          <span>
                            <button
                              className="btn btn-sm mx-1 my-1 sm:my-0"
                              onClick={() => addItemHandler(v.id, v.price)}
                            >
                              <FaPlus />
                            </button>
                            <button
                              className="btn btn-sm mx-1 my-1 sm:my-0"
                              onClick={() => removeItemHandler(v.id)}
                            >
                              <FaMinus />
                            </button>
                          </span>
                        </div>
                        <div className="">總價: &#36;{v.totalPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </li>
      </ul>
      <div className="bg-zinc-200 h-[100px] leading-[100px] fixed w-full bottom-0 text-[50px] text-center">
        去買單
      </div>
    </>
  );
}

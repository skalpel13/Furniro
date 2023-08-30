import React from "react";
import "../style/CartTotalOrder.css";

export default function CartTotalOrder(props) {
  const product = props.product;
  const countItems = (productId) => {
    let count = 0;
    props.cartItems.forEach((el) => el.id === productId && count++);
    return count;
  };
  return (
    <div>
      <div className="cart-table-product">
        <img id="img-product" alt="" src={"./images/" + product.img} />

        <p id="prod-item-1">{product.title}</p>

        <p id="prod-item-2">
          {"Rs. "}
          {product.price}
        </p>

        <p id="prod-item-3">{countItems(product.id)}</p>

        <p id="prod-item-4">
          {"Rs. "}
          {(
            Number.parseFloat(product.price) * countItems(product.id)
          ).toLocaleString("id-ID")}
        </p>

        <button>
          <img
            id="prod-item-5"
            alt=""
            src="./images/ant-design_delete-filled.svg"
            onClick={() => props.onRemove(product.id)}
          />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { connect } from "react-redux";

import {
  removeItemFromCart,
  addItem,
  decreaseCartItemQuantity,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          id="decrease-quantity"
          onClick={
            quantity > 1
              ? () => decreaseItem(cartItem)
              : () => removeItem(cartItem)
          }
        >
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span
          className="arrow"
          id="increase-quantity"
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseCartItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

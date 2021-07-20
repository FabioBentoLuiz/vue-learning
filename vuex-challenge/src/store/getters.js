export default {
  itemTotal(state) {
    return (state.price * state.qty).toFixed(2);
  },
  getCartTotal(state) {
    return state.cart.total.toFixed(2);
  },
  getCart(state) {
    return state.cart;
  },
  getProducts(state) {
    return state.products;
  }
};

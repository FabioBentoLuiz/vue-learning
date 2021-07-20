export default {
  addProductToCart(context, payload) {
    context.commit('addProductToCart', payload);
  },
  loadProducts(context, payload) {
    context.commit('loadProducts', payload);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  }
};

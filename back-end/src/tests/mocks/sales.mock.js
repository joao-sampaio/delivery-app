const salesProducts = [
  {
    saleId: 1,
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 3,
  },
];

const salesList = [
  {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 26.9,
    deliveryAddress: "Qualquer um",
    deliveryNumber: 87,
    saleDate: "2022-12-01",
    status: "Pendente",
  },
];

const newOrder = [
  { userEmail: "zebirita@email.com", ...salesList[0] },
  {
    productsList: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ],
  },
];

module.exports = {
  salesList: { ...salesList, products: salesProducts },
  salesProducts,
  newOrder,
};

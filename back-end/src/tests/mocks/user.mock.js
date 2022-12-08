const userMock = {
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  role: "customer",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjcwMzYzOTkxfQ.OCrTfd9n9E149u5s8AOfhpBFL_0j6zZjJ0rI_gda0ro",
};

const userBody = {
  email: "novousuario@email.com",
  password: "senha123",
};

const newUserBody = {
  name: "Novo usuário",
  email: "novousuario@email.com",
  password: "senha123",
};

const usersList = [
  {
    id: 1,
    name: "Delivery App Admin",
    email: "adm@deliveryapp.com",
    role: "administrator",
  },
  {
    id: 2,
    name: "Fulana Pereira",
    email: "fulana@deliveryapp.com",
    role: "seller",
  },
  {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    role: "customer",
  },
];

const sellersList = [{ id: 2, name: "Fulana Pereira" }];

module.exports = {
  userBody,
  newUserBody,
  userMock,
  usersList,
  sellersList,
};

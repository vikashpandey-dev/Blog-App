const BillboardAPI = {
  getBillboard: "Blog/get",
  addBillboard: "Blog/add",
  updateBillboard: "Blog/update",
  Dashboardcount: "Blog/dashboard"
};
const Users = {
  alluser: "allusers",
  updateuser: "updateuser",
};
const adminauthAPI = {
  login: "auth/signin",
  register: "auth/signup",
  LdapLogin: "LDAPLOGIN",
  updateprofile: "auth/updateprofile",
  alluser: "auth/alluser"
};
const APIName = {
  ...BillboardAPI,
  ...Users,
  ...adminauthAPI,
};

export default APIName;

import api from "../plugins/axios";

export const service_login = async (credentials) => {
  try {
    console.log("Service: login", credentials);
    const response = await api.post("/api/login/", credentials);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const service_register = async (user) => {
  try {
    console.log("Service: register", user);
    const response = await api.post("/api/cadastro/", {
      full_name: user.fullName,
      email: user.email,
      password: user.password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// export const updateUser = async (user) => {
//   try {
//     const response = await api.put("/api/usuarios/", user);
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };
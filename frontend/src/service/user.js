import api from "../plugins/axios";

export const service_login = async (credentials) => {
  try {
    const response = await api.post("/api/login/", credentials);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const service_register = async (user) => {
  try {
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

export const update_user = async (user) => {
  try {
    const response = await api.put("/api/usuarios/", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
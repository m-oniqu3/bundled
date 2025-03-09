import { api } from "@/services/api";

const baseAUTHURL = "/auth";
enum AuthURL {
  LOGIN = `${baseAUTHURL}/login`,
  REGISTER = `${baseAUTHURL}/register`,
  LOGOUT = `${baseAUTHURL}/logout`,
}

// make a POST request to the server to register the user with the provided credentials
export async function registerUser(credentials: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await api.post(AuthURL.REGISTER, credentials);
  return response.data;
}

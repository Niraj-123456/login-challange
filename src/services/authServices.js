import http from "./httpServices";

const apiUrl = "http://3.135.237.248:5222/v0.0.1/auth/login";

export async function userLogin(phoneNumber, password) {
  return await http.post(apiUrl, {
    phoneNumber,
    password,
  });
  // localStorage.setItem("token", user.user.accessUserToken);
}

export default userLogin;

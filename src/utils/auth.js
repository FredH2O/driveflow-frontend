export function getToken() {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("staff_name");
  localStorage.removeItem("staff_email");
  localStorage.removeItem("staff_nicename");

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("staff_name");
  sessionStorage.removeItem("staff_email");
  sessionStorage.removeItem("staff_nicename");
}

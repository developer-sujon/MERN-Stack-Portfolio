export default function useAuth() {
  const token = sessionStorage.getItem("token");
  return token;
}

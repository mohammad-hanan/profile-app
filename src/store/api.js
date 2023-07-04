import axios from "axios";

export function fetchUsers() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}

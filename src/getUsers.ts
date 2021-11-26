import User from "@/User";

export async function getUsers() {
  let users: Array<User> = [];
  const response = await fetch('https://reqres.in/api/users?page=2')
  users = await response.json();
  return users;
}


 
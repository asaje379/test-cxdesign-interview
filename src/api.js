export const BASE_URL = "https://randomuser.me/api/?results=20";

export const getUsers = async () => {
  const response = await fetch(BASE_URL).then((res) => res.json());
  Store.users = Store.defaultUsers = response.results;
};

export class Store {
  static users = [];
  static defaultUsers = [];
}

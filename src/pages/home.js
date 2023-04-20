import { Store } from "../api";

const getUserTemplate = (user) => `<div class="profile">
  <img src="__medium-photo__" alt="" />
  <div>
    <div>
      <h5>__firstname__ __lastname__</h5>
      <div>__city__, __state__, __country__</div>
    </div>
    <div>
      __email__ - __phone__
    </div>
  </div>
</div>`;

export function getUsersTemplate() {
  return Store.users.map((user) => getUserTemplate(user)).join("");
}

export const homeTemplate = `
<div>
  <div class="search">
    <input type="text" placeholder="Rechercher..." id="searchbar" />
  </div>
  <div id="list-user"></div>
</div>
`;

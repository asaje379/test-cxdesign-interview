import { Store } from "./api";
import { renderUsers } from "./renders";

export class Handlers {
  static login(username, password) {
    console.log(username, password);

    // Write your code here
  }

  static configureSearch() {
    const searhbar = document.getElementById("searchbar");
    searhbar.addEventListener("input", (event) => {
      // Write your code here
    });
  }
}

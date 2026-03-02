import Store from "./services/Store.js"
import API from "./services/API.js"
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link my Web Components - now browser knows we are inserting new Web Components 
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";


window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});

window.addEventListener("appCartChange", e => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);

    badge.textContent = qty;
    badge.hidden = qty == 0; // when quantity is 0 , set the badge to be hidden 
});

// To stop forgetting to import it, since DOM will render it as an empty element and not give us an error 
customElements.define("order-page", OrderPage);      

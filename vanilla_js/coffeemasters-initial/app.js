import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from "./services/Order.js";
import Router from './services/Router.js';

window.app = {};
app.store = Store; // key: store , value: reference to Store object with keys (menu,cart)
app.router = Router;
console.log(app);

window.addEventListener("DOMContentLoaded", () => {
    loadData().then(() => { console.log("loadData() finished, menu in store: ", app.store.menu)});
    app.router.init();
});




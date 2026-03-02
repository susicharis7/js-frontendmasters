import API from "./API.js";

export async function loadData() {
    const menuData = await API.fetchMenu();
    app.store.menu = menuData;
    console.log(app.store.menu);
};

export async function getProductById(id) {
    if (app.store.menu == null) {
        await loadData();
    };

    for (let c of app.store.menu) {
        for (let p of c.products) {
            if (p.id == id) {
                return p; 
            }
        }
    }

    return null;
}
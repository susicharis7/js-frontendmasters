const Store = {
    menu: null,
    cart: [],
};

const proxiedStore = new Proxy(Store, {
    set(target, property, value) {
        target[property] = value; 
        
        if (property == "menu") window.dispatchEvent(new Event("appMenuChange"));
        if (property == "cart") window.dispatchEvent(new Event("appCartChange"));

        return true; // we accept the set
    }

});

// Store is now PRIVATE
export default proxiedStore;


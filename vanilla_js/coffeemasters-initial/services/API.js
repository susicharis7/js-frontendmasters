const API = {

    url: new URL("../data/menu.json", import.meta.url).href,
    fetchMenu: async () => {
        const result = await fetch(API.url);
        const json = await result.json();
        return json;
    }
};

export default API;

const API = {
    url: "/data/menu.json",
    fetchMenu: async () => {
        const result = await fetch(API.url);
        const data = await result.json();
        return data;
    },
};

export default API;


const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("Link clicked");
            })
        })
    },

    go: (route, addToHistory = true) => {   // this means that addToHistory by default is `true`

    }
};

export default Router;
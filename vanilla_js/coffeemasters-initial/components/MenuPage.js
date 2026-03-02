export class MenuPage extends HTMLElement {
    constructor() {
        super();
        
        this.root = this.attachShadow({ mode: "open" });

        const styles = document.createElement("style");
        this.root.appendChild(styles);
        
        async function loadCSS() {
          const request = await fetch('components/MenuPage.css');
          const css = await request.text(); // now we are not reading JSON, we are reading TEXT
          styles.textContent = css;
          
        };

        loadCSS();

        this.onMenuChange = () => {
            this.render();
        }

    };

    connectedCallback() { // called when element enters the DOM
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener("appMenuChange", this.onMenuChange);
        this.render();


    };

    disconnectedCallback() {
        window.removeEventListener("appMenuChange", this.onMenuChange);
    }

    render() {
        if (app.store.menu) {
            this.root.querySelector("#menu").innerHTML = "";

            for (let category of app.store.menu) {
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class="category">
                    </ul>
                `;

                this.root.querySelector("#menu").appendChild(liCategory);

                category.products.forEach(product => {
                    const item = document.createElement("product-item");
                    item.dataset.product = JSON.stringify(product);
                    liCategory.querySelector("ul").appendChild(item);
                });
            }
        } else {
            this.root.querySelector("#menu").innerHTML = "Loading...";
        }
    }

}

customElements.define("menu-page", MenuPage);

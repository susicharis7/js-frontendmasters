class UserCard extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    /*
        - creates shadow root object
        - connects it to current element (its host)
        - returns reference on that shadow root (if its open -> it is in this.shadowRoot)
        - so now, instead of this.innerHTML -> this.shadowRoot
        - mode: closed is used for encapsulation, where we hide the implementation
    */
  }

  static get observedAttributes() {
    return ["name", "role"];
  }

  // Called when element is inserted into DOM (connected with the document)
  connectedCallback() {
    this.render();
  }

  // (name, oldValue, newValue) - called when some attribute is changed 
  // works only for attributes that are inside `observedAttributes` 
  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "Unknown";
    const role = this.getAttribute("role") || "No role";

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          padding: 16px;
          border-radius: 10px;
          background: #1e1e1e;
          color: white;
          width: 250px;
          font-family: sans-serif;
          margin-top: 10px;
        }
        .name {
          font-size: 18px;
          font-weight: bold;
        }
        .role {
          font-size: 14px;
          opacity: 0.7;
        }
      </style>

      <div class="card">
        <div class="name">${name}</div>
        <div class="role">${role}</div>
      </div>
    `;
  }
}

customElements.define("user-card", UserCard);



class SecondUserCard extends HTMLElement {
    static get observedAttributes() {
        return ["name"];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    };

    connectedCallback() {
        this.render();
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "name" && oldValue !== newValue) {
            this.render(); // when `name` is changed
        };
    };

    render() {
        const name = this.getAttribute("name") || "Guest";

        this.shadow.innerHTML = `
        <style>
            .card {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-family: sans-serif;
            width: 257px;
            margin-top: 10px;
            }
        </style>
        <div class="card">Zdravo, ${name}!</div>
        `;
    }
};

customElements.define("sec-user-card", SecondUserCard);

const demoNames = ["Amina", "Haris", "Tarik", "Lejla"];
let nameIndex = 0;

document.getElementById("changeNameBtn")?.addEventListener("click", () => {
    const card = document.querySelector("sec-user-card");
    if (!card) return;

    nameIndex = (nameIndex + 1) % demoNames.length;
    card.setAttribute("name", demoNames[nameIndex]);
});

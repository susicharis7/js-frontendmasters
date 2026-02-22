const $ = (args) => document.querySelector(args);

// Same as : const $$ = (args) => document.querySelectorAll(args);
const $$ = function(args) {
    return document.querySelectorAll(args);
}

HTMLElement.prototype.on = (a,b,c) => this.addEventListener(a,b,c);
HTMLElement.prototype.off = (a,b) => this.removeEventListener(a,b);
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }

function formatName(name) {
    return name.trim().toUpperCase();
}

// named export 
export function greet(name) {
    const formatted = formatName(name);
    return `Hello, ${formatted}`;
}

export function sum(a,b) {
    return a + b;
}

// private const
const VERSION = "1.0.0";

// default export
export default function log(message) {
    console.log(`[LOG]: ${message}`);
}


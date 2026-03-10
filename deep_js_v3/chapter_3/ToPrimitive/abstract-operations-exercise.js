const aobj = {
    valueOf() {
        console.log("valueOf");
        return 10;
    },

    toString() {
        console.log("toString");
        return 20;
    }
};

aobj + 5;

const bobj = {
  valueOf() {
    console.log("valueOf");
    return {};
  },
  toString() {
    console.log("toString");
    return "30";
  }
};

bobj + 5
// string is also a primitive type according to ECMAScript

const cobj = {
  [Symbol.toPrimitive](hint) {
    console.log("Symbol.toPrimitive:", hint);
    return 50;
  },
  valueOf() {
    console.log("valueOf");
    return 10;
  }
};

cobj + 5

const dobj = {
  valueOf() {
    console.log("valueOf");
    return 10;
  },
  toString() {
    console.log("toString");
    return "40";
  }
};

String(dobj)

const eobj = {
  valueOf() {
    console.log("valueOf");
    return 10;
  },
  toString() {
    console.log("toString");
    return "40";
  }
};

String(eobj)


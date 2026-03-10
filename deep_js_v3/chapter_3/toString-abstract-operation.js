// if we Call `ToString(object)` on an object, it will actually call ToPrimitive with hint = string 

const obj = {
    toString() {
        console.log("toString called");
        return 'hello';
    },

    valueOf() {
        console.log("valueOf called");
        return 10;
    }
};

String(obj);



const aobj = {
  [Symbol.toPrimitive](hint) {
    console.log("Symbol.toPrimitive called with hint:", hint);
    return "Haris";
  },

  toString() {
    console.log("toString called");
    return "toString value";
  },

  valueOf() {
    console.log("valueOf called");
    return 100;
  }
};

String(obj);


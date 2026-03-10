// Just like toString, according to ECMAScript spec, if we use ToNumber, it calls ToPrimitive with a hint = number

const obj = {
  valueOf() {
    console.log("valueOf called");
    return 10;
  },

  toString() {
    console.log("toString called");
    return "20";
  }
};

Number(obj);

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

Number(bobj);

const cobj = {
  [Symbol.toPrimitive](hint) {
    console.log("hint:", hint);
    return 50;
  }
};

Number(cobj);


// for objects & arrays, default impl. for valueOf is to return this;

const dobj = {};
dobj.valueOf(); 
// Object.prototype.valueOf -> return this; -> {} -> it is not a primitive !

const d2obj = {};
Number(d2obj);

// ToNumber(d2obj) -> ToPrimitive(d2obj, 'number') -> valueOf -> returns object -> ignore -> toString -> [object Object] -> ToNumber("[object Object]") -> NaN

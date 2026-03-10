var numStudents = 16;
console.log(`There are ${numStudents} in this classroom`);

/*
    Implicit coercion from Number to String
    ${numStudents} -> ToString(16) -> "16"
    This is a TEMPLATE Literal
    In it we don't have ToPrimitive, because 16 is already a primitive.
    But what if it was an object?
*/

const obj = {
    toString() {
        return "OBJ";
    }
};

console.log(`Value: ${obj}`);
// ToString(obj) -> ToPrimitive(obj, 'string') -> toString() -> "OBJ" -> Value: OBJ
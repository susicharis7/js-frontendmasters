var workshop1 = { topic: null }; // null
var workshop2 = {}; // undefined

if (
    (workshop1.topic === null || workshop1.topic === undefined) &&
    (workshop2.topic === null || workshop2.topic === undefined)
) {
    // ...
}

if (
    workshop1.topic == null &&
    workshop2.topic == null
) {
    // ... better way 
}

/*
    workshop1.topic === null 
    Get(workshop1, "topic")
    null
    StrictEqualityComparison(null, null) 
    Type(x) = Null
    Type(y) = Null
    return true 
*/
Number(true); // 1
Number(false); // 0 

// Here is why this is bad

1 < 2; // True
1 < 2 < 3; // True, but how does it work?

/* 
    First it does 1 < 2, which is true
    Then the problem comes : true < 3 ?
    True is 1, so 1 < 3, it is true
    But what if we have on the other way around?
*/

3 > 2 > 1; 

/*
    3 > 2 -> true 
    true > 1 -> 1 > 1 -> false ???
*/


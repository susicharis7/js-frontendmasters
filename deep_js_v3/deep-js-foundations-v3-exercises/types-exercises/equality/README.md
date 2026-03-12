# Wrangling Equality

In this exercise, you will define a `findAll(..)` function that searches an array and returns an array with all coercive matches.

## Instructions

1. The `findAll(..)` function takes a value and an array. It returns an array.

2. The coercive matching that is allowed:

- exact matches (`Object.is(..)`) 
	- strings (except "" or whitespace-only) can match numbers
	- numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
- `null` can match `undefined`, and vice versa
- booleans can only match booleans
- objects only match the exact same object


# My helpers

findAll()
- treba proci kroz svaki element u array 
- odluciti da li se taj element "coercively matches" sa value
- ako se matchuje -> dodati ga u rezultat 

console.log(setsMatch(findAll(-0,values),[-0]) === true);
- u setsMatch salje 2 argumenta da provjeri da li 2 arraya imaju iste elemente
- prvi argument je rezultat od findAll funkcije, a drugi argument je [-0]
- ako vrati true, provjerava onda sa `=== true` i dobiti cemo true iz console loga

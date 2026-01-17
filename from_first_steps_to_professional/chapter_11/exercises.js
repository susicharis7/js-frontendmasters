const spices = [
    {name: "Haris", nickname: "Harke"}, // svaki element je object ovog arraya
    {name: "Tarik", nickname: "Kodokan"}, // svaki objekat ima name, nickname
];

const nicknames = spices.map(s => s.nickname   + " Spice"); 
// arrow callback function sve sto je u zagradi
console.log(nicknames);
// s = spices[i];


// String templates / Literals
const nicknamesWithStringLiterals = spices.map(s => `${s.nickname} Spices`);


// Taj gore kod interno izgleda ovako
for (let i = 0; i < spices.length; i++) {
  return s.nickname; 
}

const letsFilter = spices.filter(s => s.nicknames.includes("Kod"));
console.log(letsFilter);


/* Exercise - Video 2 */
const spicesWithGirls = [
    {name: "Haris", nickname: "Harke", isGirl: false}, // svaki element je object ovog arraya
    {name: "Tarik", nickname: "Kodokan", isGirl: false}, // svaki objekat ima name, nickname
    {name: "Samra", nickname: "Samrica", isGirl: true},
    {name: "Semha", nickname: "Semo", isGirl: true},
    {name: "Aida", nickname: "Ida", isGirl: true},
];

const filterGirlsOnly = spicesWithGirls.filter(s => s.isGirl);
const girlsNames = filterGirlsOnly.map(f => f.name);
const endInA = girlsNames.filter(f => f.endsWith("a"));


/* Spread */
const oldBurns = ["square", "wack"];
const newBurns = ["basic", "dusty", "sus"];
// Isto sto i => const burnBook = oldBurns.concat(newBurns);
const burnBook = [...oldBurns, ...newBurns]; 

// Object Spread
const user = { name: "Haris", age: 22 };
const updatedUser = { ...user, age: 23 };

const skills = ["HTML", "CSS", "JS"];
const newSkills = ["React", "TS", "NodeJS"];
skills.push(...newSkills);
console.log(skills);
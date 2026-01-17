const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Vicky"}
]

let {name, nickname} = spices[0] // sad ce varijabla name biti Emma, a nickname Baby 
// let {name} = spices[0] // ignorisati ce sve ostale propertyje u objectu, zanima ga samo name unutar tog prvog objecta [0]

/* Mozemo destructurat i array */
let [one,two,three] = [1,2,3];
let [ten, twenty] = [10,20,30,40] // 30,40 will just be ignored
let [,,thirty] = [10,20,30,40] // ignorisi prvi element, ignorisi drugi element, zanima me treci element (thirty) - vratiti ce thirty = 30

const [babySpice, ...adultSpices] = spices; // mozemo koristiti spreading da uzmemo ostatak 


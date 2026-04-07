var ids = people.map(person => person.id);

var ids = people.map(function getId(person) {
    return person.id
});
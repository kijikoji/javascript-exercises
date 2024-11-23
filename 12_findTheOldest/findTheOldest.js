const findTheOldest = function(array) {
    const oldest = array.reduce((older, people) => {
        const olderAge = older.yearOfDeath - older.yearOfBirth
        const peopleAge = people.yearOfDeath - people.yearOfBirth
        console.log("----------");
        console.log(older);
        console.log(people);

        return peopleAge <= olderAge ? older : people;
    }, {name: "john", yearOfBirth: 0, yearOfDeath: 0});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

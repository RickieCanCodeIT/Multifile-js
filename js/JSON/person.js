let jsonPerson = {
    name: "Steve",
    age: {
        years: 37,
        months: 4,
        days:10
    },
    friends: [ "Philip", "Gertrude", "Dale", "Rose"],
    favoriteColor: "Purple",
    birthday: function() {
        console.log("Happy Birthday");
        this.age.year++;
    }
}

let jsonPerson2 = {
    name: "Voldemort",
    age: {
        years: 87,
        months: 4,
        days:10
    },
    friends: [ ],
    favoriteColor: "Black",
    birthday: function() {
        console.log("Happy Birthday");
        this.age.year++;
    }
}

export {jsonPerson, jsonPerson2};
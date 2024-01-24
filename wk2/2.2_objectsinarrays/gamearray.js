const games = [
    { title: "Animal Crossing", type: "video game", numberOfPlayers: "single or multi player", rating: "five stars!", shortDescription: "make your own paradise as you explore, create and customize your deserted island," },
    { title: "Hogwarts Legacy", type: "video game", numberOfPlayers: "single player", rating: "four stars!", shortDescription: "play in an immersive, open-world action RPG set in the world introduced in the Harry Potter books," },
    { title: "Mario Kart", type: "video game", numberOfPlayers: "single or multi player", rating: "five stars!", shortDescription: "play kart racing games where you compete in go-kart races while using power-up items," }
];
// console.log('index 1 of games title', games[1].title);

const message = window.prompt("I have three games in my collection, pick a number between 0 and 2 and I'll tell you about that game!");
console.log("You selected " + games[message].title + " which is a " + games[message].type + " that can have a " + games[message].numberOfPlayers + " and you " + games[message].shortDescription + " I rate it " + games[message].rating);
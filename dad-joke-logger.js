//===============================//
// Log a Dad Joke using NodeJS
//===============================//

let dadJokesArr = [
        "Why do crabs never give to charity? Because they’re shellfish.",
        "I cut my finger chopping cheese, but I think that I may have grater problems.",
        "Today a girl said she recognized me from vegetarian club, but I’m sure I’ve never met herbivore.",
        "I gave all my dead batteries away today… Free of charge.",
        "I am terrified of elevators. I’m going to start taking steps to avoid them.",
        "I needed a password eight characters long so I picked Snow White and the Seven Dwarfs.",
        "How do you organize a space party? You planet.",
        "Breaking news! Energizer Bunny arrested – charged with battery.",
        "'Doctor, I’ve broken my arm in several places' Doctor 'Well don’t go to those places.'",
        "Velcro… What a rip-off.",
        "I went to the zoo the other day, there was only one dog in it. It was a shitzu.",
        "Where does Napoleon keep his armies? In his sleevies.",
        "Why do scuba divers fall backwards into the water? Because if they fell forwards they’d still be in the boat.",
        "Have you ever heard of a music group called Cellophane? They mostly wrap.",
        ""
    ],
    randomJokeNumber = Math.floor(Math.random() * dadJokesArr.length);

// Uncomment the code below to log out a Dad Joke;
// the random joke number index was already generated for you above.
//console.log(dadJokesArr[randomJokeNumber]);
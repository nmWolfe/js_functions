// Write a function named getDescription that: 
    // Takes 4 arguments: number of children, partners name, geographic location, job title. 
    // Outputs the statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
    // Call that function 3 times with 3 different values for the arguments. 

const getDescription = (jobTitle, location, partners_name, amountOfChildren) => {
    const statement = `I am currently a ${jobTitle} living in ${location}, and married to ${partners_name} with ${amountOfChildren} kids.`
    console.log(statement)
}

getDescription('Developer', 'Portugal', 'Layla', 6)

// **The Lifetime Supply of Snickers**

// Ever wonder how much a lifetime supply of Snickers would actually cost? Wonder no more!

// Write a function named calculateSupply that:
    // Takes 2 arguments: age, amountPerDay.
    // Calculated the amount conumed for the rest of your life (based on a constant max age).
    // Outputs the result to the console like so: "You will need X to last you until the ripe old age of Y"
    // Call that function three times, passing in different values each time.
    // BONUS: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = (currentAge, amountPerDay) => {

    const maxAge = 99;
    const amountOfSnickers = (maxAge - currentAge) * (amountPerDay * 365);
    console.log(`You will need ${amountOfSnickers} Snickers, to last you to the ripe old age of ${maxAge}.`);

}

calculateSupply(32, 4);
calculateSupply(28, 4);
calculateSupply(20, 2);
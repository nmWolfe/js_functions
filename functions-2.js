// Write a function named getDescription that: 
    // Takes 4 arguments: number of children, partners name, geographic location, job title. 
    // Outputs the statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
    // Call that function 3 times with 3 different values for the arguments. 

const getDescription = (jobTitle, location, partners_name, amountOfChildren) => {
    const statement = `I am currently a ${jobTitle} living in ${location}, and married to ${partners_name} with ${amountOfChildren} kids.`
    console.log(statement)
}

getDescription('Developer', 'Portugal', 'Layla', 6)
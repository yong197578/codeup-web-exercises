const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const moreThanThreeL = users.filter(function(language){
    // console.log(language);
    // console.log(language.languages.length);
    return language.languages.length >= 3;
})
console.log(moreThanThreeL)
let moreThan3Langs = users.filter((user) =>
    user.languages.length >= 3)
console.log(moreThan3Langs)
//     Use .map to create an array of strings where each element is a user's email address
const userEmail = users.map(email => {
    return email.email;
})
console.log(userEmail)
let emailAdd = users.map(user => user.email);
console.log(emailAdd);
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// const average = users.reduce((total, currentValue) => {
//     console.log(total); console.log(currentValue)
//
// return (total + currentValue.yearsOfExperience)/5},0);
// console.log(average)
let totalYearsOfExperience = users.reduce((total, user) => {
    total += user.yearsOfExperience;
    console.log(total);
    return total;

},0)
console.log(totalYearsOfExperience)
let averageExp = totalYearsOfExperience/users.length;
console.log(averageExp)

const longestEmail = users.reduce((accum, user) => {
    console.log('current value: ', user.email)
    if(accum.length > user.email.length) {
        console.log(accum)
        return accum;
    }else{
        console.log(user.email.length);
        return user.email
    }
}, '');
console.log(longestEmail)
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let singleString = users.reduce((user, find, currentIndex) => {
    if (currentIndex === users.length - 1) {
        user += find.name + "."
    }else{
        user += find.name + ", "
    }
    console.log(user);
    return user;

}, 'Your instructors are: ')
console.log(singleString);
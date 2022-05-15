alert ('Ro\'yxattan o\'ting')

let firsName = prompt ('Iltimos ismingizni kiriting')

let lastName = prompt ("Iltimos familyangizni kiriting")

let year = prompt ("Tug\'ilgan yilingizni kiriting", '2022')

let years = 2022 

let userYear = years - year
alert (firsName + '\n' + lastName + '\n' + userYear)
let teng = 18

if (userYear >= teng)
{
    alert('borasan chochima');
}
else if(userYear < teng) 
{
    alert('boromisan hapa boma');
}

//Exercise: Level 1

let challange = '30 Days Of JavaScript'
console.log (challange) //30 Days Of JavaScript
//lenght of string
console.log (challange.length)
// upper case
console.log(challange.toUpperCase()) //30 DAYS OF JAVASCRIPT
//lower case
console.log(challange.toLowerCase()) //30 days of javascript
// cut the first word
console.log (challange.substr(0,2)) //30
console.log(challange.substring(0,2)) //30
// slice out Days Of JavaScript from 30 Days Of JavaScript.
console.log (challange.substring(3,21)) //Days Of JavaScript
//Check if the string contains a word Script using includes() method
console.log (challange.includes('Script')) //true
//Split the string into an array using split() method
console.log (challange.split())
//Split the string 30 Days Of JavaScript at the space using split() method
console.log (challange.split(' ')) //[30,Days,Of,Javascript]
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let text = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log (text.split(','))
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log (challange.replace("JavaScript","Python")) // 30 Days Of Python
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log (challange.charAt(15)) //S
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log (challange.charAt(11)) //J
console.log (challange.charCodeAt(11)) //74
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log (challange.indexOf('a')) //4
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log (challange.lastIndexOf('a')) //14
/*Use indexOf to find the position of the first occurrence of the word 
because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
let text2 = 'You cannot end a sentence with because because because is a conjunction'
console.log (text2.indexOf('because')) //31
console.log (text2.lastIndexOf('because')) //47
console.log (text2.search('because')) //31

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let text3 = ' 30 Days Of JavaScript '
console.log (text3.trim()) //30 Days Of JavaScript

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log (challange.startsWith('3')) //true

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log (challange.endsWith('t')) //true
console.log (challange.endsWith('JavaScript')) //true
//Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi
console.log (challange.match(pattern))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let text1 = '30 Days of'
console.log (text1.concat(' JavaScript'))
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challange.repeat(2))

//Excersize: Level 2
/*Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/

let paragraph = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log (paragraph)

let paragraph2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log (paragraph2)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num = '10'
let numInt = parseInt(num)
typeof(console.log (numInt))

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num2 = parseFloat('9.8')
typeof (console.log (num2))
typeof (console.log (Math.round(num2)))

//Check if 'on' is found in both python and jargon
let py = 'python'
let jr = 'jargon'
console.log (py.includes('on'))
console.log (jr.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
console.log (sentence.includes('jargon')) //true

//Generate a random number between 0 and 100 inclusively.
let cons = Math.random()
console.log (cons * 100)

//Generate a random number between 50 and 100 inclusively.

let cons2 = Math.random()*100
console.log (cons2/2)

//Generate a random number between 0 and 255 inclusively.
let cons3 = Math.random()
let num3 = (cons3*300)/2
console.log(num3)

console.log (challange.charAt("JavaScript")) //3
let cons4 = Math.random()
let cons5 = Math.ceil(cons4)*3
console.log (cons5)

let pattern1 = `1 1 1 1 1\n
2 1 2 4 8\n
3 1 3 9 27\n
4 1 4 16 64\n
5 1 5 25 125`
console.log (pattern1)

// /Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence4 = 'You cannot end a sentence with because because because is a conjunction'
console.log (sentence4.substr(31,23))

//Exercises: Level 3
//Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern3 = /love/gi
console.log (sentence1.match(pattern3))

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let pattern4 = /because/g
console.log (sentence4.match(pattern4))

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence2= '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


let regex1 = /[&$@%#]/g
let cleanedOne = sentence2.replace(regex1,'')
console.log(cleanedOne)


console.log(findMostRepeatedWord(cleanedOne)); 

function findMostRepeatedWord(str) {
  let words = str.match(/\w+/g);
  console.log(words); 

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances); 

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }

  return mostRepeatedWord;
}

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let sentence5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let monthly = parseInt(sentence5.slice(9,13))
let bonus = parseInt(sentence5.slice(42,47))
let course = parseInt(sentence5.slice(67,72))
let annual = (monthly*12) + (course*12) + bonus
console.log(annual)
//console.log (sentence5.search('15000'))
/*"aquickbrownfoxjumpedoveralazydog"
1: write a code to find the first repeated character in the above string

2: write a code to find the count of each character

/
/
'I am Sameer and I am an Engineer’

1: write a code to print   ‘Sameer’ from above string

2:  find at what place the word 'Engineer' exists
/

/*
Verify that the giving string is a email address also for a IN Phone No (use regex)
.*/
// let str = 'aquickbrownfoxjumpedoveralazydog';
// let list = [];
//--First question first way
// for (let index in str) {
//     let char = str.charAt(index);
//     if (list.includes(char)) {
//         console.log(`First Repeated char is ${char} at index ${index}`)
//         break;
//     } else {
//         list.push(char);
//     }
// }
//----First Question another way
let str = 'aquickbrownfoxjumpedoveralazydog';
let flag = false;
for (let index in str) {
    let char = str.charAt(index);
    if (flag === true) {
        break;
    }
    for (let index2 in str) {
        if (index == index2) {
            continue;
        } else if (index2 > index) {
            if (char === str.charAt(index2)) {
                console.log(`First repeated char is '${char}' at index ${index} and ${index2}`);
                flag = true
                break;
            }
        }
    }
}

//Record timing 6 Minutes 17 Seconds

// a2
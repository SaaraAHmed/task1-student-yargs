const student={
    "id":1,
    "name": "mo7",
    "age":13,
    "comment":"your comment pl"

}
// console.log (student)
const studentjson= JSON.stringify(student) 
console.log (studentjson)


const fs = require('fs')
fs.writeFileSync('txt.json', studentjson)
console.log(fs.readFileSync('txt.json').toString())


student = JSON.parse(studentjson)
console.log(student)









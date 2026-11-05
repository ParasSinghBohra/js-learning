// const tinderObj =  new Object()
const tinderUser =  {}
tinderUser.id = "123abc"
tinderUser.name = "Paras"
tinderUser.isLoggedIn  = false

// console.log(tinderUser);


const regular_User = {
    email: "paras@gamil.com",
    "Fullname" : {
        userfullname : {
            Firstname: "Paras",
            Lastname: "Bohra"
        }
    }
}

// console.log(regular_User.Fullname.userfullname

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"c",4:"d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1 , obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);   

const user =[ {
    email : "paras@gmail.com",
    id: 1
},
{
    email : "paras@gmail.com",
    id: 1
},
{
    email : "paras@gmail.com",
    id: 1
},
{
    email : "paras@gmail.com",
    id: 1
},
{
    email : "paras@gmail.com",
    id: 1
},
{
    email : "paras@gmail.com",
    id: 1
}
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "JS",
    coursePrice: 999,
    courseInstructor:"PAras"
}

// course.courseInstructor

const {courseInstructor : Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);
 
// {
//     "name": "Paras",
//     "coursename":"js in hindi",
//     "price": "free"
// }




// [
//     {},
//     {},
//     {}
// ]
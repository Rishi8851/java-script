const course = {
    c_name :"js",
    price : 23,
    teacher: "rishi"
}
// console.log(course.teacher)

//  or ,to clean and sort code
const {teacher}  = course 
const {teacher:tech}  = course 
console.log(teacher)
console.log(tech)


const student = {
    name: "Sabiha Nil",
    age: 15, 
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student["marks"]["chemistry"];
const subject = "math";
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];

console.log(marks2);
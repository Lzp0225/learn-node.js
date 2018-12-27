const student = require('./student')
const teacher = require('./teacher')

teacher.add('lizhepeng')
function add (teacherName, students) {
    teacher.add(teacherName)
    students.forEach((item, index) => {
        student.add(students)
    });
}
exports.add = add
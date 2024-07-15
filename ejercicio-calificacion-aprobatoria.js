const grades = [80, 90, 75, 50, 85, 92, 100, 65]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrrades = passingGrades.reduce((sum, grade) => (sum + grade), 0) / passingGrades.length

console.log(averagePassingGrrades)
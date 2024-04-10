function organizeSchoolRegister(input) {
    let students = {};

    input.forEach(str => {
        let [, name, grade, score] = str.match(/Student name: ([^,]+), Grade: (\d+), Graduated with an average score: ([\d.]+)/);
        grade = Number(grade) + 1; // Move to the next grade
        score = Number(score);

        if (score < 3) return;

        if (!students[grade]) {
            students[grade] = [];
        }

        students[grade].push({ name, score });
    });

    Object.keys(students)
        .sort((a, b) => a - b)
        .forEach(grade => {
            console.log(`${grade} Grade`);
            console.log(`List of students: ${students[grade].map(s => s.name).join(', ')}`);

            let averageScore = students[grade].reduce((acc, curr) => acc + curr.score, 0) / students[grade].length;
            console.log(`Average annual score from last year: ${averageScore.toFixed(2)}\n`);
        });
}

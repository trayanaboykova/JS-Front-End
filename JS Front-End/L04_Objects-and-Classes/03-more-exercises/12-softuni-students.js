function registerStudents(inputData) {
    const courses = {};

    for (const data of inputData) {
        if (data.includes(':')) {
            const [course, capacity] = data.split(':').map(str => str.trim());
            if (!courses[course]) {
                courses[course] = { capacity: +capacity, students: [] };
            } else {
                courses[course].capacity += +capacity;
            }
        } else {
            const match = data.match(/(.+)\[(\d+)] with email (.+) joins (.+)/);
            if (match) {
                const [username, credits, email, course] = match.slice(1);
                if (courses[course] && courses[course].students.length < courses[course].capacity) {
                    courses[course].students.push({ username, email, credits: +credits });
                }
            }
        }
    }

    for (const course of Object.values(courses)) {
        course.students.sort((a, b) => b.credits - a.credits);
    }

    const sortedCourses = Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length);

    let output = '';
    for (const [course, data] of sortedCourses) {
        const placesLeft = data.capacity - data.students.length;
        output += `${course}: ${placesLeft} places left\n`;
        for (const student of data.students) {
            output += `--- ${student.credits}: ${student.username}, ${student.email}\n`;
        }
    }

    return output.trim();
}


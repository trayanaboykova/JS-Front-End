function sprintReview(input) {
    const n = parseInt(input[0]);
    const sprintBoard = {};

    for (let i = 1; i <= n; i++) {
        const [assignee, taskId, title, status, estimatedPoints] = input[i].split(':');
        if (!sprintBoard[assignee]) {
            sprintBoard[assignee] = [];
        }
        sprintBoard[assignee].push({ taskId, title, status, estimatedPoints: parseInt(estimatedPoints) });
    }

    for (let i = n + 1; i < input.length; i++) {
        const [command, assignee, taskIdOrIndex, newTitle, newStatus, estimatedPoints] = input[i].split(':');
        switch(command) {
            case 'Add New':
                if (!sprintBoard[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    sprintBoard[assignee].push({ taskId: taskIdOrIndex, title: newTitle, status: newStatus, estimatedPoints: parseInt(estimatedPoints) });
                }
                break;

            case 'Change Status':
                if (!sprintBoard[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    const taskIndex = sprintBoard[assignee].findIndex(task => task.taskId === taskIdOrIndex);
                    if (taskIndex === -1) {
                        console.log(`Task with ID ${taskIdOrIndex} does not exist for ${assignee}!`);
                    } else {
                        sprintBoard[assignee][taskIndex].status = newTitle;
                    }
                }
                break;

            case 'Remove Task':
                if (!sprintBoard[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    const index = parseInt(taskIdOrIndex);
                    if (index < 0 || index >= sprintBoard[assignee].length) {
                        console.log('Index is out of range!');
                    } else {
                        sprintBoard[assignee].splice(index, 1);
                    }
                }
                break;
        }
    }

    let todoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;

    for (const assignee in sprintBoard) {
        for (const task of sprintBoard[assignee]) {
            switch (task.status) {
                case 'ToDo':
                    todoPoints += task.estimatedPoints;
                    break;
                case 'In Progress':
                    inProgressPoints += task.estimatedPoints;
                    break;
                case 'Code Review':
                    codeReviewPoints += task.estimatedPoints;
                    break;
                case 'Done':
                    donePoints += task.estimatedPoints;
                    break;
            }
        }
    }

    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= todoPoints + inProgressPoints + codeReviewPoints) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}
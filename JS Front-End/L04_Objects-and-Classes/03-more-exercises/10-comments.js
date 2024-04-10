function processComments(inputData) {
    const users = new Set();
    const articles = new Map();

    for (let data of inputData) {
        if (data.startsWith('user ')) {
            const userName = data.split(' ')[1];
            users.add(userName);
        } else if (data.startsWith('article ')) {
            const article = data.split(' ')[1];
            articles.set(article, []);
        } else {
            const [userName, article, title, content] = data.match(/(\w+) posts on (\w+): (.+), (.+)/).slice(1);
            if (users.has(userName) && articles.has(article)) {
                articles.get(article).push({userName, title, content});
            }
        }
    }

    [...articles.entries()]
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([article, comments]) => {
            console.log(`Comments on ${article}`);
            comments
                .sort((a, b) => a.userName.localeCompare(b.userName))
                .forEach(({userName, title, content}) => console.log(`--- From user ${userName}: ${title} - ${content}`));
        });
}


function manageBrowserHistory(browser, actions) {
    actions.forEach(action => {
        if (action === "Clear History and Cache") {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
        } else if (action.startsWith("Open ")) {
            let site = action.substring("Open ".length);
            browser["Open Tabs"].push(site);
            browser["Browser Logs"].push(action);
        } else if (action.startsWith("Close ")) {
            let site = action.substring("Close ".length);
            let index = browser["Open Tabs"].indexOf(site);
            if (index > -1) {
                browser["Open Tabs"].splice(index, 1);
                browser["Recently Closed"].push(site);
                browser["Browser Logs"].push(action);
            }
        }
    });

    console.log(`${browser["Browser Name"]}`);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}
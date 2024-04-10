function generateReport() {
    let headers = Array.from(document.querySelectorAll('table thead th'))
        .map(th => [th.querySelector('input').checked, th.querySelector('input').name]);

    let rows = Array.from(document.querySelectorAll('table tbody tr'));

    let report = rows.map(row => {
        let obj = {};
        Array.from(row.children).forEach((td, i) => {
            if (headers[i][0]) {  // if the column is checked
                obj[headers[i][1]] = td.textContent;
            }
        });
        return obj;
    });
    document.querySelector('#output').value = JSON.stringify(report, null, 2);
}
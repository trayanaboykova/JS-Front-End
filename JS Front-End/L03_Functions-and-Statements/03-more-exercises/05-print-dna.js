function printDNA(length) {
    const sequence = 'ATCGTTAGGG'.split('');
    let seqIndex = 0;

    for (let i = 1; i <= length; i++) {
        let currentLine = '';
        let X = sequence[seqIndex++ % sequence.length];
        let Y = sequence[seqIndex++ % sequence.length];

        switch (i % 4) {
            case 1:
                currentLine = `**${X}${Y}**`;
                break;
            case 2:
                currentLine = `*${X}--${Y}*`;
                break;
            case 3:
                currentLine = `${X}----${Y}`;
                break;
            case 0:
                currentLine = `*${X}--${Y}*`;
                break;
        }

        console.log(currentLine);
    }
}

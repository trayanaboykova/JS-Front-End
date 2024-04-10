function solve() {
    let allSectionsElements = Array.from(document.querySelectorAll('section'));
    let allCorrectAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let currentSection = 0;
    let guessedAnswers = 0;

    document.querySelector("#quizzie").addEventListener('click', function(e) {
        if (e.target.className === 'answer-text') {
            allSectionsElements[currentSection].style.display = 'none';

            if (currentSection < allSectionsElements.length - 1) {
                allSectionsElements[currentSection + 1].style.display = 'block';
            }

            if (allCorrectAnswers.includes(e.target.textContent)) {
                guessedAnswers++;
            }

            currentSection++;

            if (currentSection === allSectionsElements.length) {
                showResults();
            }
        }
    });

    function showResults() {
        let result = document.querySelector("#results");
        let resultText = result.querySelector("h1");

        if (guessedAnswers === 3) {
            resultText.textContent = 'You are recognized as top JavaScript fan!';
        } else {
            resultText.textContent = `You have ${guessedAnswers} right answers`
        }

        result.style.display = 'block';
    }
}
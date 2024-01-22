
var sourcelanguage = 'en';


var contentToTranslate = document.querySelectorAll('div, h1, h2, h3, p');

function translateText(text, targetLanguage, callback, sourcelanguage) {
    const googleTranslateApiKey = 'AIzaSyCr-2RixHsKEGAWzMPl7lazGFF0NH3Mqdk';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${googleTranslateApiKey}`;

    const data = {
        q: text,
        source: sourcelanguage,
        target: targetLanguage,
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            var translatedText = data.data.translations[0].translatedText;
            callback(translatedText);
        })
        .catch(error => {
            console.error('Translation error: ', error);
        });
}


document.getElementById('translateESButton').addEventListener('click', function () {
    const targetLanguage = 'es';

    // Find all elements with the class 'translatable'
    const translatableElements = document.querySelectorAll('.translatable');

    // Translate the text content of each element
    translatableElements.forEach(function (element) {
        const originalText = element.textContent;
        translateText(originalText, targetLanguage, function (translatedText) {
            // Decode HTML entities in the translated text
            const decodedText = decodeEntities(translatedText);
            element.textContent = decodedText;
        });
    });
});

function decodeEntities(encodedString) {
    var parser = new DOMParser();
    var dom = parser.parseFromString('<!doctype html><body>' + encodedString, 'text/html');
    return dom.body.textContent;
}

document.getElementById('translateENButton').addEventListener('click', function () {
    const targetLanguage = 'en';

    // Find all elements with the class 'translatable'
    const translatableElements = document.querySelectorAll('.translatable');

    // Translate the text content of each element
    translatableElements.forEach(function (element) {
        const originalText = element.textContent;
        translateText(originalText, targetLanguage, function (translatedText) {
            // Decode HTML entities in the translated text
            const decodedText = decodeEntities(translatedText);
            element.textContent = decodedText;
        });
    });
});



document.getElementById('translateFRButton').addEventListener('click', function () {
    const targetLanguage = 'fr';

    // Find all elements with the class 'translatable'
    const translatableElements = document.querySelectorAll('.translatable');

    // Translate the text content of each element and decode HTML entities
    translatableElements.forEach(function (element) {
        const originalText = element.textContent;
        translateText(originalText, targetLanguage, function (translatedText) {
            // Decode HTML entities in the translated text
            const decodedText = decodeEntities(translatedText);
            element.textContent = decodedText;
        });
    });
});

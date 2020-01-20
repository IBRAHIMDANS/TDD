const _isLetter = str => (/^[\w\d]+$/i.test(str));

export function isogram(str) {

    let scannedCharacters = {};
    if (!str) throw new Error('no parameters provided');

    for (let i = 0; i < str.length; i++) {
        let currentCharacter = str[i].toLowerCase();
        if (! _isLetter(currentCharacter)) continue;
        if (scannedCharacters[currentCharacter] === true) return false;

        scannedCharacters[currentCharacter] = true;
    }

    return true;
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeSymbols = document.getElementById('include-symbols').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;

    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numbers = '0123456789';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let characterPool = '';
    if (includeSymbols) characterPool += symbols;
    if (includeNumbers) characterPool += numbers;
    if (includeLowercase) characterPool += lowercase;
    if (includeUppercase) characterPool += uppercase;

    if (characterPool === '') {
        alert('Выберите хотя бы один тип символов.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('password').value = password;
}

document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const karakter = checkKarakter(name);
        result.innerHTML = `Karakter anda: <strong>${karakter}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;">Silahkan masukkan namamu!</span>';
    }
});

function checkKarakter(name) {
    const karakters = ['Kevin', 'Malini', 'Jasmine', 'Ditha', 'Aan', 'Ian', 'Bayu', 'Pak Bambang', 'Bu Tejo', 'Kunti Bogel'];
    const index = Math.floor(Math.random() * karakters.length);
    return karakters[index];
}
document.getElementById('checkButton').addEventListener('click', function() {
    console.log('Button clicked');
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const karakter = checkKarakter(name);
        result.innerHTML = `Karakter anda: <strong>${karakter}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;">Silahkan masukkan namamu!</span>';
    }
});

document.getElementById('checkKhodam').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = `Khodam anda adalah: <strong>${khodams}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;">Silahkan masukkan nama anda!</span>';
    }
});

function checkKhodam(name) {
    const khodams = ['asep racingg', 'gozila gyat', 'sumanto kanibal', 'arip kalapa', 'mewing rizz', 'si botak herang', 'si botak jemedud', 'kontol mengkol', 'kanjut burut', 'jelema mewing'];
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}
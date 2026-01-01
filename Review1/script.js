const form = document.getElementById('frm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const count = document.getElementById('press').value;
    const container = document.getElementById('rowContainer');
    const templateRow = document.querySelector('.main-row');

    if (!count || count <= 0) {
        alert("Please enter a valid number");
        return;
    }

    for (let i = 0; i < count; i++) {
        const clone = templateRow.cloneNode(true);
        container.appendChild(clone);
    }
});

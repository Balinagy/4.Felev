/*
Rendezhető táblázat Adott egy táblázat az oldalon. JavaScript
segítségével tedd lehetővé, hogy az oszlopok fejlécére kattintva
a táblázat az adott oszlop szerint rendezve jelenjen meg!
*/
let sortDirection = 1;

document.querySelector('table').addEventListener('click', (e) => {
    if (e.target.tagName !== 'TH') return;

    const table = e.target.closest('table');
    const rows = Array.from(table.querySelectorAll('tr')); 

    const headerRow = rows.shift();
    const columnIndex = Array.from(headerRow.children).indexOf(e.target);

    rows.sort((a, b) => {
        const aValue = a.children[columnIndex].innerText.trim();
        const bValue = b.children[columnIndex].innerText.trim();

        return aValue.localeCompare(bValue, 'hu', { numeric: true }) * sortDirection;
    });

    rows.forEach(row => table.appendChild(row));

    sortDirection *= -1;
});

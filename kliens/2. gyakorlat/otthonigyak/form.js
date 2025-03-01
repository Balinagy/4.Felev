/*
Időintervallumok
Adott egy űrlap, ahol több időpontot is fel lehet venni.
Minden időpontnál meg kell adni a dátumot és egy tól-ig intervallumot.
Ellenőrizzük le JavaScript segítségével, hogy a tól mindig kisebb legyen az ig-nél.
Ha rossz, akkor mind a két mező legyen piros keretes. Legyen lehetőség új időpont-blokkot felvenni.
*/
button_EL = document.createElement('button');
button_EL.innerText = "Hozzáadás"
form_EL = document.querySelector('form');
form_EL.insertAdjacentElement('afterend', button_EL);
button_EL.addEventListener('click', ()=>{
    div_EL = document.createElement('div');
    div_EL.innerHTML = `<div class="idopont">
            <input type="date" name="datum[]">
            <input type="time" name="tol[]">
            <input type="time" name="ig[]">
        </div>`
    form_EL = document.querySelector('form');
    form_EL.insertAdjacentElement('beforeend', div_EL);
})

function parseDateTime(date, time) {
    return new Date(`${date}T${time}`);
}


function FormDatamanipulation() {
    const dateInputs = document.querySelectorAll('input[name="datum[]"]');
    const fromInputs = document.querySelectorAll('input[name="tol[]"]');
    const toInputs = document.querySelectorAll('input[name="ig[]"]');

    const timeRanges = [];

    dateInputs.forEach((dateInput, index) => {
        const date = dateInput.value;
        const fromTime = fromInputs[index].value;
        const toTime = toInputs[index].value;

        if (date && fromTime && toTime) { // Csak ha minden mező ki van töltve
            const dt1 = parseDateTime(date, fromTime);
            const dt2 = parseDateTime(date, toTime);
            if(dt1>dt2){
                fromInputs[index].style.cssText =
                `
                border: solid 1px;
                border-color: red;
                `
                toInputs[index].style.cssText =
                `
                border: solid 1px;
                border-color: red;
                `
            }
            else
            {
                fromInputs[index].style.cssText = ``;
                toInputs[index].style.cssText = ``;
            }
            /*
            timeRanges.push({
                date,
                from: fromTime,
                to: toTime
            });
            */
        }
    });

    return timeRanges;
}

document.querySelector('form').addEventListener('change',(e)=>{
    FormDatamanipulation()
})


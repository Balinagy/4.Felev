document.addEventListener("DOMContentLoaded", () => {
    // a. Gomb elrejtése
    document.getElementById("btn-new-content").style.display = "none";

    // b. Kezdeti tartalom beszúrása, hogy legyen mit görgetni
    function addInitialContent() {
        for (let i = 0; i < 5; i++) {
            addNewRow();
        }
    }

    // c. Új sor hozzáadása a `template` alapján
    function addNewRow() {
        const template = document.getElementById("newRow");
        const clone = template.content.cloneNode(true);
        document.body.appendChild(clone);
    }

    // d. Figyeljük az oldalt, hogy ha leérünk az aljára, betöltünk új tartalmat
    function checkScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollY + viewportHeight >= pageHeight - 10) {
            console.log("End of page");
            addNewRow();
        }
    }

    // Kezdeti tartalom betöltése
    addInitialContent();

    // Görgetési eseményfigyelő
    window.addEventListener("scroll", checkScroll);
});

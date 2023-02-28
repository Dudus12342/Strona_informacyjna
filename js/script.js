function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function toggleTable(element,button) {
    if (element.style.display === "block"){
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }

    button.classList.toggle('toggleButtonActive')

}
function showDiv(variable) {
    let x = document.getElementById(variable);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
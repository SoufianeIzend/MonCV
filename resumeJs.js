function showDiv(variable) {
    let x = document.getElementById(variable);
    if (x.style.display === "none" || x.style.display === "") {
        let a = document.getElementsByClassName('hidden-details');
        Array.prototype.forEach.call(a, child => {
            child.style.display = "none";
        });
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }

}
window.addEventListener("load", function () {
    var couponcodes = document.getElementsByClassName("comp");
    for (var i = 0; i < couponcodes.length; i++) {
        couponcodes[i].addEventListener("mouseover", function () {
            var coupontooltip = this.getElementsByClassName("coupontooltip")[0];
            coupontooltip.removeAttribute("style");
        });
        couponcodes[i].addEventListener("mouseout", function () {
            var coupontooltip = this.getElementsByClassName("coupontooltip")[0];
            coupontooltip.style.display = "none";
        });
    }
});
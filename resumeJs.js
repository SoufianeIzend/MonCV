function showDiv(variable) {
    let x = document.getElementById(variable);
    if (x.style.display === "none" || x.style.display === "") {
        let a = document.getElementsByClassName('hidden-details');
        Array.prototype.forEach.call(a, child => {
            child.style.display = "none";
        });
        x.style.display = "block";
        animate({
            duration: 1000,
            timing: function (timeFraction) {
                return timeFraction * 50;
            },
            draw: function (progress) {
                x.style.marginTop = -50 + (Math.floor(progress)) + 'px';
            }
        });

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

var tooltip = document.querySelectorAll('.coupontooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i = tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}

function animate({duration, draw, timing}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction)

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}



var i = 0;

function moveLoadingBar() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("loadingBar");
        var width = 1;
        var id = setInterval(frame, 20);
        function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
        }
        }
    }
}

document.getElementById("transferButton").addEventListener("click", (e) => {
    var loadingBar = document.getElementById("loadingBar")
    loadingBar.style.display = "block"
    moveLoadingBar()
})
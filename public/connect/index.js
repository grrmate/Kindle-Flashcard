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
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append('vocabulary', fileField.files[0]);

    var loadingBar = document.getElementById("loadingBar")
    loadingBar.style.display = "block"
    moveLoadingBar()


    fetch('/vocabulary/upload', {
        method: 'POST',
        body: formData
    })
    .then((response) => response.json())
    .then((result) => {
        localStorage.setItem('data', JSON.stringify(result))
    })
})
AOS.init();

window.onbeforeunload = function () {

    window.scrollTo(0, 0);

}

const showMenu = () => {
    var element = document.getElementById("menu-sm");
    element.classList.toggle("hidden");
    // element.classList.toggle("text-3xl");
}


document.onreadystatechange = function () {
    element = document.getElementById("loader");
    ele = document.getElementById("content")
    if (document.readyState !== "complete") {
        ele.classList.toggle("hidden")
    } else {
        element.classList.toggle("hidden")

    }
}

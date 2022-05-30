window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const showMenu = () => {
    var element = document.getElementById("menu-sm");
    element.classList.toggle("hidden");
    // element.classList.toggle("text-3xl");
}

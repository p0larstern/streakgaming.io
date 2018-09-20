window.onscroll = function() {sidebar_state()};
var sidebar = document.getElementById("sidebar");
var sticky = sidebar.offsetTop;

function sidebar_state() {
    if (window.pageYOffset >= sticky) {
        sidebar.classList.add("sticky");
    } else {
        sidebar.classList.remove("sticky");
    }
}
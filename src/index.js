import "../src/public/styles/css/style.css"
import "../src/public/js/NavCellphone";
import Header from "../src/public/templates/Header";
import Home from "../src/pages/Home";

document.getElementById("header").insertAdjacentHTML("beforeend",Header());
document.getElementById("container").insertAdjacentHTML("beforeend",Home())
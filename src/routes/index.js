import Header from "../public/templates/Header";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Projects from "../pages/Projects";
import Social from "../pages/Social";
import Error404 from "../pages/Error404";

import "../public/styles/css/style.css"
import "../public/js/NavCellphone";

import getHash from "../utils/getHash";
console.log(getHash());
const routes = {
  "/": Home,
  "/social-media": Social,
  "/projects": Projects,
  "/notes": Notes
};

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("container");

    let hash = getHash();

    if(hash !== 'menu'){
        console.log(hash);
        if(hash === "/"){
            console.log("Entro");
            header.innerHTML = await Header();
            let render = routes[hash] ? routes[hash] : Error404();
            content.innerHTML = await render();
        }
        header.innerHTML = await Header();
        let route = "/"+hash;
        let render = routes[route] ? routes[route] : Error404();
        content.innerHTML = await render();
    }
    
    
};

export default router;
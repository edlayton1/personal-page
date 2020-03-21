const Header = () => {
    const view =
        `
        
            <div class="menu_bar">
                <a href="#" class="bt-menu"><span class="menu_icon"></span>Menú</a>
            </div>
    
            <nav>
                <ul>
                    <li><a href="#"><span class="home_icon"></span>Home</a></li>
                    <li><a href="#"><span class="note_icon"></span>Notas</a></li>
                    <li class="submenu">
                        <a href="#"><span class="project_icon"></span>Proyectos<span class="caret icon-arrow-down6"></span></a>
                        <ul class="children">
                            <li><a href="#">Proyectos 2020 <span class="icon-dot"></span></a></li>
                            <li><a href="#">Proyectos 2019 <span class="icon-dot"></span></a></li>
                        </ul>
                    </li>
                    <li><a href="#"><span class="social_icon"></span>Redes Sociales</a></li>
                </ul>
            </nav>
        
        `;  
        return view;
};

export default Header;
const Header = () => {
    const view =
        `
        <div class="Title"><h1>Moreno Peralta Angel Eduardo</h1></div>
        <div clas="information-block">
            <div class="escolar-information">
                <h4>Estudios previos: Tecnico en Computacion en Escuela Nacional Preparatoria Plantel 2 "Erasmo Castellanos Quinto"</h4>
                <h4>Estudios Actuales: Ingenieria en Computacion Facultad de Ingenieria UNAM</h4>
                <h4>Trabajo previo: Servicio Social Metro CDMX y Museo de la Luz UNAM</h4>
                <h4>Intereses:</h4>
                <ul>
                    <li>Tocar el instrumento violin</li>
                    <li>Jugar videojuegos
                        <ul>
                            <li>Plataformas</li>
                            <li>RPG</li>
                            <li>Gestion de recursos</li>
                            <li>JRPG</li>
                        </ul>
                    </li>
                    
                </ul>
                <h4>Habilidades: Manejo Espacial, Habilidades Sociales.</h4>
                <br>
            </div>
        </div>
        <div class="photo-block">
            <div>
                <span id="panel1"></span>
                <span id="panel2"></span>
                <span id="panel3"></span>
            </div>
            <div>
                <span id="panel4"></span>
                <span id="panel5"></span>
                <span id="panel6"></span>
            </div>
            
        </div>
        
        `;  
        return view;
};

export default Header;
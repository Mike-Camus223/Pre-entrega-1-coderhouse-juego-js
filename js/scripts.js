// FUNCIONES //

// Elecciones del jugador //

function Jugador() {
    let opciones;
    const elementos = ["fuego", "agua", "rayo", "tierra", "viento", "hielo", "acero", "veneno"];
    do {
        opciones = prompt("Elige un elemento: Fuego, Agua, Rayo, Tierra, Viento, Hielo, Acero o Veneno").toLowerCase();
    } while (!elementos.includes(opciones));
    return opciones;
}

// Elecciones del Bot //

function Bot() {
    const elementos = ["fuego", "agua", "rayo", "tierra", "viento", "hielo", "acero", "veneno"];
    const indice = Math.floor(Math.random() * elementos.length);
    return elementos[indice];
}

// Resultado de la Partida //
function deResultado(jugador, botpc) {
    const relaciones = {
        "fuego": {fortalezas: ["tierra", "acero", "viento"], debilidades: ["agua", "hielo", "rayo"], neutralidades: ["veneno", "fuego"]},
        "agua": {fortalezas: ["fuego", "tierra", "hielo"], debilidades: ["veneno", "acero", "viento"], neutralidades: ["rayo", "agua"]},
        "rayo": {fortalezas: ["agua", "veneno", "tierra"], debilidades: ["hielo", "viento", "fuego"], neutralidades: ["acero", "rayo"]},
        "tierra": {fortalezas: ["rayo", "veneno", "fuego"], debilidades: ["hielo", "viento", "agua"], neutralidades: ["acero", "tierra"]},
        "viento": {fortalezas: ["fuego", "veneno", "tierra"], debilidades: ["acero", "agua", "hielo"], neutralidades: ["rayo", "viento"]},
        "hielo": {fortalezas: ["viento", "acero", "agua"], debilidades: ["rayo", "fuego", "veneno"], neutralidades: ["tierra", "hielo"]},
        "acero": {fortalezas: ["rayo", "hielo", "tierra"], debilidades: ["viento", "agua", "rayo"], neutralidades: ["fuego", "acero"]},
        "veneno": {fortalezas: ["tierra", "viento", "fuego"], debilidades: ["acero", "hielo", "agua"], neutralidades: ["rayo", "veneno"]}
    };

    if (jugador === botpc) {
        return "¡Es un empate!";
    } else if (relaciones[jugador].fortalezas.includes(botpc)) {
        return "¡Eres un Maestro Avatar Ganaste!";
    } else if (relaciones[jugador].debilidades.includes(botpc)) {
        return "¡No eres un Maestro Avatar Perdiste!";
    } else {
        return "Es un empate por neutralidad";
    }
}

// Tabla elemental //

function TablaElemental() {
    alert("Tipos de Elementos:\n\n" +
        "Fuego: Fortalezas: Tierra, Acero, Viento. Debilidades: Agua, Hielo, Rayo. Neutralidades: Veneno, Fuego.\n" +
        "Agua: Fortalezas: Fuego, Tierra, Hielo. Debilidades: Veneno, Acero, Viento. Neutralidades: Rayo, Agua.\n" +
        "Rayo: Fortalezas: Agua, Veneno, Tierra. Debilidades: Hielo, Viento, Fuego. Neutralidades: Acero, Rayo.\n" +
        "Tierra: Fortalezas: Rayo, Veneno, Fuego. Debilidades: Hielo, Viento, Agua. Neutralidades: Acero, Tierra.\n" +
        "Viento: Fortalezas: Fuego, Veneno, Tierra. Debilidades: Acero, Agua, Hielo. Neutralidades: Rayo, Viento.\n" +
        "Hielo: Fortalezas: Viento, Acero, Agua. Debilidades: Rayo, Fuego, Veneno. Neutralidades: Tierra, Hielo.\n" +
        "Acero: Fortalezas: Rayo, Hielo, Tierra. Debilidades: Viento, Agua, Rayo. Neutralidades: Fuego, Acero.\n" +
        "Veneno: Fortalezas: Tierra, Viento, Fuego. Debilidades: Acero, Hielo, Agua. Neutralidades: Rayo, Veneno.\n");
}

// Juego Principal //

function jugarElementos() {

    alert("Bienvenido a Elementos Js, Creado por Mike dev. Es un juego de elecciones al puro estilo de piedra, papel o tijeras, ¡Pero con 8 elementos en total!");
    
    TablaElemental();

    let continuar;
    do {
        const jugador = Jugador();
        const botpc = Bot();
        const resultado = deResultado(jugador, botpc);
        alert("Elegiste: " + jugador + "\nEl Retador Elemental uso: " + botpc + "\n" + resultado);
        continuar = confirm("¿Quieres jugar de nuevo?");
    } while (continuar);
}

jugarElementos();




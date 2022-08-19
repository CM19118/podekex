function Pokemon(nombre,nickname, tipo, debilidad){
    this.nombre = nombre;
    this.tipo = tipo;
    this.nickname = nickname;
    this.debilidad = debilidad;
}


function TipoFuego(nombre, nick, tipo, debilidad){
    Pokemon.call(this,nombre,nick, tipo, debilidad);
}

function TipoTierra(nombre, nick, tipo, debilidad){
    Pokemon.call(this,nombre,nick, tipo, debilidad);
}

function TipoAgua(nombre, nick, tipo, debilidad){
    Pokemon.call(this,nombre,nick, tipo, debilidad);
}

TipoFuego.prototype = Object.create(Pokemon.prototype); //PARA QUITAR LA REFERENCIA DE LOS CONSTRUCTORES Y NO SE MODFIQUEN A LA VEZ
TipoFuego.prototype.constructor = TipoFuego;

TipoTierra.prototype = Object.create(Pokemon.prototype)
TipoTierra.prototype.constructor = TipoTierra;

TipoAgua.prototype = Object.create(Pokemon.prototype)
TipoAgua.prototype.constructor = TipoAgua;

console.log(TipoFuego.prototype);
const charizard = new TipoFuego("Charizard","Zeus", "Fuego", "AGUA")
const Sandshrew= new TipoTierra("Sandshrew","KRATOS", "TIERRA", "RAYO");
const bulbasor = new TipoAgua("Charizard","SAMUS", "AGUA", "FUEGO")

console.log(charizard);
console.log(Sandshrew);
console.log(bulbasor);




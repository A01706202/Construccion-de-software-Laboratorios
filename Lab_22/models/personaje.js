const db = require('../util/database');

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, videojuego, foto) {
        this.nombre = nombre;
        this.videojuego = videojuego;
        this.foto = foto;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO personaje (nombre, videojuego, foto) VALUES (?, ?, ?)',
            [this.nombre, this.videojuego, this.foto]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM personaje');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM personaje WHERE id=?', [id]);
    }

}
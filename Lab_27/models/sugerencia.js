const db = require('../util/database');

module.exports = class Sugerencia {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(recomendacion) {
        this.recomendacion = recomendacion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO sugerencias (recomendacion) VALUES (?)',
            [this.recomendacion]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM sugerencias');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM sugerencias WHERE id=?', [id]);
    }

}
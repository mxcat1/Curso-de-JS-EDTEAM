let name="Nombre";
const tabla={
    [name]:"Christian"
};

class Usuario{
    constructor(nombre,apellido,correo,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.edad=edad
    }
    vernombre(){
        return console.log(this.nombre)
    }
}
//
// class Profesor{
//     constructor()
// }

let chris = new Usuario("Christian","Vilca","mxcat@gmail.com",25);

console.log(chris);
chris.vernombre();
let f = (data) => console.log(this.data);
f("hola");

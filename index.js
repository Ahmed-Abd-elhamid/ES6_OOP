class Shape{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape{
    constructor(x,y,l,w){
        super(x,y);
        this.length = l;
        this.width = w;
        this.type = 'rectangle';
    }

    log(){
        return `Logs: \n` +
               `Points(x,y) = (${this.x},${this.y}) \n` +
               `Length = ${this.length} \n` + 
               `Width = ${this.width} \n`;
    }

    getCircum(){
        return 2*(this.length+this.width);
    }

    getArea(){
        return (this.length*this.width);
    }

    getXml(){
        return `<${this.type}>
        <logs>
            <point-x>${this.x}</point-x>
            <point-y>${this.y}</point-y>
            <width>${this.width}</width>
            <length>${this.length}</length>
        </logs>
        <properties>
            <circumference>${this.getCircum()}</circumference>
            <area>${this.getArea()}</area>
        </properties>\n</${this.type}>`;
    }
}

class Square extends Rectangle{
    constructor(x,y,l){
        super(x,y,l,l);
        this.type = 'square';
    }
}

class Oval extends Shape{
    constructor(x,y,a,b){
        super(x,y);
        this.A = a;
        this.B = b;
        this.type = 'oval';
    }

    log(){
        return `Logs: \n` +
               `Points(x,y) = (${this.x},${this.y}) \n` +
               `A = ${this.A} \n` + 
               `B = ${this.B} \n`;
    }

    getCircum(){
        return (Math.PI)*(this.A+this.B);
    }

    getArea(){
        return (Math.PI)*(this.A*this.B);
    }

    getXml(){
        return `<${this.type}>
        <logs>
            <point-x>${this.x}</point-x>
            <point-y>${this.y}</point-y>
            <a>${this.A}</a>
            <b>${this.B}</b>
        </logs>
        <properties>
            <circumference>${this.getCircum()}</circumference>
            <area>${this.getArea()}</area>
        </properties>\n</${this.type}>`;
    }
}

class Circle extends Oval{
    constructor(x,y,r){
        super(x,y,r,r);
        this.type = 'circle';
    }
}
class Draw {
    constructor(...shapes) {
        this.shapes = shapes;
    }

    log() {
        let totArea = 0;
        let totCircum = 0;
        for (let shape of this.shapes) {
            console.log(`Shape Type:  <== ${shape.type} ==>\n${shape.log()}`);
            totArea += shape.getArea();
            totCircum += shape.getCircum();
        }
        console.log(`Total Area: ${totArea}\nTotal Circumference: ${totCircum}`);
    }

    add(shape) {
        this.shapes.push(shape);
    }
}

function rct(){
    let x = document.getElementById('r-x').value;
    let y = document.getElementById('r-y').value;
    let l = document.getElementById('r-l').value;
    let w = document.getElementById('r-w').value;
    if( x && y && l && w){
        const rct = new Rectangle(x,y,l,w);
        alert(`${rct.log()}Circumference: ${rct.getCircum()}Area: ${rct.getArea()}Type: ${rct.type}`);
        alert(`XML:\n${rct.getXml()}`);
    }else{
        alert("Some inputs are missing, fill all inputs of Rectangle form!")
    }
}

function sql(){
    let x = document.getElementById('s-x').value;
    let y = document.getElementById('s-y').value;
    let l = document.getElementById('s-l').value;
    if( x && y && l){
        const sql = new Square(x,y,l);
        alert(`${sql.log()}Circumference: ${sql.getCircum()}\nArea: ${sql.getArea()} \nType: ${sql.type}`);
        alert(`XML:\n${sql.getXml()}`);
    }else{
        alert("Some inputs are missing, fill all inputs of Square form!")
    }
}

function ovl(){
    let x = document.getElementById('o-x').value;
    let y = document.getElementById('o-y').value;
    let a = document.getElementById('o-a').value;
    let b = document.getElementById('o-b').value;
    if( x && y && a && b){
        const ovl = new Oval(x,y,a,b);
        alert(`${ovl.log()}Circumference: ${ovl.getCircum()}\n$Area: {ovl.getArea()}\nType: ${ovl.type}`);
        alert(`XML:\n${ovl.getXml()}`);
    }else{
        alert("Some inputs are missing, fill all inputs of Oval form!")
    }
}

function crc(){
    let x = document.getElementById('c-x').value;
    let y = document.getElementById('c-y').value;
    let r = document.getElementById('c-r').value;
    if( x && y && r){
        const crc = new Circle(x,y,r);
        alert(`${crc.log()}Circumference: ${crc.getCircum()}\nArea: ${crc.getArea()}\nType: ${crc.type}`);
        alert(`XML:\n${crc.getXml()}`);
    }else{
        alert("Some inputs are missing, fill all inputs of Circle form!")
    }
}

const rect = new Rectangle(0,0,5,10);
console.log(rect.log());
console.log(`Circumference: ${rect.getCircum()}`);
console.log(`Area: ${rect.getArea()}`);
console.log(`Type: ${rect.type}`);
console.log(rect.getXml());
console.log("*********************")

const sq = new Square(0,0,5);
console.log(sq.log());
console.log(`Circumference: ${sq.getCircum()}`);
console.log(`Area: ${sq.getArea()}`);
console.log(`Type: ${sq.type}`);
console.log(sq.getXml());
console.log("*********************")

const ov = new Oval(0,0,10,5);
console.log(ov.log());
console.log(`Circumference: ${ov.getCircum()}`);
console.log(`Area: ${ov.getArea()}`);
console.log(`Type: ${ov.type}`);
console.log(ov.getXml());
console.log("*********************")

const cir = new Circle(0,0,5);
console.log(cir.log());
console.log(`Circumference: ${cir.getCircum()}`);
console.log(`Area: ${cir.getArea()}`);
console.log(`Type: ${cir.type}`);
console.log(cir.getXml());
console.log("*********************")

const dr = new Draw(sq, cir);
dr.log();
dr.add(rect);
dr.log();
console.log("*********************")

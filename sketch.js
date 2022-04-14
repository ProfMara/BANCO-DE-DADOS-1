var database;
var pos;
var bola;
var bp;

function setup() {
 
    database = firebase.database();    

    createCanvas(500, 500);
    bola = createSprite(250, 250, 10, 10);
    bola.shapeColor = "red";

   var posbanco = database.ref("");
    posbanco.on("value", lerPos, mostrarErro);

    pos = 1;
}

function draw() {
    background("white");

   if(pos!==undefined){
    if (keyDown(LEFT_ARROW)) {
        mexer(-3,0);
    }
    if (keyDown(RIGHT_ARROW)) {
        mexer(3,0);
    }
    if (keyDown(UP_ARROW)) {
        mexer(0,-3);
    }
    if (keyDown(DOWN_ARROW)) {
        mexer(0,3);
    }
    drawSprites();

   }
   

}

function mostrarErro(){
    console.log("Houve erro na hora de acessar o banco de dados");
}


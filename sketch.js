var ball;
var position;
var database;

function setup(){
    database = firebase.database();//the database we are connecting
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref("ball/position");//ref is used to refer to the position where the data is stored
    ballPosition.on("value", readPosition);//on is used to listen to database
}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
    }
}

function writePosition(x,y){
    database.ref("ball/position").set({//set is used to write in the database
    'x' : position.x + x,
    'y' : position.y + y
    })
    
}

function readPosition(a){
    position = a.val();//val refers to the value
    ball.x = position.x;
    ball.y = position.y;

}

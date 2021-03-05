var canvas=new fabric.Canvas('myCanvas');

parts_width=30;
parts_height=30;

player_x=10;
player_y=10;

var player_obj="";
var parts_obj="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(IMG){
    player_obj=IMG;
    player_obj.scaleToWidth(150);
    player_obj.scaleToHeight(140);
    player_obj.set({top:player_y,left:player_x});
    canvas.add(player_obj);
    }
    );
}

function newImg(get_image){
    fabric.Image.fromURL(get_image,function(IMG){
        parts_obj=IMG;
        parts_obj.scaleToWidth(parts_width);
        parts_obj.scaleToHeight(parts_height);
        parts_obj.set({top:player_y,left:player_x});
        canvas.add(parts_obj);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift are pressed together");
        parts_width=parts_width+10;
        parts_height=parts_height+10;
        document.getElementById("cur_width").innerHTML=parts_width;
        document.getElementById("cur_height").innerHTML=parts_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift are pressed together");
        parts_width=parts_width-10;
        parts_height=parts_height-10;
        document.getElementById("cur_width").innerHTML=parts_width;
        document.getElementById("cur_height").innerHTML=parts_height;
    }
    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    if (keyPressed == '70'){
        newImg("thor_face.png");
        console.log("f");
    }
    if (keyPressed == '66'){
        newImg("ironman_body.png");
        console.log("b");
    }
    if (keyPressed == '76'){
        newImg("spiderman_legs.png");
        console.log("l");
    }
    if (keyPressed == '82'){
        newImg("hulk_right_hand.png");
        console.log("r");
    }
    if (keyPressed == '72'){
        newImg("captain_america_left_hand.png");
        console.log("h");
    }
}
function up() { 
    if(player_y >=0) {
    player_y = player_y - parts_height;
    console.log("When up arrow is pressed, x = " + player_x + " | y = " +player_y);
    console.log("parts height= "+ parts_height);
    canvas.remove(player_obj);
    playerupdate();
} } function down() {
          if(player_y <=500) { 
              player_y =player_y+ parts_height;
               console.log("When down arrow is pressed, x = " + player_x + " | y = " +player_y);
               console.log("parts height= "+ parts_height);
               canvas.remove(player_obj);
               playerupdate();
                } 
 }
function left() { 
if(player_x >= 0) {
 player_x =player_x - parts_width;
 console.log("When left arrow is pressed, x = " + player_x + " | y = " +player_y);
                          console.log("parts width= "+ parts_width);
                          canvas.remove(player_obj);
                          playerupdate();
                        }
                        }
function right() { 
if(player_x <= 850) { 
 player_x =player_x + parts_width;
console.log("When right arrow is pressed, x = " + player_x + " | y = " + player_y);
console.log("parts width= "+ parts_width);
canvas.remove(player_obj);
playerupdate();
} }
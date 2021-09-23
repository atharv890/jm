canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car_height=100;
var car_width=100;
var car_x=470;
var car_y=200;
function add(){

        background=new Image();
    background.onload=backgroundupload;
    background.src="g.jpg";
    function backgroundupload(){
        ctx.drawImage(background,0,0,canvas.width,canvas.height);
    }
    car=new Image();
    car.onload=carupload;
    car.src="car2.png";
    function carupload(){
        ctx.drawImage(car,car_x,car_y,car_width,car_height);
}
}
    window.addEventListener("keydown",key_down);
    function key_down(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(keypressed=='38'){
        up();
        }
        if(keypressed=='40'){
            down();
        }
        if(keypressed=='37'){
                left();
        }
        if(keypressed=='39'){
                    right();
        }
        }
        function up(){
            if (car_y >=0){
            car_y=car_y-10;
        console.log("x  "+car_y+"y  "+car_y);
        }
        }
        function down(){
            if(current_y<=400){
            current_y=current_y+10;
            console.log("x  "+current_x+"y  "+current_y);
            carupload();
            backgroundupload();
            }
            }
            function left(){
                if(current_x>=0){
                current_x=current_x-10;
                console.log("x  "+current_x+"y  "+current_y);
                carupload();
                backgroundupload();
                }
            } 
             function right(){
                if(current_x<=700){
                current_x=current_x+10;
                console.log("x  "+current_x+"y  "+current_y);
                carupload();
                backgroundupload();
                }
                }




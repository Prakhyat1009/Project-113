function preload(){

}

function setup(){
    canvas = createCanvas(570,420);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(410,260);
    video.hide();
    }

    function draw(){
        fill("orange");
        rect(500,60,30,300);
        fill("orange");
        rect(40,60,30,300);
        fill("orange");
        rect(70,35,430,30);
        fill("orange");
        rect(70,350,430,30);
        fill("skyblue");
        circle(520,50,60);
        fill("skyblue");
        circle(50,50,60)
        fill("skyblue");
        circle(50,370,60);
        fill("skyblue");
        circle(520,370,60);
        image(video,100,100,350,220);
        }

   function take_snap(){
   save("student_image.png");
   }
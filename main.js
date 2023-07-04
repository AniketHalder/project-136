status = "";
input_text = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input1").value;
}

function modeLoaded()
{
    console.log("ModelLoaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
}
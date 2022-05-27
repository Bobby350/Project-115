function preload() {
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}

function draw() {
    image(video, 0, 0, 350, 300)
}

function take_snapshot() {
    save('WHTCB.png')
}

function modelLoaded() {
    console.log("modelLoaded")
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results)
        console.log("right Eye x = " + results[0].pose.rightEye.x)
        console.log("right Eye y = " + results[0].pose.rightEye.y)
    }
}
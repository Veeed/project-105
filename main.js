Webcam.set({
width : 350,
height : 300,
image_format : 'png',
png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    console.log('function take_snapshot triggered.');
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    });
    console.log('function take_snapshot executed.');
}

console.log("ml5 version:", ml5.version)

const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Mxd8AqYTm/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded sucessful!!');
}

function check(){
    console.log('function check triggered.');
    img=document.getElementById('captured_img');
    classifier.classify(img, gotResults);
    console.log('function check executed.');
}

function gotResults (error, results) {
    console.log('function gotResults triggered.');
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    console.log('function gotResults executed.');
}
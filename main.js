var SpeachRecognition=window.webkitSpeechRecognition;
var recognition=new SpeachRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
Webcam.attach(camera);
}
function speak(){
    var synth=window.speechSynthesis;
   speak_data=document.getElementById("textbox").value;
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
        document.getElementById("result1").innerHTML='<img src="'+data_uri+'" id="captured_image">'
        document.getElementById("result2").innerHTML='<img src="'+data_uri+'" id="captured_image">'
    });
}
Webcam.set({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
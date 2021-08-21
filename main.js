r=window.webkitSpeechRecognition;
r2=new r();
function start(){
    document.getElementById("textbox").value="";
    r2.start();
}
r2.onresult=function(event){
    console.log(event);
    rc=event.results[0][0].transcript;
    document.getElementById("textbox").value=rc;
    console.log(rc);
    if(rc=="take my selfie"){
    speak();
    }
}

function speak(){
    ry=window.speechSynthesis;
    rsd="taking selfie in 5 seconds";
    r3=new SpeechSynthesisUtterance(rsd);
    ry.speak(r3);
    Webcam.attach(rrc);
    setTimeout(function(){
    ts();
    save();
    },5000);
}

rrc=document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });

 function ts(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='ii' src='"+data_uri+"'>";
    });
}

function save(){
    rlink=document.getElementById("336");
    rimage=document.getElementById("ii").src;
    rlink.href=rimage;
    rlink.click();
}
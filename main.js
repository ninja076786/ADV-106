prediction_1="";
prediction_2="";

 Webcam.set({
 width:"350",
 height:"300",
image_format:"png",
png_quality:120,
 });

  camera = document.getElementById("camera");

    Webcam.attach("#camera");
    function go(){
        Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML='<img id="cap_image" src="'+data_uri+'">'
        })
    }
 console.log("ml5's Current Version Is:",ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Lz6syGHYp/model.json",modelLoaded);

function modelLoaded(){
  console.log("YOU!!!!!!!!!!!!!!!!! LISTEN!!!!!!!!!!!!!!!! THE MODEL HAS LOADED!!!!!!!!!!!!!!!!!!")
}

function speak(){
  var synth=window.speechSynthesis;
  var speak_data1="The First Prediction Is:"+prediction1+"!!!!!!";
  var speak_data2="And The Second Prediction Is:"+prediction2+"!!!!!!";
  var utter_this=new SpeechSynthesisUtterance(speak_data1+speak_data2);
  synth.speak(utter_this);
}

function check(){
img = document.getElementById("cap_image");
classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
console.error(error);
}
else {
  console.log(results)
  document.getElementById("result_emotion_name1").innerHTML=results[0].label;
  document.getElementById("result_emotion_name2").innerHTML=results[1].label;
  prediction_1=results[0].label;
  prediction_2=results[1].label;
  if(prediction_1=="Happy"){
  document.getElementById("update_emogi1").innerHTML="&#128578;"
  }
  if(prediction_1=="Bored"){
    document.getElementById("update_emogi1").innerHTML="&#128529;"
    }
    if(prediction_1=="Thinking"){
      document.getElementById("update_emogi1").innerHTML="&#129300;"
      }
      if(prediction_1=="Surprised"){
        document.getElementById("update_emogi1").innerHTML="&#128558;"
        }


        if(prediction_2=="Happy"){
          document.getElementById("update_emogi2").innerHTML="&#128578;"
          }
          if(prediction_2=="Bored"){
            document.getElementById("update_emogi2").innerHTML="&#128529;"
            }
            if(prediction_2=="Thinking"){
              document.getElementById("update_emogi2").innerHTML="&#129300;"
              }
              if(prediction_2=="Surprised"){
                document.getElementById("update_emogi2").innerHTML="&#128558;"
                }
}
}
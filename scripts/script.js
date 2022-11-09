window.onload=function(){
    //Change the picture
    var iterator = 0;
    document.getElementById('picChanger').addEventListener('click',function changePicture(){
    var pictures = ["img/1.jpg", "img/2.jpg","img/3.jpg", "img/4.jpg","img/5.jpg", "img/6.jpg"]
    document.getElementById('imgs').innerHTML='<img src='+ pictures[iterator] +'>';
    iterator ++
    if (iterator >= pictures.length){
        iterator = 0
    };
        //Show the clock
        var currentDate =  new Date();
        document.getElementById("displayClock").innerHTML = 'Now is  ' + currentDate + ". Have a wonderful day (or night)!";
        
    });

};


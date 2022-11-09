window.onload=function(){
    var iterator = 0;
    document.getElementById('picChanger').addEventListener('click',function(){
    var pictures = ["img/1.jpg", "img/2.jpg","img/3.jpg", "img/4.jpg","img/5.jpg", "img/6.jpg"]
    document.getElementById('imgs').innerHTML='<img src='+ pictures[iterator] +'>';
    iterator ++
    if (iterator >= 6){
        iterator = 0
    }
    })
}
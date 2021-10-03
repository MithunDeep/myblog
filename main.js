function flipimage() {
    document.getElementById("image").src = "https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/nature-photography.jpg";    
} 

var images=
["https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/nature-photography.jpg ", "https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2019/10/Karthika-Gupta-Compelling-Nature-Photos-6.jpg?fit=1500%2C1000&ssl=1"]

var i=0;
function next() {
  document.getElementById("image1").src = images[i];
  i++;
}   

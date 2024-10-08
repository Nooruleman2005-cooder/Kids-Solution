var Solution = prompt("Enter The Name Of What Do You Want!")
var Bcounting = "Backward Counting";
var Fcounting = "Forward Counting";
var Tableof = "Table";
if(Solution === Fcounting){
var starting = +prompt("Enter The Start No!")
var ending = +prompt("Enter The End No!")
for(var i = starting; i <= ending; i += 10){
for(var j = i; j < i + 10; j++ ){
    document.write( " " + j + " ");
}
document.write("</br>");
}
}
else if (Solution === Bcounting){
var starting = +prompt("Enter The Start No!")
var ending = +prompt("Enter The End No!")
for(var k = starting; k >= ending; k -= 10){
for(var l = k; l > k - 10; l-- ){
    document.write( " " + l + " " );
}
document.write("</br>");
}
}
else if (Solution === Tableof){
var Tableof = +prompt("Enter The Name Of Table!")
var starting = +prompt("Enter The Start No!")
var ending = +prompt("Enter The End No!")
for(var m = starting; m <= ending; m++){
    document.write(Tableof + " × " + m + " = " +(Tableof*m) + "</br>");
}
}
else {
    document.write(`<div class="card" style="width: 18rem; margin-left: 500px;margin-top: 0;">
        <img src="./asset/img/sad_img-removebg-preview.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" style="color:red; text-align: center; font-size:50px;">Opps!<br>I can't find it what you wan't.</h5>
        </div>
      </div>`)
}

var Stores = function(name, min, max, perPerson) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.perPerson = perPerson;
  this.dph = [];
}
Stores.prototype.render = function() {
  var hourly = [];
  var total = 0;
  this.donutsPerHour();
  if(document.getElementById(this.name)) {
    var grab = document.getElementById(this.name).childNodes;
    for(var j = 0; j < grab.length - 1; j++) {
      grab[j].innerHTML = this.dph[j];
      console.log(total + " " + this.dph + "grab: " + grab[j]);
    }
    for(var k = 0; k < this.dph.length - 1; k++){
      total += this.dph[k];
    }
    grab[grab.length - 1].innerHTML = total;
  }
  else {
    var cell = document.createElement('tr');
    cell.id = this.name;
    var table = document.getElementById('Doughnut Table');
    cell.innerHTML = this.name;
    table.appendChild(cell);

    for (var i = 0; i < this.dph.length; i++) {
      var td = document.createElement('td');
      td.innerHTML = this.dph[i];
      cell.appendChild(td);
      total += this.dph[i];
    }
    var totdo = document.createElement('td');
    totdo.innerHTML = total;
    cell.appendChild(totdo);
  }
};
Stores.prototype.donutsPerHour = function() {
  for (var i = 0; i < 12; i++) {
    this.dph.push(Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.perPerson));
  }
}
document.getElementById('btn').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var minc = parseInt(document.getElementById('minc').value);
  var maxc = parseInt(document.getElementById('maxc').value);
  var perc = parseInt(document.getElementById('perc').value);
  var addloc = [name , minc , maxc , perc];
  var booo = new Stores(addloc[0], addloc[1], addloc[2], addloc[3]);
  booo.render();
});



var down = new Stores('Downtown', 8, 43, 4.5);
var cap = new Stores('Capitol Hill', 4, 37, 2)
var south = new Stores('South Lake Union', 9, 23, 6.33);
var wedge = new Stores('Wedgewood', 2, 28, 1.25);
var ball = new Stores('Ballard', 8, 58, 3.75);

down.render();
cap.render();
south.render();
wedge.render();
ball.render();

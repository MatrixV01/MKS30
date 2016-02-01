var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
    height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(32," + (height / 2) + ")");


var stuff = {
  description: "Number of Tornadoes in The United States (1950-1994)",
  column_names: ["Year","Total # of Tornadoes","Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
  data:[
    ["1994-01-01",1082.0,13.0,9.0,58.0,205.0,161.0,234.0,155.0,120.0,30.0,51.0,42.0,4.0],
    ["1993-01-01",1173.0,17.0,34.0,48.0,85.0,177.0,313.0,242.0,112.0,65.0,55.0,19.0,6.0],
    ["1992-01-01",1297.0,15.0,29.0,55.0,53.0,137.0,399.0,213.0,115.0,81.0,34.0,146.0,20.0],
    ["1991-01-01",1132.0,29.0,11.0,157.0,204.0,335.0,216.0,64.0,46.0,26.0,21.0,20.0,3.0],
  ]
}

update()

function update() {

  stuff.data       //=> has type: Array( Array(Num) )
  stuff.data[0]    //=> has type: Array(Num)
  stuff.data[0][5] //=> has type: Num

  var byYear = svg.selectAll("g.by-year")
    .data(stuff.data, function(year) { return year[0]; })

  var group = byYear.enter().append("g").attr("class", "by-year");

  group.append("text")
      .text(function(year) { return year[0].split('-')[0] + ": " + year[1]; })
      .attr("x", 10)
      .attr("y", function (year, i) { return i * 60 })

  group.append("text")
      .text(function(year) { return year[2]; })
      .attr("x", 400)
      .attr("y", function (year, i) { return i * 60 })

}

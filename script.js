function test1() {



d3.json("data.json", function(allData2) {
document.getElementById("punchcard").innerHTML = allData2[0][" Level"];
alert(allData2.length);
//alert(data[0][0]);
/*
for(var i = 0; i < 50; i++)
{
	alert(data[i]);
}
*/
});
}

function script1() {
//alert("Something2");

var w = 940,
    h = 300,
    pad = 20,
    left_pad = 100,
    Data_url = 'data.json';
	
	/*
d3.json(Data_url, function(data) {
alert(data.length);
alert("potato");
});
 */
 
var svg = d3.select("#punchcard")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
 
var x = d3.scale.linear().domain([0, 50]).range([left_pad, w-pad]),
    y = d3.scale.linear().domain([0, 6]).range([pad, h-pad*2]);
 
var xAxis = d3.svg.axis().scale(x).orient("bottom")
        .ticks(24)
        .tickFormat(function (d, i) {
            var m = (d > 12) ? "p" : "a";
            return (d%12 == 0) ? 12+m :  d%12+m;
        }),
    yAxis = d3.svg.axis().scale(y).orient("left")
        .ticks(7)
        .tickFormat(function (d, i) {
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d];
        });
 
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0, "+(h-pad)+")")
    .call(xAxis);
 
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate("+(left_pad-pad)+", 0)")
    .call(yAxis);
 
svg.append("text")
    .attr("class", "loading")
    .text("Loading ...")
    .attr("x", function () { return w/2; })
    .attr("y", function () { return h/2-5; });
 
d3.json(Data_url, function (punchcard_data)
{

	// E == Elementary, M == Middle School, S == High School, S/O == mixed grade level school
   sumE = 0;
   sumM = 0;
   sumS = 0;
   sumSO = 0;

   // loop to get all of the numbers associated with that school type
   for (var i = 0; i < punchcard_data.length; i++) {
       if (punchcard_data[i][" Level"] === "E") {
           sumE++;
       } else if (punchcard_data[i][" Level"] === "M") {
           sumM++;
       } else if (punchcard_data[i][" Level"] === "S") {
           sumS++;
       } else if (punchcard_data[i][" Level"] === "S/O") {
           sumSO++;
       }
   }

   // setting the items in JSON to use within the graph
   // schoolData is the JSON object for this page
   var schoolData = [];
   // this collects the elementary school punchcard_data so it will looks nice to the user
   item = {};
   item["title"] = "Elementary School";
   item["number"] = sumE;
   schoolData.push(item);

   // this collects the middle school punchcard_data so it will looks nice to the user
   item = {};
   item["title"] = "Middle School";
   item["number"] = sumM;
   schoolData.push(item);

   // this collects the high school punchcard_data so it will looks nice to the user
   item = {};
   item["title"] = "High School";
   item["number"] = sumS;
   schoolData.push(item);

   // this collects the combined school punchcard_data so it will looks nice to the user
   item = {};
   item["title"] = "Combined Schooling";
   item["number"] = sumSO;
   schoolData.push(item);

    var max_r = d3.max(punchcard_data.map( 	
		function (d) { return d[2]; })),	
        r = d3.scale.linear()
            .domain([0, d3.max(punchcard_data, function (d) { return d[2]; })])
            .range([0, 12]);
 
    svg.selectAll(".loading").remove();
 
    svg.selectAll("circle")
        .data(punchcard_data)
        .enter()
        .append("circle")
        .attr("class", "circle")
		//console.log( return x(d[24]));
        .attr("cx", function (d) {console.log(schoolData[1]); return x(schoolData[0]["number"]); })
        .attr("cy", function (d) {console.log(schoolData[1]); return y(schoolData[0]["number"]); })
        .transition()
        .duration(800)
        .attr("r",  function (d) {console.log(schoolData[1]); return r(schoolData[0]["number"]); });
});
}
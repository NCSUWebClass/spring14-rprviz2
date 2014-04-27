$(document).ready(function() {

	$('.data').hide();
	$('.description').show();
	$('.home').show();

	$('#nav_home').click(function() {
		$('.data').hide(500);
		$('.description').show(500);
		$('.home').show(500);
	});

	$('#nav_data').click(function() {
		$('.description').hide(500);
		$('.home').hide(500);
		$('.data').show(500);
	});

	$('#data1').click(function() {
		$('#content1').toggle(500);
		$('#content2').hide(500);
		$('#content3').hide(500);

	});
	$('#data2').click(function() {
		$('#content1').hide(500);
		$('#content2').toggle(500);
		$('#content3').hide(500);

	});
	$('#data3').click(function() {
		$('#content1').hide(500);
		$('#content2').hide(500);
		$('#content3').toggle(500);

	});
});

function showIframe(name) {
	if(document.getElementById(name).style.display == "") {
		hideIframe(name);
	} else {
		document.getElementById(name).style.display = "";
	}
}

function removeFRvsESL() {
	d3.select("svg").remove();
}

function showFRvsESL(data, year) {
	

    var margins = {
        "left": 40,
            "right": 30,
            "top": 30,
            "bottom": 30
    };
    
    var width = 500;
    var height = 500;
    
    var colors = d3.scale.category10();

    var svg = d3.select("#scatter-load").append("svg").attr("width", width).attr("height", height).append("g")
        .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

    var x = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
			return d.Percent_FR;
		}))
        .range([0, width - margins.left - margins.right]);

    var y = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
			return d.Percent_ESL;
		}))
		.range([height - margins.top - margins.bottom, 0]);

    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + y.range()[0] + ")");
    svg.append("g").attr("class", "y axis");
	
	svg.append("text")
		.attr("x", (width / 2))
		.attr("y", 0 - (margins.top / 2))
		.attr("text-anchor", "middle")
		.style("font-size", "16px")
		.text("Percent Free and Reduced Lunch VS Perenct ESL Students " + year)

    svg.append("text")
		.attr("class", "x label")
        .attr("text-anchor", "end")
		.attr("dx", "1em")
        .attr("x", width / 2)
        .attr("y", height - 35)
        .text("Percent Free and Reduced Lunches");
		
	svg.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 0 - margins.left)
		.attr("x", 0 - (height / 2))
		.attr("dy", "1em")
		.attr("transform", "rotate(-90)")
		.text("Percent ESL");

    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickPadding(2);
    var yAxis = d3.svg.axis().scale(y).orient("left").tickPadding(2);
  
    svg.selectAll("g.y.axis").call(yAxis);
    svg.selectAll("g.x.axis").call(xAxis);

    var schools = svg.selectAll("g.node").data(data, function (d) {
        return d.Code;
    });

    var schoolGroup = schools.enter().append("g").attr("class", "node")
		.attr('transform', function (d) {
			return "translate(" + x(d.Percent_FR) + "," + y(d.Percent_ESL) + ")";
		});

	if(year == '2008') {
		schoolGroup.append("circle")
			.attr("r", 5)
			.attr("class", "dot")
			.style("fill", function (d) { 
				return colors(d.Grade);
			});
	} else {
		schoolGroup.append("circle")
			.attr("r", 5)
			.attr("class", "dot")
			.style("fill", function (d) { 
				return colors(d.Level);
			});
	}
}

function showFRvsLEP(data, year) {

    var margins = {
        "left": 40,
            "right": 30,
            "top": 30,
            "bottom": 30
    };
    
    var width = 500;
    var height = 500;
    
    var colors = d3.scale.category10();

    var svg = d3.select("#scatter-load").append("svg").attr("width", width).attr("height", height).append("g")
        .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

    var x = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
			return d.Percent_FR;
		}))
        .range([0, width - margins.left - margins.right]);

    var y = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
			return d.Percent_LEP;
		}))
		.range([height - margins.top - margins.bottom, 0]);

    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + y.range()[0] + ")");
    svg.append("g").attr("class", "y axis");
	
	svg.append("text")
		.attr("x", (width / 2))
		.attr("y", 0 - (margins.top / 2))
		.attr("text-anchor", "middle")
		.style("font-size", "16px")
		.text("Percent Free and Reduced Lunch VS Perenct LEP Students " + year)

    svg.append("text")
		.attr("class", "x label")
        .attr("text-anchor", "end")
		.attr("dx", "1em")
        .attr("x", width / 2)
        .attr("y", height - 35)
        .text("Percent Free and Reduced Lunches");
		
	svg.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 0 - margins.left)
		.attr("x", 0 - (height / 2))
		.attr("dy", "1em")
		.attr("transform", "rotate(-90)")
		.text("Percent LEP");

    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickPadding(2);
    var yAxis = d3.svg.axis().scale(y).orient("left").tickPadding(2);
  
    svg.selectAll("g.y.axis").call(yAxis);
    svg.selectAll("g.x.axis").call(xAxis);

    var schools = svg.selectAll("g.node").data(data, function (d) {
        return d.Code;
    });

    var schoolGroup = schools.enter().append("g").attr("class", "node")
		.attr('transform', function (d) {
			return "translate(" + x(d.Percent_FR) + "," + y(d.Percent_LEP) + ")";
		});

	if(year == '2008') {
		schoolGroup.append("circle")
			.attr("r", 5)
			.attr("class", "dot")
			.style("fill", function (d) { 
				return colors(d.Grade);
			});
	} else {
		schoolGroup.append("circle")
			.attr("r", 5)
			.attr("class", "dot")
			.style("fill", function (d) { 
				return colors(d.Level);
			});
	}
}

function showFRvsTEST(data, year) {

    var margins = {
        "left": 40,
            "right": 30,
            "top": 30,
            "bottom": 30
    };
    
    var width = 500;
    var height = 500;
    
    var colors = d3.scale.category10();

    var svg = d3.select("#scatter-load").append("svg").attr("width", width).attr("height", height).append("g")
        .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

    var x = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
			return d.Percent_FR;
		}))
        .range([0, width - margins.left - margins.right]);

    var y = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
			return d.NC_ABC_Results;
		}))
		.range([height - margins.top - margins.bottom, 0]);

    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + y.range()[0] + ")");
    svg.append("g").attr("class", "y axis");
	
	svg.append("text")
		.attr("x", (width / 2))
		.attr("y", 0 - (margins.top / 2))
		.attr("text-anchor", "middle")
		.style("font-size", "16px")
		.text("Percent Free and Reduced Lunch VS NC ABC Test Results " + year)

    svg.append("text")
		.attr("class", "x label")
        .attr("text-anchor", "end")
		.attr("dx", "1em")
        .attr("x", width / 2)
        .attr("y", height - 35)
        .text("Percent Free and Reduced Lunches");
		
	svg.append("text")
		.attr("class", "y label")
		.attr("text-anchor", "end")
		.attr("y", 0 - margins.left)
		.attr("x", 0 - (height / 2))
		.attr("dy", "1em")
		.attr("transform", "rotate(-90)")
		.text("NC ABC Test Results");

    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickPadding(2);
    var yAxis = d3.svg.axis().scale(y).orient("left").tickPadding(2);
  
    svg.selectAll("g.y.axis").call(yAxis);
    svg.selectAll("g.x.axis").call(xAxis);

    var schools = svg.selectAll("g.node").data(data, function (d) {
        return d.Code;
    });

    var schoolGroup = schools.enter().append("g").attr("class", "node")
		.attr('transform', function (d) {
			return "translate(" + x(d.Percent_FR) + "," + y(d.NC_ABC_Results) + ")";
		});

	if(year == '2008') {
		schoolGroup.append("circle")
			.attr("r", 5)
			.attr("class", "dot")
			.style("fill", function (d) { 
				return colors(d.Grade);
			});
	} else {
		schoolGroup.append("circle")
			.attr("r", 5)
			.attr("class", "dot")
			.style("fill", function (d) { 
				return colors(d.Level);
			});
	}
}
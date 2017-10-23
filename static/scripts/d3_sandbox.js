/**
 * Created by Daniel on 5/16/2016.
 */

var lg_data = [{
    "sale": "202",
    "year": "2000"
}, {
    "sale": "215",
    "year": "2001"
}, {
    "sale": "179",
    "year": "2002"
}, {
    "sale": "199",
    "year": "2003"
}, {
    "sale": "176",
    "year": "2010"
}];

var lg_data2 = [{
    "sale": "152",
    "year": "2000"
}, {
    "sale": "189",
    "year": "2002"
}, {
    "sale": "179",
    "year": "2004"
}, {
    "sale": "199",
    "year": "2006"
}, {
    "sale": "134",
    "year": "2008"
}, {
    "sale": "176",
    "year": "2010"
}];

var line_graph = d3.select("#line-graph");

var lg_WIDTH = 1000;
var lg_HEIGHT = 500;
var lg_MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
};

var xScale = d3.scale.linear().range([lg_MARGINS.left, lg_WIDTH - lg_MARGINS.right]).domain([2000, 2010]);
var yScale = d3.scale.linear().range([lg_HEIGHT - lg_MARGINS.top, lg_MARGINS.bottom]).domain([134, 215]);

var xAxis = d3.svg.axis()
    .scale(xScale);
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

line_graph.append("svg:g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (lg_HEIGHT - lg_MARGINS.bottom) + ")")
    .call(xAxis);

line_graph.append("svg:g")
    .attr("class", "axis")
    .attr("transform", "translate(" + lg_MARGINS.left + ",0)")
    .call(yAxis);

var lineGen = d3.svg.line()
    .x(function(d){
        return xScale(d.year);
    })
    .y(function(d){
        return yScale(d.sale);
    })
    .interpolate("basis");

line_graph.append('svg:path')
    .attr('d', lineGen(lg_data))
    .attr('stroke', 'green')
    .attr('stoke-width', 4)
    .attr('fill', 'none');

line_graph.append('svg:path')
    .attr('d', lineGen(lg_data2))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');


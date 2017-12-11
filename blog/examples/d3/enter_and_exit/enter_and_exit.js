
var data = [120, 150, 95];

// This is an example with no enter() or exit().
// The number of elements matches the number of data items.
d3.select("#regular-chart").selectAll("div")
    .data(data)
    .style("width", function(d) {
        return d + "px";
    })
    .text(function(d) {
        return d;
    });


// This example has two elements and three data items,
// we will use enter() to select an element we create
// for the extra data item.
// Notice how only the new appended element is selected.
d3.select("#undersized-chart").selectAll("div")
    .data(data)
    .enter().append("div")
    .attr("class", "bar")
    .style("width", function(d) {
        return d + "px";
    })
    .text(function(d) {
        return d;
    });


// This example will create elements
// for a chart with no existing elements.
// All elements are created here and have styles applied to them.
// This is the same as "undersized-chart", but only new elements
// are seen in the output.
d3.select("#empty-chart").selectAll("div")
    .data(data)
    .enter().append("div")
    .attr("class", "bar")
    .style("width", function(d) {
        return d + "px";
    })
    .text(function(d) {
        return d;
    });


// This example will select elements with
// no data bound to them and remove them.
// It doesn't matter how many elements are in the chart,
// we will be left with 3 (the number of data items).
d3.select("#oversized-chart").selectAll("div")
    .data(data)
    .style("width", function(d) {
        return d + "px";
    })
    .text(function(d) {
        return d;
    })
    .exit().remove();
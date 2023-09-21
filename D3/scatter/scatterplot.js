async function draw(){
    //Data
    const dataset = await d3.json('data.json')

    const xAccessor = (d)=>d.currently.humidity
    const yAccessor = (d)=>d.currently.apparentTemperature

    //Dimeansions
    let dimesions = {
        width:800,
        height:800,
        margin:{
            top:50,
            bottom:50,
            right:50,
            left:50
        }
    }

    //Draw Image
    const svg = d3.select('#chart')
       .append('svg')
       .attr('width', dimesions.width)
       .attr('height', dimesions.height)

    const ctr = svg.append('g')
                .attr(
                    'transformation',
                    `translate(${dimesions.margin.left}, ${dimesions.margin.top})`
                )
    ctr.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', xAccessor)
        .attr('cy', yAccessor)
        .attr('r',5)
        .attr('fill', 'red')
}
draw()
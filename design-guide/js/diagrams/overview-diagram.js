/**
 * Overview Diagram for Network Architecture Design Guide
 * Creates an interactive diagram showing the three-datacenter topology
 */

function createOverviewDiagram() {
    const container = document.getElementById('overview-diagram');
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const svg = d3.select('#overview-diagram')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');
    
    svg.append('defs').append('marker')
        .attr('id', 'arrowhead-overview')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#666');
    
    const g = svg.append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`);
    
    g.append('ellipse')
        .attr('cx', 0)
        .attr('cy', -180)
        .attr('rx', 80)
        .attr('ry', 40)
        .attr('fill', '#d5dbdb')
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -180)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Internet');
    
    g.append('rect')
        .attr('x', -200)
        .attr('y', -100)
        .attr('width', 150)
        .attr('height', 100)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -125)
        .attr('y', -50)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('North Datacenter');
    
    g.append('rect')
        .attr('x', 50)
        .attr('y', -100)
        .attr('width', 150)
        .attr('height', 100)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 125)
        .attr('y', -50)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('South Datacenter');
    
    g.append('rect')
        .attr('x', -75)
        .attr('y', 50)
        .attr('width', 150)
        .attr('height', 100)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Tertiary Control Hub');
    
    g.append('line')
        .attr('x1', -50)
        .attr('y1', -160)
        .attr('x2', -125)
        .attr('y2', -100)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrowhead-overview)');
    
    g.append('line')
        .attr('x1', 50)
        .attr('y1', -160)
        .attr('x2', 125)
        .attr('y2', -100)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrowhead-overview)');
    
    g.append('line')
        .attr('x1', -125)
        .attr('y1', 0)
        .attr('x2', -25)
        .attr('y2', 50)
        .attr('stroke', '#3498db')
        .attr('stroke-width', 3)
        .attr('marker-end', 'url(#arrowhead-overview)');
    
    g.append('line')
        .attr('x1', 125)
        .attr('y1', 0)
        .attr('x2', 25)
        .attr('y2', 50)
        .attr('stroke', '#3498db')
        .attr('stroke-width', 3)
        .attr('marker-end', 'url(#arrowhead-overview)');
    
    g.append('line')
        .attr('x1', -50)
        .attr('y1', -50)
        .attr('x2', 50)
        .attr('y2', -50)
        .attr('stroke', '#3498db')
        .attr('stroke-width', 3)
        .attr('marker-end', 'url(#arrowhead-overview)');
    
    const legend = svg.append('g')
        .attr('transform', `translate(20, ${height - 80})`);
    
    legend.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 30)
        .attr('y2', 0)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 2);
    
    legend.append('text')
        .attr('x', 40)
        .attr('y', 5)
        .text('Internet Connection');
    
    legend.append('line')
        .attr('x1', 0)
        .attr('y1', 20)
        .attr('x2', 30)
        .attr('y2', 20)
        .attr('stroke', '#3498db')
        .attr('stroke-width', 3);
    
    legend.append('text')
        .attr('x', 40)
        .attr('y', 25)
        .text('Inter-Datacenter Connection');
    
    addTooltips(g);
    
    addZoomBehavior(svg, g);
}

/**
 * Add tooltips to diagram elements
 */
function addTooltips(g) {
    g.select('rect:nth-of-type(1)')
        .on('mouseover', function() {
            showTooltip(this, 'North Datacenter', 'Active site with direct internet connectivity');
        })
        .on('mouseout', hideTooltip);
    
    g.select('rect:nth-of-type(2)')
        .on('mouseover', function() {
            showTooltip(this, 'South Datacenter', 'Active site with direct internet connectivity');
        })
        .on('mouseout', hideTooltip);
    
    g.select('rect:nth-of-type(3)')
        .on('mouseover', function() {
            showTooltip(this, 'Tertiary Control Hub', 'Centralized management without direct internet');
        })
        .on('mouseout', hideTooltip);
    
    g.select('ellipse')
        .on('mouseover', function() {
            showTooltip(this, 'Internet', 'External network connectivity');
        })
        .on('mouseout', hideTooltip);
}

/**
 * Show tooltip with title and description
 */
function showTooltip(element, title, description) {
    const rect = element.getBoundingClientRect();
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background-color', 'rgba(0, 0, 0, 0.8)')
        .style('color', 'white')
        .style('padding', '10px')
        .style('border-radius', '5px')
        .style('pointer-events', 'none')
        .style('z-index', '100')
        .style('left', `${rect.left + rect.width/2}px`)
        .style('top', `${rect.top - 10}px`)
        .style('transform', 'translate(-50%, -100%)');
    
    tooltip.append('div')
        .style('font-weight', 'bold')
        .text(title);
    
    tooltip.append('div')
        .text(description);
}

/**
 * Hide tooltip
 */
function hideTooltip() {
    d3.select('.tooltip').remove();
}

/**
 * Add zoom behavior to SVG
 */
function addZoomBehavior(svg, g) {
    const zoom = d3.zoom()
        .scaleExtent([0.5, 3])
        .on('zoom', function(event) {
            g.attr('transform', event.transform);
        });
    
    svg.call(zoom);
    
    svg.__zoom = { k: 1, x: width/2, y: height/2 };
}

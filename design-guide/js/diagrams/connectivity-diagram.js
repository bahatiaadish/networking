/**
 * Connectivity Diagram for Network Architecture Design Guide
 * Creates interactive diagrams showing connectivity patterns between datacenters
 */

function createConnectivityOverviewDiagram() {
    const container = document.getElementById('connectivity-overview-diagram');
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const svg = d3.select('#connectivity-overview-diagram')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');
    
    svg.append('defs').append('marker')
        .attr('id', 'arrowhead-connectivity')
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
    
    g.append('rect')
        .attr('x', -200)
        .attr('y', -150)
        .attr('width', 150)
        .attr('height', 100)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -125)
        .attr('y', -100)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('North Datacenter');
    
    g.append('rect')
        .attr('x', 50)
        .attr('y', -150)
        .attr('width', 150)
        .attr('height', 100)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 125)
        .attr('y', -100)
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
    
    drawConnectivityOptions(g);
    
    drawConnectivityLegend(svg, width, height);
    
    addConnectivityTooltips(g);
    
    addZoomBehavior(svg, g, width, height);
}

/**
 * Draw connectivity options between datacenters
 */
function drawConnectivityOptions(g) {
    g.append('path')
        .attr('d', 'M-50,-100 Q0,-150 50,-100')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 4)
        .attr('class', 'dark-fiber')
        .attr('data-type', 'dark-fiber')
        .attr('data-source', 'North DC')
        .attr('data-target', 'South DC');
    
    g.append('path')
        .attr('d', 'M-125,-50 Q-100,0 -75,50')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 4)
        .attr('class', 'dark-fiber')
        .attr('data-type', 'dark-fiber')
        .attr('data-source', 'North DC')
        .attr('data-target', 'Tertiary Hub');
    
    g.append('path')
        .attr('d', 'M125,-50 Q100,0 75,50')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 4)
        .attr('class', 'dark-fiber')
        .attr('data-type', 'dark-fiber')
        .attr('data-source', 'South DC')
        .attr('data-target', 'Tertiary Hub');
    
    g.append('path')
        .attr('d', 'M-50,-120 Q0,-180 50,-120')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,2')
        .attr('class', 'mpls')
        .attr('data-type', 'mpls')
        .attr('data-source', 'North DC')
        .attr('data-target', 'South DC');
    
    g.append('path')
        .attr('d', 'M-150,-50 Q-125,0 -100,50')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,2')
        .attr('class', 'mpls')
        .attr('data-type', 'mpls')
        .attr('data-source', 'North DC')
        .attr('data-target', 'Tertiary Hub');
    
    g.append('path')
        .attr('d', 'M150,-50 Q125,0 100,50')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,2')
        .attr('class', 'mpls')
        .attr('data-type', 'mpls')
        .attr('data-source', 'South DC')
        .attr('data-target', 'Tertiary Hub');
    
    g.append('path')
        .attr('d', 'M-50,-80 Q0,-20 50,-80')
        .attr('fill', 'none')
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2')
        .attr('class', 'sdwan')
        .attr('data-type', 'sdwan')
        .attr('data-source', 'North DC')
        .attr('data-target', 'South DC');
    
    g.append('path')
        .attr('d', 'M-100,-50 Q-75,0 -50,50')
        .attr('fill', 'none')
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2')
        .attr('class', 'sdwan')
        .attr('data-type', 'sdwan')
        .attr('data-source', 'North DC')
        .attr('data-target', 'Tertiary Hub');
    
    g.append('path')
        .attr('d', 'M100,-50 Q75,0 50,50')
        .attr('fill', 'none')
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2')
        .attr('class', 'sdwan')
        .attr('data-type', 'sdwan')
        .attr('data-source', 'South DC')
        .attr('data-target', 'Tertiary Hub');
}

/**
 * Draw connectivity legend
 */
function drawConnectivityLegend(svg, width, height) {
    const legend = svg.append('g')
        .attr('transform', `translate(20, ${height - 100})`);
    
    legend.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 30)
        .attr('y2', 0)
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 4);
    
    legend.append('text')
        .attr('x', 40)
        .attr('y', 5)
        .text('Dark Fiber (100 Gbps)');
    
    legend.append('line')
        .attr('x1', 0)
        .attr('y1', 25)
        .attr('x2', 30)
        .attr('y2', 25)
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,2');
    
    legend.append('text')
        .attr('x', 40)
        .attr('y', 30)
        .text('MPLS (10 Gbps)');
    
    legend.append('line')
        .attr('x1', 0)
        .attr('y1', 50)
        .attr('x2', 30)
        .attr('y2', 50)
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2');
    
    legend.append('text')
        .attr('x', 40)
        .attr('y', 55)
        .text('SD-WAN Overlay');
    
    legend.append('text')
        .attr('x', 200)
        .attr('y', 5)
        .text('Primary Connectivity');
    
    legend.append('text')
        .attr('x', 200)
        .attr('y', 30)
        .text('Backup Connectivity');
    
    legend.append('text')
        .attr('x', 200)
        .attr('y', 55)
        .text('Tertiary Connectivity');
}

/**
 * Add tooltips to connectivity lines
 */
function addConnectivityTooltips(g) {
    g.selectAll('.dark-fiber, .mpls, .sdwan')
        .on('mouseover', function() {
            const type = this.getAttribute('data-type');
            const source = this.getAttribute('data-source');
            const target = this.getAttribute('data-target');
            
            let title = '';
            let description = '';
            
            switch (type) {
                case 'dark-fiber':
                    title = `Dark Fiber: ${source} to ${target}`;
                    description = 'Direct fiber connection (100 Gbps) with lowest latency and highest bandwidth';
                    break;
                case 'mpls':
                    title = `MPLS: ${source} to ${target}`;
                    description = 'Carrier-provided MPLS service (10 Gbps) with QoS guarantees and SLA-backed reliability';
                    break;
                case 'sdwan':
                    title = `SD-WAN: ${source} to ${target}`;
                    description = 'Software-defined WAN overlay with dynamic path selection and application-aware routing';
                    break;
            }
            
            showConnectivityTooltip(this, title, description);
        })
        .on('mouseout', hideConnectivityTooltip);
}

/**
 * Show connectivity tooltip
 */
function showConnectivityTooltip(element, title, description) {
    const rect = element.getBoundingClientRect();
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'connectivity-tooltip')
        .style('position', 'absolute')
        .style('background-color', 'rgba(0, 0, 0, 0.8)')
        .style('color', 'white')
        .style('padding', '10px')
        .style('border-radius', '5px')
        .style('pointer-events', 'none')
        .style('z-index', '100')
        .style('left', `${rect.left + rect.width/2}px`)
        .style('top', `${rect.top}px`)
        .style('transform', 'translate(-50%, -100%)');
    
    tooltip.append('div')
        .style('font-weight', 'bold')
        .text(title);
    
    tooltip.append('div')
        .text(description);
}

/**
 * Hide connectivity tooltip
 */
function hideConnectivityTooltip() {
    d3.select('.connectivity-tooltip').remove();
}

/**
 * Create connectivity option diagrams
 */
function createConnectivityDiagram(containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');
    
    svg.append('defs').append('marker')
        .attr('id', `arrowhead-${containerId}`)
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
    
    g.append('rect')
        .attr('x', -80)
        .attr('y', -80)
        .attr('width', 60)
        .attr('height', 40)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -50)
        .attr('y', -60)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('North DC');
    
    g.append('rect')
        .attr('x', 20)
        .attr('y', -80)
        .attr('width', 60)
        .attr('height', 40)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 50)
        .attr('y', -60)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('South DC');
    
    g.append('rect')
        .attr('x', -30)
        .attr('y', 20)
        .attr('width', 60)
        .attr('height', 40)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('Tertiary Hub');
    
    if (type === 'dark-fiber') {
        g.append('line')
            .attr('x1', -20)
            .attr('y1', -60)
            .attr('x2', 20)
            .attr('y2', -60)
            .attr('stroke', '#8e44ad')
            .attr('stroke-width', 4)
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', -50)
            .attr('y1', -40)
            .attr('x2', -10)
            .attr('y2', 20)
            .attr('stroke', '#8e44ad')
            .attr('stroke-width', 4)
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', 50)
            .attr('y1', -40)
            .attr('x2', 10)
            .attr('y2', 20)
            .attr('stroke', '#8e44ad')
            .attr('stroke-width', 4)
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', -80)
            .attr('y1', 70)
            .attr('x2', -50)
            .attr('y2', 70)
            .attr('stroke', '#8e44ad')
            .attr('stroke-width', 4);
        
        g.append('text')
            .attr('x', -45)
            .attr('y', 70)
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '10px')
            .text('Dark Fiber (100G)');
    } else {
        g.append('line')
            .attr('x1', -20)
            .attr('y1', -65)
            .attr('x2', 20)
            .attr('y2', -65)
            .attr('stroke', '#f39c12')
            .attr('stroke-width', 3)
            .attr('stroke-dasharray', '5,2')
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', -55)
            .attr('y1', -40)
            .attr('x2', -15)
            .attr('y2', 20)
            .attr('stroke', '#f39c12')
            .attr('stroke-width', 3)
            .attr('stroke-dasharray', '5,2')
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', 55)
            .attr('y1', -40)
            .attr('x2', 15)
            .attr('y2', 20)
            .attr('stroke', '#f39c12')
            .attr('stroke-width', 3)
            .attr('stroke-dasharray', '5,2')
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', -20)
            .attr('y1', -55)
            .attr('x2', 20)
            .attr('y2', -55)
            .attr('stroke', '#2ecc71')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '2,2')
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', -45)
            .attr('y1', -40)
            .attr('x2', -5)
            .attr('y2', 20)
            .attr('stroke', '#2ecc71')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '2,2')
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', 45)
            .attr('y1', -40)
            .attr('x2', 5)
            .attr('y2', 20)
            .attr('stroke', '#2ecc71')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '2,2')
            .attr('marker-end', `url(#arrowhead-${containerId})`);
        
        g.append('line')
            .attr('x1', -80)
            .attr('y1', 60)
            .attr('x2', -50)
            .attr('y2', 60)
            .attr('stroke', '#f39c12')
            .attr('stroke-width', 3)
            .attr('stroke-dasharray', '5,2');
        
        g.append('text')
            .attr('x', -45)
            .attr('y', 60)
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '10px')
            .text('MPLS (10G)');
        
        g.append('line')
            .attr('x1', -80)
            .attr('y1', 75)
            .attr('x2', -50)
            .attr('y2', 75)
            .attr('stroke', '#2ecc71')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '2,2');
        
        g.append('text')
            .attr('x', -45)
            .attr('y', 75)
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '10px')
            .text('SD-WAN Overlay');
    }
}

/**
 * Add zoom behavior to SVG
 */
function addZoomBehavior(svg, g, width, height) {
    const zoom = d3.zoom()
        .scaleExtent([0.5, 3])
        .on('zoom', function(event) {
            g.attr('transform', event.transform);
        });
    
    svg.call(zoom);
    
    svg.__zoom = { k: 1, x: width/2, y: height/2 };
}

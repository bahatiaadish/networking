/**
 * Traffic Flow Diagram for Network Architecture Design Guide
 * Creates interactive diagrams showing traffic flow patterns between datacenters
 */

function createTrafficFlowDiagram(containerId, flowType) {
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
    
    if (flowType === 'north-south') {
        drawNorthSouthFlow(g, width, height, containerId);
    } else if (flowType === 'east-west') {
        drawEastWestFlow(g, width, height, containerId);
    } else if (flowType === 'management') {
        drawManagementFlow(g, width, height, containerId);
    } else if (flowType === 'user-access') {
        drawUserAccessFlow(g, width, height, containerId);
    }
    
    addZoomBehavior(svg, g, width, height);
}

/**
 * Draw North-South traffic flow (Internet ingress/egress)
 */
function drawNorthSouthFlow(g, width, height, containerId) {
    g.append('ellipse')
        .attr('cx', 0)
        .attr('cy', -height/3)
        .attr('rx', 60)
        .attr('ry', 30)
        .attr('fill', '#d5dbdb')
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/3)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Internet');
    
    drawZone(g, -width/4, -height/6, width/3, height/8, 'Internet Edge Zone', '#d5dbdb');
    
    drawZone(g, -width/4, -height/6 + height/8 + 10, width/3, height/8, 'DMZ Zone', '#f9e79f');
    
    drawZone(g, -width/4, -height/6 + 2 * (height/8 + 10), width/3, height/8, 'Application Zone', '#aed6f1');
    
    drawZone(g, -width/4, -height/6 + 3 * (height/8 + 10), width/3, height/8, 'Database Zone', '#a9dfbf');
    
    drawFlowArrow(g, 0, -height/3 + 30, -width/4 + width/6, -height/6, '#e74c3c', containerId, 'Ingress Traffic');
    
    drawFlowArrow(g, -width/4 + width/6, -height/6 + height/8, -width/4 + width/6, -height/6 + height/8 + 10, '#e74c3c', containerId, 'Filtered Traffic');
    
    drawFlowArrow(g, -width/4 + width/6, -height/6 + 2 * height/8 + 10, -width/4 + width/6, -height/6 + 2 * (height/8 + 10), '#e74c3c', containerId, 'Authenticated Traffic');
    
    drawFlowArrow(g, -width/4 + width/6, -height/6 + 3 * height/8 + 20, -width/4 + width/6, -height/6 + 3 * (height/8 + 10), '#e74c3c', containerId, 'Database Queries');
    
    drawFlowArrow(g, -width/4 + width/6 - 20, -height/6 + 3 * (height/8 + 10), -width/4 + width/6 - 20, -height/6 + 3 * height/8 + 20, '#3498db', containerId, 'Query Results');
    
    drawFlowArrow(g, -width/4 + width/6 - 20, -height/6 + 2 * (height/8 + 10), -width/4 + width/6 - 20, -height/6 + 2 * height/8 + 10, '#3498db', containerId, 'Response Data');
    
    drawFlowArrow(g, -width/4 + width/6 - 20, -height/6 + height/8 + 10, -width/4 + width/6 - 20, -height/6 + height/8, '#3498db', containerId, 'Formatted Response');
    
    drawFlowArrow(g, -width/4 + width/6 - 20, -height/6, -20, -height/3 + 30, '#3498db', containerId, 'Egress Traffic');
    
    drawTrafficLegend(g, width, height, 'north-south');
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('North-South Traffic Flow (Internet Ingress/Egress)');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('Traffic flows through security zones');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 15)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('with progressive filtering and');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 30)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('authentication at each boundary.');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 60)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('Security controls include:');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 75)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• DDoS protection');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 90)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Web Application Firewall');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 105)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Next-Generation Firewalls');
    
    g.append('text')
        .attr('x', width/4)
        .attr('y', -height/6 + 120)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Application-aware inspection');
}

/**
 * Draw East-West traffic flow (Inter-datacenter)
 */
function drawEastWestFlow(g, width, height, containerId) {
    g.append('rect')
        .attr('x', -width/3)
        .attr('y', -height/4)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -width/3 + width/8)
        .attr('y', -height/4 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('North Datacenter');
    
    g.append('rect')
        .attr('x', width/12)
        .attr('y', -height/4)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', width/12 + width/8)
        .attr('y', -height/4 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('South Datacenter');
    
    g.append('rect')
        .attr('x', -width/8)
        .attr('y', height/8)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', height/8 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Tertiary Control Hub');
    
    drawFlowArrow(g, -width/3 + width/4, -height/4 + height/8, width/12, -height/4 + height/8, '#e74c3c', containerId, 'Application Sync');
    
    drawFlowArrow(g, width/12, -height/4 + height/8 - 20, -width/3 + width/4, -height/4 + height/8 - 20, '#3498db', containerId, 'Application Sync');
    
    drawFlowArrow(g, -width/3 + width/4, -height/4 + height/8 + 20, width/12, -height/4 + height/8 + 20, '#2ecc71', containerId, 'Database Replication');
    
    drawFlowArrow(g, width/12, -height/4 + height/8 + 40, -width/3 + width/4, -height/4 + height/8 + 40, '#2ecc71', containerId, 'Database Replication');
    
    drawFlowArrow(g, -width/8 + width/16, height/8, -width/3 + width/8, -height/4 + height/4, '#9b59b6', containerId, 'Policy Distribution');
    
    drawFlowArrow(g, -width/8 + width/16 + width/8, height/8, width/12 + width/8, -height/4 + height/4, '#9b59b6', containerId, 'Policy Distribution');
    
    drawTrafficLegend(g, width, height, 'east-west');
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('East-West Traffic Flow (Inter-Datacenter)');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 80)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('East-West traffic includes:');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 65)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Application synchronization between active-active DCs');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 50)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Database replication for data consistency');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 35)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Policy distribution from Tertiary Control Hub');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 20)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Traffic follows optimized paths with QoS prioritization');
}

/**
 * Draw Management traffic flow
 */
function drawManagementFlow(g, width, height, containerId) {
    g.append('rect')
        .attr('x', -width/8)
        .attr('y', -height/3)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/3 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Tertiary Control Hub');
    
    drawZone(g, -width/8 + 20, -height/3 + 40, width/4 - 40, height/8, 'Management Zone', '#d2b4de');
    
    g.append('rect')
        .attr('x', -width/3 - width/8)
        .attr('y', height/8)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -width/3 - width/8 + width/8)
        .attr('y', height/8 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('North Datacenter');
    
    drawZone(g, -width/3 - width/8 + 20, height/8 + 40, width/4 - 40, height/8, 'Management Zone', '#d2b4de');
    
    g.append('rect')
        .attr('x', width/8)
        .attr('y', height/8)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', width/8 + width/8)
        .attr('y', height/8 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('South Datacenter');
    
    drawZone(g, width/8 + 20, height/8 + 40, width/4 - 40, height/8, 'Management Zone', '#d2b4de');
    
    drawFlowArrow(g, -width/8 + 20, -height/3 + height/4, -width/3 - width/8 + width/8, height/8, '#9b59b6', containerId, 'Configuration Management');
    
    drawFlowArrow(g, -width/8 + width/4 - 20, -height/3 + height/4, width/8 + width/8, height/8, '#9b59b6', containerId, 'Configuration Management');
    
    drawFlowArrow(g, -width/3 - width/8 + width/8 - 20, height/8, -width/8 + 40, -height/3 + height/4, '#3498db', containerId, 'Monitoring Data');
    
    drawFlowArrow(g, width/8 + width/8 - 20, height/8, -width/8 + width/4 - 40, -height/3 + height/4, '#3498db', containerId, 'Monitoring Data');
    
    drawTrafficLegend(g, width, height, 'management');
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('Management Traffic Flow');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 80)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('Management traffic includes:');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 65)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Configuration management from Tertiary to North/South DCs');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 50)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Monitoring data from North/South DCs to Tertiary');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 35)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Out-of-band management network for secure access');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 20)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Centralized logging and monitoring');
}

/**
 * Draw User Access traffic flow
 */
function drawUserAccessFlow(g, width, height, containerId) {
    g.append('rect')
        .attr('x', -width/3)
        .attr('y', -height/6)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -width/3 + width/8)
        .attr('y', -height/6 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('North Datacenter');
    
    g.append('rect')
        .attr('x', width/12)
        .attr('y', -height/6)
        .attr('width', width/4)
        .attr('height', height/4)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', width/12 + width/8)
        .attr('y', -height/6 + 20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('South Datacenter');
    
    g.append('rect')
        .attr('x', -width/3 - width/8)
        .attr('y', -height/2 + height/8)
        .attr('width', width/6)
        .attr('height', height/8)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#d5f5e3')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -width/3 - width/8 + width/12)
        .attr('y', -height/2 + height/8 + height/16)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Campus Users');
    
    g.append('rect')
        .attr('x', -width/12)
        .attr('y', -height/2 + height/8)
        .attr('width', width/6)
        .attr('height', height/8)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#d5f5e3')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -width/12 + width/12)
        .attr('y', -height/2 + height/8 + height/16)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Branch Users');
    
    g.append('rect')
        .attr('x', width/6)
        .attr('y', -height/2 + height/8)
        .attr('width', width/6)
        .attr('height', height/8)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#d5f5e3')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', width/6 + width/12)
        .attr('y', -height/2 + height/8 + height/16)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Enterprise Users');
    
    g.append('rect')
        .attr('x', -width/12)
        .attr('y', height/4)
        .attr('width', width/6)
        .attr('height', height/8)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#d5f5e3')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', -width/12 + width/12)
        .attr('y', height/4 + height/16)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text('Remote Users');
    
    drawFlowArrow(g, -width/3 - width/8 + width/12, -height/2 + height/8 + height/8, -width/3 + width/8, -height/6, '#e74c3c', containerId, 'Direct Connection');
    
    drawFlowArrow(g, -width/12, -height/2 + height/8 + height/8, -width/3 + width/8, -height/6, '#f39c12', containerId, 'SD-WAN');
    drawFlowArrow(g, -width/12 + width/6, -height/2 + height/8 + height/8, width/12 + width/8, -height/6, '#f39c12', containerId, 'SD-WAN');
    
    drawFlowArrow(g, width/6, -height/2 + height/8 + height/8, -width/3 + width/4, -height/6, '#3498db', containerId, 'MPLS');
    drawFlowArrow(g, width/6 + width/6, -height/2 + height/8 + height/8, width/12, -height/6, '#3498db', containerId, 'MPLS');
    
    drawFlowArrow(g, -width/12, height/4, -width/3 + width/8, -height/6 + height/4, '#9b59b6', containerId, 'VPN');
    drawFlowArrow(g, -width/12 + width/6, height/4, width/12 + width/8, -height/6 + height/4, '#9b59b6', containerId, 'VPN');
    
    drawTrafficLegend(g, width, height, 'user-access');
    
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('User Access Patterns');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 80)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('User access patterns include:');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 65)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Campus users connect directly to nearest datacenter');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 50)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Branch users connect via SD-WAN with intelligent routing');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 35)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Enterprise users connect via MPLS to both datacenters');
    
    g.append('text')
        .attr('x', -width/3)
        .attr('y', height/2 - 20)
        .attr('text-anchor', 'start')
        .attr('font-size', '12px')
        .text('• Remote users connect via VPN to either datacenter');
}

/**
 * Draw a zone rectangle with label
 */
function drawZone(g, x, y, width, height, label, color) {
    g.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', width)
        .attr('height', height)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', color)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1)
        .attr('fill-opacity', 0.7);
    
    g.append('text')
        .attr('x', x + width/2)
        .attr('y', y + height/2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '12px')
        .text(label);
}

/**
 * Draw a traffic flow arrow
 */
function drawFlowArrow(g, x1, y1, x2, y2, color, containerId, label) {
    g.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', color)
        .attr('stroke-width', 2)
        .attr('marker-end', `url(#arrowhead-${containerId})`)
        .attr('class', 'flow-arrow')
        .attr('data-label', label);
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const offset = 10;
    const labelX = midX + offset * Math.sin(angle);
    const labelY = midY - offset * Math.cos(angle);
    
    g.append('text')
        .attr('x', labelX)
        .attr('y', labelY)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('fill', color)
        .text(label);
    
    g.selectAll('.flow-arrow')
        .on('mouseover', function() {
            d3.select(this)
                .attr('stroke-width', 4);
        })
        .on('mouseout', function() {
            d3.select(this)
                .attr('stroke-width', 2);
        });
}

/**
 * Draw traffic legend
 */
function drawTrafficLegend(g, width, height, type) {
    const legend = g.append('g')
        .attr('transform', `translate(${-width/2 + 20}, ${height/2 - 100})`);
    
    if (type === 'north-south') {
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 30)
            .attr('y2', 0)
            .attr('stroke', '#e74c3c')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 5)
            .attr('font-size', '12px')
            .text('Ingress Traffic');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 20)
            .attr('x2', 30)
            .attr('y2', 20)
            .attr('stroke', '#3498db')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 25)
            .attr('font-size', '12px')
            .text('Egress Traffic');
    } else if (type === 'east-west') {
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 30)
            .attr('y2', 0)
            .attr('stroke', '#e74c3c')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 5)
            .attr('font-size', '12px')
            .text('Application Sync');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 20)
            .attr('x2', 30)
            .attr('y2', 20)
            .attr('stroke', '#2ecc71')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 25)
            .attr('font-size', '12px')
            .text('Database Replication');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 40)
            .attr('x2', 30)
            .attr('y2', 40)
            .attr('stroke', '#9b59b6')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 45)
            .attr('font-size', '12px')
            .text('Policy Distribution');
    } else if (type === 'management') {
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 30)
            .attr('y2', 0)
            .attr('stroke', '#9b59b6')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 5)
            .attr('font-size', '12px')
            .text('Configuration Management');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 20)
            .attr('x2', 30)
            .attr('y2', 20)
            .attr('stroke', '#3498db')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 25)
            .attr('font-size', '12px')
            .text('Monitoring Data');
    } else if (type === 'user-access') {
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 30)
            .attr('y2', 0)
            .attr('stroke', '#e74c3c')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 5)
            .attr('font-size', '12px')
            .text('Campus (Direct)');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 20)
            .attr('x2', 30)
            .attr('y2', 20)
            .attr('stroke', '#f39c12')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 25)
            .attr('font-size', '12px')
            .text('Branch (SD-WAN)');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 40)
            .attr('x2', 30)
            .attr('y2', 40)
            .attr('stroke', '#3498db')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 45)
            .attr('font-size', '12px')
            .text('Enterprise (MPLS)');
        
        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 60)
            .attr('x2', 30)
            .attr('y2', 60)
            .attr('stroke', '#9b59b6')
            .attr('stroke-width', 2);
        
        legend.append('text')
            .attr('x', 40)
            .attr('y', 65)
            .attr('font-size', '12px')
            .text('Remote (VPN)');
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

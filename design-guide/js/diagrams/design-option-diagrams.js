/**
 * Design Option Diagrams for Network Architecture Design Guide
 * Creates interactive diagrams showing different design options for the architecture
 */

function createDesignOptionDiagram(containerId, optionType) {
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
    
    const g = svg.append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`);
    
    if (optionType === 'internet-edge') {
        drawInternetEdgeOptions(g, width, height);
    } else if (optionType === 'inter-dc') {
        drawInterDCOptions(g, width, height);
    } else if (optionType === 'aci-implementation') {
        drawACIOptions(g, width, height);
    } else if (optionType === 'security') {
        drawSecurityOptions(g, width, height);
    }
    
    addZoomBehavior(svg, g, width, height);
}

/**
 * Draw Internet Edge design options
 */
function drawInternetEdgeOptions(g, width, height) {
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('Internet Edge Design Options');
    
    drawOptionBox(g, -width/3, -height/4, width/2, height/3, 'Option 1: Dedicated Border Routing');
    
    const option1 = g.append('g')
        .attr('transform', `translate(${-width/3 + width/4}, ${-height/4 + height/6})`);
    
    option1.append('ellipse')
        .attr('cx', 0)
        .attr('cy', -50)
        .attr('rx', 40)
        .attr('ry', 20)
        .attr('fill', '#d5dbdb')
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 0)
        .attr('y', -50)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('Internet');
    
    drawDevice(option1, -30, 0, 'BR1', 'router', 12);
    drawDevice(option1, 30, 0, 'BR2', 'router', 12);
    
    drawDevice(option1, 0, 40, 'DDoS', 'security', 12);
    
    option1.append('line')
        .attr('x1', -10)
        .attr('y1', -40)
        .attr('x2', -30)
        .attr('y2', -12)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option1.append('line')
        .attr('x1', 10)
        .attr('y1', -40)
        .attr('x2', 30)
        .attr('y2', -12)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option1.append('line')
        .attr('x1', -30)
        .attr('y1', 12)
        .attr('x2', -10)
        .attr('y2', 40)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option1.append('line')
        .attr('x1', 30)
        .attr('y1', 12)
        .attr('x2', 10)
        .attr('y2', 40)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    drawOptionBox(g, width/6, -height/4, width/2, height/3, 'Option 2: Integrated Edge');
    
    const option2 = g.append('g')
        .attr('transform', `translate(${width/6 + width/4}, ${-height/4 + height/6})`);
    
    option2.append('ellipse')
        .attr('cx', 0)
        .attr('cy', -50)
        .attr('rx', 40)
        .attr('ry', 20)
        .attr('fill', '#d5dbdb')
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option2.append('text')
        .attr('x', 0)
        .attr('y', -50)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('Internet');
    
    drawDevice(option2, -20, 0, 'Edge 1', 'firewall', 12);
    drawDevice(option2, 20, 0, 'Edge 2', 'firewall', 12);
    
    drawDevice(option2, 0, 40, 'Core', 'switch', 12);
    
    option2.append('line')
        .attr('x1', -10)
        .attr('y1', -40)
        .attr('x2', -20)
        .attr('y2', -12)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option2.append('line')
        .attr('x1', 10)
        .attr('y1', -40)
        .attr('x2', 20)
        .attr('y2', -12)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option2.append('line')
        .attr('x1', -20)
        .attr('y1', 12)
        .attr('x2', 0)
        .attr('y2', 28)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    option2.append('line')
        .attr('x1', 20)
        .attr('y1', 12)
        .attr('x2', 0)
        .attr('y2', 28)
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    drawRecommendation(g, width, height, 'internet-edge');
}

/**
 * Draw Inter-Datacenter Connectivity options
 */
function drawInterDCOptions(g, width, height) {
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('Inter-Datacenter Connectivity Options');
    
    drawOptionBox(g, -width/3, -height/4, width/2, height/3, 'Option 1: Dark Fiber Primary with MPLS Backup');
    
    const option1 = g.append('g')
        .attr('transform', `translate(${-width/3 + width/4}, ${-height/4 + height/6})`);
    
    option1.append('rect')
        .attr('x', -60)
        .attr('y', -40)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', -40)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('North DC');
    
    option1.append('rect')
        .attr('x', 20)
        .attr('y', -40)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 40)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('South DC');
    
    option1.append('rect')
        .attr('x', -20)
        .attr('y', 20)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 0)
        .attr('y', 35)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('Tertiary');
    
    option1.append('path')
        .attr('d', 'M-20,-25 L20,-25')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 3);
    
    option1.append('path')
        .attr('d', 'M-40,-10 L-10,20')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 3);
    
    option1.append('path')
        .attr('d', 'M40,-10 L10,20')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 3);
    
    option1.append('path')
        .attr('d', 'M-20,-35 L20,-35')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,2');
    
    option1.append('path')
        .attr('d', 'M-50,-10 L-15,30')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,2');
    
    option1.append('path')
        .attr('d', 'M50,-10 L15,30')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,2');
    
    drawOptionBox(g, width/6, -height/4, width/2, height/3, 'Option 2: MPLS Primary with SD-WAN Overlay');
    
    const option2 = g.append('g')
        .attr('transform', `translate(${width/6 + width/4}, ${-height/4 + height/6})`);
    
    option2.append('rect')
        .attr('x', -60)
        .attr('y', -40)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 1);
    
    option2.append('text')
        .attr('x', -40)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('North DC');
    
    option2.append('rect')
        .attr('x', 20)
        .attr('y', -40)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 1);
    
    option2.append('text')
        .attr('x', 40)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('South DC');
    
    option2.append('rect')
        .attr('x', -20)
        .attr('y', 20)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 1);
    
    option2.append('text')
        .attr('x', 0)
        .attr('y', 35)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .text('Tertiary');
    
    option2.append('path')
        .attr('d', 'M-20,-25 L20,-25')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3);
    
    option2.append('path')
        .attr('d', 'M-40,-10 L-10,20')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3);
    
    option2.append('path')
        .attr('d', 'M40,-10 L10,20')
        .attr('fill', 'none')
        .attr('stroke', '#f39c12')
        .attr('stroke-width', 3);
    
    option2.append('path')
        .attr('d', 'M-20,-15 L20,-15')
        .attr('fill', 'none')
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2');
    
    option2.append('path')
        .attr('d', 'M-30,-10 L-5,30')
        .attr('fill', 'none')
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2');
    
    option2.append('path')
        .attr('d', 'M30,-10 L5,30')
        .attr('fill', 'none')
        .attr('stroke', '#2ecc71')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2');
    
    drawRecommendation(g, width, height, 'inter-dc');
}

/**
 * Draw ACI Implementation options
 */
function drawACIOptions(g, width, height) {
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('ACI Implementation Options');
    
    drawOptionBox(g, -width/3, -height/4, width/2, height/3, 'Option 1: Centralized MSO in Tertiary DC');
    
    const option1 = g.append('g')
        .attr('transform', `translate(${-width/3 + width/4}, ${-height/4 + height/6})`);
    
    option1.append('rect')
        .attr('x', -60)
        .attr('y', -40)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', -40)
        .attr('y', -30)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '8px')
        .text('North DC');
    
    option1.append('rect')
        .attr('x', -55)
        .attr('y', -25)
        .attr('width', 30)
        .attr('height', 10)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#a9dfbf')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', -40)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '6px')
        .text('APIC Cluster');
    
    option1.append('rect')
        .attr('x', 20)
        .attr('y', -40)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#aed6f1')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 40)
        .attr('y', -30)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '8px')
        .text('South DC');
    
    option1.append('rect')
        .attr('x', 25)
        .attr('y', -25)
        .attr('width', 30)
        .attr('height', 10)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#a9dfbf')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 40)
        .attr('y', -20)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '6px')
        .text('APIC Cluster');
    
    option1.append('rect')
        .attr('x', -20)
        .attr('y', 20)
        .attr('width', 40)
        .attr('height', 30)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', '#f5cba7')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 0)
        .attr('y', 30)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '8px')
        .text('Tertiary');
    
    option1.append('rect')
        .attr('x', -15)
        .attr('y', 35)
        .attr('width', 30)
        .attr('height', 10)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#a9dfbf')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 1);
    
    option1.append('text')
        .attr('x', 0)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '6px')
        .text('MSO');
    
    option1.append('path')
        .attr('d', 'M-40,-15 L-10,35')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 2);
    
    option1.append('path')
        .attr('d', 'M40,-15 L10,35')
        .attr('fill', 'none')
        .attr('stroke', '#8e44ad')
        .attr('stroke-width', 2);
    
    drawOptionBox(g, width/6, -height/4, width/2, height/3, 'Option 2: Distributed MSO with Standby');
    
    drawRecommendation(g, width, height, 'aci-implementation');
}

/**
 * Draw Security options
 */
function drawSecurityOptions(g, width, height) {
    g.append('text')
        .attr('x', 0)
        .attr('y', -height/2 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('Security Architecture Options');
    
    drawOptionBox(g, -width/3, -height/4, width/2, height/3, 'Option 1: Perimeter-Based Security');
    
    drawOptionBox(g, width/6, -height/4, width/2, height/3, 'Option 2: Zero-Trust Security');
    
    drawRecommendation(g, width, height, 'security');
}

/**
 * Draw an option box with title
 */
function drawOptionBox(g, x, y, width, height, title) {
    g.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', width)
        .attr('height', height)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', 'white')
        .attr('stroke', '#7f8c8d')
        .attr('stroke-width', 1);
    
    g.append('text')
        .attr('x', x + 10)
        .attr('y', y + 20)
        .attr('font-weight', 'bold')
        .text(title);
}

/**
 * Draw a device with icon and label
 */
function drawDevice(g, x, y, label, type, size) {
    const deviceGroup = g.append('g')
        .attr('class', 'device')
        .attr('transform', `translate(${x}, ${y})`)
        .attr('data-type', type)
        .attr('data-label', label);
    
    switch (type) {
        case 'router':
            drawRouterIcon(deviceGroup, size);
            break;
        case 'switch':
            drawSwitchIcon(deviceGroup, size);
            break;
        case 'firewall':
            drawFirewallIcon(deviceGroup, size);
            break;
        case 'load-balancer':
            drawLoadBalancerIcon(deviceGroup, size);
            break;
        case 'server':
            drawServerIcon(deviceGroup, size);
            break;
        case 'storage':
            drawStorageIcon(deviceGroup, size);
            break;
        case 'security':
            drawSecurityIcon(deviceGroup, size);
            break;
        default:
            drawGenericIcon(deviceGroup, size);
    }
    
    deviceGroup.append('text')
        .attr('x', 0)
        .attr('y', size + 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '8px')
        .text(label);
}

/**
 * Draw router icon
 */
function drawRouterIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#e74c3c');
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', 0)
        .attr('x2', size/3)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', 0)
        .attr('y1', -size/3)
        .attr('x2', 0)
        .attr('y2', size/3)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
}

/**
 * Draw switch icon
 */
function drawSwitchIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#3498db');
    
    for (let i = -size/3; i <= size/3; i += size/6) {
        g.append('circle')
            .attr('cx', i)
            .attr('cy', 0)
            .attr('r', 1)
            .attr('fill', 'white');
    }
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', 0)
        .attr('x2', size/3)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 0.5);
}

/**
 * Draw firewall icon
 */
function drawFirewallIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#f39c12');
    
    g.append('rect')
        .attr('x', -size/3)
        .attr('y', -size/4)
        .attr('width', 2*size/3)
        .attr('height', size/2)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', -size/8)
        .attr('x2', size/3)
        .attr('y2', -size/8)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', 0)
        .attr('x2', size/3)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', size/8)
        .attr('x2', size/3)
        .attr('y2', size/8)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
}

/**
 * Draw load balancer icon
 */
function drawLoadBalancerIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#9b59b6');
    
    g.append('line')
        .attr('x1', -size/4)
        .attr('y1', -size/4)
        .attr('x2', 0)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', size/4)
        .attr('y2', -size/4)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', size/4)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
}

/**
 * Draw server icon
 */
function drawServerIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#2ecc71');
    
    g.append('rect')
        .attr('x', -size/3)
        .attr('y', -size/3)
        .attr('width', 2*size/3)
        .attr('height', 2*size/3)
        .attr('rx', 1)
        .attr('ry', 1)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', -size/8)
        .attr('x2', size/3)
        .attr('y2', -size/8)
        .attr('stroke', 'white')
        .attr('stroke-width', 0.5);
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', 0)
        .attr('x2', size/3)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 0.5);
    
    g.append('line')
        .attr('x1', -size/3)
        .attr('y1', size/8)
        .attr('x2', size/3)
        .attr('y2', size/8)
        .attr('stroke', 'white')
        .attr('stroke-width', 0.5);
}

/**
 * Draw storage icon
 */
function drawStorageIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#1abc9c');
    
    g.append('rect')
        .attr('x', -size/3)
        .attr('y', -size/3)
        .attr('width', 2*size/3)
        .attr('height', 2*size/3)
        .attr('rx', 1)
        .attr('ry', 1)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', size/6)
        .attr('fill', 'white');
}

/**
 * Draw security icon
 */
function drawSecurityIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#e67e22');
    
    g.append('path')
        .attr('d', `M0,${-size/3} L${-size/3},0 L0,${size/3} L${size/3},0 Z`)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', size/8)
        .attr('fill', 'white');
}

/**
 * Draw generic icon
 */
function drawGenericIcon(g, size) {
    g.append('rect')
        .attr('x', -size/2)
        .attr('y', -size/2)
        .attr('width', size)
        .attr('height', size)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#7f8c8d');
    
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', size/3)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
}

/**
 * Draw recommendation box
 */
function drawRecommendation(g, width, height, type) {
    g.append('rect')
        .attr('x', -width/2 + 20)
        .attr('y', height/4)
        .attr('width', width - 40)
        .attr('height', 60)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('fill', '#d5f5e3')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 2);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', height/4 + 20)
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .text('Recommendation for Option 2: Distributed Control with Centralized Management');
    
    let line1 = '';
    let line2 = '';
    
    switch (type) {
        case 'internet-edge':
            line1 = 'Dedicated Border Routing is recommended for this architecture to ensure clear separation';
            line2 = 'of functions and better scalability for the active-active DC-DR setup.';
            break;
        case 'inter-dc':
            line1 = 'Dark Fiber Primary with MPLS Backup is recommended for this architecture to ensure';
            line2 = 'lowest latency and highest bandwidth for critical inter-datacenter traffic.';
            break;
        case 'aci-implementation':
            line1 = 'Centralized MSO in Tertiary DC is recommended for this architecture to provide';
            line2 = 'consistent policy management and clear separation of control plane.';
            break;
        case 'security':
            line1 = 'Zero-Trust Security is recommended for this architecture to provide comprehensive';
            line2 = 'protection with micro-segmentation and identity-based access controls.';
            break;
    }
    
    g.append('text')
        .attr('x', 0)
        .attr('y', height/4 + 40)
        .attr('text-anchor', 'middle')
        .text(line1);
    
    g.append('text')
        .attr('x', 0)
        .attr('y', height/4 + 55)
        .attr('text-anchor', 'middle')
        .text(line2);
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

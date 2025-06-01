/**
 * Device Placement Diagram for Network Architecture Design Guide
 * Creates interactive diagrams showing device placement in each datacenter
 */

function createPlacementDiagram(containerId, type) {
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
    
    if (type === 'north-south') {
        drawNorthSouthPlacement(g, width, height);
    } else if (type === 'tertiary') {
        drawTertiaryPlacement(g, width, height);
    }
    
    addDeviceTooltips(g);
    
    addZoomBehavior(svg, g, width, height);
}

/**
 * Draw North/South Datacenter placement
 */
function drawNorthSouthPlacement(g, width, height) {
    g.append('rect')
        .attr('x', -width/2 + 20)
        .attr('y', -height/2 + 20)
        .attr('width', width - 40)
        .attr('height', height - 40)
        .attr('rx', 10)
        .attr('ry', 10)
        .attr('fill', 'none')
        .attr('stroke', '#3498db')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '10,5');
    
    drawZone(g, -width/2 + 40, -height/2 + 40, width - 80, 120, 'Internet Edge Zone', '#d5dbdb');
    
    drawZone(g, -width/2 + 40, -height/2 + 180, width - 80, 120, 'DMZ Zone', '#f9e79f');
    
    drawZone(g, -width/2 + 40, -height/2 + 320, width - 80, 120, 'Core Network Zone', '#aed6f1');
    
    drawZone(g, -width/2 + 40, -height/2 + 460, width - 80, 120, 'ACI Fabric Zone', '#a9dfbf');
    
    drawDevice(g, -width/3, -height/2 + 80, 'Border Router 1', 'router');
    drawDevice(g, -width/6, -height/2 + 80, 'Border Router 2', 'router');
    
    drawDevice(g, 0, -height/2 + 80, 'DDoS Protection', 'security');
    
    drawDevice(g, width/6, -height/2 + 80, 'External LB 1', 'load-balancer');
    drawDevice(g, width/3, -height/2 + 80, 'External LB 2', 'load-balancer');
    
    drawDevice(g, -width/3, -height/2 + 220, 'DMZ Firewall 1', 'firewall');
    drawDevice(g, -width/6, -height/2 + 220, 'DMZ Firewall 2', 'firewall');
    
    drawDevice(g, 0, -height/2 + 220, 'WAF', 'security');
    
    drawDevice(g, width/6, -height/2 + 220, 'Reverse Proxy 1', 'server');
    drawDevice(g, width/3, -height/2 + 220, 'Reverse Proxy 2', 'server');
    
    drawDevice(g, -width/3, -height/2 + 360, 'Core Switch 1', 'switch');
    drawDevice(g, -width/6, -height/2 + 360, 'Core Switch 2', 'switch');
    
    drawDevice(g, 0, -height/2 + 360, 'Core Firewall', 'firewall');
    
    drawDevice(g, width/6, -height/2 + 360, 'Internal LB 1', 'load-balancer');
    drawDevice(g, width/3, -height/2 + 360, 'Internal LB 2', 'load-balancer');
    
    drawDevice(g, -width/3, -height/2 + 500, 'Spine Switch 1', 'switch');
    drawDevice(g, -width/6, -height/2 + 500, 'Spine Switch 2', 'switch');
    
    drawDevice(g, 0, -height/2 + 500, 'Leaf Switch 1', 'switch');
    drawDevice(g, width/6, -height/2 + 500, 'Leaf Switch 2', 'switch');
    
    drawDevice(g, width/3, -height/2 + 500, 'APIC Controller', 'server');
    
    drawLegend(g, width, height);
}

/**
 * Draw Tertiary Control Hub placement
 */
function drawTertiaryPlacement(g, width, height) {
    g.append('rect')
        .attr('x', -width/2 + 20)
        .attr('y', -height/2 + 20)
        .attr('width', width - 40)
        .attr('height', height - 40)
        .attr('rx', 10)
        .attr('ry', 10)
        .attr('fill', 'none')
        .attr('stroke', '#e67e22')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '10,5');
    
    drawZone(g, -width/2 + 40, -height/2 + 40, width - 80, 120, 'Core Network Zone', '#aed6f1');
    
    drawZone(g, -width/2 + 40, -height/2 + 180, width - 80, 120, 'Centralized Management Zone', '#f5cba7');
    
    drawZone(g, -width/2 + 40, -height/2 + 320, width - 80, 120, 'ACI Multi-Site Orchestrator Zone', '#a9dfbf');
    
    drawZone(g, -width/2 + 40, -height/2 + 460, width - 80, 120, 'Backup and Recovery Zone', '#d2b4de');
    
    drawDevice(g, -width/3, -height/2 + 80, 'Core Switch 1', 'switch');
    drawDevice(g, -width/6, -height/2 + 80, 'Core Switch 2', 'switch');
    
    drawDevice(g, 0, -height/2 + 80, 'Core Firewall', 'firewall');
    
    drawDevice(g, width/6, -height/2 + 80, 'Internal LB 1', 'load-balancer');
    drawDevice(g, width/3, -height/2 + 80, 'Internal LB 2', 'load-balancer');
    
    drawDevice(g, -width/3, -height/2 + 220, 'Network Mgmt', 'server');
    
    drawDevice(g, -width/6, -height/2 + 220, 'SIEM Platform', 'security');
    
    drawDevice(g, 0, -height/2 + 220, 'Automation', 'server');
    
    drawDevice(g, width/6, -height/2 + 220, 'Monitoring', 'server');
    
    drawDevice(g, width/3, -height/2 + 220, 'OOB Management', 'server');
    
    drawDevice(g, -width/4, -height/2 + 360, 'Multi-Site Orchestrator', 'server');
    
    drawDevice(g, 0, -height/2 + 360, 'APIC Controller 1', 'server');
    drawDevice(g, width/4, -height/2 + 360, 'APIC Controller 2', 'server');
    
    drawDevice(g, -width/4, -height/2 + 500, 'Backup Server', 'storage');
    
    drawDevice(g, 0, -height/2 + 500, 'DR Orchestration', 'server');
    
    drawDevice(g, width/4, -height/2 + 500, 'Config Archive', 'storage');
    
    drawLegend(g, width, height);
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
        .attr('fill-opacity', 0.5);
    
    g.append('text')
        .attr('x', x + 10)
        .attr('y', y + 20)
        .attr('font-weight', 'bold')
        .text(label);
}

/**
 * Draw a device with icon and label
 */
function drawDevice(g, x, y, label, type) {
    const deviceGroup = g.append('g')
        .attr('class', 'device')
        .attr('transform', `translate(${x}, ${y})`)
        .attr('data-type', type)
        .attr('data-label', label);
    
    switch (type) {
        case 'router':
            drawRouterIcon(deviceGroup);
            break;
        case 'switch':
            drawSwitchIcon(deviceGroup);
            break;
        case 'firewall':
            drawFirewallIcon(deviceGroup);
            break;
        case 'load-balancer':
            drawLoadBalancerIcon(deviceGroup);
            break;
        case 'server':
            drawServerIcon(deviceGroup);
            break;
        case 'storage':
            drawStorageIcon(deviceGroup);
            break;
        case 'security':
            drawSecurityIcon(deviceGroup);
            break;
        default:
            drawGenericIcon(deviceGroup);
    }
    
    deviceGroup.append('text')
        .attr('x', 0)
        .attr('y', 25)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .text(label);
}

/**
 * Draw router icon
 */
function drawRouterIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#e74c3c');
    
    g.append('line')
        .attr('x1', -10)
        .attr('y1', 0)
        .attr('x2', 10)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', 0)
        .attr('y1', -10)
        .attr('x2', 0)
        .attr('y2', 10)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
}

/**
 * Draw switch icon
 */
function drawSwitchIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#3498db');
    
    for (let i = -8; i <= 8; i += 4) {
        g.append('circle')
            .attr('cx', i)
            .attr('cy', 0)
            .attr('r', 2)
            .attr('fill', 'white');
    }
    
    g.append('line')
        .attr('x1', -8)
        .attr('y1', 0)
        .attr('x2', 8)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
}

/**
 * Draw firewall icon
 */
function drawFirewallIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#f39c12');
    
    g.append('rect')
        .attr('x', -10)
        .attr('y', -8)
        .attr('width', 20)
        .attr('height', 16)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', -10)
        .attr('y1', -4)
        .attr('x2', 10)
        .attr('y2', -4)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', -10)
        .attr('y1', 0)
        .attr('x2', 10)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', -10)
        .attr('y1', 4)
        .attr('x2', 10)
        .attr('y2', 4)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
}

/**
 * Draw load balancer icon
 */
function drawLoadBalancerIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#9b59b6');
    
    g.append('line')
        .attr('x1', -8)
        .attr('y1', -8)
        .attr('x2', 0)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 8)
        .attr('y2', -8)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', 8)
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
}

/**
 * Draw server icon
 */
function drawServerIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#2ecc71');
    
    g.append('rect')
        .attr('x', -8)
        .attr('y', -8)
        .attr('width', 16)
        .attr('height', 16)
        .attr('rx', 1)
        .attr('ry', 1)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('line')
        .attr('x1', -8)
        .attr('y1', -4)
        .attr('x2', 8)
        .attr('y2', -4)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', -8)
        .attr('y1', 0)
        .attr('x2', 8)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
    
    g.append('line')
        .attr('x1', -8)
        .attr('y1', 4)
        .attr('x2', 8)
        .attr('y2', 4)
        .attr('stroke', 'white')
        .attr('stroke-width', 1);
}

/**
 * Draw storage icon
 */
function drawStorageIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#1abc9c');
    
    g.append('rect')
        .attr('x', -8)
        .attr('y', -8)
        .attr('width', 16)
        .attr('height', 16)
        .attr('rx', 1)
        .attr('ry', 1)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 4)
        .attr('fill', 'white');
}

/**
 * Draw security icon
 */
function drawSecurityIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#e67e22');
    
    g.append('path')
        .attr('d', 'M0,-8 L-8,0 L0,8 L8,0 Z')
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 3)
        .attr('fill', 'white');
}

/**
 * Draw generic icon
 */
function drawGenericIcon(g) {
    g.append('rect')
        .attr('x', -15)
        .attr('y', -15)
        .attr('width', 30)
        .attr('height', 30)
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('fill', '#7f8c8d');
    
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 8)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
}

/**
 * Draw legend
 */
function drawLegend(g, width, height) {
    const legend = g.append('g')
        .attr('transform', `translate(${-width/2 + 40}, ${height/2 - 120})`);
    
    const deviceTypes = [
        { type: 'router', label: 'Router' },
        { type: 'switch', label: 'Switch' },
        { type: 'firewall', label: 'Firewall' },
        { type: 'load-balancer', label: 'Load Balancer' },
        { type: 'server', label: 'Server' },
        { type: 'storage', label: 'Storage' },
        { type: 'security', label: 'Security' }
    ];
    
    deviceTypes.forEach((device, i) => {
        const x = (i % 4) * 100;
        const y = Math.floor(i / 4) * 30;
        
        const deviceGroup = legend.append('g')
            .attr('transform', `translate(${x}, ${y})`);
        
        switch (device.type) {
            case 'router':
                drawRouterIcon(deviceGroup);
                break;
            case 'switch':
                drawSwitchIcon(deviceGroup);
                break;
            case 'firewall':
                drawFirewallIcon(deviceGroup);
                break;
            case 'load-balancer':
                drawLoadBalancerIcon(deviceGroup);
                break;
            case 'server':
                drawServerIcon(deviceGroup);
                break;
            case 'storage':
                drawStorageIcon(deviceGroup);
                break;
            case 'security':
                drawSecurityIcon(deviceGroup);
                break;
        }
        
        deviceGroup.select('rect')
            .attr('width', 20)
            .attr('height', 20)
            .attr('x', -10)
            .attr('y', -10);
        
        legend.append('text')
            .attr('x', x + 15)
            .attr('y', y + 5)
            .attr('font-size', '12px')
            .text(device.label);
    });
}

/**
 * Add tooltips to devices
 */
function addDeviceTooltips(g) {
    g.selectAll('.device')
        .on('mouseover', function() {
            const type = this.getAttribute('data-type');
            const label = this.getAttribute('data-label');
            
            let description = '';
            switch (type) {
                case 'router':
                    description = 'Handles routing between networks';
                    break;
                case 'switch':
                    description = 'Provides connectivity between devices';
                    break;
                case 'firewall':
                    description = 'Enforces security policies';
                    break;
                case 'load-balancer':
                    description = 'Distributes traffic across servers';
                    break;
                case 'server':
                    description = 'Hosts applications and services';
                    break;
                case 'storage':
                    description = 'Provides data storage capabilities';
                    break;
                case 'security':
                    description = 'Implements security controls';
                    break;
                default:
                    description = 'Network device';
            }
            
            showDeviceTooltip(this, label, description);
        })
        .on('mouseout', hideDeviceTooltip);
}

/**
 * Show device tooltip
 */
function showDeviceTooltip(element, title, description) {
    const rect = element.getBoundingClientRect();
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'device-tooltip')
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
 * Hide device tooltip
 */
function hideDeviceTooltip() {
    d3.select('.device-tooltip').remove();
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

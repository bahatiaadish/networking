import React from 'react';
import NetworkDiagram from '../NetworkDiagram';
import { Node, Edge } from 'react-flow-renderer';

interface SecurityZonesProps {
  className?: string;
}

const SecurityZones: React.FC<SecurityZonesProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'internet',
      type: 'cloud',
      position: { x: 300, y: 50 },
      data: { label: 'Internet' }
    },
    {
      id: 'edge-router1',
      type: 'router',
      position: { x: 200, y: 150 },
      data: { label: 'Edge Router 1', asn: '65000', ip: '203.0.113.1' }
    },
    {
      id: 'edge-router2',
      type: 'router',
      position: { x: 400, y: 150 },
      data: { label: 'Edge Router 2', asn: '65000', ip: '198.51.100.1' }
    },
    
    {
      id: 'dmz-firewall',
      type: 'firewall',
      position: { x: 300, y: 250 },
      data: { label: 'DMZ Firewall', ip: '10.1.0.1' }
    },
    {
      id: 'web-server',
      type: 'server',
      position: { x: 200, y: 350 },
      data: { label: 'Web Server', ip: '10.1.1.10' }
    },
    {
      id: 'dns-server',
      type: 'server',
      position: { x: 400, y: 350 },
      data: { label: 'DNS Server', ip: '10.1.1.11' }
    },
    
    {
      id: 'internal-firewall',
      type: 'firewall',
      position: { x: 300, y: 450 },
      data: { label: 'Internal Firewall', ip: '10.2.0.1' }
    },
    {
      id: 'internal-router',
      type: 'router',
      position: { x: 300, y: 550 },
      data: { label: 'Internal Router', ip: '10.2.0.2' }
    },
    
    {
      id: 'corporate-switch',
      type: 'switch',
      position: { x: 150, y: 650 },
      data: { label: 'Corporate Switch', ip: '10.3.0.1' }
    },
    {
      id: 'user-workstation1',
      type: 'server',
      position: { x: 50, y: 750 },
      data: { label: 'Workstation 1', ip: '10.3.1.10' }
    },
    {
      id: 'user-workstation2',
      type: 'server',
      position: { x: 150, y: 750 },
      data: { label: 'Workstation 2', ip: '10.3.1.11' }
    },
    {
      id: 'user-workstation3',
      type: 'server',
      position: { x: 250, y: 750 },
      data: { label: 'Workstation 3', ip: '10.3.1.12' }
    },
    
    {
      id: 'datacenter-switch',
      type: 'switch',
      position: { x: 450, y: 650 },
      data: { label: 'Data Center Switch', ip: '10.4.0.1' }
    },
    {
      id: 'app-server1',
      type: 'server',
      position: { x: 350, y: 750 },
      data: { label: 'App Server 1', ip: '10.4.1.10' }
    },
    {
      id: 'app-server2',
      type: 'server',
      position: { x: 450, y: 750 },
      data: { label: 'App Server 2', ip: '10.4.1.11' }
    },
    {
      id: 'db-server',
      type: 'server',
      position: { x: 550, y: 750 },
      data: { label: 'Database Server', ip: '10.4.1.12' }
    }
  ];

  const edges: Edge[] = [
    { id: 'e1', source: 'internet', target: 'edge-router1' },
    { id: 'e2', source: 'internet', target: 'edge-router2' },
    
    { id: 'e3', source: 'edge-router1', target: 'dmz-firewall' },
    { id: 'e4', source: 'edge-router2', target: 'dmz-firewall' },
    
    { id: 'e5', source: 'dmz-firewall', target: 'web-server' },
    { id: 'e6', source: 'dmz-firewall', target: 'dns-server' },
    
    { id: 'e7', source: 'dmz-firewall', target: 'internal-firewall' },
    
    { id: 'e8', source: 'internal-firewall', target: 'internal-router' },
    
    { id: 'e9', source: 'internal-router', target: 'corporate-switch' },
    { id: 'e10', source: 'internal-router', target: 'datacenter-switch' },
    
    { id: 'e11', source: 'corporate-switch', target: 'user-workstation1' },
    { id: 'e12', source: 'corporate-switch', target: 'user-workstation2' },
    { id: 'e13', source: 'corporate-switch', target: 'user-workstation3' },
    
    { id: 'e14', source: 'datacenter-switch', target: 'app-server1' },
    { id: 'e15', source: 'datacenter-switch', target: 'app-server2' },
    { id: 'e16', source: 'datacenter-switch', target: 'db-server' }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className || 'h-[800px]'} />;
};

export default SecurityZones;

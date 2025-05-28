import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface DHCPDiagramProps {
  className?: string;
}

const DHCPDiagram: React.FC<DHCPDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'dhcp-server',
      type: 'server',
      position: { x: 400, y: 100 },
      data: { label: 'DHCP Server', ip: '192.168.1.2' }
    },
    {
      id: 'router',
      type: 'router',
      position: { x: 250, y: 200 },
      data: { label: 'Router with DHCP Relay', ip: '192.168.1.1 / 192.168.2.1' }
    },
    {
      id: 'switch1',
      type: 'switch',
      position: { x: 100, y: 300 },
      data: { label: 'Switch (Local Subnet)', ip: '192.168.1.3' }
    },
    {
      id: 'switch2',
      type: 'switch',
      position: { x: 400, y: 300 },
      data: { label: 'Switch (Remote Subnet)', ip: '192.168.2.3' }
    },
    {
      id: 'pc1',
      type: 'pc',
      position: { x: 50, y: 400 },
      data: { label: 'PC 1 (DHCP Client)', ip: 'Requesting IP...' }
    },
    {
      id: 'pc2',
      type: 'pc',
      position: { x: 150, y: 400 },
      data: { label: 'PC 2 (Static IP)', ip: '192.168.1.10' }
    },
    {
      id: 'pc3',
      type: 'pc',
      position: { x: 350, y: 400 },
      data: { label: 'PC 3 (DHCP Client)', ip: 'Requesting IP...' }
    },
    {
      id: 'pc4',
      type: 'pc',
      position: { x: 450, y: 400 },
      data: { label: 'PC 4 (DHCP Client)', ip: '192.168.2.101 (Leased)' }
    },
    {
      id: 'dhcp-process',
      type: 'cloud',
      position: { x: 250, y: 500 },
      data: { label: 'DHCP Process:\n1. DISCOVER\n2. OFFER\n3. REQUEST\n4. ACKNOWLEDGE' }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'dhcp-server', 
      target: 'router',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'router', 
      target: 'switch1',
      animated: true
    },
    { 
      id: 'e3', 
      source: 'router', 
      target: 'switch2',
      animated: true
    },
    { id: 'e4', source: 'switch1', target: 'pc1' },
    { id: 'e5', source: 'switch1', target: 'pc2' },
    { id: 'e6', source: 'switch2', target: 'pc3' },
    { id: 'e7', source: 'switch2', target: 'pc4' },
    { 
      id: 'e8', 
      source: 'pc1', 
      target: 'dhcp-process',
      style: { stroke: 'green', strokeDasharray: '5,5' },
      animated: true
    },
    { 
      id: 'e9', 
      source: 'pc3', 
      target: 'dhcp-process',
      style: { stroke: 'green', strokeDasharray: '5,5' },
      animated: true
    }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default DHCPDiagram;

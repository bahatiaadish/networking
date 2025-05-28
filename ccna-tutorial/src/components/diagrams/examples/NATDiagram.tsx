import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface NATDiagramProps {
  className?: string;
}

const NATDiagram: React.FC<NATDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'router',
      type: 'router',
      position: { x: 250, y: 200 },
      data: { label: 'NAT Router', ip: '203.0.113.1 (Public)\n192.168.1.1 (Private)' }
    },
    {
      id: 'internal-network',
      type: 'cloud',
      position: { x: 100, y: 100 },
      data: { label: 'Internal Network (192.168.1.0/24)' }
    },
    {
      id: 'internet',
      type: 'cloud',
      position: { x: 400, y: 100 },
      data: { label: 'Internet' }
    },
    {
      id: 'server1',
      type: 'server',
      position: { x: 50, y: 300 },
      data: { label: 'Internal Server', ip: '192.168.1.10' }
    },
    {
      id: 'server2',
      type: 'server',
      position: { x: 150, y: 300 },
      data: { label: 'Internal Server', ip: '192.168.1.11' }
    },
    {
      id: 'external-server',
      type: 'server',
      position: { x: 400, y: 300 },
      data: { label: 'External Server', ip: '198.51.100.10' }
    },
    {
      id: 'nat-table',
      type: 'cloud',
      position: { x: 250, y: 400 },
      data: { label: 'NAT Translation Table\n192.168.1.10:1234 → 203.0.113.1:5678\n192.168.1.11:5678 → 203.0.113.1:9012' }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'router', 
      target: 'internal-network',
      animated: true,
      label: 'Inside Interface'
    },
    { 
      id: 'e2', 
      source: 'router', 
      target: 'internet',
      animated: true,
      label: 'Outside Interface'
    },
    { id: 'e3', source: 'internal-network', target: 'server1' },
    { id: 'e4', source: 'internal-network', target: 'server2' },
    { id: 'e5', source: 'internet', target: 'external-server' },
    { 
      id: 'e6', 
      source: 'router', 
      target: 'nat-table',
      style: { stroke: 'orange', strokeDasharray: '5,5' },
      animated: true
    }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default NATDiagram;

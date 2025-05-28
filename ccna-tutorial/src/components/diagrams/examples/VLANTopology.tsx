import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface VLANTopologyProps {
  className?: string;
}

const VLANTopology: React.FC<VLANTopologyProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'switch1',
      type: 'switch',
      position: { x: 250, y: 100 },
      data: { label: 'Core Switch', ip: '192.168.1.1' }
    },
    {
      id: 'vlan10',
      type: 'cloud',
      position: { x: 100, y: 250 },
      data: { label: 'VLAN 10\nEngineering' }
    },
    {
      id: 'vlan20',
      type: 'cloud',
      position: { x: 250, y: 250 },
      data: { label: 'VLAN 20\nAccounting' }
    },
    {
      id: 'vlan30',
      type: 'cloud',
      position: { x: 400, y: 250 },
      data: { label: 'VLAN 30\nManagement' }
    },
    {
      id: 'pc1',
      type: 'pc',
      position: { x: 50, y: 350 },
      data: { label: 'Engineering PC', ip: '192.168.10.10' }
    },
    {
      id: 'pc2',
      type: 'pc',
      position: { x: 150, y: 350 },
      data: { label: 'Engineering PC', ip: '192.168.10.11' }
    },
    {
      id: 'pc3',
      type: 'pc',
      position: { x: 250, y: 350 },
      data: { label: 'Accounting PC', ip: '192.168.20.10' }
    },
    {
      id: 'pc4',
      type: 'pc',
      position: { x: 400, y: 350 },
      data: { label: 'Management PC', ip: '192.168.30.10' }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'switch1', 
      target: 'vlan10',
      label: 'Ports 1-8',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'switch1', 
      target: 'vlan20',
      label: 'Ports 9-16',
      animated: true
    },
    { 
      id: 'e3', 
      source: 'switch1', 
      target: 'vlan30',
      label: 'Ports 17-24',
      animated: true
    },
    { id: 'e4', source: 'vlan10', target: 'pc1' },
    { id: 'e5', source: 'vlan10', target: 'pc2' },
    { id: 'e6', source: 'vlan20', target: 'pc3' },
    { id: 'e7', source: 'vlan30', target: 'pc4' }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default VLANTopology;

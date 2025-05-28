import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface InterVLANRoutingProps {
  className?: string;
}

const InterVLANRouting: React.FC<InterVLANRoutingProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      position: { x: 250, y: 50 },
      data: { 
        label: 'Router', 
        ip: '192.168.10.1/24 (VLAN 10)\n192.168.20.1/24 (VLAN 20)\n192.168.30.1/24 (VLAN 30)' 
      }
    },
    {
      id: 'switch1',
      type: 'switch',
      position: { x: 250, y: 150 },
      data: { label: 'Layer 2 Switch', ip: 'Trunk Port' }
    },
    {
      id: 'vlan10',
      type: 'cloud',
      position: { x: 100, y: 250 },
      data: { label: 'VLAN 10\nEngineering\n192.168.10.0/24' }
    },
    {
      id: 'vlan20',
      type: 'cloud',
      position: { x: 250, y: 250 },
      data: { label: 'VLAN 20\nAccounting\n192.168.20.0/24' }
    },
    {
      id: 'vlan30',
      type: 'cloud',
      position: { x: 400, y: 250 },
      data: { label: 'VLAN 30\nManagement\n192.168.30.0/24' }
    },
    {
      id: 'pc1',
      type: 'pc',
      position: { x: 50, y: 350 },
      data: { 
        label: 'Engineering PC', 
        ip: '192.168.10.10/24\nGW: 192.168.10.1' 
      }
    },
    {
      id: 'pc2',
      type: 'pc',
      position: { x: 250, y: 350 },
      data: { 
        label: 'Accounting PC', 
        ip: '192.168.20.10/24\nGW: 192.168.20.1' 
      }
    },
    {
      id: 'pc3',
      type: 'pc',
      position: { x: 400, y: 350 },
      data: { 
        label: 'Management PC', 
        ip: '192.168.30.10/24\nGW: 192.168.30.1' 
      }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'router1', 
      target: 'switch1',
      label: 'Trunk (802.1Q)',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'switch1', 
      target: 'vlan10',
      animated: true
    },
    { 
      id: 'e3', 
      source: 'switch1', 
      target: 'vlan20',
      animated: true
    },
    { 
      id: 'e4', 
      source: 'switch1', 
      target: 'vlan30',
      animated: true
    },
    { id: 'e5', source: 'vlan10', target: 'pc1' },
    { id: 'e6', source: 'vlan20', target: 'pc2' },
    { id: 'e7', source: 'vlan30', target: 'pc3' }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default InterVLANRouting;

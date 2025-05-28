import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface OSPFDiagramProps {
  className?: string;
}

const OSPFDiagram: React.FC<OSPFDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      position: { x: 250, y: 50 },
      data: { 
        label: 'Area 0 Router (DR)', 
        ip: 'Router ID: 1.1.1.1\n10.0.0.1/30\n10.0.0.5/30\n10.0.0.9/30' 
      }
    },
    {
      id: 'router2',
      type: 'router',
      position: { x: 100, y: 150 },
      data: { 
        label: 'Area 0 Router (BDR)', 
        ip: 'Router ID: 2.2.2.2\n10.0.0.2/30\n192.168.1.1/24' 
      }
    },
    {
      id: 'router3',
      type: 'router',
      position: { x: 250, y: 150 },
      data: { 
        label: 'Area 0 Router (DROTHER)', 
        ip: 'Router ID: 3.3.3.3\n10.0.0.6/30\n192.168.2.1/24' 
      }
    },
    {
      id: 'router4',
      type: 'router',
      position: { x: 400, y: 150 },
      data: { 
        label: 'Area 0 Router (DROTHER)', 
        ip: 'Router ID: 4.4.4.4\n10.0.0.10/30\n192.168.3.1/24' 
      }
    },
    {
      id: 'network1',
      type: 'cloud',
      position: { x: 100, y: 250 },
      data: { 
        label: 'Network 1\n192.168.1.0/24' 
      }
    },
    {
      id: 'network2',
      type: 'cloud',
      position: { x: 250, y: 250 },
      data: { 
        label: 'Network 2\n192.168.2.0/24' 
      }
    },
    {
      id: 'network3',
      type: 'cloud',
      position: { x: 400, y: 250 },
      data: { 
        label: 'Network 3\n192.168.3.0/24' 
      }
    },
    {
      id: 'pc1',
      type: 'pc',
      position: { x: 100, y: 350 },
      data: { 
        label: 'PC 1', 
        ip: '192.168.1.10/24\nGW: 192.168.1.1' 
      }
    },
    {
      id: 'pc2',
      type: 'pc',
      position: { x: 250, y: 350 },
      data: { 
        label: 'PC 2', 
        ip: '192.168.2.10/24\nGW: 192.168.2.1' 
      }
    },
    {
      id: 'pc3',
      type: 'pc',
      position: { x: 400, y: 350 },
      data: { 
        label: 'PC 3', 
        ip: '192.168.3.10/24\nGW: 192.168.3.1' 
      }
    },
    {
      id: 'ospf-info',
      type: 'cloud',
      position: { x: 250, y: 450 },
      data: { 
        label: 'OSPF Area 0 (Backbone)\nProcess ID: 1\nNetwork: 10.0.0.0/24\nAuthentication: MD5' 
      }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'router1', 
      target: 'router2',
      label: 'Cost: 10',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'router1', 
      target: 'router3',
      label: 'Cost: 10',
      animated: true
    },
    { 
      id: 'e3', 
      source: 'router1', 
      target: 'router4',
      label: 'Cost: 10',
      animated: true
    },
    { 
      id: 'e4', 
      source: 'router2', 
      target: 'network1'
    },
    { 
      id: 'e5', 
      source: 'router3', 
      target: 'network2'
    },
    { 
      id: 'e6', 
      source: 'router4', 
      target: 'network3'
    },
    { id: 'e7', source: 'network1', target: 'pc1' },
    { id: 'e8', source: 'network2', target: 'pc2' },
    { id: 'e9', source: 'network3', target: 'pc3' },
    { 
      id: 'e10', 
      source: 'router1', 
      target: 'ospf-info',
      style: { stroke: 'purple', strokeDasharray: '5,5' }
    }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default OSPFDiagram;

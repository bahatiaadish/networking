import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface StaticRoutingDiagramProps {
  className?: string;
}

const StaticRoutingDiagram: React.FC<StaticRoutingDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      position: { x: 100, y: 100 },
      data: { 
        label: 'Router A', 
        ip: '10.0.0.1/30\n192.168.1.1/24' 
      }
    },
    {
      id: 'router2',
      type: 'router',
      position: { x: 300, y: 100 },
      data: { 
        label: 'Router B', 
        ip: '10.0.0.2/30\n10.0.0.5/30' 
      }
    },
    {
      id: 'router3',
      type: 'router',
      position: { x: 500, y: 100 },
      data: { 
        label: 'Router C', 
        ip: '10.0.0.6/30\n192.168.3.1/24' 
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
      id: 'network3',
      type: 'cloud',
      position: { x: 500, y: 250 },
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
      id: 'pc3',
      type: 'pc',
      position: { x: 500, y: 350 },
      data: { 
        label: 'PC 3', 
        ip: '192.168.3.10/24\nGW: 192.168.3.1' 
      }
    },
    {
      id: 'routes',
      type: 'cloud',
      position: { x: 300, y: 300 },
      data: { 
        label: 'Static Routes:\nRouter A: ip route 192.168.3.0 255.255.255.0 10.0.0.2\nRouter C: ip route 192.168.1.0 255.255.255.0 10.0.0.5' 
      }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'router1', 
      target: 'router2',
      label: 'WAN Link 1\n10.0.0.0/30',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'router2', 
      target: 'router3',
      label: 'WAN Link 2\n10.0.0.4/30',
      animated: true
    },
    { 
      id: 'e3', 
      source: 'router1', 
      target: 'network1'
    },
    { 
      id: 'e4', 
      source: 'router3', 
      target: 'network3'
    },
    { id: 'e5', source: 'network1', target: 'pc1' },
    { id: 'e6', source: 'network3', target: 'pc3' },
    { 
      id: 'e7', 
      source: 'router1', 
      target: 'routes',
      style: { stroke: 'orange', strokeDasharray: '5,5' }
    },
    { 
      id: 'e8', 
      source: 'router3', 
      target: 'routes',
      style: { stroke: 'orange', strokeDasharray: '5,5' }
    }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default StaticRoutingDiagram;

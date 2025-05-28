import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface STPDiagramProps {
  className?: string;
}

const STPDiagram: React.FC<STPDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'switch1',
      type: 'switch',
      position: { x: 250, y: 50 },
      data: { 
        label: 'Root Bridge', 
        ip: 'Priority: 4096\nMAC: 00:00:00:00:00:01' 
      }
    },
    {
      id: 'switch2',
      type: 'switch',
      position: { x: 100, y: 150 },
      data: { 
        label: 'Switch 2', 
        ip: 'Priority: 32768\nMAC: 00:00:00:00:00:02' 
      }
    },
    {
      id: 'switch3',
      type: 'switch',
      position: { x: 250, y: 150 },
      data: { 
        label: 'Switch 3', 
        ip: 'Priority: 32768\nMAC: 00:00:00:00:00:03' 
      }
    },
    {
      id: 'switch4',
      type: 'switch',
      position: { x: 400, y: 150 },
      data: { 
        label: 'Switch 4', 
        ip: 'Priority: 32768\nMAC: 00:00:00:00:00:04' 
      }
    },
    {
      id: 'switch5',
      type: 'switch',
      position: { x: 175, y: 250 },
      data: { 
        label: 'Switch 5', 
        ip: 'Priority: 32768\nMAC: 00:00:00:00:00:05' 
      }
    },
    {
      id: 'switch6',
      type: 'switch',
      position: { x: 325, y: 250 },
      data: { 
        label: 'Switch 6', 
        ip: 'Priority: 32768\nMAC: 00:00:00:00:00:06' 
      }
    },
    {
      id: 'legend',
      type: 'cloud',
      position: { x: 250, y: 350 },
      data: { 
        label: 'STP Port States:\n• Root Port (RP)\n• Designated Port (DP)\n• Blocking Port (BLK)' 
      }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'switch1', 
      target: 'switch2',
      label: 'DP',
      style: { stroke: 'green' },
      animated: true
    },
    { 
      id: 'e2', 
      source: 'switch1', 
      target: 'switch3',
      label: 'DP',
      style: { stroke: 'green' },
      animated: true
    },
    { 
      id: 'e3', 
      source: 'switch1', 
      target: 'switch4',
      label: 'DP',
      style: { stroke: 'green' },
      animated: true
    },
    { 
      id: 'e4', 
      source: 'switch2', 
      target: 'switch5',
      label: 'DP',
      style: { stroke: 'green' },
      animated: true
    },
    { 
      id: 'e5', 
      source: 'switch3', 
      target: 'switch5',
      label: 'BLK',
      style: { stroke: 'red', strokeDasharray: '5,5' }
    },
    { 
      id: 'e6', 
      source: 'switch3', 
      target: 'switch6',
      label: 'DP',
      style: { stroke: 'green' },
      animated: true
    },
    { 
      id: 'e7', 
      source: 'switch4', 
      target: 'switch6',
      label: 'BLK',
      style: { stroke: 'red', strokeDasharray: '5,5' }
    }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default STPDiagram;

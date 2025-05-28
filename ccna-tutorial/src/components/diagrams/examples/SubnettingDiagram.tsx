import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface SubnettingDiagramProps {
  className?: string;
}

const SubnettingDiagram: React.FC<SubnettingDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      position: { x: 250, y: 100 },
      data: { label: 'Core Router', ip: '10.0.0.1' }
    },
    {
      id: 'router2',
      type: 'router',
      position: { x: 100, y: 250 },
      data: { label: 'Department A Router', ip: '10.0.0.2' }
    },
    {
      id: 'router3',
      type: 'router',
      position: { x: 250, y: 250 },
      data: { label: 'Department B Router', ip: '10.0.0.3' }
    },
    {
      id: 'router4',
      type: 'router',
      position: { x: 400, y: 250 },
      data: { label: 'Department C Router', ip: '10.0.0.4' }
    },
    {
      id: 'subnet1',
      type: 'cloud',
      position: { x: 100, y: 400 },
      data: { label: 'Subnet A (192.168.1.0/26)\n64 hosts' }
    },
    {
      id: 'subnet2',
      type: 'cloud',
      position: { x: 250, y: 400 },
      data: { label: 'Subnet B (192.168.1.64/26)\n64 hosts' }
    },
    {
      id: 'subnet3',
      type: 'cloud',
      position: { x: 400, y: 400 },
      data: { label: 'Subnet C (192.168.1.128/26)\n64 hosts' }
    },
    {
      id: 'pc1',
      type: 'pc',
      position: { x: 50, y: 500 },
      data: { label: 'PC A1', ip: '192.168.1.10/26\nGW: 192.168.1.1' }
    },
    {
      id: 'pc2',
      type: 'pc',
      position: { x: 150, y: 500 },
      data: { label: 'PC A2', ip: '192.168.1.11/26\nGW: 192.168.1.1' }
    },
    {
      id: 'pc3',
      type: 'pc',
      position: { x: 250, y: 500 },
      data: { label: 'PC B1', ip: '192.168.1.74/26\nGW: 192.168.1.65' }
    },
    {
      id: 'pc4',
      type: 'pc',
      position: { x: 400, y: 500 },
      data: { label: 'PC C1', ip: '192.168.1.138/26\nGW: 192.168.1.129' }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'router1', 
      target: 'router2',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'router1', 
      target: 'router3',
      animated: true
    },
    { 
      id: 'e3', 
      source: 'router1', 
      target: 'router4',
      animated: true
    },
    { id: 'e4', source: 'router2', target: 'subnet1' },
    { id: 'e5', source: 'router3', target: 'subnet2' },
    { id: 'e6', source: 'router4', target: 'subnet3' },
    { id: 'e7', source: 'subnet1', target: 'pc1' },
    { id: 'e8', source: 'subnet1', target: 'pc2' },
    { id: 'e9', source: 'subnet2', target: 'pc3' },
    { id: 'e10', source: 'subnet3', target: 'pc4' }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default SubnettingDiagram;

import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface OSPFDiagramProps {
  className?: string;
}

export function OSPFDiagram({ className = '' }: OSPFDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Router 1\nRouter ID: 1.1.1.1\nArea 0' },
      position: { x: 300, y: 100 },
    },
    {
      id: 'router2',
      type: 'router',
      data: { label: 'Router 2\nRouter ID: 2.2.2.2\nArea 0\nDR' },
      position: { x: 500, y: 100 },
    },
    {
      id: 'router3',
      type: 'router',
      data: { label: 'Router 3\nRouter ID: 3.3.3.3\nArea 0\nBDR' },
      position: { x: 200, y: 250 },
    },
    {
      id: 'router4',
      type: 'router',
      data: { label: 'Router 4\nRouter ID: 4.4.4.4\nArea 0' },
      position: { x: 400, y: 250 },
    },
    {
      id: 'router5',
      type: 'router',
      data: { label: 'Router 5\nRouter ID: 5.5.5.5\nArea 0' },
      position: { x: 600, y: 250 },
    },
    {
      id: 'network1',
      type: 'cloud',
      data: { label: '192.168.1.0/24' },
      position: { x: 200, y: 400 },
    },
    {
      id: 'network2',
      type: 'cloud',
      data: { label: '192.168.2.0/24' },
      position: { x: 400, y: 400 },
    },
    {
      id: 'network3',
      type: 'cloud',
      data: { label: '192.168.3.0/24' },
      position: { x: 600, y: 400 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-r1-r2',
      source: 'router1',
      target: 'router2',
      label: 'OSPF Adjacency',
      animated: true,
    },
    {
      id: 'e-r1-r3',
      source: 'router1',
      target: 'router3',
      label: 'OSPF Adjacency',
      animated: true,
    },
    {
      id: 'e-r2-r4',
      source: 'router2',
      target: 'router4',
      label: 'OSPF Adjacency',
      animated: true,
    },
    {
      id: 'e-r2-r5',
      source: 'router2',
      target: 'router5',
      label: 'OSPF Adjacency',
      animated: true,
    },
    {
      id: 'e-r3-network1',
      source: 'router3',
      target: 'network1',
      label: 'Cost: 10',
    },
    {
      id: 'e-r4-network2',
      source: 'router4',
      target: 'network2',
      label: 'Cost: 10',
    },
    {
      id: 'e-r5-network3',
      source: 'router5',
      target: 'network3',
      label: 'Cost: 10',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

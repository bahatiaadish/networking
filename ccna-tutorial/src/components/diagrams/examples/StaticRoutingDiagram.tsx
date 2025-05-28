import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface StaticRoutingDiagramProps {
  className?: string;
}

export function StaticRoutingDiagram({ className = '' }: StaticRoutingDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Router 1\n192.168.1.1/24\n10.0.0.1/30' },
      position: { x: 200, y: 200 },
    },
    {
      id: 'router2',
      type: 'router',
      data: { label: 'Router 2\n10.0.0.2/30\n10.0.0.5/30' },
      position: { x: 400, y: 200 },
    },
    {
      id: 'router3',
      type: 'router',
      data: { label: 'Router 3\n10.0.0.6/30\n192.168.3.1/24' },
      position: { x: 600, y: 200 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\n192.168.1.10/24\nGW: 192.168.1.1' },
      position: { x: 200, y: 350 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\n192.168.3.10/24\nGW: 192.168.3.1' },
      position: { x: 600, y: 350 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-r1-r2',
      source: 'router1',
      target: 'router2',
      label: '10.0.0.0/30',
    },
    {
      id: 'e-r2-r3',
      source: 'router2',
      target: 'router3',
      label: '10.0.0.4/30',
    },
    {
      id: 'e-r1-pc1',
      source: 'router1',
      target: 'pc1',
      label: '192.168.1.0/24',
    },
    {
      id: 'e-r3-pc2',
      source: 'router3',
      target: 'pc2',
      label: '192.168.3.0/24',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

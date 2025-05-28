import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface InterVLANRoutingProps {
  className?: string;
}

export function InterVLANRouting({ className = '' }: InterVLANRoutingProps) {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Router' },
      position: { x: 400, y: 100 },
    },
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Layer 2 Switch' },
      position: { x: 400, y: 250 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\nVLAN 10\n192.168.10.10' },
      position: { x: 200, y: 400 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\nVLAN 20\n192.168.20.10' },
      position: { x: 400, y: 400 },
    },
    {
      id: 'pc3',
      type: 'pc',
      data: { label: 'PC3\nVLAN 30\n192.168.30.10' },
      position: { x: 600, y: 400 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-r1-s1',
      source: 'router1',
      target: 'switch1',
      label: 'Trunk\n802.1Q',
      animated: true,
    },
    {
      id: 'e-s1-pc1',
      source: 'switch1',
      target: 'pc1',
      label: 'VLAN 10',
    },
    {
      id: 'e-s1-pc2',
      source: 'switch1',
      target: 'pc2',
      label: 'VLAN 20',
    },
    {
      id: 'e-s1-pc3',
      source: 'switch1',
      target: 'pc3',
      label: 'VLAN 30',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

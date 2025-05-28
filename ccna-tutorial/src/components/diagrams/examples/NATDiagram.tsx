import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface NATDiagramProps {
  className?: string;
}

export function NATDiagram({ className = '' }: NATDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'internet',
      type: 'cloud',
      data: { label: 'Internet' },
      position: { x: 400, y: 50 },
    },
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Router\nNAT Enabled\nOutside: 203.0.113.2\nInside: 192.168.1.1' },
      position: { x: 400, y: 200 },
    },
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Switch' },
      position: { x: 400, y: 350 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\n192.168.1.10' },
      position: { x: 200, y: 500 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\n192.168.1.20' },
      position: { x: 400, y: 500 },
    },
    {
      id: 'server1',
      type: 'server',
      data: { label: 'Server\n192.168.1.30\nPort Forward: 80' },
      position: { x: 600, y: 500 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-internet-router',
      source: 'internet',
      target: 'router1',
      label: 'Public IP\n203.0.113.2',
    },
    {
      id: 'e-router-switch',
      source: 'router1',
      target: 'switch1',
      label: 'Private Network\n192.168.1.0/24',
    },
    {
      id: 'e-switch-pc1',
      source: 'switch1',
      target: 'pc1',
    },
    {
      id: 'e-switch-pc2',
      source: 'switch1',
      target: 'pc2',
    },
    {
      id: 'e-switch-server',
      source: 'switch1',
      target: 'server1',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

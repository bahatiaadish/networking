import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface ACLDiagramProps {
  className?: string;
}

export function ACLDiagram({ className = '' }: ACLDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Router 1\nACL Applied' },
      position: { x: 400, y: 150 },
    },
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Switch 1' },
      position: { x: 200, y: 300 },
    },
    {
      id: 'switch2',
      type: 'switch',
      data: { label: 'Switch 2' },
      position: { x: 600, y: 300 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\n192.168.1.10' },
      position: { x: 100, y: 450 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\n192.168.1.20' },
      position: { x: 300, y: 450 },
    },
    {
      id: 'server1',
      type: 'server',
      data: { label: 'Web Server\n192.168.2.10' },
      position: { x: 500, y: 450 },
    },
    {
      id: 'server2',
      type: 'server',
      data: { label: 'Database Server\n192.168.2.20' },
      position: { x: 700, y: 450 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-r1-s1',
      source: 'router1',
      target: 'switch1',
      label: 'Fa0/0\n192.168.1.1/24',
    },
    {
      id: 'e-r1-s2',
      source: 'router1',
      target: 'switch2',
      label: 'Fa0/1\n192.168.2.1/24',
    },
    {
      id: 'e-s1-pc1',
      source: 'switch1',
      target: 'pc1',
    },
    {
      id: 'e-s1-pc2',
      source: 'switch1',
      target: 'pc2',
    },
    {
      id: 'e-s2-server1',
      source: 'switch2',
      target: 'server1',
    },
    {
      id: 'e-s2-server2',
      source: 'switch2',
      target: 'server2',
      style: { stroke: 'red', strokeDasharray: '5, 5' },
      label: 'Blocked by ACL',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface SubnettingDiagramProps {
  className?: string;
}

export function SubnettingDiagram({ className = '' }: SubnettingDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Core Router' },
      position: { x: 400, y: 100 },
    },
    {
      id: 'router2',
      type: 'router',
      data: { label: 'Router A\n192.168.1.1/26' },
      position: { x: 200, y: 250 },
    },
    {
      id: 'router3',
      type: 'router',
      data: { label: 'Router B\n192.168.1.65/26' },
      position: { x: 400, y: 250 },
    },
    {
      id: 'router4',
      type: 'router',
      data: { label: 'Router C\n192.168.1.129/26' },
      position: { x: 600, y: 250 },
    },
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Switch A' },
      position: { x: 200, y: 350 },
    },
    {
      id: 'switch2',
      type: 'switch',
      data: { label: 'Switch B' },
      position: { x: 400, y: 350 },
    },
    {
      id: 'switch3',
      type: 'switch',
      data: { label: 'Switch C' },
      position: { x: 600, y: 350 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\n192.168.1.10/26' },
      position: { x: 100, y: 450 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\n192.168.1.20/26' },
      position: { x: 200, y: 450 },
    },
    {
      id: 'pc3',
      type: 'pc',
      data: { label: 'PC3\n192.168.1.70/26' },
      position: { x: 350, y: 450 },
    },
    {
      id: 'pc4',
      type: 'pc',
      data: { label: 'PC4\n192.168.1.80/26' },
      position: { x: 450, y: 450 },
    },
    {
      id: 'pc5',
      type: 'pc',
      data: { label: 'PC5\n192.168.1.140/26' },
      position: { x: 550, y: 450 },
    },
    {
      id: 'pc6',
      type: 'pc',
      data: { label: 'PC6\n192.168.1.150/26' },
      position: { x: 650, y: 450 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-r1-r2',
      source: 'router1',
      target: 'router2',
      label: 'Subnet A\n192.168.1.0/26',
    },
    {
      id: 'e-r1-r3',
      source: 'router1',
      target: 'router3',
      label: 'Subnet B\n192.168.1.64/26',
    },
    {
      id: 'e-r1-r4',
      source: 'router1',
      target: 'router4',
      label: 'Subnet C\n192.168.1.128/26',
    },
    {
      id: 'e-r2-s1',
      source: 'router2',
      target: 'switch1',
    },
    {
      id: 'e-r3-s2',
      source: 'router3',
      target: 'switch2',
    },
    {
      id: 'e-r4-s3',
      source: 'router4',
      target: 'switch3',
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
      id: 'e-s2-pc3',
      source: 'switch2',
      target: 'pc3',
    },
    {
      id: 'e-s2-pc4',
      source: 'switch2',
      target: 'pc4',
    },
    {
      id: 'e-s3-pc5',
      source: 'switch3',
      target: 'pc5',
    },
    {
      id: 'e-s3-pc6',
      source: 'switch3',
      target: 'pc6',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

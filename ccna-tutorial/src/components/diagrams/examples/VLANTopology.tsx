import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface VLANTopologyProps {
  className?: string;
}

export function VLANTopology({ className = '' }: VLANTopologyProps) {
  const nodes: Node[] = [
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Core Switch' },
      position: { x: 400, y: 100 },
    },
    {
      id: 'switch2',
      type: 'switch',
      data: { label: 'Access Switch 1\nVLAN 10, 20' },
      position: { x: 200, y: 250 },
    },
    {
      id: 'switch3',
      type: 'switch',
      data: { label: 'Access Switch 2\nVLAN 10, 30' },
      position: { x: 400, y: 250 },
    },
    {
      id: 'switch4',
      type: 'switch',
      data: { label: 'Access Switch 3\nVLAN 20, 30' },
      position: { x: 600, y: 250 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\nVLAN 10' },
      position: { x: 100, y: 400 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\nVLAN 20' },
      position: { x: 300, y: 400 },
    },
    {
      id: 'pc3',
      type: 'pc',
      data: { label: 'PC3\nVLAN 10' },
      position: { x: 400, y: 400 },
    },
    {
      id: 'pc4',
      type: 'pc',
      data: { label: 'PC4\nVLAN 30' },
      position: { x: 500, y: 400 },
    },
    {
      id: 'pc5',
      type: 'pc',
      data: { label: 'PC5\nVLAN 20' },
      position: { x: 600, y: 400 },
    },
    {
      id: 'pc6',
      type: 'pc',
      data: { label: 'PC6\nVLAN 30' },
      position: { x: 700, y: 400 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e1-2',
      source: 'switch1',
      target: 'switch2',
      label: 'Trunk',
      animated: true,
    },
    {
      id: 'e1-3',
      source: 'switch1',
      target: 'switch3',
      label: 'Trunk',
      animated: true,
    },
    {
      id: 'e1-4',
      source: 'switch1',
      target: 'switch4',
      label: 'Trunk',
      animated: true,
    },
    {
      id: 'e2-pc1',
      source: 'switch2',
      target: 'pc1',
      label: 'VLAN 10',
    },
    {
      id: 'e2-pc2',
      source: 'switch2',
      target: 'pc2',
      label: 'VLAN 20',
    },
    {
      id: 'e3-pc3',
      source: 'switch3',
      target: 'pc3',
      label: 'VLAN 10',
    },
    {
      id: 'e3-pc4',
      source: 'switch3',
      target: 'pc4',
      label: 'VLAN 30',
    },
    {
      id: 'e4-pc5',
      source: 'switch4',
      target: 'pc5',
      label: 'VLAN 20',
    },
    {
      id: 'e4-pc6',
      source: 'switch4',
      target: 'pc6',
      label: 'VLAN 30',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

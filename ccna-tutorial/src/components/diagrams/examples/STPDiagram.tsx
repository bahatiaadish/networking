import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface STPDiagramProps {
  className?: string;
}

export function STPDiagram({ className = '' }: STPDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Switch 1\nRoot Bridge\nPriority: 4096' },
      position: { x: 400, y: 100 },
    },
    {
      id: 'switch2',
      type: 'switch',
      data: { label: 'Switch 2\nPriority: 8192' },
      position: { x: 200, y: 250 },
    },
    {
      id: 'switch3',
      type: 'switch',
      data: { label: 'Switch 3\nPriority: 16384' },
      position: { x: 400, y: 250 },
    },
    {
      id: 'switch4',
      type: 'switch',
      data: { label: 'Switch 4\nPriority: 32768' },
      position: { x: 600, y: 250 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1' },
      position: { x: 200, y: 400 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2' },
      position: { x: 400, y: 400 },
    },
    {
      id: 'pc3',
      type: 'pc',
      data: { label: 'PC3' },
      position: { x: 600, y: 400 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e1-2',
      source: 'switch1',
      target: 'switch2',
      label: 'Root Port',
      animated: true,
    },
    {
      id: 'e1-3',
      source: 'switch1',
      target: 'switch3',
      label: 'Root Port',
      animated: true,
    },
    {
      id: 'e1-4',
      source: 'switch1',
      target: 'switch4',
      label: 'Root Port',
      animated: true,
    },
    {
      id: 'e2-3',
      source: 'switch2',
      target: 'switch3',
      label: 'Designated Port',
    },
    {
      id: 'e3-4',
      source: 'switch3',
      target: 'switch4',
      label: 'Blocked Port',
      style: { strokeDasharray: '5, 5' },
    },
    {
      id: 'e2-4',
      source: 'switch2',
      target: 'switch4',
      label: 'Designated Port',
    },
    {
      id: 'e2-pc1',
      source: 'switch2',
      target: 'pc1',
      label: 'Designated Port',
    },
    {
      id: 'e3-pc2',
      source: 'switch3',
      target: 'pc2',
      label: 'Designated Port',
    },
    {
      id: 'e4-pc3',
      source: 'switch4',
      target: 'pc3',
      label: 'Designated Port',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

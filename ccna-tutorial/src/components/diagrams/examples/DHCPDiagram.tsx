import React from 'react';
import type { Node, Edge } from 'reactflow';
import { NetworkDiagram } from '../NetworkDiagram';

interface DHCPDiagramProps {
  className?: string;
}

export function DHCPDiagram({ className = '' }: DHCPDiagramProps) {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      data: { label: 'Router\nDHCP Server' },
      position: { x: 400, y: 100 },
    },
    {
      id: 'switch1',
      type: 'switch',
      data: { label: 'Switch' },
      position: { x: 400, y: 250 },
    },
    {
      id: 'pc1',
      type: 'pc',
      data: { label: 'PC1\nDHCP Client' },
      position: { x: 200, y: 400 },
    },
    {
      id: 'pc2',
      type: 'pc',
      data: { label: 'PC2\nDHCP Client' },
      position: { x: 400, y: 400 },
    },
    {
      id: 'pc3',
      type: 'pc',
      data: { label: 'PC3\nDHCP Client' },
      position: { x: 600, y: 400 },
    },
    {
      id: 'server1',
      type: 'server',
      data: { label: 'Server\nStatic IP: 192.168.1.10' },
      position: { x: 700, y: 250 },
    },
  ];

  const edges: Edge[] = [
    {
      id: 'e-router-switch',
      source: 'router1',
      target: 'switch1',
      label: 'DHCP Server\n192.168.1.1',
    },
    {
      id: 'e-switch-pc1',
      source: 'switch1',
      target: 'pc1',
      label: 'DHCP Discover/Offer\nRequest/ACK',
      animated: true,
    },
    {
      id: 'e-switch-pc2',
      source: 'switch1',
      target: 'pc2',
      label: 'DHCP Discover/Offer\nRequest/ACK',
      animated: true,
    },
    {
      id: 'e-switch-pc3',
      source: 'switch1',
      target: 'pc3',
      label: 'DHCP Discover/Offer\nRequest/ACK',
      animated: true,
    },
    {
      id: 'e-switch-server',
      source: 'switch1',
      target: 'server1',
      label: 'Static IP',
    },
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
}

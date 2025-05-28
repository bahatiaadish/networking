import React from 'react';
import { Node, Edge } from 'react-flow-renderer';
import { NetworkDiagram } from '../NetworkDiagram';

interface ACLDiagramProps {
  className?: string;
}

const ACLDiagram: React.FC<ACLDiagramProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'router1',
      type: 'router',
      position: { x: 250, y: 100 },
      data: { 
        label: 'Border Router', 
        ip: 'Outside: 203.0.113.1/24\nInside: 192.168.1.1/24' 
      }
    },
    {
      id: 'internet',
      type: 'cloud',
      position: { x: 100, y: 200 },
      data: { 
        label: 'Internet' 
      }
    },
    {
      id: 'internal',
      type: 'cloud',
      position: { x: 400, y: 200 },
      data: { 
        label: 'Internal Network\n192.168.1.0/24' 
      }
    },
    {
      id: 'server1',
      type: 'server',
      position: { x: 350, y: 300 },
      data: { 
        label: 'Web Server', 
        ip: '192.168.1.10/24' 
      }
    },
    {
      id: 'server2',
      type: 'server',
      position: { x: 450, y: 300 },
      data: { 
        label: 'Database Server', 
        ip: '192.168.1.20/24' 
      }
    },
    {
      id: 'pc1',
      type: 'pc',
      position: { x: 400, y: 400 },
      data: { 
        label: 'Workstation', 
        ip: '192.168.1.100/24' 
      }
    },
    {
      id: 'acl-inbound',
      type: 'cloud',
      position: { x: 175, y: 300 },
      data: { 
        label: 'Inbound ACL (100):\npermit tcp any host 192.168.1.10 eq 80\npermit tcp any host 192.168.1.10 eq 443\ndeny ip any any' 
      }
    },
    {
      id: 'acl-outbound',
      type: 'cloud',
      position: { x: 325, y: 500 },
      data: { 
        label: 'Outbound ACL (101):\npermit tcp 192.168.1.0 0.0.0.255 any eq 80\npermit tcp 192.168.1.0 0.0.0.255 any eq 443\npermit udp 192.168.1.0 0.0.0.255 any eq 53\ndeny ip any any' 
      }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'internet', 
      target: 'router1',
      label: 'ACL 100 Applied',
      animated: true
    },
    { 
      id: 'e2', 
      source: 'router1', 
      target: 'internal',
      label: 'ACL 101 Applied',
      animated: true
    },
    { id: 'e3', source: 'internal', target: 'server1' },
    { id: 'e4', source: 'internal', target: 'server2' },
    { id: 'e5', source: 'internal', target: 'pc1' },
    { 
      id: 'e6', 
      source: 'router1', 
      target: 'acl-inbound',
      style: { stroke: 'red', strokeDasharray: '5,5' }
    },
    { 
      id: 'e7', 
      source: 'router1', 
      target: 'acl-outbound',
      style: { stroke: 'red', strokeDasharray: '5,5' }
    }
  ];

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default ACLDiagram;

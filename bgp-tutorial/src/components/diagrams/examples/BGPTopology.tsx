import React from 'react';
import NetworkDiagram from '../NetworkDiagram';
import { Node, Edge } from 'react-flow-renderer';

interface BGPTopologyProps {
  type: 'enterprise' | 'isp' | 'datacenter' | 'ixp';
  className?: string;
}

const BGPTopology: React.FC<BGPTopologyProps> = ({ type, className }) => {
  let nodes: Node[] = [];
  let edges: Edge[] = [];

  switch (type) {
    case 'enterprise':
      nodes = [
        {
          id: 'enterprise-router',
          type: 'router',
          position: { x: 250, y: 200 },
          data: { label: 'Enterprise Router', asn: '65001', ip: '192.168.1.1' }
        },
        {
          id: 'isp1-router',
          type: 'router',
          position: { x: 100, y: 50 },
          data: { label: 'ISP 1 Router', asn: '64501', ip: '203.0.113.1' }
        },
        {
          id: 'isp2-router',
          type: 'router',
          position: { x: 400, y: 50 },
          data: { label: 'ISP 2 Router', asn: '64502', ip: '198.51.100.1' }
        },
        {
          id: 'internet',
          type: 'cloud',
          position: { x: 250, y: -50 },
          data: { label: 'Internet' }
        },
        {
          id: 'internal-network',
          type: 'switch',
          position: { x: 250, y: 350 },
          data: { label: 'Internal Network', ip: '10.0.0.0/24' }
        }
      ];
      
      edges = [
        { id: 'e1', source: 'enterprise-router', target: 'isp1-router', animated: true, label: 'eBGP' },
        { id: 'e2', source: 'enterprise-router', target: 'isp2-router', animated: true, label: 'eBGP' },
        { id: 'e3', source: 'isp1-router', target: 'internet', animated: true },
        { id: 'e4', source: 'isp2-router', target: 'internet', animated: true },
        { id: 'e5', source: 'enterprise-router', target: 'internal-network' }
      ];
      break;
      
    case 'isp':
      nodes = [
        {
          id: 'pe1',
          type: 'router',
          position: { x: 100, y: 200 },
          data: { label: 'PE Router 1', asn: '64500', ip: '10.0.0.1' }
        },
        {
          id: 'pe2',
          type: 'router',
          position: { x: 400, y: 200 },
          data: { label: 'PE Router 2', asn: '64500', ip: '10.0.0.2' }
        },
        {
          id: 'p1',
          type: 'router',
          position: { x: 250, y: 100 },
          data: { label: 'P Router', asn: '64500', ip: '10.0.0.3' }
        },
        {
          id: 'ce1',
          type: 'router',
          position: { x: 100, y: 350 },
          data: { label: 'CE Router 1', asn: '65001', ip: '192.168.1.1' }
        },
        {
          id: 'ce2',
          type: 'router',
          position: { x: 400, y: 350 },
          data: { label: 'CE Router 2', asn: '65001', ip: '192.168.2.1' }
        }
      ];
      
      edges = [
        { id: 'e1', source: 'pe1', target: 'p1', animated: true, label: 'MP-iBGP' },
        { id: 'e2', source: 'pe2', target: 'p1', animated: true, label: 'MP-iBGP' },
        { id: 'e3', source: 'pe1', target: 'ce1', animated: true, label: 'eBGP' },
        { id: 'e4', source: 'pe2', target: 'ce2', animated: true, label: 'eBGP' }
      ];
      break;
      
    case 'datacenter':
      nodes = [
        {
          id: 'spine1',
          type: 'router',
          position: { x: 150, y: 50 },
          data: { label: 'Spine 1', asn: '65000', ip: '10.0.0.1' }
        },
        {
          id: 'spine2',
          type: 'router',
          position: { x: 350, y: 50 },
          data: { label: 'Spine 2', asn: '65000', ip: '10.0.0.2' }
        },
        {
          id: 'leaf1',
          type: 'switch',
          position: { x: 50, y: 200 },
          data: { label: 'Leaf 1', asn: '65001', ip: '10.0.1.1' }
        },
        {
          id: 'leaf2',
          type: 'switch',
          position: { x: 200, y: 200 },
          data: { label: 'Leaf 2', asn: '65002', ip: '10.0.2.1' }
        },
        {
          id: 'leaf3',
          type: 'switch',
          position: { x: 350, y: 200 },
          data: { label: 'Leaf 3', asn: '65003', ip: '10.0.3.1' }
        },
        {
          id: 'leaf4',
          type: 'switch',
          position: { x: 500, y: 200 },
          data: { label: 'Leaf 4', asn: '65004', ip: '10.0.4.1' }
        },
        {
          id: 'server1',
          type: 'server',
          position: { x: 50, y: 350 },
          data: { label: 'Server 1', ip: '192.168.1.10' }
        },
        {
          id: 'server2',
          type: 'server',
          position: { x: 200, y: 350 },
          data: { label: 'Server 2', ip: '192.168.2.10' }
        },
        {
          id: 'server3',
          type: 'server',
          position: { x: 350, y: 350 },
          data: { label: 'Server 3', ip: '192.168.3.10' }
        },
        {
          id: 'server4',
          type: 'server',
          position: { x: 500, y: 350 },
          data: { label: 'Server 4', ip: '192.168.4.10' }
        }
      ];
      
      edges = [
        { id: 'e1', source: 'leaf1', target: 'spine1', animated: true, label: 'eBGP' },
        { id: 'e2', source: 'leaf1', target: 'spine2', animated: true, label: 'eBGP' },
        { id: 'e3', source: 'leaf2', target: 'spine1', animated: true, label: 'eBGP' },
        { id: 'e4', source: 'leaf2', target: 'spine2', animated: true, label: 'eBGP' },
        { id: 'e5', source: 'leaf3', target: 'spine1', animated: true, label: 'eBGP' },
        { id: 'e6', source: 'leaf3', target: 'spine2', animated: true, label: 'eBGP' },
        { id: 'e7', source: 'leaf4', target: 'spine1', animated: true, label: 'eBGP' },
        { id: 'e8', source: 'leaf4', target: 'spine2', animated: true, label: 'eBGP' },
        { id: 'e9', source: 'leaf1', target: 'server1' },
        { id: 'e10', source: 'leaf2', target: 'server2' },
        { id: 'e11', source: 'leaf3', target: 'server3' },
        { id: 'e12', source: 'leaf4', target: 'server4' }
      ];
      break;
      
    case 'ixp':
      nodes = [
        {
          id: 'ixp-switch',
          type: 'switch',
          position: { x: 250, y: 200 },
          data: { label: 'IXP Switch', ip: '206.53.225.0/24' }
        },
        {
          id: 'isp1',
          type: 'router',
          position: { x: 100, y: 100 },
          data: { label: 'ISP 1', asn: '64501', ip: '206.53.225.1' }
        },
        {
          id: 'isp2',
          type: 'router',
          position: { x: 400, y: 100 },
          data: { label: 'ISP 2', asn: '64502', ip: '206.53.225.2' }
        },
        {
          id: 'isp3',
          type: 'router',
          position: { x: 100, y: 300 },
          data: { label: 'ISP 3', asn: '64503', ip: '206.53.225.3' }
        },
        {
          id: 'isp4',
          type: 'router',
          position: { x: 400, y: 300 },
          data: { label: 'ISP 4', asn: '64504', ip: '206.53.225.4' }
        },
        {
          id: 'route-server',
          type: 'router',
          position: { x: 250, y: 50 },
          data: { label: 'Route Server', asn: '65000', ip: '206.53.225.254' }
        }
      ];
      
      edges = [
        { id: 'e1', source: 'isp1', target: 'ixp-switch' },
        { id: 'e2', source: 'isp2', target: 'ixp-switch' },
        { id: 'e3', source: 'isp3', target: 'ixp-switch' },
        { id: 'e4', source: 'isp4', target: 'ixp-switch' },
        { id: 'e5', source: 'route-server', target: 'ixp-switch' },
        { id: 'e6', source: 'isp1', target: 'route-server', animated: true, label: 'eBGP' },
        { id: 'e7', source: 'isp2', target: 'route-server', animated: true, label: 'eBGP' },
        { id: 'e8', source: 'isp3', target: 'route-server', animated: true, label: 'eBGP' },
        { id: 'e9', source: 'isp4', target: 'route-server', animated: true, label: 'eBGP' }
      ];
      break;
  }

  return <NetworkDiagram nodes={nodes} edges={edges} className={className} />;
};

export default BGPTopology;

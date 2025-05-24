import React from 'react';
import { Card } from '../../ui/card';
import NetworkDiagram from '../NetworkDiagram';
import { Node, Edge } from 'react-flow-renderer';

interface BGPPrefixListFilterProps {
  className?: string;
}

const BGPPrefixListFilter: React.FC<BGPPrefixListFilterProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'internet',
      type: 'cloud',
      position: { x: 250, y: 50 },
      data: { label: 'Internet' }
    },
    {
      id: 'isp-router',
      type: 'router',
      position: { x: 250, y: 150 },
      data: { label: 'ISP Router', asn: '64500', ip: '203.0.113.1' }
    },
    {
      id: 'edge-router',
      type: 'router',
      position: { x: 250, y: 250 },
      data: { label: 'Edge Router', asn: '65000', ip: '192.168.1.1' }
    },
    {
      id: 'internal-network',
      type: 'switch',
      position: { x: 250, y: 350 },
      data: { label: 'Internal Network', ip: '10.0.0.0/24' }
    }
  ];

  const edges: Edge[] = [
    { id: 'e1', source: 'internet', target: 'isp-router', animated: true },
    { id: 'e2', source: 'isp-router', target: 'edge-router', animated: true, label: 'BGP with Prefix List' },
    { id: 'e3', source: 'edge-router', target: 'internal-network' }
  ];

  const steps = [
    {
      id: 1,
      title: "Define Prefix List",
      description: "Create a prefix list to match specific IP prefixes with optional length restrictions",
      example: "ip prefix-list FILTER-IN seq 10 permit 10.0.0.0/8 le 24\nip prefix-list FILTER-IN seq 20 permit 172.16.0.0/12 le 24\nip prefix-list FILTER-IN seq 30 deny 0.0.0.0/0 le 32",
      note: "The 'le' (less than or equal) and 'ge' (greater than or equal) modifiers control prefix length matching"
    },
    {
      id: 2,
      title: "Apply to BGP Neighbor",
      description: "Apply the prefix list to inbound or outbound BGP updates",
      example: "router bgp 65000\nneighbor 203.0.113.1 prefix-list FILTER-IN in\nneighbor 203.0.113.1 prefix-list FILTER-OUT out",
      note: "Apply inbound to filter routes received from neighbors, outbound to filter routes advertised to neighbors"
    },
    {
      id: 3,
      title: "Prefix Matching Logic",
      description: "Routes are evaluated against each prefix list entry in sequence order",
      example: "! Example route: 10.1.1.0/24\n! Matches entry: permit 10.0.0.0/8 le 24\n! Action: PERMIT\n\n! Example route: 192.168.1.0/24\n! No match in prefix list\n! Default action: DENY",
      note: "If no match is found, the implicit deny is applied (all routes are denied)"
    },
    {
      id: 4,
      title: "Verification",
      description: "Verify prefix list configuration and its effect on BGP routes",
      example: "show ip prefix-list FILTER-IN\nshow ip bgp neighbor 203.0.113.1 received-routes\nshow ip bgp neighbor 203.0.113.1 routes",
      note: "Compare received-routes (before filtering) with routes (after filtering) to see the effect"
    }
  ];

  return (
    <div className={`${className || ''} space-y-6`}>
      <div className="border rounded-md p-4">
        <h4 className="text-lg font-semibold mb-3">Prefix List Filtering Topology</h4>
        <NetworkDiagram nodes={nodes} edges={edges} className="h-[300px]" />
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Prefix List Filtering Process</h4>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Card className="w-full p-4 border-2 border-green-500 bg-green-50 dark:bg-green-950 dark:border-green-700">
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mb-2">{step.description}</p>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-2">
                  <pre className="text-sm overflow-x-auto">
                    <code>{step.example}</code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{step.note}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-green-500 dark:bg-green-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BGPPrefixListFilter;

import React from 'react';
import { Card } from '../../ui/card';
import NetworkDiagram from '../NetworkDiagram';
import { Node, Edge } from 'react-flow-renderer';

interface BGPCommunityFilterProps {
  className?: string;
}

const BGPCommunityFilter: React.FC<BGPCommunityFilterProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'isp-router',
      type: 'router',
      position: { x: 250, y: 50 },
      data: { label: 'ISP Router', asn: '64500', ip: '203.0.113.1' }
    },
    {
      id: 'edge-router',
      type: 'router',
      position: { x: 250, y: 150 },
      data: { label: 'Edge Router', asn: '65000', ip: '192.168.1.1' }
    },
    {
      id: 'branch1-router',
      type: 'router',
      position: { x: 100, y: 250 },
      data: { label: 'Branch 1', asn: '65000', ip: '10.1.0.1' }
    },
    {
      id: 'branch2-router',
      type: 'router',
      position: { x: 250, y: 250 },
      data: { label: 'Branch 2', asn: '65000', ip: '10.2.0.1' }
    },
    {
      id: 'datacenter-router',
      type: 'router',
      position: { x: 400, y: 250 },
      data: { label: 'Data Center', asn: '65000', ip: '10.3.0.1' }
    }
  ];

  const edges: Edge[] = [
    { id: 'e1', source: 'isp-router', target: 'edge-router', animated: true, label: 'eBGP' },
    { id: 'e2', source: 'edge-router', target: 'branch1-router', animated: true, label: 'iBGP + Community' },
    { id: 'e3', source: 'edge-router', target: 'branch2-router', animated: true, label: 'iBGP + Community' },
    { id: 'e4', source: 'edge-router', target: 'datacenter-router', animated: true, label: 'iBGP + Community' }
  ];

  const steps = [
    {
      id: 1,
      title: "Define Community Lists",
      description: "Create community lists to match specific community values",
      example: "ip community-list 10 permit 65000:100\nip community-list 20 permit 65000:200\nip community-list 30 permit 65000:300\nip community-list 40 permit no-export",
      note: "Community values are represented as ASN:value (e.g., 65000:100)"
    },
    {
      id: 2,
      title: "Create Route Maps with Community Matching",
      description: "Define route maps that match on community values",
      example: "route-map MATCH-COMMUNITY permit 10\nmatch community 10\nset local-preference 200\n\nroute-map MATCH-COMMUNITY permit 20\nmatch community 20\nset local-preference 150",
      note: "Route maps can match on one or more community lists"
    },
    {
      id: 3,
      title: "Set Communities on Routes",
      description: "Apply communities to routes using route maps",
      example: "route-map SET-COMMUNITY permit 10\nmatch ip address prefix-list CUSTOMER-ROUTES\nset community 65000:100\n\nrouter bgp 65000\nneighbor 10.1.0.1 route-map SET-COMMUNITY out",
      note: "The 'set community' command adds communities to routes, 'set comm-list delete' removes communities"
    },
    {
      id: 4,
      title: "Apply Community-Based Filtering",
      description: "Filter or modify routes based on community values",
      example: "router bgp 65000\nneighbor 10.2.0.1 route-map MATCH-COMMUNITY in\nneighbor 10.2.0.1 send-community",
      note: "The 'send-community' command is required to propagate community values to neighbors"
    },
    {
      id: 5,
      title: "Well-Known Communities",
      description: "Use well-known communities for special handling",
      example: "route-map NO-EXPORT permit 10\nmatch ip address prefix-list INTERNAL-ROUTES\nset community no-export\n\n! Other well-known communities:\n! no-advertise - Do not advertise to any peer\n! local-as - Do not advertise outside local AS\n! internet - Advertise to the internet community",
      note: "Well-known communities trigger specific behaviors in BGP implementations"
    },
    {
      id: 6,
      title: "Verification",
      description: "Verify community configuration and its effect on BGP routes",
      example: "show ip community-list\nshow ip bgp\nshow ip bgp community 65000:100\nshow ip bgp community-list 10",
      note: "Use 'show ip bgp community exact' to match routes with only the specified communities"
    }
  ];

  return (
    <div className={`${className || ''} space-y-6`}>
      <div className="border rounded-md p-4">
        <h4 className="text-lg font-semibold mb-3">Community-Based Filtering Topology</h4>
        <NetworkDiagram nodes={nodes} edges={edges} className="h-[300px]" />
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Community Filtering Process</h4>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Card className="w-full p-4 border-2 border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-700">
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
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
                <div className="w-0.5 h-8 bg-blue-500 dark:bg-blue-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BGPCommunityFilter;

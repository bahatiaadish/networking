import React from 'react';
import { Card } from '../../ui/card';
import NetworkDiagram from '../NetworkDiagram';
import { Node, Edge } from 'react-flow-renderer';

interface BGPRouteMapFilterProps {
  className?: string;
}

const BGPRouteMapFilter: React.FC<BGPRouteMapFilterProps> = ({ className }) => {
  const nodes: Node[] = [
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
      id: 'enterprise-router',
      type: 'router',
      position: { x: 250, y: 200 },
      data: { label: 'Enterprise Router', asn: '65000', ip: '192.168.1.1' }
    },
    {
      id: 'internal-network',
      type: 'switch',
      position: { x: 250, y: 350 },
      data: { label: 'Internal Network', ip: '10.0.0.0/24' }
    }
  ];

  const edges: Edge[] = [
    { 
      id: 'e1', 
      source: 'isp1-router', 
      target: 'enterprise-router', 
      animated: true, 
      label: 'Primary (LP 200)' 
    },
    { 
      id: 'e2', 
      source: 'isp2-router', 
      target: 'enterprise-router', 
      animated: true, 
      label: 'Backup (LP 100)' 
    },
    { 
      id: 'e3', 
      source: 'enterprise-router', 
      target: 'internal-network' 
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Define Access Lists/Prefix Lists",
      description: "Create access lists or prefix lists to match specific routes",
      example: "ip prefix-list ISP1-ROUTES seq 10 permit 203.0.113.0/24\nip prefix-list ISP2-ROUTES seq 10 permit 198.51.100.0/24",
      note: "These lists will be used as match conditions in the route maps"
    },
    {
      id: 2,
      title: "Create Route Maps",
      description: "Define route maps with sequence numbers, match conditions, and set actions",
      example: "route-map PRIMARY-ISP permit 10\nmatch ip address prefix-list ISP1-ROUTES\nset local-preference 200\n\nroute-map BACKUP-ISP permit 10\nmatch ip address prefix-list ISP2-ROUTES\nset local-preference 100",
      note: "Route maps process routes sequentially through each clause until a match is found"
    },
    {
      id: 3,
      title: "Apply to BGP Neighbors",
      description: "Apply route maps to inbound or outbound BGP updates for specific neighbors",
      example: "router bgp 65000\nneighbor 203.0.113.1 route-map PRIMARY-ISP in\nneighbor 198.51.100.1 route-map BACKUP-ISP in",
      note: "Route maps can modify attributes (set) or filter routes (permit/deny)"
    },
    {
      id: 4,
      title: "Route Map Processing Logic",
      description: "Routes are processed through route map clauses in sequence order",
      example: "! Example route from ISP1: 203.0.113.0/24\n! Matches PRIMARY-ISP clause 10\n! Action: Set local-preference to 200\n\n! Example route from ISP2: 198.51.100.0/24\n! Matches BACKUP-ISP clause 10\n! Action: Set local-preference to 100",
      note: "If no match is found in any clause, the implicit deny is applied (routes are denied)"
    },
    {
      id: 5,
      title: "Verification",
      description: "Verify route map configuration and its effect on BGP routes",
      example: "show route-map PRIMARY-ISP\nshow ip bgp\nshow ip bgp neighbors 203.0.113.1 routes",
      note: "Check the local preference values to confirm route map application"
    }
  ];

  return (
    <div className={`${className || ''} space-y-6`}>
      <div className="border rounded-md p-4">
        <h4 className="text-lg font-semibold mb-3">Route Map Filtering Topology</h4>
        <NetworkDiagram nodes={nodes} edges={edges} className="h-[300px]" />
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Route Map Filtering Process</h4>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Card className="w-full p-4 border-2 border-orange-500 bg-orange-50 dark:bg-orange-950 dark:border-orange-700">
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
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
                <div className="w-0.5 h-8 bg-orange-500 dark:bg-orange-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BGPRouteMapFilter;

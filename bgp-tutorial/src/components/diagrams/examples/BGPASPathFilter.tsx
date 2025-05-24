import React from 'react';
import { Card } from '../../ui/card';
import NetworkDiagram from '../NetworkDiagram';
import { Node, Edge } from 'react-flow-renderer';

interface BGPASPathFilterProps {
  className?: string;
}

const BGPASPathFilter: React.FC<BGPASPathFilterProps> = ({ className }) => {
  const nodes: Node[] = [
    {
      id: 'as65100',
      type: 'router',
      position: { x: 100, y: 50 },
      data: { label: 'AS 65100', asn: '65100', ip: '192.168.100.1' }
    },
    {
      id: 'as65200',
      type: 'router',
      position: { x: 250, y: 50 },
      data: { label: 'AS 65200', asn: '65200', ip: '192.168.200.1' }
    },
    {
      id: 'as65300',
      type: 'router',
      position: { x: 400, y: 50 },
      data: { label: 'AS 65300', asn: '65300', ip: '192.168.300.1' }
    },
    {
      id: 'local-router',
      type: 'router',
      position: { x: 250, y: 200 },
      data: { label: 'Local Router', asn: '65000', ip: '192.168.1.1' }
    },
    {
      id: 'internal-network',
      type: 'switch',
      position: { x: 250, y: 350 },
      data: { label: 'Internal Network', ip: '10.0.0.0/24' }
    }
  ];

  const edges: Edge[] = [
    { id: 'e1', source: 'as65100', target: 'local-router', animated: true, label: 'AS Path: 65100' },
    { id: 'e2', source: 'as65200', target: 'local-router', animated: true, label: 'AS Path: 65200' },
    { id: 'e3', source: 'as65300', target: 'local-router', animated: true, label: 'AS Path: 65300' },
    { id: 'e4', source: 'local-router', target: 'internal-network' }
  ];

  const steps = [
    {
      id: 1,
      title: "Define AS Path Access List",
      description: "Create an AS path access list using regular expressions to match AS paths",
      example: "ip as-path access-list 10 permit ^65100$\nip as-path access-list 10 permit ^65100_65200\nip as-path access-list 20 deny .*65300.*",
      note: "Regular expressions match patterns in the AS_PATH attribute of BGP routes"
    },
    {
      id: 2,
      title: "Apply to BGP Neighbor",
      description: "Apply the AS path access list using a filter-list",
      example: "router bgp 65000\nneighbor 192.168.100.1 filter-list 10 in\nneighbor 192.168.300.1 filter-list 20 out",
      note: "Filter-lists can be applied in inbound or outbound direction"
    },
    {
      id: 3,
      title: "AS Path Regular Expression Patterns",
      description: "Common regular expression patterns used in AS path filtering",
      example: "^$ - Empty AS path (locally originated routes)\n^65100$ - Exactly AS 65100 and nothing else\n_65200$ - AS path ending with AS 65200\n^65100_65200 - AS path starting with 65100, followed by 65200\n.*65300.* - AS path containing AS 65300 anywhere",
      note: "The underscore (_) represents a space in the AS path display"
    },
    {
      id: 4,
      title: "AS Path Filtering Logic",
      description: "Routes are evaluated against each AS path access list entry in sequence",
      example: "! Example route with AS_PATH: 65100\n! Matches entry: permit ^65100$\n! Action: PERMIT\n\n! Example route with AS_PATH: 65300 65400\n! Matches entry: deny .*65300.*\n! Action: DENY",
      note: "If no match is found, the implicit deny is applied (all routes are denied)"
    },
    {
      id: 5,
      title: "Verification",
      description: "Verify AS path access list configuration and its effect on BGP routes",
      example: "show ip as-path-access-list\nshow ip bgp\nshow ip bgp regexp ^65100$",
      note: "The 'show ip bgp regexp' command allows testing regular expressions against the BGP table"
    }
  ];

  return (
    <div className={`${className || ''} space-y-6`}>
      <div className="border rounded-md p-4">
        <h4 className="text-lg font-semibold mb-3">AS Path Filtering Topology</h4>
        <NetworkDiagram nodes={nodes} edges={edges} className="h-[300px]" />
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">AS Path Filtering Process</h4>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <Card className="w-full p-4 border-2 border-purple-500 bg-purple-50 dark:bg-purple-950 dark:border-purple-700">
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
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
                <div className="w-0.5 h-8 bg-purple-500 dark:bg-purple-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BGPASPathFilter;

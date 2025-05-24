import React from 'react';
import { Card } from '../../ui/card';

interface BGPPathSelectionProps {
  className?: string;
}

const BGPPathSelection: React.FC<BGPPathSelectionProps> = ({ className }) => {
  const steps = [
    {
      id: 1,
      title: "Weight",
      description: "Prefer the path with the highest WEIGHT (Cisco proprietary)",
      example: "router bgp 65000\nneighbor 192.168.1.1 weight 200",
      note: "Weight is local to the router and not propagated to other routers"
    },
    {
      id: 2,
      title: "Local Preference",
      description: "Prefer the path with the highest LOCAL_PREF",
      example: "router bgp 65000\nbgp default local-preference 200",
      note: "Local preference is shared with iBGP peers but not with eBGP peers"
    },
    {
      id: 3,
      title: "Locally Originated",
      description: "Prefer locally originated routes (network, redistribute, or aggregate commands)",
      example: "router bgp 65000\nnetwork 10.0.0.0 mask 255.255.255.0",
      note: "Routes originated on the local router are preferred over those learned from peers"
    },
    {
      id: 4,
      title: "AS Path Length",
      description: "Prefer the path with the shortest AS_PATH length",
      example: "! Route with AS_PATH: 65001 65002 65003\n! is less preferred than\n! Route with AS_PATH: 65001 65002",
      note: "Shorter AS paths are preferred as they typically indicate fewer hops"
    },
    {
      id: 5,
      title: "Origin Type",
      description: "Prefer the path with the lowest origin type: IGP < EGP < Incomplete",
      example: "! IGP (i) is preferred over EGP (e) or Incomplete (?)",
      note: "IGP (i) routes are from the 'network' command, EGP (e) from external peers, and Incomplete (?) from redistribution"
    },
    {
      id: 6,
      title: "MED Value",
      description: "Prefer the path with the lowest MULTI_EXIT_DISC (MED)",
      example: "router bgp 65000\nneighbor 192.168.1.1 route-map SET-MED out\n\nroute-map SET-MED permit 10\nset metric 50",
      note: "MED is used to influence inbound traffic when there are multiple entry points to an AS"
    },
    {
      id: 7,
      title: "eBGP over iBGP",
      description: "Prefer eBGP paths over iBGP paths",
      example: "! eBGP path from AS 65001 is preferred over iBGP path within AS 65000",
      note: "External routes are preferred over internal routes"
    },
    {
      id: 8,
      title: "IGP Metric",
      description: "Prefer the path with the lowest IGP metric to the BGP next hop",
      example: "! Route with next-hop that has lower IGP cost is preferred",
      note: "This is the 'shortest exit' or 'hot potato' routing - get traffic out of your network as quickly as possible"
    },
    {
      id: 9,
      title: "Router ID",
      description: "Prefer the path from the router with the lowest BGP router ID",
      example: "router bgp 65000\nbgp router-id 10.0.0.1",
      note: "Used as a tiebreaker when all other attributes are equal"
    }
  ];

  return (
    <div className={`${className || ''} space-y-4`}>
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
  );
};

export default BGPPathSelection;

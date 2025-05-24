import React from 'react';
import FlowDiagram from '../FlowDiagram';

interface BGPCommunityFlowProps {
  className?: string;
}

const BGPCommunityFlow: React.FC<BGPCommunityFlowProps> = ({ className }) => {
  const flowData = {
    nodes: [
      {
        id: 'route',
        label: 'BGP Route',
        color: '#3182CE',
        size: 18,
      },
      {
        id: 'community-set',
        label: 'Set Community',
        color: '#3182CE',
        size: 18,
      },
      {
        id: 'peer1',
        label: 'Peer 1',
        color: '#4299E1',
        size: 16,
      },
      {
        id: 'peer2',
        label: 'Peer 2',
        color: '#4299E1',
        size: 16,
      },
      {
        id: 'peer3',
        label: 'Peer 3',
        color: '#4299E1',
        size: 16,
      },
      {
        id: 'policy1',
        label: 'Policy 1',
        color: '#2C5282',
        size: 14,
      },
      {
        id: 'policy2',
        label: 'Policy 2',
        color: '#2C5282',
        size: 14,
      },
      {
        id: 'policy3',
        label: 'Policy 3',
        color: '#2C5282',
        size: 14,
      },
      {
        id: 'action1',
        label: 'Set Local Pref',
        color: '#2B6CB0',
        size: 14,
      },
      {
        id: 'action2',
        label: 'Set MED',
        color: '#2B6CB0',
        size: 14,
      },
      {
        id: 'action3',
        label: 'Filter Route',
        color: '#2B6CB0',
        size: 14,
      },
    ],
    links: [
      {
        source: 'route',
        target: 'community-set',
        distance: 80,
      },
      {
        source: 'community-set',
        target: 'peer1',
        distance: 100,
      },
      {
        source: 'community-set',
        target: 'peer2',
        distance: 100,
      },
      {
        source: 'community-set',
        target: 'peer3',
        distance: 100,
      },
      {
        source: 'peer1',
        target: 'policy1',
        distance: 80,
      },
      {
        source: 'peer2',
        target: 'policy2',
        distance: 80,
      },
      {
        source: 'peer3',
        target: 'policy3',
        distance: 80,
      },
      {
        source: 'policy1',
        target: 'action1',
        distance: 60,
      },
      {
        source: 'policy2',
        target: 'action2',
        distance: 60,
      },
      {
        source: 'policy3',
        target: 'action3',
        distance: 60,
      },
    ],
  };

  return (
    <div className={`${className || ''} border rounded-md p-4`}>
      <h4 className="text-lg font-semibold mb-3 text-center">Community-based Policy Flow Diagram</h4>
      <div className="h-[400px] bg-gray-50 dark:bg-gray-800 rounded-md">
        <FlowDiagram data={flowData} height={400} />
      </div>
      <div className="mt-4 space-y-2">
        <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-md">
          <h5 className="font-semibold mb-1">How BGP Communities Control Routing Policy</h5>
          <p className="text-sm">
            BGP communities allow you to tag routes with specific values (e.g., 65000:100) that can be used to apply consistent policies across your network. When a route is received, its community values determine which policies are applied, affecting attributes like Local Preference, MED, or whether the route is filtered.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
          <h5 className="font-semibold mb-1">Cisco Configuration Example:</h5>
          <pre className="text-xs overflow-x-auto">
            <code>
              ! Set communities on routes<br/>
              route-map SET-COMMUNITY permit 10<br/>
              match ip address prefix-list CUSTOMER-ROUTES<br/>
              set community 65000:100<br/>
              <br/>
              ! Apply policy based on community<br/>
              ip community-list 1 permit 65000:100<br/>
              route-map COMMUNITY-POLICY permit 10<br/>
              match community 1<br/>
              set local-preference 200
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BGPCommunityFlow;

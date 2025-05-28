import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  NodeTypes,
  ConnectionLineType
} from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';

const RouterNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 rounded-md p-2 text-center">
      <div className="font-bold">{data.label}</div>
      {data.asn && <div className="text-xs">AS {data.asn}</div>}
      {data.ip && <div className="text-xs">{data.ip}</div>}
    </div>
  );
};

const FirewallNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-red-100 dark:bg-red-900 border-2 border-red-500 rounded-md p-2 text-center">
      <div className="font-bold">{data.label}</div>
      {data.ip && <div className="text-xs">{data.ip}</div>}
    </div>
  );
};

const SwitchNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-md p-2 text-center">
      <div className="font-bold">{data.label}</div>
      {data.ip && <div className="text-xs">{data.ip}</div>}
    </div>
  );
};

const ServerNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 rounded-md p-2 text-center">
      <div className="font-bold">{data.label}</div>
      {data.ip && <div className="text-xs">{data.ip}</div>}
    </div>
  );
};

const CloudNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 border-2 border-gray-500 rounded-md p-2 text-center">
      <div className="font-bold">{data.label}</div>
    </div>
  );
};

const PCNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-500 rounded-md p-2 text-center">
      <div className="font-bold">{data.label}</div>
      {data.ip && <div className="text-xs">{data.ip}</div>}
    </div>
  );
};

const nodeTypes: NodeTypes = {
  router: RouterNode,
  firewall: FirewallNode,
  switch: SwitchNode,
  server: ServerNode,
  cloud: CloudNode,
  pc: PCNode
};

interface NetworkDiagramProps {
  nodes: Node[];
  edges: Edge[];
  className?: string;
}

export const NetworkDiagram: React.FC<NetworkDiagramProps> = ({ nodes, edges, className = 'h-[400px]' }) => {
  return (
    <div className={className}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default NetworkDiagram;

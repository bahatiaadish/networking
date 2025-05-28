import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
} from 'reactflow';
import type { Node, Edge, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';

const RouterNode = ({ data }: { data: any }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-red-100 border-2 border-red-500">
    <div className="font-bold text-center">{data.label}</div>
  </div>
);

const FirewallNode = ({ data }: { data: any }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-orange-100 border-2 border-orange-500">
    <div className="font-bold text-center">{data.label}</div>
  </div>
);

const SwitchNode = ({ data }: { data: any }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-blue-100 border-2 border-blue-500">
    <div className="font-bold text-center">{data.label}</div>
  </div>
);

const ServerNode = ({ data }: { data: any }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-green-100 border-2 border-green-500">
    <div className="font-bold text-center">{data.label}</div>
  </div>
);

const CloudNode = ({ data }: { data: any }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-purple-100 border-2 border-purple-500">
    <div className="font-bold text-center">{data.label}</div>
  </div>
);

const PCNode = ({ data }: { data: any }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-gray-100 border-2 border-gray-500">
    <div className="font-bold text-center">{data.label}</div>
  </div>
);

const nodeTypes: NodeTypes = {
  router: RouterNode,
  firewall: FirewallNode,
  switch: SwitchNode,
  server: ServerNode,
  cloud: CloudNode,
  pc: PCNode,
};

interface NetworkDiagramProps {
  nodes: Node[];
  edges: Edge[];
  className?: string;
}

export function NetworkDiagram({ nodes, edges, className = '' }: NetworkDiagramProps) {
  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    console.log('Node clicked:', node);
  }, []);

  return (
    <div className={`w-full h-[500px] ${className}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

import React from 'react';
import { ResponsiveNetwork } from '@nivo/network';

interface FlowDiagramProps {
  data: {
    nodes: Array<{
      id: string;
      height?: number;
      size?: number;
      color?: string;
      [key: string]: any;
    }>;
    links: Array<{
      source: string;
      target: string;
      distance?: number;
      [key: string]: any;
    }>;
  };
  height?: number | string;
}

const FlowDiagram: React.FC<FlowDiagramProps> = ({ data, height = 400 }) => {
  return (
    <div style={{ height }}>
      <ResponsiveNetwork
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(e) => e.distance || 50}
        centeringStrength={0.3}
        repulsivity={6}
        nodeSize={(n) => n.size || 10}
        activeNodeSize={(n) => (n.size || 10) * 1.5}
        nodeColor={(e) => e.color || '#1e88e5'}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        linkThickness={(n) => 2 + (n.target.data.weight || 1) / 3}
        linkBlendMode="multiply"
        motionConfig="gentle"
      />
    </div>
  );
};

export default FlowDiagram;

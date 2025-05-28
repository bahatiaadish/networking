import React, { useState } from 'react'
import { Network, Server, Settings, BookOpen, Code, Shield, Database, Layers } from 'lucide-react'
import { VLANTopology } from './components/diagrams/examples/VLANTopology'
import { InterVLANRouting } from './components/diagrams/examples/InterVLANRouting'
import { STPDiagram } from './components/diagrams/examples/STPDiagram'
import { StaticRoutingDiagram } from './components/diagrams/examples/StaticRoutingDiagram'
import { OSPFDiagram } from './components/diagrams/examples/OSPFDiagram'
import { ACLDiagram } from './components/diagrams/examples/ACLDiagram'
import { NATDiagram } from './components/diagrams/examples/NATDiagram'
import { SubnettingDiagram } from './components/diagrams/examples/SubnettingDiagram'
import { DHCPDiagram } from './components/diagrams/examples/DHCPDiagram'

function App() {
  const [activeSection, setActiveSection] = useState('introduction')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Network className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CCNA Interactive Tutorial</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Your comprehensive guide to Cisco CCNA certification</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Topics</h2>
              <nav className="space-y-1">
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'introduction' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('introduction')}
                >
                  <Network className="mr-2 h-4 w-4" />
                  Introduction
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'vlans' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('vlans')}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  VLANs
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'interVlanRouting' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('interVlanRouting')}
                >
                  <Server className="mr-2 h-4 w-4" />
                  Inter-VLAN Routing
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'stp' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('stp')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Spanning Tree Protocol
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'staticRouting' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('staticRouting')}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Static Routing
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'ospf' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('ospf')}
                >
                  <Network className="mr-2 h-4 w-4" />
                  OSPF
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'acl' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('acl')}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Access Control Lists
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'nat' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('nat')}
                >
                  <Code className="mr-2 h-4 w-4" />
                  NAT
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'subnetting' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('subnetting')}
                >
                  <Network className="mr-2 h-4 w-4" />
                  Subnetting
                </button>
                <button 
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === 'dhcp' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSection('dhcp')}
                >
                  <Database className="mr-2 h-4 w-4" />
                  DHCP
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              {activeSection === 'introduction' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to CCNA</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      The Cisco Certified Network Associate (CCNA) certification is a foundation-level certification for IT networking professionals. This interactive tutorial covers key routing and switching topics required for the CCNA certification.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">What is CCNA?</h3>
                        <p>CCNA is Cisco's entry-level networking certification that validates your ability to install, configure, operate, and troubleshoot medium-sized routed and switched networks. It covers fundamental networking concepts and skills.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Key Topics</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Network fundamentals</li>
                          <li>Network access (VLANs, STP)</li>
                          <li>IP connectivity (routing)</li>
                          <li>IP services (NAT, DHCP)</li>
                          <li>Security fundamentals (ACLs)</li>
                          <li>Automation and programmability</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">How to Use This Tutorial</h3>
                      <p className="mb-3">This interactive tutorial is designed to help you understand CCNA routing and switching concepts through:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Interactive network diagrams that visualize key concepts</li>
                        <li>Practical configuration examples for Cisco devices</li>
                        <li>Explanations of important protocols and technologies</li>
                        <li>Best practices for network design and implementation</li>
                      </ul>
                      <p className="mt-3">Navigate through the topics using the sidebar to explore different CCNA concepts.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'vlans' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Virtual LANs (VLANs)</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Virtual LANs (VLANs) allow network administrators to create logically separate networks on the same physical infrastructure, improving security, performance, and management.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">VLAN Fundamentals</h3>
                        <p>VLANs are used to segment a network without requiring separate physical switches. Each VLAN is its own broadcast domain, and traffic between VLANs requires a router or Layer 3 switch.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">VLAN Types</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Data VLAN</strong>: Carries user-generated traffic</li>
                          <li><strong>Default VLAN</strong>: VLAN 1, all ports belong to it by default</li>
                          <li><strong>Native VLAN</strong>: Untagged VLAN on a trunk link</li>
                          <li><strong>Management VLAN</strong>: Used for switch management</li>
                          <li><strong>Voice VLAN</strong>: Carries voice traffic with QoS</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">VLAN Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Create VLANs
Switch(config)# vlan 10
Switch(config-vlan)# name Engineering
Switch(config-vlan)# exit
Switch(config)# vlan 20
Switch(config-vlan)# name Marketing
Switch(config-vlan)# exit

! Configure access ports
Switch(config)# interface range fa0/1-5
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# exit

Switch(config)# interface range fa0/6-10
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 20
Switch(config-if-range)# exit

! Configure trunk port
Switch(config)# interface gi0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20
Switch(config-if)# exit`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">VLAN Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <VLANTopology className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">VLAN Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Don't use VLAN 1 for user traffic</li>
                        <li>Use a dedicated management VLAN</li>
                        <li>Disable unused ports and assign them to an unused VLAN</li>
                        <li>Document VLAN assignments and purposes</li>
                        <li>Use VTP with caution or in transparent mode</li>
                        <li>Secure trunk ports by explicitly defining allowed VLANs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'interVlanRouting' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Inter-VLAN Routing</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Inter-VLAN routing allows communication between different VLANs. Since VLANs are separate broadcast domains, a Layer 3 device is required to route traffic between them.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Router-on-a-Stick</h3>
                        <p>A router with a single physical interface connected to a switch trunk port. The router interface is configured with subinterfaces, each mapped to a different VLAN.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Layer 3 Switch</h3>
                        <p>A switch with routing capabilities that can route between VLANs internally without requiring an external router. This provides better performance for inter-VLAN routing.</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Router-on-a-Stick Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure router subinterfaces
Router(config)# interface g0/0
Router(config-if)# no shutdown
Router(config-if)# exit

Router(config)# interface g0/0.10
Router(config-subif)# encapsulation dot1q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit

Router(config)# interface g0/0.20
Router(config-subif)# encapsulation dot1q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# exit

Router(config)# interface g0/0.30
Router(config-subif)# encapsulation dot1q 30
Router(config-subif)# ip address 192.168.30.1 255.255.255.0
Router(config-subif)# exit`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Layer 3 Switch Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Enable IP routing on the switch
Switch(config)# ip routing

! Create VLAN interfaces
Switch(config)# interface vlan 10
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config-if)# no shutdown
Switch(config-if)# exit

Switch(config)# interface vlan 20
Switch(config-if)# ip address 192.168.20.1 255.255.255.0
Switch(config-if)# no shutdown
Switch(config-if)# exit

Switch(config)# interface vlan 30
Switch(config-if)# ip address 192.168.30.1 255.255.255.0
Switch(config-if)# no shutdown
Switch(config-if)# exit`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Inter-VLAN Routing Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <InterVLANRouting className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Inter-VLAN Routing Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use Layer 3 switches for better performance when possible</li>
                        <li>Implement security measures like ACLs between VLANs</li>
                        <li>Use router-on-a-stick for small networks or when Layer 3 switches are not available</li>
                        <li>Ensure trunk links have sufficient bandwidth for inter-VLAN traffic</li>
                        <li>Consider using multiple physical interfaces for redundancy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'stp' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Spanning Tree Protocol (STP)</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Spanning Tree Protocol (STP) prevents loops in switched networks by selectively blocking redundant paths while maintaining network connectivity.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">STP Fundamentals</h3>
                        <p>STP is a Layer 2 protocol that ensures a loop-free topology in networks with redundant links. It elects a root bridge and determines which ports should be in forwarding or blocking state.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">STP Port States</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Blocking</strong>: Does not forward frames, listens to BPDUs</li>
                          <li><strong>Listening</strong>: Transitional state, processes BPDUs</li>
                          <li><strong>Learning</strong>: Builds MAC address table, doesn't forward frames</li>
                          <li><strong>Forwarding</strong>: Normal operation, forwards frames</li>
                          <li><strong>Disabled</strong>: Administratively shut down</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">STP Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure the root bridge
Switch(config)# spanning-tree vlan 1 priority 4096

! Configure a backup root bridge
Switch(config)# spanning-tree vlan 1 priority 8192

! Configure port cost
Switch(config)# interface fa0/1
Switch(config-if)# spanning-tree cost 100
Switch(config-if)# exit

! Configure port priority
Switch(config)# interface fa0/2
Switch(config-if)# spanning-tree port-priority 64
Switch(config-if)# exit

! Enable Rapid STP
Switch(config)# spanning-tree mode rapid-pvst`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">STP Variants</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">PVST+ (Per-VLAN Spanning Tree Plus)</h4>
                          <p>Cisco proprietary, runs a separate STP instance for each VLAN.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Rapid STP (RSTP)</h4>
                          <p>IEEE 802.1w, faster convergence than traditional STP.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Multiple STP (MSTP)</h4>
                          <p>IEEE 802.1s, maps multiple VLANs to a single STP instance.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Rapid PVST+</h4>
                          <p>Cisco's implementation of RSTP that maintains a separate instance per VLAN.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">STP Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <STPDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">STP Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Manually configure root bridges and backup root bridges</li>
                        <li>Use Rapid PVST+ or MSTP for faster convergence</li>
                        <li>Enable PortFast on access ports connected to end devices</li>
                        <li>Enable BPDU Guard on PortFast-enabled ports</li>
                        <li>Enable Root Guard on ports that should not become root ports</li>
                        <li>Document your STP topology and root bridge assignments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'staticRouting' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Static Routing</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Static routing involves manually configuring routes in a router's routing table. Unlike dynamic routing protocols, static routes do not adapt to network changes automatically.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Static Routing Advantages</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>No routing protocol overhead (CPU, bandwidth)</li>
                          <li>No route advertisements over the network</li>
                          <li>Improved security (routes are predictable)</li>
                          <li>Simple to implement in small networks</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Static Routing Disadvantages</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Does not scale well in large networks</li>
                          <li>No automatic adaptation to network changes</li>
                          <li>Requires manual reconfiguration when topology changes</li>
                          <li>Prone to human error during configuration</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Static Route Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Basic static route
Router(config)# ip route 192.168.2.0 255.255.255.0 192.168.1.2

! Static route with exit interface
Router(config)# ip route 192.168.3.0 255.255.255.0 GigabitEthernet0/1

! Static route with both next-hop and exit interface
Router(config)# ip route 192.168.4.0 255.255.255.0 GigabitEthernet0/2 192.168.5.2

! Default static route
Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.1

! Floating static route (backup route with higher administrative distance)
Router(config)# ip route 192.168.2.0 255.255.255.0 192.168.10.2 150`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Static Routing Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <StaticRoutingDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Static Routing Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use static routes for small networks or stub networks</li>
                        <li>Implement default routes at network edges</li>
                        <li>Consider floating static routes as backups to dynamic routes</li>
                        <li>Document all static routes thoroughly</li>
                        <li>Use IP address summarization when possible</li>
                        <li>Verify connectivity after adding static routes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Common Static Routing Use Cases</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">Stub Networks</h4>
                          <p>Networks with only one entry/exit point, making dynamic routing unnecessary.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Default Routes</h4>
                          <p>Used to direct traffic to an ISP or next-hop when no specific route exists.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Backup Routes</h4>
                          <p>Floating static routes with higher administrative distance than dynamic routes.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Security Requirements</h4>
                          <p>When predictable routing paths are required for security or compliance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'ospf' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">OSPF (Open Shortest Path First)</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      OSPF is a link-state routing protocol that uses Dijkstra's algorithm to calculate the shortest path to each destination. It's widely used in enterprise networks and supports large-scale deployments.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">OSPF Characteristics</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Link-state protocol (vs. distance vector)</li>
                          <li>Uses cost as metric (based on bandwidth)</li>
                          <li>Classless protocol (supports VLSM and CIDR)</li>
                          <li>Fast convergence compared to RIP</li>
                          <li>Uses multicast addresses (224.0.0.5 and 224.0.0.6)</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">OSPF Packet Types</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Hello</strong>: Discovers neighbors and maintains adjacencies</li>
                          <li><strong>Database Description (DBD)</strong>: Summarizes database contents</li>
                          <li><strong>Link State Request (LSR)</strong>: Requests specific LSAs</li>
                          <li><strong>Link State Update (LSU)</strong>: Sends requested LSAs</li>
                          <li><strong>Link State Acknowledgment (LSAck)</strong>: Acknowledges LSUs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">OSPF Areas</h3>
                      <p className="mb-3">OSPF uses a hierarchical design with areas to reduce routing overhead and improve scalability:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">Backbone Area (Area 0)</h4>
                          <p>Central area that all other areas must connect to, directly or via virtual links.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Standard Area</h4>
                          <p>Regular area that accepts LSAs and maintains a full link-state database.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Stub Area</h4>
                          <p>Does not receive external LSAs; uses default route for external destinations.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Totally Stubby Area</h4>
                          <p>Cisco proprietary; blocks external and inter-area LSAs.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">OSPF Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Enable OSPF process with process ID 1
Router(config)# router ospf 1

! Configure router ID
Router(config-router)# router-id 1.1.1.1

! Add networks to OSPF
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 192.168.2.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.255 area 1

! Configure interface cost
Router(config)# interface g0/0
Router(config-if)# ip ospf cost 100
Router(config-if)# exit

! Configure OSPF priority for DR/BDR election
Router(config)# interface g0/1
Router(config-if)# ip ospf priority 200
Router(config-if)# exit

! Configure passive interface
Router(config-router)# passive-interface g0/2`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">OSPF Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <OSPFDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">OSPF Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Explicitly configure router IDs for stability</li>
                        <li>Use area design to reduce routing overhead</li>
                        <li>Configure passive interfaces for security and efficiency</li>
                        <li>Implement authentication between OSPF neighbors</li>
                        <li>Tune hello and dead intervals for faster convergence when needed</li>
                        <li>Use summarization at area boundaries to reduce routing table size</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'acl' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Access Control Lists (ACLs)</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Access Control Lists (ACLs) are used to filter network traffic by permitting or denying packets based on source and destination addresses, protocols, and ports.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Standard ACLs</h3>
                        <p>Filter traffic based on source IP address only. Numbered 1-99 and 1300-1999.</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>Simple to configure</li>
                          <li>Applied close to destination</li>
                          <li>Less granular control</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Extended ACLs</h3>
                        <p>Filter traffic based on source and destination IP, protocol, and port numbers. Numbered 100-199 and 2000-2699.</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>More granular control</li>
                          <li>Applied close to source</li>
                          <li>More complex configuration</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">ACL Processing Logic</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ACLs are processed in sequential order, from top to bottom</li>
                        <li>Once a match is found, the action is taken and no further processing occurs</li>
                        <li>If no match is found, the packet is denied (implicit deny at the end)</li>
                        <li>More specific entries should be placed before more general ones</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Standard ACL Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Create a standard ACL
Router(config)# access-list 10 permit 192.168.1.0 0.0.0.255
Router(config)# access-list 10 deny any

! Apply the ACL to an interface
Router(config)# interface g0/0
Router(config-if)# ip access-group 10 out
Router(config-if)# exit

! Named standard ACL (more readable)
Router(config)# ip access-list standard BLOCK_SALES
Router(config-std-nacl)# deny 192.168.2.0 0.0.0.255
Router(config-std-nacl)# permit any
Router(config-std-nacl)# exit

Router(config)# interface g0/1
Router(config-if)# ip access-group BLOCK_SALES in
Router(config-if)# exit`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Extended ACL Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Create an extended ACL
Router(config)# access-list 101 permit tcp 192.168.1.0 0.0.0.255 any eq 80
Router(config)# access-list 101 permit tcp 192.168.1.0 0.0.0.255 any eq 443
Router(config)# access-list 101 deny ip any any

! Apply the ACL to an interface
Router(config)# interface g0/0
Router(config-if)# ip access-group 101 in
Router(config-if)# exit

! Named extended ACL
Router(config)# ip access-list extended WEB_TRAFFIC
Router(config-ext-nacl)# permit tcp any host 192.168.2.25 eq 80
Router(config-ext-nacl)# permit tcp any host 192.168.2.25 eq 443
Router(config-ext-nacl)# deny tcp any any eq 23
Router(config-ext-nacl)# permit ip any any
Router(config-ext-nacl)# exit

Router(config)# interface g0/1
Router(config-if)# ip access-group WEB_TRAFFIC in
Router(config-if)# exit`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">ACL Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <ACLDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">ACL Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use named ACLs for better readability and management</li>
                        <li>Place standard ACLs close to the destination</li>
                        <li>Place extended ACLs close to the source</li>
                        <li>Place more specific statements before more general ones</li>
                        <li>Don't configure ACLs on interfaces unnecessarily</li>
                        <li>Document your ACLs thoroughly</li>
                        <li>Test ACLs in a lab environment before deploying in production</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'nat' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Network Address Translation (NAT)</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Network Address Translation (NAT) allows private IP addresses to be translated into public IP addresses, enabling multiple devices to share a single public IP address and access the internet.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">NAT Types</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Static NAT</strong>: One-to-one mapping between private and public IP addresses</li>
                          <li><strong>Dynamic NAT</strong>: Many-to-many mapping from a pool of public IP addresses</li>
                          <li><strong>PAT/NAT Overload</strong>: Many-to-one mapping using ports to track connections</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">NAT Terminology</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Inside Local</strong>: Private IP address of internal device</li>
                          <li><strong>Inside Global</strong>: Public IP address that represents internal device</li>
                          <li><strong>Outside Local</strong>: IP address of external device as seen from inside</li>
                          <li><strong>Outside Global</strong>: Public IP address of external device</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Static NAT Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure interfaces
Router(config)# interface g0/0
Router(config-if)# ip address 203.0.113.2 255.255.255.0
Router(config-if)# ip nat outside
Router(config-if)# exit

Router(config)# interface g0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

! Configure static NAT mapping
Router(config)# ip nat inside source static 192.168.1.10 203.0.113.10
Router(config)# ip nat inside source static 192.168.1.20 203.0.113.11`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Dynamic NAT Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure interfaces
Router(config)# interface g0/0
Router(config-if)# ip address 203.0.113.2 255.255.255.0
Router(config-if)# ip nat outside
Router(config-if)# exit

Router(config)# interface g0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

! Define pool of public addresses
Router(config)# ip nat pool PUBLIC_POOL 203.0.113.20 203.0.113.30 netmask 255.255.255.0

! Define ACL for internal addresses
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! Associate ACL with NAT pool
Router(config)# ip nat inside source list 1 pool PUBLIC_POOL`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">PAT/NAT Overload Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure interfaces
Router(config)# interface g0/0
Router(config-if)# ip address 203.0.113.2 255.255.255.0
Router(config-if)# ip nat outside
Router(config-if)# exit

Router(config)# interface g0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

! Define ACL for internal addresses
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! Configure PAT (NAT Overload)
Router(config)# ip nat inside source list 1 interface g0/0 overload`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Port Forwarding Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure port forwarding for web server
Router(config)# ip nat inside source static tcp 192.168.1.30 80 203.0.113.2 80
Router(config)# ip nat inside source static tcp 192.168.1.30 443 203.0.113.2 443`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">NAT Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <NATDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">NAT Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use PAT (NAT Overload) for most small to medium networks</li>
                        <li>Reserve static NAT for servers that need consistent public addressing</li>
                        <li>Implement proper security measures alongside NAT</li>
                        <li>Document all NAT mappings, especially static ones</li>
                        <li>Monitor NAT translation table size to prevent overflow</li>
                        <li>Consider NAT64 for IPv6 transition scenarios</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'subnetting' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">IP Addressing and Subnetting</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Subnetting is the practice of dividing a network into smaller logical subnetworks. It allows for more efficient use of IP addresses and improved network security and management.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">IP Address Classes</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Class A</strong>: 1.0.0.0 to 126.255.255.255 (/8)</li>
                          <li><strong>Class B</strong>: 128.0.0.0 to 191.255.255.255 (/16)</li>
                          <li><strong>Class C</strong>: 192.0.0.0 to 223.255.255.255 (/24)</li>
                          <li><strong>Class D</strong>: 224.0.0.0 to 239.255.255.255 (Multicast)</li>
                          <li><strong>Class E</strong>: 240.0.0.0 to 255.255.255.255 (Reserved)</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Private IP Ranges</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Class A</strong>: 10.0.0.0 to 10.255.255.255 (10.0.0.0/8)</li>
                          <li><strong>Class B</strong>: 172.16.0.0 to 172.31.255.255 (172.16.0.0/12)</li>
                          <li><strong>Class C</strong>: 192.168.0.0 to 192.168.255.255 (192.168.0.0/16)</li>
                          <li><strong>APIPA</strong>: 169.254.0.0 to 169.254.255.255 (169.254.0.0/16)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Subnetting Concepts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">Subnet Mask</h4>
                          <p>Defines which portion of an IP address is the network ID and which is the host ID.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">CIDR Notation</h4>
                          <p>Represents the subnet mask as a prefix length (e.g., /24 for 255.255.255.0).</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Network Address</h4>
                          <p>First address in a subnet, with all host bits set to 0.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Broadcast Address</h4>
                          <p>Last address in a subnet, with all host bits set to 1.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Subnetting Example</h3>
                      <p className="mb-3">Dividing 192.168.1.0/24 into four equal subnets:</p>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`Original Network: 192.168.1.0/24 (255.255.255.0)
Subnet 1: 192.168.1.0/26 (255.255.255.192)
  - Network Address: 192.168.1.0
  - First Usable IP: 192.168.1.1
  - Last Usable IP: 192.168.1.62
  - Broadcast Address: 192.168.1.63

Subnet 2: 192.168.1.64/26 (255.255.255.192)
  - Network Address: 192.168.1.64
  - First Usable IP: 192.168.1.65
  - Last Usable IP: 192.168.1.126
  - Broadcast Address: 192.168.1.127

Subnet 3: 192.168.1.128/26 (255.255.255.192)
  - Network Address: 192.168.1.128
  - First Usable IP: 192.168.1.129
  - Last Usable IP: 192.168.1.190
  - Broadcast Address: 192.168.1.191

Subnet 4: 192.168.1.192/26 (255.255.255.192)
  - Network Address: 192.168.1.192
  - First Usable IP: 192.168.1.193
  - Last Usable IP: 192.168.1.254
  - Broadcast Address: 192.168.1.255`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">VLSM (Variable Length Subnet Masking)</h3>
                      <p className="mb-3">VLSM allows for subnets of different sizes within the same network, optimizing IP address usage:</p>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`Original Network: 192.168.1.0/24

Subnet A (100 hosts): 192.168.1.0/25
  - 126 usable addresses (192.168.1.1 - 192.168.1.126)
  - Broadcast: 192.168.1.127

Subnet B (50 hosts): 192.168.1.128/26
  - 62 usable addresses (192.168.1.129 - 192.168.1.190)
  - Broadcast: 192.168.1.191

Subnet C (20 hosts): 192.168.1.192/27
  - 30 usable addresses (192.168.1.193 - 192.168.1.222)
  - Broadcast: 192.168.1.223

Subnet D (10 hosts): 192.168.1.224/28
  - 14 usable addresses (192.168.1.225 - 192.168.1.238)
  - Broadcast: 192.168.1.239`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Subnetting Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <SubnettingDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">Subnetting Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Plan your IP addressing scheme before implementation</li>
                        <li>Use VLSM to optimize address space utilization</li>
                        <li>Document your subnetting scheme thoroughly</li>
                        <li>Reserve space for future growth</li>
                        <li>Consider using summarization where possible</li>
                        <li>Align subnet boundaries with security zones</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'dhcp' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">DHCP (Dynamic Host Configuration Protocol)</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      DHCP automates the assignment of IP addresses, subnet masks, default gateways, and other network parameters to devices on a network, eliminating the need for manual configuration.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">DHCP Operation</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>DHCP Discover</strong>: Client broadcasts to find DHCP servers</li>
                          <li><strong>DHCP Offer</strong>: Server offers IP address and configuration</li>
                          <li><strong>DHCP Request</strong>: Client requests the offered IP address</li>
                          <li><strong>DHCP Acknowledgment</strong>: Server confirms the assignment</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">DHCP Message Types</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>DHCPDISCOVER</strong>: Broadcast from client (UDP port 68 to 67)</li>
                          <li><strong>DHCPOFFER</strong>: Response from server with lease offer</li>
                          <li><strong>DHCPREQUEST</strong>: Client accepts offer or renews lease</li>
                          <li><strong>DHCPACK</strong>: Server acknowledges request</li>
                          <li><strong>DHCPNAK</strong>: Server rejects request</li>
                          <li><strong>DHCPDECLINE</strong>: Client declines offer</li>
                          <li><strong>DHCPRELEASE</strong>: Client releases IP address</li>
                          <li><strong>DHCPINFORM</strong>: Client requests local configuration</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">DHCP Server Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Create DHCP pool
Router(config)# ip dhcp pool OFFICE_NETWORK
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
Router(dhcp-config)# domain-name example.com
Router(dhcp-config)# lease 7

! Exclude addresses from DHCP pool (for static assignments)
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.20

! Configure DHCP relay (for clients on different subnet)
Router(config)# interface g0/0
Router(config-if)# ip helper-address 10.1.1.2`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">DHCP Client Configuration (Cisco IOS)</h3>
                      <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md overflow-x-auto">
                        <code>
                          {`! Configure interface as DHCP client
Router(config)# interface g0/1
Router(config-if)# ip address dhcp
Router(config-if)# no shutdown

! Verify DHCP-assigned address
Router# show ip interface g0/1
Router# show dhcp lease`}
                        </code>
                      </pre>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">DHCP Options</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">Option 1: Subnet Mask</h4>
                          <p>Defines the subnet mask for the client.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Option 3: Router</h4>
                          <p>Specifies the default gateway for the client.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Option 6: DNS Servers</h4>
                          <p>Provides DNS server addresses to the client.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Option 15: Domain Name</h4>
                          <p>Specifies the domain name for the client.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Option 51: Lease Time</h4>
                          <p>Defines how long the client can use the assigned IP.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Option 66: TFTP Server</h4>
                          <p>Used for network boot and configuration.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">DHCP Topology</h3>
                      <div className="mt-4 border rounded-md p-4">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <DHCPDiagram className="mt-4" />
                        </React.Suspense>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-6">
                      <h3 className="text-lg font-semibold mb-2">DHCP Best Practices</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Implement DHCP server redundancy for high availability</li>
                        <li>Use DHCP snooping to protect against rogue DHCP servers</li>
                        <li>Configure appropriate lease times based on network needs</li>
                        <li>Reserve IP addresses for devices that require static IPs</li>
                        <li>Document DHCP scopes and reservations</li>
                        <li>Monitor DHCP server logs for troubleshooting</li>
                        <li>Consider using DHCP options for IP phone and PXE boot configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

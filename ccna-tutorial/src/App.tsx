import { useState, Suspense } from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from './components/ui/card'
import { Button } from './components/ui/button'
import { Network, Globe, Server, Settings, Filter, Shield, Wifi, Layers, Router, Database } from 'lucide-react'
import VLANTopology from './components/diagrams/examples/VLANTopology'
import InterVLANRouting from './components/diagrams/examples/InterVLANRouting'
import STPDiagram from './components/diagrams/examples/STPDiagram'
import StaticRoutingDiagram from './components/diagrams/examples/StaticRoutingDiagram'
import OSPFDiagram from './components/diagrams/examples/OSPFDiagram'
import ACLDiagram from './components/diagrams/examples/ACLDiagram'
import NATDiagram from './components/diagrams/examples/NATDiagram'
import SubnettingDiagram from './components/diagrams/examples/SubnettingDiagram'
import DHCPDiagram from './components/diagrams/examples/DHCPDiagram'

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
            <p className="text-gray-600 dark:text-gray-300">Your comprehensive guide to Cisco Certified Network Associate</p>
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
                <Button 
                  variant={activeSection === 'introduction' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('introduction')}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Introduction
                </Button>
                <Button 
                  variant={activeSection === 'vlans' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('vlans')}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  VLANs
                </Button>
                <Button 
                  variant={activeSection === 'interVlanRouting' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('interVlanRouting')}
                >
                  <Router className="mr-2 h-4 w-4" />
                  Inter-VLAN Routing
                </Button>
                <Button 
                  variant={activeSection === 'stp' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('stp')}
                >
                  <Network className="mr-2 h-4 w-4" />
                  Spanning Tree Protocol
                </Button>
                <Button 
                  variant={activeSection === 'staticRouting' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('staticRouting')}
                >
                  <Server className="mr-2 h-4 w-4" />
                  Static Routing
                </Button>
                <Button 
                  variant={activeSection === 'ospf' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('ospf')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  OSPF
                </Button>
                <Button 
                  variant={activeSection === 'acl' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('acl')}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Access Control Lists
                </Button>
                <Button 
                  variant={activeSection === 'nat' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('nat')}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Network Address Translation
                </Button>
                <Button 
                  variant={activeSection === 'subnetting' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('subnetting')}
                >
                  <Wifi className="mr-2 h-4 w-4" />
                  Subnetting
                </Button>
                <Button 
                  variant={activeSection === 'dhcp' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('dhcp')}
                >
                  <Database className="mr-2 h-4 w-4" />
                  DHCP
                </Button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              {/* Introduction Section */}
              {activeSection === 'introduction' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction to CCNA</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg">
                      The Cisco Certified Network Associate (CCNA) certification is a foundation for all networking professionals. This interactive tutorial covers the essential routing and switching topics required for the CCNA exam.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>What is CCNA?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>CCNA is Cisco's entry-level networking certification that validates your ability to install, configure, operate, and troubleshoot medium-sized routed and switched networks. It covers fundamental networking concepts and provides a foundation for advanced networking technologies.</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Key Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Network fundamentals</li>
                            <li>Network access (VLANs, trunking)</li>
                            <li>IP connectivity (routing)</li>
                            <li>IP services (NAT, DHCP)</li>
                            <li>Security fundamentals (ACLs)</li>
                            <li>Automation and programmability</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>CCNA vs Other Certifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border p-2 text-left">Certification</th>
                                <th className="border p-2 text-left">Level</th>
                                <th className="border p-2 text-left">Focus</th>
                                <th className="border p-2 text-left">Prerequisites</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">CCNA</td>
                                <td className="border p-2">Associate</td>
                                <td className="border p-2">Networking Fundamentals</td>
                                <td className="border p-2">None</td>
                              </tr>
                              <tr>
                                <td className="border p-2">CCNP</td>
                                <td className="border p-2">Professional</td>
                                <td className="border p-2">Advanced Networking</td>
                                <td className="border p-2">CCNA (recommended)</td>
                              </tr>
                              <tr>
                                <td className="border p-2">CCIE</td>
                                <td className="border p-2">Expert</td>
                                <td className="border p-2">Expert-level Networking</td>
                                <td className="border p-2">CCNP (recommended)</td>
                              </tr>
                              <tr>
                                <td className="border p-2">CompTIA Network+</td>
                                <td className="border p-2">Associate</td>
                                <td className="border p-2">Vendor-neutral Networking</td>
                                <td className="border p-2">None</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'vlans' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Virtual Local Area Networks (VLANs)</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      VLANs allow you to logically segment a LAN into different broadcast domains, providing improved security, management, and scalability.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>VLAN Concepts</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">A VLAN is a logical grouping of network devices that appear to be on the same LAN regardless of their physical location.</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Broadcast Domain</strong>: Each VLAN is a separate broadcast domain</li>
                            <li><strong>Security</strong>: Devices in different VLANs cannot communicate directly without a router</li>
                            <li><strong>Flexibility</strong>: Network segmentation without physical recabling</li>
                            <li><strong>Management</strong>: Simplified network administration</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>VLAN Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Data VLAN</strong>: Carries user-generated traffic</li>
                            <li><strong>Management VLAN</strong>: Used for switch management</li>
                            <li><strong>Native VLAN</strong>: Untagged VLAN on a trunk link (typically VLAN 1)</li>
                            <li><strong>Voice VLAN</strong>: Dedicated for voice traffic (IP phones)</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>VLAN Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Basic VLAN configuration on a Cisco switch:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Create VLANs<br/>
                            Switch(config)# vlan 10<br/>
                            Switch(config-vlan)# name Engineering<br/>
                            Switch(config-vlan)# exit<br/>
                            Switch(config)# vlan 20<br/>
                            Switch(config-vlan)# name Accounting<br/>
                            Switch(config-vlan)# exit<br/>
                            <br/>
                            ! Assign ports to VLANs<br/>
                            Switch(config)# interface range fa0/1-8<br/>
                            Switch(config-if-range)# switchport mode access<br/>
                            Switch(config-if-range)# switchport access vlan 10<br/>
                            Switch(config-if-range)# exit<br/>
                            <br/>
                            Switch(config)# interface range fa0/9-16<br/>
                            Switch(config-if-range)# switchport mode access<br/>
                            Switch(config-if-range)# switchport access vlan 20<br/>
                            Switch(config-if-range)# exit<br/>
                            <br/>
                            ! Configure trunk port<br/>
                            Switch(config)# interface gi0/1<br/>
                            Switch(config-if)# switchport mode trunk<br/>
                            Switch(config-if)# switchport trunk allowed vlan 10,20<br/>
                            Switch(config-if)# exit
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>VLAN Topology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">A typical VLAN implementation separates different departments into their own broadcast domains:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">VLAN Network Topology</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <VLANTopology className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'interVlanRouting' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Inter-VLAN Routing</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Inter-VLAN routing allows communication between different VLANs using a Layer 3 device like a router or a multilayer switch.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Router-on-a-Stick</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">A single physical interface on a router is configured with multiple subinterfaces, each mapped to a different VLAN.</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Advantages</strong>: Simple to implement, requires minimal hardware</li>
                            <li><strong>Disadvantages</strong>: Limited by the bandwidth of a single interface, single point of failure</li>
                            <li><strong>Use Case</strong>: Small to medium networks with moderate inter-VLAN traffic</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Multilayer Switching</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">A Layer 3 switch performs both switching and routing functions.</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Advantages</strong>: High performance, reduced latency, hardware-based routing</li>
                            <li><strong>Disadvantages</strong>: More expensive than traditional switches</li>
                            <li><strong>Use Case</strong>: Medium to large networks with high inter-VLAN traffic</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Router-on-a-Stick Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Configuration example for router-on-a-stick:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Configure the physical interface<br/>
                            Router(config)# interface GigabitEthernet0/0<br/>
                            Router(config-if)# no shutdown<br/>
                            Router(config-if)# exit<br/>
                            <br/>
                            ! Configure subinterface for VLAN 10<br/>
                            Router(config)# interface GigabitEthernet0/0.10<br/>
                            Router(config-subif)# encapsulation dot1Q 10<br/>
                            Router(config-subif)# ip address 192.168.10.1 255.255.255.0<br/>
                            Router(config-subif)# exit<br/>
                            <br/>
                            ! Configure subinterface for VLAN 20<br/>
                            Router(config)# interface GigabitEthernet0/0.20<br/>
                            Router(config-subif)# encapsulation dot1Q 20<br/>
                            Router(config-subif)# ip address 192.168.20.1 255.255.255.0<br/>
                            Router(config-subif)# exit<br/>
                            <br/>
                            ! Configure subinterface for VLAN 30<br/>
                            Router(config)# interface GigabitEthernet0/0.30<br/>
                            Router(config-subif)# encapsulation dot1Q 30<br/>
                            Router(config-subif)# ip address 192.168.30.1 255.255.255.0<br/>
                            Router(config-subif)# exit
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Inter-VLAN Routing Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Router-on-a-stick implementation for inter-VLAN routing:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">Inter-VLAN Routing Topology</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <InterVLANRouting className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'stp' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Spanning Tree Protocol (STP)</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Spanning Tree Protocol (STP) prevents loops in switched networks by selectively blocking redundant paths while maintaining network connectivity.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>STP Concepts</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">STP creates a loop-free logical topology in networks with redundant links.</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Root Bridge</strong>: Switch with the lowest bridge ID (priority + MAC)</li>
                            <li><strong>Root Port</strong>: Port with the lowest path cost to the root bridge</li>
                            <li><strong>Designated Port</strong>: Port with the lowest path cost on each segment</li>
                            <li><strong>Blocked Port</strong>: Port that is neither root nor designated</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>STP Port States</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Blocking</strong>: Does not forward frames (20 sec)</li>
                            <li><strong>Listening</strong>: Prepares to forward frames (15 sec)</li>
                            <li><strong>Learning</strong>: Builds MAC address table (15 sec)</li>
                            <li><strong>Forwarding</strong>: Normal operation, forwards frames</li>
                            <li><strong>Disabled</strong>: Administratively shut down</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>STP Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Basic STP configuration on Cisco switches:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Configure STP mode<br/>
                            Switch(config)# spanning-tree mode pvst<br/>
                            <br/>
                            ! Set bridge priority (to make a switch the root bridge)<br/>
                            Switch(config)# spanning-tree vlan 10 priority 4096<br/>
                            <br/>
                            ! Configure PortFast on access ports<br/>
                            Switch(config)# interface range fa0/1-24<br/>
                            Switch(config-if-range)# spanning-tree portfast<br/>
                            Switch(config-if-range)# spanning-tree bpduguard enable<br/>
                            <br/>
                            ! Verify STP status<br/>
                            Switch# show spanning-tree<br/>
                            Switch# show spanning-tree vlan 10
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>STP Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">STP operation in a switched network with redundant links:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">Spanning Tree Protocol Topology</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <STPDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'staticRouting' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Static Routing</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Static routing involves manually configuring routes in a router's routing table, providing predictable and secure path selection.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Static Route Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Standard Static Route</strong>: Specifies next-hop IP or exit interface</li>
                            <li><strong>Default Route</strong>: Used when no specific route matches (0.0.0.0/0)</li>
                            <li><strong>Floating Static Route</strong>: Backup route with higher administrative distance</li>
                            <li><strong>Fully Specified Static Route</strong>: Specifies both next-hop and exit interface</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Advantages &amp; Disadvantages</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-semibold mb-2">Advantages:</p>
                          <ul className="list-disc pl-5 space-y-1 mb-3">
                            <li>Predictable path selection</li>
                            <li>No bandwidth usage for routing updates</li>
                            <li>Enhanced security (no routing protocol vulnerabilities)</li>
                          </ul>
                          <p className="font-semibold mb-2">Disadvantages:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Manual configuration and maintenance</li>
                            <li>No automatic adaptation to network changes</li>
                            <li>Not scalable for large networks</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Static Route Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Static route configuration examples:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Standard static route (next-hop IP)<br/>
                            Router(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.2<br/>
                            <br/>
                            ! Static route (exit interface)<br/>
                            Router(config)# ip route 192.168.30.0 255.255.255.0 GigabitEthernet0/1<br/>
                            <br/>
                            ! Fully specified static route<br/>
                            Router(config)# ip route 192.168.40.0 255.255.255.0 GigabitEthernet0/2 10.0.2.2<br/>
                            <br/>
                            ! Default route<br/>
                            Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1<br/>
                            <br/>
                            ! Floating static route (AD = 150)<br/>
                            Router(config)# ip route 192.168.50.0 255.255.255.0 10.0.3.2 150<br/>
                            <br/>
                            ! Verify routing table<br/>
                            Router# show ip route static
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Static Routing Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Static routing implementation in a multi-router network:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">Static Routing Topology</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <StaticRoutingDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'ospf' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Open Shortest Path First (OSPF)</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      OSPF is a link-state routing protocol that uses Dijkstra's algorithm to calculate the shortest path to each destination in the network.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>OSPF Concepts</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Link-State Protocol</strong>: Routers share information about their connected links</li>
                            <li><strong>Areas</strong>: Hierarchical design to reduce routing overhead</li>
                            <li><strong>Router Types</strong>: Internal, Area Border, Backbone, and Autonomous System Boundary Routers</li>
                            <li><strong>LSAs</strong>: Link-State Advertisements describe the network topology</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>OSPF Process</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Neighbor Discovery</strong>: Hello packets establish adjacencies</li>
                            <li><strong>Database Synchronization</strong>: Exchange of LSAs</li>
                            <li><strong>SPF Calculation</strong>: Dijkstra's algorithm computes shortest paths</li>
                            <li><strong>Route Installation</strong>: Best routes added to routing table</li>
                            <li><strong>Maintenance</strong>: Periodic updates and recalculations</li>
                          </ol>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>OSPF Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Basic OSPF configuration for a single area:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Enable OSPF process with ID 1<br/>
                            Router(config)# router ospf 1<br/>
                            <br/>
                            ! Define networks to advertise (network, wildcard mask, area)<br/>
                            Router(config-router)# network 192.168.1.0 0.0.0.255 area 0<br/>
                            Router(config-router)# network 192.168.2.0 0.0.0.255 area 0<br/>
                            Router(config-router)# network 10.0.0.0 0.0.0.3 area 0<br/>
                            <br/>
                            ! Configure router ID (optional but recommended)<br/>
                            Router(config-router)# router-id 1.1.1.1<br/>
                            <br/>
                            ! Interface-specific OSPF configuration<br/>
                            Router(config)# interface GigabitEthernet0/0<br/>
                            Router(config-if)# ip ospf priority 100<br/>
                            Router(config-if)# ip ospf hello-interval 5<br/>
                            Router(config-if)# ip ospf dead-interval 20<br/>
                            <br/>
                            ! Verify OSPF<br/>
                            Router# show ip ospf neighbor<br/>
                            Router# show ip ospf database<br/>
                            Router# show ip route ospf
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>OSPF Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">OSPF single-area implementation with multiple routers:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">OSPF Network Topology</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <OSPFDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'acl' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Access Control Lists (ACLs)</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Access Control Lists (ACLs) are used to filter network traffic by permitting or denying packets based on specified criteria.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>ACL Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Standard ACLs</strong>: Filter based on source IP address only (1-99, 1300-1999)</li>
                            <li><strong>Extended ACLs</strong>: Filter based on source/destination IP, protocol, and ports (100-199, 2000-2699)</li>
                            <li><strong>Named ACLs</strong>: Use descriptive names instead of numbers</li>
                            <li><strong>Reflexive ACLs</strong>: Allow return traffic for established sessions</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>ACL Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Placement</strong>: Standard ACLs close to destination, Extended ACLs close to source</li>
                            <li><strong>Order</strong>: Most specific to least specific (top-down processing)</li>
                            <li><strong>Implicit Deny</strong>: All ACLs have an implicit "deny any" at the end</li>
                            <li><strong>Testing</strong>: Always test ACLs before implementing in production</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>ACL Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">ACL configuration examples:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Standard ACL<br/>
                            Router(config)# access-list 10 permit 192.168.1.0 0.0.0.255<br/>
                            Router(config)# access-list 10 deny any<br/>
                            <br/>
                            ! Extended ACL<br/>
                            Router(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80<br/>
                            Router(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 443<br/>
                            Router(config)# access-list 100 deny ip any any<br/>
                            <br/>
                            ! Named ACL<br/>
                            Router(config)# ip access-list extended ALLOW_WEB<br/>
                            Router(config-ext-nacl)# permit tcp any host 192.168.2.10 eq 80<br/>
                            Router(config-ext-nacl)# permit tcp any host 192.168.2.10 eq 443<br/>
                            Router(config-ext-nacl)# deny ip any any<br/>
                            <br/>
                            ! Apply ACL to interface<br/>
                            Router(config)# interface GigabitEthernet0/0<br/>
                            Router(config-if)# ip access-group 100 in<br/>
                            <br/>
                            ! Verify ACL<br/>
                            Router# show access-lists<br/>
                            Router# show ip interface GigabitEthernet0/0
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>ACL Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">ACL implementation in a network with internal and external segments:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">ACL Implementation</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <ACLDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'nat' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Network Address Translation (NAT)</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Network Address Translation (NAT) allows private IP addresses to be translated into public IP addresses, enabling communication with the Internet while conserving public IP addresses.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>NAT Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Static NAT</strong>: One-to-one mapping of private to public IP addresses</li>
                            <li><strong>Dynamic NAT</strong>: Many-to-many mapping from a pool of public IPs</li>
                            <li><strong>PAT/NAT Overload</strong>: Many-to-one mapping using ports to track connections</li>
                            <li><strong>Twice NAT</strong>: Translates both source and destination addresses</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>NAT Terminology</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Inside Local</strong>: Private IP address of internal device</li>
                            <li><strong>Inside Global</strong>: Public IP address that represents internal device</li>
                            <li><strong>Outside Local</strong>: IP address of external device as seen from inside</li>
                            <li><strong>Outside Global</strong>: Actual public IP address of external device</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>NAT Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">NAT configuration examples:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Define inside and outside interfaces<br/>
                            Router(config)# interface GigabitEthernet0/0<br/>
                            Router(config-if)# ip address 192.168.1.1 255.255.255.0<br/>
                            Router(config-if)# ip nat inside<br/>
                            Router(config-if)# exit<br/>
                            <br/>
                            Router(config)# interface GigabitEthernet0/1<br/>
                            Router(config-if)# ip address 203.0.113.1 255.255.255.0<br/>
                            Router(config-if)# ip nat outside<br/>
                            Router(config-if)# exit<br/>
                            <br/>
                            ! Static NAT configuration<br/>
                            Router(config)# ip nat inside source static 192.168.1.10 203.0.113.10<br/>
                            <br/>
                            ! Dynamic NAT configuration<br/>
                            Router(config)# ip nat pool PUBLIC_POOL 203.0.113.20 203.0.113.30 netmask 255.255.255.0<br/>
                            Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255<br/>
                            Router(config)# ip nat inside source list 1 pool PUBLIC_POOL<br/>
                            <br/>
                            ! PAT (NAT Overload) configuration<br/>
                            Router(config)# access-list 2 permit 192.168.1.0 0.0.0.255<br/>
                            Router(config)# ip nat inside source list 2 interface GigabitEthernet0/1 overload<br/>
                            <br/>
                            ! Verify NAT<br/>
                            Router# show ip nat translations<br/>
                            Router# show ip nat statistics
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>NAT Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">NAT implementation showing translation between private and public networks:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">NAT Implementation</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <NATDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'subnetting' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Subnetting &amp; IP Addressing</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Subnetting divides a large network into smaller, more manageable subnetworks, improving security, performance, and address utilization.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Subnetting Concepts</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Network Prefix</strong>: Identifies the network portion of an IP address</li>
                            <li><strong>Subnet Mask</strong>: Determines which bits are network vs. host</li>
                            <li><strong>CIDR Notation</strong>: Slash notation (e.g., /24) to represent subnet mask</li>
                            <li><strong>VLSM</strong>: Variable Length Subnet Masking for efficient IP allocation</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Subnetting Formulas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Number of Subnets</strong>: 2<sup>n</sup> (where n = borrowed bits)</li>
                            <li><strong>Hosts per Subnet</strong>: 2<sup>h</sup> - 2 (where h = host bits)</li>
                            <li><strong>Subnet Increment</strong>: 256 - subnet mask octet value</li>
                            <li><strong>Broadcast Address</strong>: Last address in subnet range</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Subnetting Example</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Subnetting the network 192.168.1.0/24 into 4 equal subnets:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            Original Network: 192.168.1.0/24<br/>
                            Subnet Mask: 255.255.255.0<br/>
                            <br/>
                            To create 4 subnets, we need to borrow 2 bits (2² = 4)<br/>
                            New Subnet Mask: 255.255.255.192 (/26)<br/>
                            <br/>
                            Subnet 1: 192.168.1.0/26<br/>
                            - Network Address: 192.168.1.0<br/>
                            - First Usable IP: 192.168.1.1<br/>
                            - Last Usable IP: 192.168.1.62<br/>
                            - Broadcast Address: 192.168.1.63<br/>
                            <br/>
                            Subnet 2: 192.168.1.64/26<br/>
                            - Network Address: 192.168.1.64<br/>
                            - First Usable IP: 192.168.1.65<br/>
                            - Last Usable IP: 192.168.1.126<br/>
                            - Broadcast Address: 192.168.1.127<br/>
                            <br/>
                            Subnet 3: 192.168.1.128/26<br/>
                            - Network Address: 192.168.1.128<br/>
                            - First Usable IP: 192.168.1.129<br/>
                            - Last Usable IP: 192.168.1.190<br/>
                            - Broadcast Address: 192.168.1.191<br/>
                            <br/>
                            Subnet 4: 192.168.1.192/26<br/>
                            - Network Address: 192.168.1.192<br/>
                            - First Usable IP: 192.168.1.193<br/>
                            - Last Usable IP: 192.168.1.254<br/>
                            - Broadcast Address: 192.168.1.255
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Subnetting Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Network divided into multiple subnets with proper IP addressing:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">Subnetting Implementation</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <SubnettingDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'dhcp' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dynamic Host Configuration Protocol (DHCP)</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg">
                      DHCP automatically assigns IP addresses and other network configuration parameters to devices on a network, simplifying network administration.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>DHCP Process</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>DHCP Discover</strong>: Client broadcasts to find DHCP servers</li>
                            <li><strong>DHCP Offer</strong>: Server offers IP address and configuration</li>
                            <li><strong>DHCP Request</strong>: Client requests the offered IP address</li>
                            <li><strong>DHCP Acknowledge</strong>: Server confirms the assignment</li>
                          </ol>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>DHCP Components</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>DHCP Server</strong>: Assigns and manages IP addresses</li>
                            <li><strong>DHCP Client</strong>: Requests and receives IP configuration</li>
                            <li><strong>DHCP Relay Agent</strong>: Forwards DHCP messages between clients and servers on different subnets</li>
                            <li><strong>Lease Time</strong>: Duration for which IP assignment is valid</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>DHCP Configuration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">DHCP server configuration on a Cisco router:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Create DHCP pool<br/>
                            Router(config)# ip dhcp pool OFFICE_NETWORK<br/>
                            Router(dhcp-config)# network 192.168.1.0 255.255.255.0<br/>
                            Router(dhcp-config)# default-router 192.168.1.1<br/>
                            Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4<br/>
                            Router(dhcp-config)# lease 7<br/>
                            Router(dhcp-config)# exit<br/>
                            <br/>
                            ! Exclude addresses from DHCP pool<br/>
                            Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10<br/>
                            <br/>
                            ! Configure DHCP relay (on a router in a different subnet)<br/>
                            Router(config)# interface GigabitEthernet0/0<br/>
                            Router(config-if)# ip helper-address 192.168.2.10<br/>
                            <br/>
                            ! Verify DHCP<br/>
                            Router# show ip dhcp binding<br/>
                            Router# show ip dhcp pool<br/>
                            Router# show ip dhcp server statistics
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>DHCP Diagram</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">DHCP implementation with server, relay agent, and clients:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">DHCP Network Topology</h4>
                          <Suspense fallback={<div>Loading diagram...</div>}>
                            <DHCPDiagram className="h-[500px]" />
                          </Suspense>
                        </div>
                      </CardContent>
                    </Card>
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

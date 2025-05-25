import React, { useState } from 'react'
import './App.css'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from './components/ui/card'
import { Button } from './components/ui/button'
import { Network, Globe, Server, Settings, BookOpen, Code, CheckCircle2, Filter, Shield, Bug, Timer, Scale, Users, Wifi } from 'lucide-react'
import BGPTopology from './components/diagrams/examples/BGPTopology'
import SecurityZones from './components/diagrams/examples/SecurityZones'
import BGPPathSelection from './components/diagrams/examples/BGPPathSelection'
import BGPPrefixListFilter from './components/diagrams/examples/BGPPrefixListFilter'
import BGPRouteMapFilter from './components/diagrams/examples/BGPRouteMapFilter'
import BGPASPathFilter from './components/diagrams/examples/BGPASPathFilter'
import BGPCommunityFilter from './components/diagrams/examples/BGPCommunityFilter'
import BGPCommunityFlow from './components/diagrams/examples/BGPCommunityFlow'
import { ChatWidget } from './components/ui/chat-widget'

function App() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [activeVendor, setActiveVendor] = useState('cisco')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Network className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">BGP Protocol Interactive Tutorial</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Your comprehensive guide to Border Gateway Protocol</p>
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
                  variant={activeSection === 'fundamentals' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('fundamentals')}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  BGP Fundamentals
                </Button>
                <Button 
                  variant={activeSection === 'addressFamilies' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('addressFamilies')}
                >
                  <Server className="mr-2 h-4 w-4" />
                  Address Families
                </Button>
                <Button 
                  variant={activeSection === 'configuration' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('configuration')}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Configuration
                </Button>
                <Button 
                  variant={activeSection === 'bestPractices' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('bestPractices')}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Best Practices
                </Button>
                <Button 
                  variant={activeSection === 'realWorldExamples' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('realWorldExamples')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Real-World Examples
                </Button>
                <Button 
                  variant={activeSection === 'routeFiltering' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('routeFiltering')}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Route Filtering
                </Button>
                <Button 
                  variant={activeSection === 'communities' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('communities')}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Communities
                </Button>
                <Button 
                  variant={activeSection === 'security' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('security')}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Security
                </Button>
                <Button 
                  variant={activeSection === 'troubleshooting' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('troubleshooting')}
                >
                  <Bug className="mr-2 h-4 w-4" />
                  Troubleshooting
                </Button>
                <Button 
                  variant={activeSection === 'timers' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('timers')}
                >
                  <Timer className="mr-2 h-4 w-4" />
                  Timers
                </Button>
                <Button 
                  variant={activeSection === 'loadBalancing' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('loadBalancing')}
                >
                  <Scale className="mr-2 h-4 w-4" />
                  Load Balancing
                </Button>
                <Button 
                  variant={activeSection === 'sdwan' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveSection('sdwan')}
                >
                  <Wifi className="mr-2 h-4 w-4" />
                  SD-WAN
                </Button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              {/* Add ChatWidget for the current section */}
              <ChatWidget section={activeSection} />
              
              {activeSection === 'introduction' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Introduction to BGP</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Border Gateway Protocol (BGP) is the routing protocol that powers the Internet. It's responsible for making path determination decisions between autonomous systems (AS).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>What is BGP?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>BGP is an exterior gateway protocol designed to exchange routing and reachability information among autonomous systems on the Internet. It makes routing decisions based on paths, network policies, or rule-sets configured by a network administrator.</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Key Characteristics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Path-vector protocol</li>
                            <li>Uses TCP port 179</li>
                            <li>Maintains large routing tables</li>
                            <li>Designed for inter-AS routing</li>
                            <li>Policy-based routing capabilities</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>BGP vs Other Routing Protocols</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border p-2 text-left">Protocol</th>
                                <th className="border p-2 text-left">Type</th>
                                <th className="border p-2 text-left">Use Case</th>
                                <th className="border p-2 text-left">Convergence</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">BGP</td>
                                <td className="border p-2">Path Vector</td>
                                <td className="border p-2">Internet/Inter-AS</td>
                                <td className="border p-2">Slow</td>
                              </tr>
                              <tr>
                                <td className="border p-2">OSPF</td>
                                <td className="border p-2">Link State</td>
                                <td className="border p-2">Enterprise/Intra-AS</td>
                                <td className="border p-2">Fast</td>
                              </tr>
                              <tr>
                                <td className="border p-2">EIGRP</td>
                                <td className="border p-2">Advanced Distance Vector</td>
                                <td className="border p-2">Enterprise/Intra-AS</td>
                                <td className="border p-2">Fast</td>
                              </tr>
                              <tr>
                                <td className="border p-2">IS-IS</td>
                                <td className="border p-2">Link State</td>
                                <td className="border p-2">Service Provider/Intra-AS</td>
                                <td className="border p-2">Fast</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Placeholder for other sections - will implement in next steps */}
              {activeSection === 'fundamentals' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Fundamentals</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Understanding the fundamental concepts of BGP is essential for network engineers working with internet routing.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP Message Types</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BGP uses four types of messages to communicate between peers:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>OPEN</strong>: Establishes a peering session</li>
                            <li><strong>UPDATE</strong>: Advertises or withdraws routes</li>
                            <li><strong>KEEPALIVE</strong>: Maintains the connection</li>
                            <li><strong>NOTIFICATION</strong>: Indicates errors and closes connection</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP Neighbor States</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BGP neighbors go through several states:</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Idle</strong>: Initial state, BGP is waiting for a start event</li>
                            <li><strong>Connect</strong>: BGP is waiting for the TCP connection to complete</li>
                            <li><strong>Active</strong>: BGP is trying to establish a TCP connection</li>
                            <li><strong>OpenSent</strong>: Open message has been sent, waiting for an Open message from the peer</li>
                            <li><strong>OpenConfirm</strong>: Waiting for a Keepalive or Notification message</li>
                            <li><strong>Established</strong>: Peering is established, can exchange Update messages</li>
                          </ol>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>BGP Path Attributes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">BGP uses various attributes to determine the best path:</p>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border p-2 text-left">Attribute</th>
                                <th className="border p-2 text-left">Type</th>
                                <th className="border p-2 text-left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">AS_PATH</td>
                                <td className="border p-2">Well-known mandatory</td>
                                <td className="border p-2">List of AS numbers a route has traversed</td>
                              </tr>
                              <tr>
                                <td className="border p-2">NEXT_HOP</td>
                                <td className="border p-2">Well-known mandatory</td>
                                <td className="border p-2">IP address of the next router</td>
                              </tr>
                              <tr>
                                <td className="border p-2">LOCAL_PREF</td>
                                <td className="border p-2">Well-known discretionary</td>
                                <td className="border p-2">Preference value for a route (higher is better)</td>
                              </tr>
                              <tr>
                                <td className="border p-2">MED</td>
                                <td className="border p-2">Optional non-transitive</td>
                                <td className="border p-2">Metric to influence inbound traffic (lower is better)</td>
                              </tr>
                              <tr>
                                <td className="border p-2">ORIGIN</td>
                                <td className="border p-2">Well-known mandatory</td>
                                <td className="border p-2">Indicates how BGP learned about a route</td>
                              </tr>
                              <tr>
                                <td className="border p-2">COMMUNITY</td>
                                <td className="border p-2">Optional transitive</td>
                                <td className="border p-2">Used to group routes for policy application</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>BGP Path Selection Process</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">BGP uses a sequential decision process to select the best path when multiple paths to the same destination exist:</p>
                        
                        <div className="mt-6 border rounded-md p-4">
                          <h4 className="text-lg font-semibold mb-3 text-center">BGP Path Selection Sequential Flow</h4>
                          <React.Suspense fallback={<div>Loading diagram...</div>}>
                            <BGPPathSelection className="mt-4" />
                          </React.Suspense>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'addressFamilies' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Address Families</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      BGP supports multiple address families through MP-BGP (Multiprotocol BGP), allowing it to carry routing information for different network layer protocols.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>IPv4 Unicast</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>The original and most common address family. Used for IPv4 unicast routing.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                neighbor 192.168.1.1 activate<br/>
                                network 10.0.0.0 mask 255.255.255.0<br/>
                                exit-address-family
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>IPv6 Unicast</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Used for IPv6 unicast routing. Requires MP-BGP extensions.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                router bgp 65000<br/>
                                address-family ipv6 unicast<br/>
                                neighbor 2001:db8::1 activate<br/>
                                network 2001:db8:1::/64<br/>
                                exit-address-family
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>VPN-IPv4/IPv6</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Used for MPLS L3VPN services, carrying customer routes with route distinguishers.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                router bgp 65000<br/>
                                address-family vpnv4 unicast<br/>
                                neighbor 192.168.1.1 activate<br/>
                                neighbor 192.168.1.1 send-community extended<br/>
                                exit-address-family
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>L2VPN EVPN</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Used for Ethernet VPN services, supporting layer 2 and layer 3 services over a common infrastructure.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                router bgp 65000<br/>
                                address-family l2vpn evpn<br/>
                                neighbor 192.168.1.1 activate<br/>
                                neighbor 192.168.1.1 send-community both<br/>
                                exit-address-family
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Other Address Families</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-muted">
                              <th className="border p-2 text-left">Address Family</th>
                              <th className="border p-2 text-left">Use Case</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">IPv4/IPv6 Multicast</td>
                              <td className="border p-2">Used for multicast routing information exchange</td>
                            </tr>
                            <tr>
                              <td className="border p-2">IPv4/IPv6 Labeled Unicast</td>
                              <td className="border p-2">Used for MPLS-enabled networks without VPN services</td>
                            </tr>
                            <tr>
                              <td className="border p-2">IPv4/IPv6 Flowspec</td>
                              <td className="border p-2">Used for distributing traffic flow specifications</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Route Target Constraint</td>
                              <td className="border p-2">Used to limit RT distribution in large VPN networks</td>
                            </tr>
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'configuration' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Configuration</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      BGP configuration varies across different vendor platforms. Here are examples for common network equipment vendors.
                    </p>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                      <div className="flex space-x-4 border-b">
                        <button 
                          className={`py-2 px-4 font-medium ${activeVendor === 'cisco' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-600 dark:text-gray-300'}`}
                          onClick={() => setActiveVendor('cisco')}
                        >
                          Cisco IOS/NX-OS
                        </button>
                        <button 
                          className={`py-2 px-4 font-medium ${activeVendor === 'juniper' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                          onClick={() => setActiveVendor('juniper')}
                        >
                          Juniper
                        </button>
                        <button 
                          className={`py-2 px-4 font-medium ${activeVendor === 'arista' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                          onClick={() => setActiveVendor('arista')}
                        >
                          Arista
                        </button>
                        <button 
                          className={`py-2 px-4 font-medium ${activeVendor === 'nokia' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                          onClick={() => setActiveVendor('nokia')}
                        >
                          Nokia/Alcatel
                        </button>
                      </div>
                      
                      <div className="mt-4">
                        {activeVendor === 'cisco' && (
                          <div className="space-y-4">
                            <Card>
                              <CardHeader>
                                <CardTitle>Basic BGP Configuration</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                                  <code>
                                    ! Configure BGP process with AS 65000<br/>
                                    router bgp 65000<br/>
                                    <br/>
                                    ! Router ID (optional, but recommended)<br/>
                                    bgp router-id 192.168.1.1<br/>
                                    <br/>
                                    ! Configure eBGP neighbor<br/>
                                    neighbor 192.168.2.2 remote-as 65001<br/>
                                    <br/>
                                    ! Configure iBGP neighbor<br/>
                                    neighbor 10.0.0.2 remote-as 65000<br/>
                                    <br/>
                                    ! Advertise networks<br/>
                                    network 192.168.1.0 mask 255.255.255.0<br/>
                                    <br/>
                                    ! Address family specific configuration<br/>
                                    address-family ipv4 unicast<br/>
                                    neighbor 192.168.2.2 activate<br/>
                                    neighbor 10.0.0.2 activate<br/>
                                    exit-address-family
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                            
                            <Card>
                              <CardHeader>
                                <CardTitle>Route Reflector Configuration</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                                  <code>
                                    router bgp 65000<br/>
                                    <br/>
                                    ! Configure route reflector<br/>
                                    neighbor 10.0.0.2 remote-as 65000<br/>
                                    neighbor 10.0.0.3 remote-as 65000<br/>
                                    <br/>
                                    address-family ipv4 unicast<br/>
                                    neighbor 10.0.0.2 route-reflector-client<br/>
                                    neighbor 10.0.0.3 route-reflector-client<br/>
                                    exit-address-family
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                        
                        {activeVendor === 'juniper' && (
                          <div className="space-y-4">
                            <Card>
                              <CardHeader>
                                <CardTitle>Basic BGP Configuration</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                                  <code>
                                    protocols {'{'}<br/>
                                    &nbsp;&nbsp;bgp {'{'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;local-as 65000;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;router-id 192.168.1.1;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;group EXTERNAL {'{'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type external;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;peer-as 65001;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neighbor 192.168.2.2;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;group INTERNAL {'{'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type internal;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;local-address 10.0.0.1;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neighbor 10.0.0.2;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                                    &nbsp;&nbsp;{'}'}<br/>
                                    {'}'}<br/>
                                    <br/>
                                    routing-options {'{'}<br/>
                                    &nbsp;&nbsp;autonomous-system 65000;<br/>
                                    {'}'}
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                        
                        {activeVendor === 'arista' && (
                          <div className="space-y-4">
                            <Card>
                              <CardHeader>
                                <CardTitle>Basic BGP Configuration</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                                  <code>
                                    ! Configure BGP process<br/>
                                    router bgp 65000<br/>
                                    &nbsp;&nbsp;router-id 192.168.1.1<br/>
                                    <br/>
                                    &nbsp;&nbsp;! Configure eBGP neighbor<br/>
                                    &nbsp;&nbsp;neighbor 192.168.2.2 remote-as 65001<br/>
                                    <br/>
                                    &nbsp;&nbsp;! Configure iBGP neighbor<br/>
                                    &nbsp;&nbsp;neighbor 10.0.0.2 remote-as 65000<br/>
                                    &nbsp;&nbsp;neighbor 10.0.0.2 update-source Loopback0<br/>
                                    <br/>
                                    &nbsp;&nbsp;! Address family configuration<br/>
                                    &nbsp;&nbsp;address-family ipv4<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;network 192.168.1.0/24<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;neighbor 192.168.2.2 activate<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;neighbor 10.0.0.2 activate<br/>
                                    &nbsp;&nbsp;exit-address-family
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                        
                        {activeVendor === 'nokia' && (
                          <div className="space-y-4">
                            <Card>
                              <CardHeader>
                                <CardTitle>Basic BGP Configuration</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                                  <code>
                                    configure router bgp<br/>
                                    &nbsp;&nbsp;autonomous-system 65000<br/>
                                    &nbsp;&nbsp;router-id 192.168.1.1<br/>
                                    <br/>
                                    &nbsp;&nbsp;group "EXTERNAL"<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;peer-as 65001<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;neighbor 192.168.2.2<br/>
                                    &nbsp;&nbsp;exit<br/>
                                    <br/>
                                    &nbsp;&nbsp;group "INTERNAL"<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;peer-as 65000<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;neighbor 10.0.0.2<br/>
                                    &nbsp;&nbsp;exit<br/>
                                    <br/>
                                    &nbsp;&nbsp;no shutdown<br/>
                                    exit
                                  </code>
                                </pre>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Common BGP Configuration Parameters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-muted">
                              <th className="border p-2 text-left">Parameter</th>
                              <th className="border p-2 text-left">Description</th>
                              <th className="border p-2 text-left">Example</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">AS Number</td>
                              <td className="border p-2">Autonomous System number (16-bit or 32-bit)</td>
                              <td className="border p-2">65000 (private), 2914 (NTT, public)</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Router ID</td>
                              <td className="border p-2">Unique identifier for the BGP router</td>
                              <td className="border p-2">192.168.1.1</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Neighbor</td>
                              <td className="border p-2">IP address of BGP peer</td>
                              <td className="border p-2">192.168.2.2</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Remote-AS</td>
                              <td className="border p-2">AS number of the BGP peer</td>
                              <td className="border p-2">65001</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Update-Source</td>
                              <td className="border p-2">Interface to use as source for BGP packets</td>
                              <td className="border p-2">Loopback0</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Timers</td>
                              <td className="border p-2">Keepalive and holdtime intervals</td>
                              <td className="border p-2">Keepalive: 60s, Holdtime: 180s</td>
                            </tr>
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'bestPractices' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Best Practices</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Following best practices for BGP implementation helps ensure network stability, security, and optimal performance.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Security Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Use MD5 Authentication</strong>: Implement MD5 authentication for BGP sessions to prevent unauthorized peers.</li>
                            <li><strong>Implement Prefix Filtering</strong>: Filter inbound and outbound prefixes to prevent route leaks and hijacking.</li>
                            <li><strong>Use RPKI</strong>: Implement Resource Public Key Infrastructure (RPKI) to validate route origins.</li>
                            <li><strong>Apply Maximum Prefix Limits</strong>: Set maximum prefix limits to prevent route table overflow attacks.</li>
                            <li><strong>Use TTL Security</strong>: Implement GTSM (Generalized TTL Security Mechanism) to protect against remote attacks.</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Scalability Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Use Route Reflectors</strong>: Implement route reflectors in large iBGP networks to reduce full-mesh requirements.</li>
                            <li><strong>Implement Route Aggregation</strong>: Aggregate routes where possible to reduce routing table size.</li>
                            <li><strong>Use Peer Groups</strong>: Configure peer groups to simplify configuration and reduce memory usage.</li>
                            <li><strong>Optimize Update Packing</strong>: Enable update packing to reduce the number of BGP messages.</li>
                            <li><strong>Implement Outbound Route Filtering (ORF)</strong>: Use ORF to reduce unnecessary updates.</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Stability Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Implement Route Dampening</strong>: Use route dampening to suppress flapping routes.</li>
                            <li><strong>Use BGP Graceful Restart</strong>: Enable graceful restart to minimize disruption during BGP process restarts.</li>
                            <li><strong>Configure Optimal Timers</strong>: Adjust keepalive and holdtime timers based on network characteristics.</li>
                            <li><strong>Use BFD</strong>: Implement Bidirectional Forwarding Detection for faster failure detection.</li>
                            <li><strong>Implement Soft Reconfiguration</strong>: Use soft reconfiguration to minimize impact of policy changes.</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Implement Consistent Policies</strong>: Maintain consistent routing policies across the network.</li>
                            <li><strong>Use Communities</strong>: Leverage BGP communities for policy application and traffic engineering.</li>
                            <li><strong>Apply AS Path Prepending Carefully</strong>: Use AS path prepending judiciously for traffic engineering.</li>
                            <li><strong>Document BGP Policies</strong>: Maintain thorough documentation of BGP policies and configurations.</li>
                            <li><strong>Regular Audits</strong>: Conduct regular audits of BGP configurations and policies.</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>BGP Design Recommendations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-muted">
                              <th className="border p-2 text-left">Scenario</th>
                              <th className="border p-2 text-left">Recommendation</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">Enterprise with Dual ISPs</td>
                              <td className="border p-2">Use BGP with both ISPs, implement prefix filtering, and use LOCAL_PREF for primary/backup designation</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Large Enterprise/Service Provider</td>
                              <td className="border p-2">Use route reflectors, implement RPKI, use communities for policy control, and implement BFD</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Data Center</td>
                              <td className="border p-2">Use EVPN/VXLAN with BGP, implement route aggregation, and use BFD for fast convergence</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Internet Exchange Point</td>
                              <td className="border p-2">Implement strict prefix filtering, use RPKI, and implement maximum prefix limits</td>
                            </tr>
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'routeFiltering' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Route Filtering</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Route filtering is a critical aspect of BGP implementation that allows network administrators to control which routes are advertised to and received from BGP peers.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Prefix Lists</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Prefix lists provide a powerful and efficient way to filter BGP routes based on IP prefixes.</p>
                          
                          <div className="border rounded-md p-4 mb-4">
                            <h4 className="text-lg font-semibold mb-3">Prefix List Filtering Visualization</h4>
                            <BGPPrefixListFilter className="mb-4" />
                          </div>
                          
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Define a prefix list<br/>
                                ip prefix-list FILTER-IN seq 10 permit 10.0.0.0/8 le 24<br/>
                                ip prefix-list FILTER-IN seq 20 permit 172.16.0.0/12 le 24<br/>
                                ip prefix-list FILTER-IN seq 30 deny 0.0.0.0/0 le 32<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 prefix-list FILTER-IN in<br/>
                                neighbor 192.168.1.1 prefix-list FILTER-OUT out
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Route Maps</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Route maps provide more complex filtering capabilities with conditional matching and set actions.</p>
                          
                          <div className="border rounded-md p-4 mb-4">
                            <h4 className="text-lg font-semibold mb-3">Route Map Filtering Visualization</h4>
                            <BGPRouteMapFilter className="mb-4" />
                          </div>
                          
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Define a route map<br/>
                                route-map FILTER-ROUTES permit 10<br/>
                                match ip address prefix-list ALLOWED-PREFIXES<br/>
                                set local-preference 200<br/>
                                <br/>
                                route-map FILTER-ROUTES deny 20<br/>
                                match ip address prefix-list DENIED-PREFIXES<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 route-map FILTER-ROUTES in
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>AS Path Filtering</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">AS path access lists filter routes based on the AS path attribute.</p>
                          
                          <div className="border rounded-md p-4 mb-4">
                            <h4 className="text-lg font-semibold mb-3">AS Path Filtering Visualization</h4>
                            <BGPASPathFilter className="mb-4" />
                          </div>
                          
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Define AS path access list<br/>
                                ip as-path access-list 10 permit ^65100$<br/>
                                ip as-path access-list 10 permit ^65100_65200<br/>
                                ip as-path access-list 20 deny .*65300.*<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 filter-list 10 in<br/>
                                neighbor 192.168.1.1 filter-list 20 out
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Community Filtering</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Filter routes based on BGP community attributes.</p>
                          
                          <div className="border rounded-md p-4 mb-4">
                            <h4 className="text-lg font-semibold mb-3">Community Filtering Visualization</h4>
                            <BGPCommunityFilter className="mb-4" />
                          </div>
                          
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Define community list<br/>
                                ip community-list 1 permit 65000:100<br/>
                                ip community-list 1 permit 65000:200<br/>
                                <br/>
                                ! Use in a route map<br/>
                                route-map COMMUNITY-FILTER permit 10<br/>
                                match community 1<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 route-map COMMUNITY-FILTER in
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Route Filtering Best Practices</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Filter Inbound and Outbound</strong>: Always implement both inbound and outbound filtering for each BGP peer.</li>
                          <li><strong>Use Prefix Lists</strong>: Prefer prefix lists over access lists for IP prefix filtering due to better performance.</li>
                          <li><strong>Implement Default Deny</strong>: Follow the principle of "deny all, permit specific" for better security.</li>
                          <li><strong>Document Filters</strong>: Maintain thorough documentation of all BGP filters and their purposes.</li>
                          <li><strong>Regular Audits</strong>: Periodically review and update filters to ensure they match current routing policies.</li>
                          <li><strong>Test Before Deployment</strong>: Test filter changes in a lab environment before deploying to production.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'communities' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Communities</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      BGP communities are optional transitive attributes that provide a way to group routes for applying common routing policies.
                    </p>
                    
                    {/* Community-based Routing Policies Flow Diagram */}
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-3">Community-based Routing Policies</h3>
                      <React.Suspense fallback={<div>Loading diagram...</div>}>
                        <BGPCommunityFlow />
                      </React.Suspense>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Standard Communities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Standard communities are 32-bit values represented as AS:value (e.g., 65000:100).</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Set community on routes<br/>
                                route-map SET-COMMUNITY permit 10<br/>
                                match ip address prefix-list CUSTOMER-ROUTES<br/>
                                set community 65000:100<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 route-map SET-COMMUNITY out<br/>
                                neighbor 192.168.1.1 send-community
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Extended Communities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Extended communities are 64-bit values that provide additional functionality beyond standard communities.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Define route target extended community<br/>
                                route-map SET-EXT-COMMUNITY permit 10<br/>
                                set extcommunity rt 65000:100<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                address-family vpnv4<br/>
                                neighbor 192.168.1.1 route-map SET-EXT-COMMUNITY out<br/>
                                neighbor 192.168.1.1 send-community extended
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Large Communities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Large communities are 96-bit values represented as ASN:Function:Parameter, providing even more flexibility.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Set large community<br/>
                                route-map SET-LARGE-COMM permit 10<br/>
                                set large-community 65000:1:1<br/>
                                <br/>
                                ! Apply to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 route-map SET-LARGE-COMM out<br/>
                                neighbor 192.168.1.1 send-community large
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Well-Known Communities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BGP defines several well-known communities with specific behaviors.</p>
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border p-2 text-left">Community</th>
                                <th className="border p-2 text-left">Value</th>
                                <th className="border p-2 text-left">Behavior</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">NO_EXPORT</td>
                                <td className="border p-2">65535:65281</td>
                                <td className="border p-2">Do not advertise to eBGP peers</td>
                              </tr>
                              <tr>
                                <td className="border p-2">NO_ADVERTISE</td>
                                <td className="border p-2">65535:65282</td>
                                <td className="border p-2">Do not advertise to any peer</td>
                              </tr>
                              <tr>
                                <td className="border p-2">LOCAL_AS</td>
                                <td className="border p-2">65535:65283</td>
                                <td className="border p-2">Do not advertise beyond local AS</td>
                              </tr>
                            </tbody>
                          </table>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Community Use Cases</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Traffic Engineering</strong>: Use communities to influence path selection by setting LOCAL_PREF based on community values.</li>
                          <li><strong>Customer Tagging</strong>: Tag routes from different customers with unique communities for easier management.</li>
                          <li><strong>Regional Identification</strong>: Mark routes based on geographic origin to apply region-specific policies.</li>
                          <li><strong>Service Level Differentiation</strong>: Apply different QoS or routing policies based on service level communities.</li>
                          <li><strong>Blackhole Routing</strong>: Use specific communities to trigger blackhole filtering for DDoS mitigation.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'security' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Security</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Securing BGP is critical for maintaining the integrity and stability of network routing. This section covers key BGP security measures and best practices.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>RPKI (Resource Public Key Infrastructure)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">RPKI provides a way to validate the origin of BGP routes by cryptographically signing route announcements.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Enable RPKI server<br/>
                                router bgp 65000<br/>
                                bgp rpki server tcp 192.168.1.100 port 8282 refresh 60<br/>
                                <br/>
                                ! Configure RPKI validation<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                bgp origin-as validation enable<br/>
                                <br/>
                                ! Define policy based on validation state<br/>
                                route-map RPKI-POLICY permit 10<br/>
                                match rpki valid<br/>
                                set local-preference 200<br/>
                                <br/>
                                route-map RPKI-POLICY permit 20<br/>
                                match rpki not-found<br/>
                                set local-preference 100<br/>
                                <br/>
                                route-map RPKI-POLICY permit 30<br/>
                                match rpki invalid<br/>
                                set local-preference 50<br/>
                                <br/>
                                ! Apply policy to BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 route-map RPKI-POLICY in
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP Authentication</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">MD5 authentication secures BGP sessions by ensuring that updates are received from legitimate peers.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure MD5 authentication<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 password BGP-AUTH-KEY<br/>
                                <br/>
                                ! Configure TTL Security (GTSM)<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 ttl-security hops 1
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Maximum Prefix Limits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Protect against route table overflow attacks by limiting the number of prefixes accepted from a peer.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Set maximum prefix limit<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 maximum-prefix 5000 80 restart 15<br/>
                                <br/>
                                ! Explanation:<br/>
                                ! - 5000: Maximum number of prefixes<br/>
                                ! - 80: Warning threshold percentage<br/>
                                ! - restart 15: Restart session after 15 minutes if limit exceeded
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BGPSEC</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BGPSEC extends RPKI to validate the entire AS path, not just the origin AS.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Status on Cisco Platforms:</p>
                            <p>BGPSEC is still in development and not widely deployed. Cisco is working on implementing BGPSEC in their routing platforms. Currently, RPKI is the recommended approach for BGP security.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Security Zones Diagram */}
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-3">Network Security Zones with BGP</h3>
                      <div className="border rounded-md p-2">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <SecurityZones className="h-[600px]" />
                        </React.Suspense>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        The diagram above shows a network with distinct security zones (Internet, DMZ, Internal, Corporate, Data Center) with BGP routing between zones and appropriate firewall placements.
                      </p>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>MANRS (Mutually Agreed Norms for Routing Security)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">MANRS is a global initiative to improve routing security through a set of concrete actions:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Filtering</strong>: Prevent propagation of incorrect routing information</li>
                          <li><strong>Anti-spoofing</strong>: Prevent traffic with spoofed source IP addresses</li>
                          <li><strong>Coordination</strong>: Maintain globally accessible up-to-date contact information</li>
                          <li><strong>Global Validation</strong>: Publish routing data to allow others to validate routing information</li>
                        </ul>
                        <div className="mt-4">
                          <p className="font-semibold">Implementation on Cisco Platforms:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Use prefix lists and AS path filters to implement filtering</li>
                            <li>Configure uRPF (unicast Reverse Path Forwarding) for anti-spoofing</li>
                            <li>Implement RPKI for route validation</li>
                            <li>Document and publish ASN and IP address space in Internet Routing Registries (IRRs)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'troubleshooting' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Troubleshooting</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Effective BGP troubleshooting requires understanding common issues and knowing which commands to use for diagnosis.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Common BGP Issues</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Neighbor Establishment Issues</strong>: BGP peers not reaching Established state</li>
                            <li><strong>Route Advertisement Problems</strong>: Routes not being advertised or received</li>
                            <li><strong>Path Selection Issues</strong>: Unexpected path selection</li>
                            <li><strong>Policy Application Problems</strong>: Route policies not working as expected</li>
                            <li><strong>Convergence Issues</strong>: Slow convergence or route flapping</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Neighbor Troubleshooting</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Commands for troubleshooting BGP neighbor issues:</p>
                          <div className="mt-4">
                            <p className="font-semibold">Cisco IOS/IOS-XE Commands:</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Check BGP neighbor status<br/>
                                show bgp ipv4 unicast summary<br/>
                                show bgp ipv4 unicast neighbors<br/>
                                show bgp ipv4 unicast neighbors 192.168.1.1<br/>
                                <br/>
                                ! Check TCP connection<br/>
                                show tcp brief<br/>
                                show ip tcp detail<br/>
                                <br/>
                                ! Debug BGP neighbor issues<br/>
                                debug ip bgp<br/>
                                debug ip bgp events<br/>
                                debug ip bgp keepalives<br/>
                                debug ip bgp updates
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Route Troubleshooting</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Commands for troubleshooting BGP route issues:</p>
                          <div className="mt-4">
                            <p className="font-semibold">Cisco IOS/IOS-XE Commands:</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Check BGP routes<br/>
                                show bgp ipv4 unicast<br/>
                                show bgp ipv4 unicast 10.0.0.0/24<br/>
                                <br/>
                                ! Check route details<br/>
                                show bgp ipv4 unicast 10.0.0.0/24 detail<br/>
                                <br/>
                                ! Check advertised routes<br/>
                                show bgp ipv4 unicast neighbors 192.168.1.1 advertised-routes<br/>
                                <br/>
                                ! Check received routes<br/>
                                show bgp ipv4 unicast neighbors 192.168.1.1 routes<br/>
                                <br/>
                                ! Check route policy application<br/>
                                show bgp ipv4 unicast neighbors 192.168.1.1 received-routes<br/>
                                show ip bgp update-group<br/>
                                show ip bgp update-group X advertised-routes
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Troubleshooting</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Commands for troubleshooting BGP policy issues:</p>
                          <div className="mt-4">
                            <p className="font-semibold">Cisco IOS/IOS-XE Commands:</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Check route maps<br/>
                                show route-map<br/>
                                show route-map ROUTE-MAP-NAME<br/>
                                <br/>
                                ! Check prefix lists<br/>
                                show ip prefix-list<br/>
                                show ip prefix-list PREFIX-LIST-NAME<br/>
                                <br/>
                                ! Check AS path access lists<br/>
                                show ip as-path-access-list<br/>
                                <br/>
                                ! Check community lists<br/>
                                show ip community-list<br/>
                                <br/>
                                ! Test policy application<br/>
                                show bgp ipv4 unicast 10.0.0.0/24 policy<br/>
                                show route-map ROUTE-MAP-NAME 10.0.0.0/24
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>BGP Troubleshooting Flowchart</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border p-2 text-left">Issue</th>
                                <th className="border p-2 text-left">Possible Causes</th>
                                <th className="border p-2 text-left">Verification Commands</th>
                                <th className="border p-2 text-left">Resolution</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border p-2">BGP neighbor not establishing</td>
                                <td className="border p-2">
                                  - TCP connectivity issue<br/>
                                  - AS number mismatch<br/>
                                  - Authentication failure<br/>
                                  - ACL blocking traffic
                                </td>
                                <td className="border p-2">
                                  - show bgp ipv4 unicast summary<br/>
                                  - ping neighbor-ip<br/>
                                  - show tcp brief<br/>
                                  - debug ip bgp
                                </td>
                                <td className="border p-2">
                                  - Check firewall/ACLs<br/>
                                  - Verify AS numbers<br/>
                                  - Check authentication<br/>
                                  - Verify IP reachability
                                </td>
                              </tr>
                              <tr>
                                <td className="border p-2">Routes not being received</td>
                                <td className="border p-2">
                                  - Inbound filtering<br/>
                                  - Route not advertised by peer<br/>
                                  - Next-hop unreachable
                                </td>
                                <td className="border p-2">
                                  - show bgp ipv4 unicast<br/>
                                  - show bgp ipv4 unicast neighbors x.x.x.x routes<br/>
                                  - show bgp ipv4 unicast neighbors x.x.x.x received-routes
                                </td>
                                <td className="border p-2">
                                  - Check inbound policies<br/>
                                  - Verify route advertisement<br/>
                                  - Check next-hop reachability
                                </td>
                              </tr>
                              <tr>
                                <td className="border p-2">Routes not being advertised</td>
                                <td className="border p-2">
                                  - Outbound filtering<br/>
                                  - Route not in BGP table<br/>
                                  - Network statement missing
                                </td>
                                <td className="border p-2">
                                  - show bgp ipv4 unicast<br/>
                                  - show bgp ipv4 unicast neighbors x.x.x.x advertised-routes<br/>
                                  - show ip route
                                </td>
                                <td className="border p-2">
                                  - Check outbound policies<br/>
                                  - Verify route redistribution<br/>
                                  - Add network statements
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'timers' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Timers</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      BGP timers play a crucial role in controlling session establishment, maintenance, and convergence speed.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Keepalive and Holdtime</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">The two primary BGP timers that control session maintenance:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Keepalive Timer</strong>: Interval between keepalive messages (default: 60 seconds)</li>
                            <li><strong>Holdtime Timer</strong>: Maximum time without receiving a keepalive or update before declaring a peer down (default: 180 seconds)</li>
                          </ul>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure BGP timers globally<br/>
                                router bgp 65000<br/>
                                timers bgp 30 90<br/>
                                <br/>
                                ! Configure BGP timers for a specific neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 timers 15 45
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Connect Retry Timer</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Controls how often BGP tries to establish a TCP connection with a peer:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Connect Retry Timer</strong>: Time between connection attempts (default: 120 seconds)</li>
                          </ul>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure connect retry timer<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 timers connect 60
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BFD (Bidirectional Forwarding Detection)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BFD provides faster failure detection than standard BGP timers:</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure BFD globally<br/>
                                bfd interval 100 min_rx 100 multiplier 3<br/>
                                <br/>
                                ! Enable BFD for BGP neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 fall-over bfd
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Route Advertisement Timers</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Timers that control the rate of BGP updates:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Advertisement Interval</strong>: Minimum time between BGP advertisements (default: 30s for eBGP, 5s for iBGP)</li>
                            <li><strong>Route Dampening</strong>: Suppresses flapping routes based on penalty values</li>
                          </ul>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure advertisement interval<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 advertisement-interval 5<br/>
                                <br/>
                                ! Configure route dampening<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                bgp dampening 15 750 2000 60
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Timer Optimization Guidelines</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-muted">
                              <th className="border p-2 text-left">Scenario</th>
                              <th className="border p-2 text-left">Recommended Timer Settings</th>
                              <th className="border p-2 text-left">Considerations</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">Critical Infrastructure</td>
                              <td className="border p-2">
                                - Keepalive: 3-5s<br/>
                                - Holdtime: 9-15s<br/>
                                - BFD: 50-100ms intervals
                              </td>
                              <td className="border p-2">
                                - Increased CPU load<br/>
                                - More bandwidth for keepalives<br/>
                                - Faster convergence
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">Enterprise Networks</td>
                              <td className="border p-2">
                                - Keepalive: 10-20s<br/>
                                - Holdtime: 30-60s<br/>
                                - BFD: 150-300ms intervals
                              </td>
                              <td className="border p-2">
                                - Balanced approach<br/>
                                - Moderate CPU impact<br/>
                                - Good convergence time
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">Internet Peering</td>
                              <td className="border p-2">
                                - Keepalive: 30s<br/>
                                - Holdtime: 90s<br/>
                                - Advertisement interval: 5-10s
                              </td>
                              <td className="border p-2">
                                - Reduced update frequency<br/>
                                - Lower CPU impact<br/>
                                - Route dampening recommended
                              </td>
                            </tr>
                            <tr>
                              <td className="border p-2">Unstable Networks</td>
                              <td className="border p-2">
                                - Keepalive: 60s<br/>
                                - Holdtime: 180s<br/>
                                - Route dampening: Enabled
                              </td>
                              <td className="border p-2">
                                - Prevents route flapping<br/>
                                - Reduces CPU load<br/>
                                - Slower convergence
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'loadBalancing' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP Load Balancing</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      BGP load balancing allows traffic to be distributed across multiple paths, improving bandwidth utilization and redundancy.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Equal-Cost Multi-Path (ECMP)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">ECMP allows BGP to install multiple equal-cost paths in the routing table.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Enable BGP multipath<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                maximum-paths 8<br/>
                                <br/>
                                ! For iBGP multipath<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                maximum-paths ibgp 8
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>DMZ Link Bandwidth</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">DMZ link bandwidth allows unequal-cost load balancing based on the bandwidth of the links.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Enable DMZ link bandwidth<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                bgp dmzlink-bw<br/>
                                <br/>
                                ! Set link bandwidth for a specific neighbor<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 dmzlink-bw<br/>
                                <br/>
                                ! Set link bandwidth in a route-map<br/>
                                route-map SET-LINK-BW permit 10<br/>
                                set extcommunity link-bandwidth 100000000
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP Multipath Requirements</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">For paths to be considered equal-cost in BGP, the following attributes must be identical:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Weight</strong></li>
                            <li><strong>Local Preference</strong></li>
                            <li><strong>AS Path (length and content)</strong></li>
                            <li><strong>Origin</strong></li>
                            <li><strong>MED</strong></li>
                            <li><strong>IGP metric to next-hop</strong></li>
                          </ul>
                          <p className="mt-3">For iBGP multipath, the paths must also have the same router-id.</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>AS-Path Manipulation for Load Balancing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Techniques to make AS paths appear equal for load balancing:</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure AS-path multipath relaxation<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                bgp bestpath as-path multipath-relax<br/>
                                <br/>
                                ! This allows paths with different AS paths but same length<br/>
                                ! to be considered for multipath
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Load Balancing Verification</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3">Commands to verify BGP load balancing configuration:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Verify BGP multipath configuration<br/>
                            show bgp ipv4 unicast summary<br/>
                            show bgp ipv4 unicast<br/>
                            <br/>
                            ! Check for multiple paths in the routing table<br/>
                            show ip route 10.0.0.0/24<br/>
                            <br/>
                            ! Verify traffic distribution<br/>
                            show ip cef 10.0.0.0/24 detail<br/>
                            <br/>
                            ! Check link bandwidth community<br/>
                            show bgp ipv4 unicast 10.0.0.0/24 detail
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'sdwan' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">BGP in SD-WAN</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Software-Defined Wide Area Network (SD-WAN) solutions often leverage BGP for routing integration with existing networks and service providers.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP in Cisco SD-WAN</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Cisco SD-WAN (formerly Viptela) uses BGP for integration with non-SD-WAN sites and service providers.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco vEdge/cEdge):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure BGP on Cisco SD-WAN (CLI mode)<br/>
                                config-transaction<br/>
                                router bgp 65000<br/>
                                neighbor 192.168.1.1 remote-as 65001<br/>
                                address-family ipv4 unicast<br/>
                                redistribute omp<br/>
                                exit-address-family<br/>
                                commit<br/>
                                <br/>
                                ! Configure BGP on Cisco SD-WAN (vManage template)<br/>
                                ! Create a BGP feature template with:<br/>
                                ! - AS number: 65000<br/>
                                ! - Neighbor: 192.168.1.1, remote-as 65001<br/>
                                ! - Redistribute OMP routes into BGP
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP Route Redistribution in SD-WAN</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">SD-WAN solutions typically use route redistribution between BGP and the SD-WAN overlay protocol.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco SD-WAN):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Redistribute BGP into OMP<br/>
                                config-transaction<br/>
                                omp<br/>
                                address-family ipv4<br/>
                                advertise bgp<br/>
                                exit-address-family<br/>
                                commit<br/>
                                <br/>
                                ! Redistribute OMP into BGP<br/>
                                config-transaction<br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                redistribute omp<br/>
                                exit-address-family<br/>
                                commit
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>BGP Communities in SD-WAN</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BGP communities can be used to influence path selection in SD-WAN environments.</p>
                          <div className="mt-4">
                            <p className="font-semibold">Configuration Example (Cisco SD-WAN):</p>
                            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                              <code>
                                ! Configure route-map to set communities<br/>
                                config-transaction<br/>
                                ip community-list 1 permit 65000:100<br/>
                                <br/>
                                route-map SET-COMMUNITY permit 10<br/>
                                match ip address prefix-list CRITICAL-PREFIXES<br/>
                                set community 65000:100<br/>
                                <br/>
                                router bgp 65000<br/>
                                address-family ipv4 unicast<br/>
                                neighbor 192.168.1.1 route-map SET-COMMUNITY out<br/>
                                exit-address-family<br/>
                                commit
                              </code>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>SD-WAN and BGP Integration Models</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Common integration models for BGP in SD-WAN environments:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Regional Hub Model</strong>: BGP runs on regional hub sites that connect to MPLS/Internet</li>
                            <li><strong>Direct Internet Access (DIA) Model</strong>: BGP runs on branch sites for local internet breakout</li>
                            <li><strong>Data Center Integration Model</strong>: BGP connects SD-WAN fabric to data center routing</li>
                            <li><strong>Service Provider Integration Model</strong>: BGP connects SD-WAN edge to service provider networks</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>SD-WAN and BGP Best Practices</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Use BGP for External Connectivity</strong>: Leverage BGP for connecting SD-WAN fabric to external networks</li>
                          <li><strong>Implement Route Filtering</strong>: Apply strict route filtering at SD-WAN edge devices</li>
                          <li><strong>Use Communities for Policy</strong>: Leverage BGP communities to influence SD-WAN path selection</li>
                          <li><strong>Optimize Convergence</strong>: Configure BFD with BGP for faster failure detection</li>
                          <li><strong>Consistent AS Numbering</strong>: Maintain consistent AS numbering scheme across the SD-WAN fabric</li>
                          <li><strong>Route Summarization</strong>: Summarize routes at the SD-WAN edge to reduce routing table size</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeSection === 'realWorldExamples' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real-World Examples</h2>
                  <div className="space-y-6">
                    <p className="text-lg">
                      Examining real-world BGP implementations helps understand how BGP is used in different network environments.
                    </p>
                    
                    {/* Enterprise Multi-homing Example */}
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-3">Enterprise Multi-homing Topology</h3>
                      <div className="border rounded-md p-2">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <BGPTopology type="enterprise" className="h-[400px]" />
                        </React.Suspense>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">Cisco Configuration Example:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Enterprise Router Configuration<br/>
                            router bgp 65001<br/>
                            bgp router-id 192.168.1.1<br/>
                            <br/>
                            ! ISP 1 Connection<br/>
                            neighbor 203.0.113.1 remote-as 64501<br/>
                            neighbor 203.0.113.1 description ISP-1<br/>
                            neighbor 203.0.113.1 password ISP1-AUTH-KEY<br/>
                            <br/>
                            ! ISP 2 Connection<br/>
                            neighbor 198.51.100.1 remote-as 64502<br/>
                            neighbor 198.51.100.1 description ISP-2<br/>
                            neighbor 198.51.100.1 password ISP2-AUTH-KEY<br/>
                            <br/>
                            ! Outbound Route Filtering<br/>
                            ip prefix-list OUTBOUND seq 10 permit 10.0.0.0/8 le 24<br/>
                            <br/>
                            ! Apply prefix list to both ISPs<br/>
                            neighbor 203.0.113.1 prefix-list OUTBOUND out<br/>
                            neighbor 198.51.100.1 prefix-list OUTBOUND out<br/>
                            <br/>
                            ! Advertise internal networks<br/>
                            network 10.0.0.0 mask 255.255.255.0<br/>
                            network 10.0.1.0 mask 255.255.255.0<br/>
                            network 10.0.2.0 mask 255.255.255.0
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    {/* Internet Exchange Point Example */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-3">Internet Exchange Point (IXP) Topology</h3>
                      <div className="border rounded-md p-2">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <BGPTopology type="ixp" className="h-[400px]" />
                        </React.Suspense>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">Cisco Configuration Example:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! ISP Router at IXP<br/>
                            router bgp 64501<br/>
                            bgp router-id 206.53.225.1<br/>
                            <br/>
                            ! Route Server Connection<br/>
                            neighbor 206.53.225.254 remote-as 65000<br/>
                            neighbor 206.53.225.254 description IXP-ROUTE-SERVER<br/>
                            neighbor 206.53.225.254 password IXP-AUTH-KEY<br/>
                            <br/>
                            ! RPKI Validation<br/>
                            bgp rpki server tcp 192.0.2.10 port 8282 refresh 60<br/>
                            <br/>
                            ! Maximum prefix limits<br/>
                            neighbor 206.53.225.254 maximum-prefix 50000 80 restart 15<br/>
                            <br/>
                            ! Outbound filtering<br/>
                            ip prefix-list ANNOUNCE seq 10 permit 64501::/32 le 48<br/>
                            <br/>
                            ! Apply prefix list<br/>
                            neighbor 206.53.225.254 prefix-list ANNOUNCE out<br/>
                            <br/>
                            ! Advertise networks<br/>
                            network 64501::/32
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    {/* Data Center EVPN/VXLAN Example */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-3">Data Center EVPN/VXLAN Topology</h3>
                      <div className="border rounded-md p-2">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <BGPTopology type="datacenter" className="h-[500px]" />
                        </React.Suspense>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">Cisco NX-OS Configuration Example:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! Spine Switch Configuration<br/>
                            feature bgp<br/>
                            feature nv overlay<br/>
                            <br/>
                            nv overlay evpn<br/>
                            <br/>
                            router bgp 65000<br/>
                            router-id 10.0.0.1<br/>
                            address-family l2vpn evpn<br/>
                            retain route-target all<br/>
                            <br/>
                            ! Leaf 1 neighbor<br/>
                            neighbor 10.0.1.1<br/>
                            remote-as 65001<br/>
                            update-source loopback0<br/>
                            address-family l2vpn evpn<br/>
                            send-community extended<br/>
                            route-reflector-client<br/>
                            <br/>
                            ! Leaf 2 neighbor<br/>
                            neighbor 10.0.2.1<br/>
                            remote-as 65002<br/>
                            update-source loopback0<br/>
                            address-family l2vpn evpn<br/>
                            send-community extended<br/>
                            route-reflector-client<br/>
                            <br/>
                            ! Leaf Switch Configuration<br/>
                            feature bgp<br/>
                            feature nv overlay<br/>
                            feature vn-segment-vlan-based<br/>
                            <br/>
                            nv overlay evpn<br/>
                            <br/>
                            vlan 100<br/>
                            vn-segment 10000<br/>
                            <br/>
                            interface nve1<br/>
                            no shutdown<br/>
                            source-interface loopback0<br/>
                            member vni 10000 associate-vrf<br/>
                            <br/>
                            router bgp 65001<br/>
                            router-id 10.0.1.1<br/>
                            neighbor 10.0.0.1<br/>
                            remote-as 65000<br/>
                            update-source loopback0<br/>
                            address-family l2vpn evpn<br/>
                            send-community extended
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    {/* Service Provider MPLS VPN Example */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-3">Service Provider MPLS VPN Topology</h3>
                      <div className="border rounded-md p-2">
                        <React.Suspense fallback={<div>Loading diagram...</div>}>
                          <BGPTopology type="isp" className="h-[400px]" />
                        </React.Suspense>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">Cisco IOS XR Configuration Example:</p>
                        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                          <code>
                            ! PE Router Configuration<br/>
                            router bgp 64500<br/>
                            bgp router-id 10.0.0.1<br/>
                            address-family vpnv4 unicast<br/>
                            retain route-target all<br/>
                            <br/>
                            ! iBGP neighbor (Route Reflector)<br/>
                            neighbor 10.0.0.3<br/>
                            remote-as 64500<br/>
                            update-source Loopback0<br/>
                            address-family vpnv4 unicast<br/>
                            route-policy PASS-ALL in<br/>
                            route-policy PASS-ALL out<br/>
                            <br/>
                            ! Customer VRF<br/>
                            vrf CUSTOMER-A<br/>
                            rd 64500:100<br/>
                            address-family ipv4 unicast<br/>
                            route-target import 64500:100<br/>
                            route-target export 64500:100<br/>
                            <br/>
                            ! CE Router BGP<br/>
                            router bgp 64500<br/>
                            vrf CUSTOMER-A<br/>
                            bgp router-id 10.0.0.1<br/>
                            <br/>
                            ! eBGP neighbor (CE Router)<br/>
                            neighbor 192.168.1.1<br/>
                            remote-as 65001<br/>
                            address-family ipv4 unicast<br/>
                            route-policy CUSTOMER-A-IN in<br/>
                            route-policy CUSTOMER-A-OUT out<br/>
                            as-override
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Enterprise Multi-homing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">A company with dual ISP connections for redundancy:</p>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="font-semibold">Scenario:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Enterprise with AS 65001</li>
                              <li>Connected to ISP1 (AS 100) and ISP2 (AS 200)</li>
                              <li>Wants primary/backup routing</li>
                            </ul>
                            
                            <p className="font-semibold mt-3">Implementation (Cisco IOS):</p>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto text-sm">
                              <code>
                                ! Enterprise Router Configuration<br/>
                                router bgp 65001<br/>
                                bgp router-id 10.1.1.1<br/>
                                <br/>
                                ! Router connected to ISP1 (Primary)<br/>
                                neighbor 203.0.113.1 remote-as 100<br/>
                                neighbor 203.0.113.1 description PRIMARY-ISP<br/>
                                neighbor 203.0.113.1 password 7 ENCRYPTED<br/>
                                <br/>
                                ! Router connected to ISP2 (Backup)<br/>
                                neighbor 198.51.100.1 remote-as 200<br/>
                                neighbor 198.51.100.1 description BACKUP-ISP<br/>
                                neighbor 198.51.100.1 password 7 ENCRYPTED<br/>
                                <br/>
                                ! Set LOCAL_PREF for primary path<br/>
                                route-map ISP1-IN permit 10<br/>
                                set local-preference 200<br/>
                                <br/>
                                ! Apply route-maps and prefix filters<br/>
                                neighbor 203.0.113.1 route-map ISP1-IN in<br/>
                                neighbor 203.0.113.1 prefix-list CUSTOMER-OUT out<br/>
                                neighbor 198.51.100.1 prefix-list CUSTOMER-OUT out<br/>
                                <br/>
                                ! Advertise local networks<br/>
                                network 192.168.0.0 mask 255.255.0.0
                              </code>
                            </pre>
                            
                            <p className="font-semibold mt-3">Result:</p>
                            <p>Traffic prefers ISP1 due to higher LOCAL_PREF. If ISP1 fails, traffic automatically routes through ISP2.</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Internet Exchange Point</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">BGP deployment at an Internet Exchange Point (IXP):</p>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="font-semibold">Scenario:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>IXP with route server (RS) in AS 65000</li>
                              <li>Multiple ISPs connected (AS 100, 200, 300)</li>
                              <li>Need to exchange routes efficiently</li>
                            </ul>
                            
                            <p className="font-semibold mt-3">Implementation (Cisco IOS):</p>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto text-sm">
                              <code>
                                ! Route Server Configuration<br/>
                                router bgp 65000<br/>
                                bgp router-id 192.0.2.1<br/>
                                <br/>
                                ! Peer with ISP1<br/>
                                neighbor 192.0.2.10 remote-as 100<br/>
                                neighbor 192.0.2.10 description ISP1<br/>
                                neighbor 192.0.2.10 password 7 ENCRYPTED<br/>
                                <br/>
                                ! Peer with ISP2<br/>
                                neighbor 192.0.2.20 remote-as 200<br/>
                                neighbor 192.0.2.20 description ISP2<br/>
                                neighbor 192.0.2.20 password 7 ENCRYPTED<br/>
                                <br/>
                                ! Peer with ISP3<br/>
                                neighbor 192.0.2.30 remote-as 300<br/>
                                neighbor 192.0.2.30 description ISP3<br/>
                                neighbor 192.0.2.30 password 7 ENCRYPTED<br/>
                                <br/>
                                ! Apply prefix filters and RPKI validation<br/>
                                neighbor 192.0.2.10 prefix-list ISP1-IN in<br/>
                                neighbor 192.0.2.10 route-map RPKI-CHECK in<br/>
                                neighbor 192.0.2.20 prefix-list ISP2-IN in<br/>
                                neighbor 192.0.2.20 route-map RPKI-CHECK in<br/>
                                neighbor 192.0.2.30 prefix-list ISP3-IN in<br/>
                                neighbor 192.0.2.30 route-map RPKI-CHECK in<br/>
                                <br/>
                                ! Set maximum prefix limits<br/>
                                neighbor 192.0.2.10 maximum-prefix 5000 80 restart 60<br/>
                                neighbor 192.0.2.20 maximum-prefix 5000 80 restart 60<br/>
                                neighbor 192.0.2.30 maximum-prefix 5000 80 restart 60
                              </code>
                            </pre>
                            
                            <p className="font-semibold mt-3">Result:</p>
                            <p>ISPs exchange routes through the route server, reducing the need for full-mesh peering. Prefix filters ensure only valid routes are accepted.</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Data Center EVPN/VXLAN</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Modern data center using BGP EVPN for VXLAN overlay:</p>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="font-semibold">Scenario:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Spine-leaf architecture</li>
                              <li>Need for L2/L3 services across the fabric</li>
                              <li>VXLAN for overlay, BGP EVPN for control plane</li>
                            </ul>
                            
                            <p className="font-semibold mt-3">Implementation (Cisco NX-OS):</p>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto text-sm">
                              <code>
                                ! Leaf Switch Configuration<br/>
                                feature bgp<br/>
                                feature vn-segment-vlan-based<br/>
                                feature nv overlay<br/>
                                <br/>
                                ! BGP EVPN configuration<br/>
                                router bgp 65001<br/>
                                router-id 10.0.0.1<br/>
                                neighbor 10.0.0.100 remote-as 65001<br/>
                                address-family l2vpn evpn<br/>
                                  neighbor 10.0.0.100 activate<br/>
                                  neighbor 10.0.0.100 send-community extended<br/>
                                <br/>
                                ! VXLAN interface<br/>
                                interface nve1<br/>
                                  no shutdown<br/>
                                  source-interface loopback0<br/>
                                  member vni 10000 mcast-group 239.1.1.1<br/>
                                <br/>
                                ! EVPN VNI mapping<br/>
                                evpn<br/>
                                  vni 10000 l2<br/>
                                  rd 10.0.0.1:10000<br/>
                                  route-target import 65001:10000<br/>
                                  route-target export 65001:10000
                              </code>
                            </pre>
                            
                            <p className="font-semibold mt-3">Result:</p>
                            <p>BGP EVPN provides scalable control plane for VXLAN, enabling L2 extension and L3 services across the data center fabric.</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Service Provider MPLS VPN</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">Service provider offering MPLS L3VPN services:</p>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="font-semibold">Scenario:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Service provider with AS 100</li>
                              <li>Multiple customers with separate VPNs</li>
                              <li>Need for traffic isolation and scalability</li>
                            </ul>
                            
                            <p className="font-semibold mt-3">Implementation (Cisco IOS):</p>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto text-sm">
                              <code>
                                ! PE Router Configuration<br/>
                                router bgp 100<br/>
                                bgp router-id 10.0.0.1<br/>
                                <br/>
                                ! MP-BGP for VPNv4<br/>
                                address-family vpnv4<br/>
                                neighbor 10.0.0.2 activate<br/>
                                neighbor 10.0.0.2 send-community extended<br/>
                                exit-address-family<br/>
                                <br/>
                                ! Customer VRF configuration<br/>
                                ip vrf Customer_A<br/>
                                rd 100:1<br/>
                                route-target import 100:1<br/>
                                route-target export 100:1<br/>
                                <br/>
                                ! Customer-facing interface<br/>
                                interface GigabitEthernet0/0<br/>
                                ip vrf forwarding Customer_A<br/>
                                ip address 192.168.1.1 255.255.255.0<br/>
                                <br/>
                                ! BGP for Customer VRF<br/>
                                router bgp 100<br/>
                                address-family ipv4 vrf Customer_A<br/>
                                neighbor 192.168.1.2 remote-as 65100<br/>
                                neighbor 192.168.1.2 activate<br/>
                                exit-address-family
                              </code>
                            </pre>
                            
                            <p className="font-semibold mt-3">Result:</p>
                            <p>MP-BGP carries customer routes with route distinguishers to maintain separation. Each customer gets a private VPN with no visibility to other customers' traffic.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>BGP in Public Internet</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">The global Internet relies on BGP for inter-domain routing. Here are some real-world statistics:</p>
                        
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-muted">
                              <th className="border p-2 text-left">Metric</th>
                              <th className="border p-2 text-left">Value (Approximate)</th>
                              <th className="border p-2 text-left">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">Active BGP Prefixes</td>
                              <td className="border p-2">900,000+</td>
                              <td className="border p-2">Growing at ~10% annually</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Active ASNs</td>
                              <td className="border p-2">70,000+</td>
                              <td className="border p-2">Organizations with public AS numbers</td>
                            </tr>
                            <tr>
                              <td className="border p-2">IPv6 BGP Prefixes</td>
                              <td className="border p-2">150,000+</td>
                              <td className="border p-2">Growing faster than IPv4</td>
                            </tr>
                            <tr>
                              <td className="border p-2">Average AS Path Length</td>
                              <td className="border p-2">~4-5 hops</td>
                              <td className="border p-2">Most destinations within 5 AS hops</td>
                            </tr>
                            <tr>
                              <td className="border p-2">BGP Update Rate</td>
                              <td className="border p-2">~100-1000 updates/minute</td>
                              <td className="border p-2">Higher during network events</td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <p className="mt-4">Major Internet outages often involve BGP misconfigurations or route leaks. For example:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li><strong>2008 YouTube Hijacking</strong>: Pakistan Telecom accidentally advertised YouTube's prefixes, redirecting global traffic.</li>
                          <li><strong>2019 Cloudflare Outage</strong>: A small ISP leaked routes that exceeded the maximum prefix limits of its peers.</li>
                          <li><strong>2021 Facebook Outage</strong>: BGP routes to Facebook's DNS servers were withdrawn, making services unreachable.</li>
                        </ul>
                        
                        <p className="mt-4">These examples highlight the critical importance of BGP security measures like RPKI, prefix filtering, and maximum prefix limits.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-sm mt-8">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300">
            BGP Protocol Interactive Tutorial - A comprehensive guide for network engineers
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

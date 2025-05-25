/**
 * Section context extraction service for the BGP tutorial
 * Provides context-specific information for each section to enhance ChatGPT responses
 */

/**
 * Map of section identifiers to their descriptive context
 */
export const sectionContextMap: Record<string, string> = {
  introduction: `
    Introduction to BGP (Border Gateway Protocol)
    - BGP is an exterior gateway protocol designed to exchange routing and reachability information among autonomous systems
    - Key characteristics: path-vector protocol, uses TCP port 179, maintains large routing tables
    - Designed for inter-AS routing with policy-based routing capabilities
    - Comparison with other routing protocols like OSPF, EIGRP, and IS-IS
  `,
  
  fundamentals: `
    BGP Fundamentals
    - BGP message types: OPEN, UPDATE, KEEPALIVE, NOTIFICATION
    - BGP neighbor states: Idle, Connect, Active, OpenSent, OpenConfirm, Established
    - BGP path attributes: Well-known mandatory (AS_PATH, NEXT_HOP, ORIGIN), Well-known discretionary (LOCAL_PREF), Optional transitive, Optional non-transitive
    - BGP path selection process: Weight, Local Preference, Locally originated, AS Path length, Origin type, MED, External vs Internal, IGP metric, Router ID
    - Cisco IOS configuration basics for BGP
  `,
  
  addressFamilies: `
    BGP Address Families
    - IPv4 unicast: Traditional BGP routing for IPv4 prefixes
    - IPv6 unicast: BGP for IPv6 prefixes with similar functionality to IPv4
    - VPN address families: VPNv4, VPNv6 for MPLS L3VPN services
    - EVPN: Ethernet VPN for layer 2 and layer 3 services
    - L2VPN: Layer 2 VPN services
    - Cisco IOS configuration for different address families
  `,
  
  configuration: `
    BGP Configuration
    - Cisco IOS/IOS-XE/NX-OS BGP configuration
    - Router BGP ASN command
    - Neighbor configuration with remote-as, update-source, ebgp-multihop
    - Address family configuration
    - Route advertisement methods: network, redistribute, aggregate-address
    - BGP attributes configuration: route-maps, prefix-lists, as-path access-lists
    - BGP policy configuration examples
  `,
  
  bestPractices: `
    BGP Best Practices
    - Security: MD5 authentication, GTSM (TTL security), prefix filtering, RPKI
    - Scalability: Route reflectors, confederations, peer groups, maximum-prefix limits
    - Stability: Soft reconfiguration, route dampening, graceful restart, BFD
    - Policy: Consistent route filtering, community-based policies, local preference for traffic engineering
    - Cisco IOS best practices for BGP configuration
  `,
  
  realWorldExamples: `
    BGP Real-World Examples
    - Enterprise multi-homing: Dual ISP connectivity with primary/backup configuration
    - Internet Exchange Point (IXP) peering: Route server configuration, peer filtering
    - Data Center EVPN/VXLAN: BGP as control plane for VXLAN overlay networks
    - Service Provider MPLS VPN: BGP for customer route distribution
    - Cisco IOS configuration examples for each scenario
  `,
  
  routeFiltering: `
    BGP Route Filtering
    - Prefix lists: Filter routes based on network prefix and length
    - Route maps: Complex policy application with match and set clauses
    - AS path filtering: Filter routes based on AS path regular expressions
    - Community filtering: Filter routes based on community values
    - Cisco IOS configuration examples for each filtering method
    - Visual diagrams showing how each filtering method works
  `,
  
  communities: `
    BGP Communities
    - Standard communities: 32-bit values (format: ASN:value)
    - Extended communities: 64-bit values for additional functionality
    - Large communities: 96-bit values (format: ASN:function:parameter)
    - Well-known communities: no-export, no-advertise, local-AS
    - Community-based routing policies
    - Cisco IOS configuration for setting and matching communities
  `,
  
  security: `
    BGP Security
    - MD5 authentication: neighbor password configuration
    - GTSM (TTL security): Protecting BGP sessions with TTL checks
    - Prefix filtering: Inbound and outbound prefix control
    - RPKI (Resource Public Key Infrastructure): Route origin validation
    - BGPSEC: Path validation mechanisms
    - Cisco IOS security configuration examples
  `,
  
  troubleshooting: `
    BGP Troubleshooting
    - Common BGP issues: neighbor establishment problems, route advertisement issues
    - Cisco IOS debugging commands: debug ip bgp, debug ip bgp events
    - Verification commands: show ip bgp summary, show ip bgp neighbors, show ip bgp
    - BGP table analysis and route selection verification
    - Troubleshooting methodology for BGP issues
  `,
  
  timers: `
    BGP Timers
    - Keepalive timer: Default 60 seconds, determines how often keepalive messages are sent
    - Holdtime timer: Default 180 seconds, how long before a peer is declared dead
    - ConnectRetry timer: How long to wait between connection attempts
    - BFD (Bidirectional Forwarding Detection): Fast failure detection
    - Cisco IOS timer configuration examples
  `,
  
  loadBalancing: `
    BGP Load Balancing
    - ECMP (Equal-Cost Multi-Path): Load balancing across equal-cost paths
    - DMZ link bandwidth: Proportional load balancing based on bandwidth
    - Multipath configuration: maximum-paths command
    - iBGP vs eBGP load balancing considerations
    - Cisco IOS load balancing configuration examples
  `,
  
  sdwan: `
    BGP in SD-WAN
    - Integration with Cisco SD-WAN (formerly Viptela)
    - BGP route redistribution in SD-WAN environments
    - OMP (Overlay Management Protocol) and BGP interaction
    - Migration strategies from traditional BGP to SD-WAN
    - Cisco SD-WAN configuration examples for BGP
  `
};

/**
 * Get context for a specific section
 * @param section The section identifier
 * @returns The context string for the specified section
 */
export function getSectionContext(section: string): string {
  return sectionContextMap[section] || 'General BGP information and concepts.';
}

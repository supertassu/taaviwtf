---
title: "[0x01] The lab network"
date: 2019-12-31
draft: true
weight: 2
---

As explained in the [the series overview]({{< ref "/lab/0x00-overview.md" >}}), I use the lab to experiement with enterprise gear so my home network is - let's say - advanced.

## The hardware

My router is a HP desktop I got for free running pfSense. I installed a second NIC in it. Any PC should work.

My main switch is a 1st gen [Unifi US-24](https://store.ui.com/products/unifi-switch-24) featuring 24 1Gb RJ45 ports and 2 1Gb SFP ports. I didn't buy the PoE version due to budget constraints. It's managed via the Unifi controller that I have running on a VM on my hypervisor.

For Wi-Fi, I have an [Unifi UAP-AC-LITE](https://store.ui.com/products/unifi-ac-lite). Because my switch doesn't have PoE ports, I use the included PoE injector to power it.

## The routing

As mentioned previously, I use pfSense for routing. It's really simple to install: create an USB stick with the ISO file, boot router from it, install files, setup a LAN range and some other options (usually the defaults are fine).

For my LAN, I use `10.20.0.1/24` (do not use `192.168.0.1/24` or `192.168.1.1/24` for reasons) and in there, I created a DHCP range (`10.20.0.[100-200]`). I use the LAN for management and networking devices (routers, switches) only and create VLANs for clients.

I have four VLANs: `10` for users, `20` for the "lab" devices, `30` for IoT stuff and `40` for guests. They all exist in various ranges under `10.20.0.0/16`, usually either `10.20.[VLANID].0/24` or a `/21` so that `10.20.[VLANID].1` is in it. They all have some space for DHCP and some for static devices.

### Firewalling

My firewall rules in a nutshell:

* Trusted users in VLAN `10` can access anything except the LAN net
* Lab devices in VLAN `20` can get out, to VLAN `30` (IoT) and use ICMP and UDP port 161 (SNMP) to LAN and VLAN `10` (users).
* IoT devices in VLAN `30` can get out (I should restrict these, but I haven't found the time) and access my MQTT broker in my home assistant server.
* Guests in VLAN `40` can get out but basically nothing else.

## The switching

On my switch (1st gen Unifi US-24), I have two trunk ports (upstream and for the AP), one LAN/management port for emergenices, and then designated some ports for the Lab VLAN. The rest are [802.1x](https://en.wikipedia.org/wiki/IEEE_802.1X) ports that authenticate users via Active Directory NPAS (I'll write about my AD setup later).

## The AP

On the Unifi AP that I have, I've setup a couple of networks:

* my main network uses WPA Enterprise and authenticates user via AD NPAS to a VLAN (usually User VLAN)
* the IoT network is used by the IoT devices that I have (a Google Home, Chromecast and some other devices)
* the Guest network is used by guests and segmented off so they can't access home/lab network

## VPNs

I have an OpenVPN service running on my router that I can use to access my network from outside. It assigns its clients to `10.10.1.0/24` and has the same firewall rules as the user network.

I also have a VPN tunnel to [Osku](https://atk-tehdas.com)'s network. We used this tutorial to set it up, if you're interested: https://mitky.com/pfsense-openvpn-site-to-site-vpn/
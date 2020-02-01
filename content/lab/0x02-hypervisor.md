---
title: "[0x02] The hypervisor [WIP]"
date: 2019-02-01
weight: 3
---

> This article is still a Work-In-Progress.

I have a Lenovo S30 that is currently my main hypervisor. I bought it used from [workstation4u.de](https://workstation4u.de). I'm planning to get another one for redundancy, but for now here are the specs:

| Component | Description | Notes |
|-|-|-|
| CPU | Intel Xeon E5-2660 | 8c16t @ 2.20GHz |
| RAM | 4x Samsung M393B2G70BH0 | total 64GB DDR3 RDIMM |
| GPU | Some cheap one that I had lying around | Only needed for installing OS |
| SSD | SanDisk SSD PLUS 1000GB |  |
| HDD | Hitachi HDS721010CLA630 | basic 1TB HDD, Came free with the machine |

I use [Proxmox](https://proxmox.com) as my hypervisor software. It supports clustering and all other useful stuff.

## Naming scheme

My current hypervisor is `host01`. I plan to name my future hypervisors `host02`, `host03`, etc.

In the beginning, my VM names were unorganized. Nowadays they all follow the same scheme:

* Domain controllers use `[host]dc[two numbers]`
  * For example, the second DC in `host01` would be `host01dc02`
* Other services are just `[service name]srv[two numbers]`
  * For example, my DHCP servers are `dhcpsrv0[12]`.
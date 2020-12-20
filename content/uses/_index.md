---
title: Uses
description: My preferred tech stack
---

aka: My preferred tech stack.

## OS

* Debian for most things
* Windows for gaming, learning AD and some other things

## Essential software

* i3 window manager, rofi for launching programs.
  * i3-gaps [isn't packaged](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=909646) for Debian currently, and I'm too lazy to build it myself.
* [Terminator](https://terminator-gtk3.readthedocs.io/en/latest/) for doing terminal things. Zsh as a shell, tmux for doing many terminal things at once.
  Bash and Python for scripting.
* Font: A custom build of [Iosevka](https://typeof.net/Iosevka) (that you are reading right now)! In case you are curious, my config file is
  available [here](https://static.taavi.wtf/fonts/Iosevka/config.toml.txt) and instructions for building it are
  [here](https://adam.kruszewski.name/articles/2019-10-27-build-custom-iosevka-font/).
* Firefox for web browsing. Debian packages the extended support releases, so I just use them. uBlock Origin for blocking trackers and ads.

## Hosting bits

* [Proxmox](https://proxmox.com) for virtualisation at home.
* DigitalOcean for the things that I want to have running in The Cloud(TM), mostly my IRC bouncer and some public services.
* [Puppet](https://puppet.com) for configuration management
* [Cumin](https://github.com/wikimedia/cumin) for running commands in many machines
* I'm working on my own automation cookbook library, hopefully it's in a stage where I can publish it soon-ish.

### Networking

I'm planning on writing a full blog post about my home network. As of writing this I haven't gotten around into it yet.

* I use [pfSense](https://pfsense.org) for routing. I really like it.
* Microsoft Active Directory for DNS, DHCP, and RADIUS (yes, I use enterprise authentication on my home network).
* I'm currently using [UniFi](https://unifi-network.ui.com/) for switching and for my WiFi.

## Development

* JetBrains IDEs for code editing. I'm a student so I don't have to pay for them.
* VS Code for text editing when I don't need a full blown IDE. I've decided to use Insiders for some reason.
* [mycli](https://www.mycli.net/) for doing things with MariaDB databases.

### Web things

* nginx as a generic web server, HAProxy when I only need to proxy things.
* I currently dislike building most things with those JavaScript SPA frameworks. JavaScript is fine for adding interactivity
  (I mostly use [Alpine](https://github.com/alpinejs/alpine) for that) but I prefer rendering things server-side. As crazy as
  it sounds, I somewhat like modern PHP. I usually use [Laravel](https://laravel.com).
* I wrote my own little utility, [nima](https://github.com/supertassu/nima), for adding sites to nginx config. It's somewhat
  inspired by [Valet](https://laravel.com/docs/8.x/valet) but it doesn't do anything else than handle Nginx config. My DNS server
  wildcards `*.test` and `*.*.test` to localhost.
* I also wrote [a little script](https://github.com/supertassu/dotfiles/blob/master/bin/setup-laravel-database) to automatically
  configure a database for a Laravel application.
* [Hugo](https://gohugo.io) for generating static sites.
* [TailwindCSS](https://tailwindcss.com) for styling.
* GitHub Pages for deploying static public sites.

## Misc stuff and things

* [The Lounge](https://thelounge.chat) for IRC. I have [ZNC](https://znc.in) between thelounge and IRC servers just so I can restart thelounge
  without causing join/leave spam on IRC and so I can sometimes use Irssi when I feel adventurous.
* [Phabricator](https://phabricator.com) for issue tracking. I haven't been sold for its code review (at least yet) but I really like Maniphest,
  it's issue tracking application. GitHub issues is ok but I would like to see some sort of native issue relations.
* [1Password](https://1password.com) as a password manager.

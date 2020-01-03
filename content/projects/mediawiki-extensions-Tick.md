---
title: "MediaWiki extensions: Tick"
---

> Adds a tag that allows an user to "tick" it with current timestamp

## Installing

```bash
# Clone the repo
$ git clone https://git.majava.org/mayktek/mediawiki-extensions-Tick.git /var/www/html/mediawiki/extensions/Tick
# Add to LocalSettings.php
$ echo "wfLoadExtension( 'Tick' );" >> /var/www/html/mediawiki/LocalSettings.php
# Run database migrations
$ php /var/www/html/mediawiki/maintenance/update.php
# Possibly then configure user right (tick). By default it's granted to autoconfirmed users
```

## Usage
```
# Add a Tick
{{#tick: tick_id | Description shown}}
# Add a Tick all button
{{#submit_selected_ticks: }}
```

API instructions available on [[Special:ApiSandbox]].

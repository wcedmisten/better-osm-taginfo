# better-osm-taginfo
Userscript adding UI improvments for [taginfo.openstreetmap.org](https://taginfo.openstreetmap.org/)

Currently this is limited to adding a responsive design to the `/keys` page, but this may expand to other areas in the future.
The responsive design uses a single breakpoint at 768px, but this may also be improved later.

Let me know if you have any suggestions on things to improve, I'm open to discussion!

1. Install [Tampermonkey](https://www.tampermonkey.net) or [Violentmonkey](https://violentmonkey.github.io/)
2. [Install](https://github.com/wcedmisten/better-osm-taginfo/raw/refs/heads/main/better-osm-taginfo.user.js) script

## Current Limitations

* The `Distribution of values` section is a fixed size and doesn't expand to fill the available space
* The height of the Chronology graph is still not responsive
* The image under `Wiki` is usually only 300px, which does not utilize the full width on desktop

# Screenshots at different resolutions

## Desktop (1080p)

### Before

![desktop screenshot before](/screenshots/1080-before.png)

### After

![desktop screenshot after](/screenshots/1080-after.png)

## iPhone 12 Pro Max

### Before

![iphone 12 screenshot before](/screenshots/iphone-12-before.png)

### After

![iphone 12 screenshot after](/screenshots/iphone-12-after.png)

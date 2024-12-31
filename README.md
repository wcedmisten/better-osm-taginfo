# better-osm-taginfo
Userscript adding UI improvments for taginfo.openstreetmap.org

Currently this is limited to adding a responsive design to the `/keys` page, but this may expand to other areas in the future.

Let me know if you have any suggestions on things to improve, I'm open to discussion!

1. Install [Tampermonkey](https://www.tampermonkey.net) or [Violentmonkey](https://violentmonkey.github.io/)
2. [Install](https://github.com/wcedmisten/better-osm-taginfo/raw/refs/heads/main/better-osm-taginfo.user.js) script

## Current Limitations

* The `Distribution of values` section is a fixed width and cannot be widened to match the available space
* The height of the Chronology graph is still not responsive
* The image under `Wiki` is usually only 300px, which does not utilize the full width on desktop

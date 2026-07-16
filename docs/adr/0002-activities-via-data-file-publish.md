# Activities live in a committed data file

The Editor changes Activities by editing a data file in the repo, then Publishes via redeploy (e.g. GitHub Pages). There is no runtime write API and no browser-local storage as source of truth — so the Viewer always sees what was last Published, on any device.

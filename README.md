# Sharpie
This project uses [drivelist](https://github.com/balena-io-modules/drivelist) to get the list of drives, fetches a random image from https://picsum.photos and uses it for the drive label after resizing it with [sharp](https://github.com/lovell/sharp). It stores the data using [sqlite3](https://github.com/TryGhost/node-sqlite3).

> Dev build. Sharp works perfecrtly okay.
![image](https://github.com/damms005/sharpie/assets/9839355/905d088f-cf1f-4c99-a520-758d0de7da99)


> Production build. Sharp is not bundled.
![image](https://github.com/damms005/sharpie/assets/9839355/c8a95a40-b940-4256-9c21-2c624af4d2e8)


## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```


### Build the app for production
```bash
npm run build
```

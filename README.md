# IPB e-Booking Seminar Project

Aplikasi mobile mahasiswa Pascasarjana IPB untuk mem-booking seminar

## Konten
- [Instalasi](#instalasi)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)
- [Original Repo](#original-repo)

## Instalasi

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`

## Original Repo
Project ini merupakan hasil cloning dari [https://github.com/ionic-team/ionic-conference-app](https://github.com/ionic-team/ionic-conference-app) (Lisensi: Apache 2.0) dengan beberapa perubahan menyesuaikan dengan fitur aplikasi ini.
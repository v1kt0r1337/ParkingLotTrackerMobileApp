# ParkingLotTrackerMobileApp

A mobile application for the parking lot tracker, written in TypeScript and using the mobile framework React Native. 
In the app the user can see which parking lots that got empty spaces, and can find tracked parking lots near their
location in Google Map.
Currently only Android is supported, but should be very quick to get iOS up and running. 
Link to APK:

Version:

## Table of Contents
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
- [How To Run](#how-to-run)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)

## Getting Started

Clone down the project in the manner that you prefer, example from terminal:

```
$ git clone https://github.com/Archheretic/ParkingLotTrackerMobileApp.git
```

If your interested in contributing to the project look at [Contributing](#contributing)


### Prerequisites

To be able to run this project the React Native development environment including NodeJS needs to be installed.
React Native documentation got an excellent guide for this here:
https://facebook.github.io/react-native/releases/0.23/docs/getting-started.html#content
For Linux check out this link:
https://facebook.github.io/react-native/releases/0.23/docs/getting-started-linux.html#content

Android development environment is also needed:
https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html#content

### Installing

To install the project write the following command in the terminal on the projects path.

```
$ npm install
```

## How to run

Start up your android emulator or plug in an android phone (developer options needs to be enabled).
First run:
```
$ react-native start
```
Wait for it to fully start up then in a separate terminal run
```
$ npm run start:a
```


## Running tests

No tests are currently written for the project, but the test environment has been configured for TypeScript.
To run future tests write:
```
$ npm test
```

## Contributing

This project welcomes contributions from the community. Contributions are
accepted using GitHub pull requests. If you're not familiar with making
GitHub pull requests, please refer to the
[GitHub documentation "Creating a pull request"](https://help.github.com/articles/creating-a-pull-request/).

For a good pull request, we ask you provide the following:

1. Try to include a clear description of your pull request in the description.
   It should include the basic "what" and "why"s for the request.
2. The tests should pass as best as you can. See the [Running tests](#running-tests)
   section on hwo to run the different tests. GitHub will automatically run
   the tests as well (soon to be implemented), to act as a safety net.
3. The pull request should include tests for the change. A new feature should
   have tests for the new feature and bug fixes should include a test that fails
   without the corresponding code change and passes after they are applied.
4. If the pull request is a new feature, please be sure to include all
   appropriate documentation additions in the `Readme.md` file as well. 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Archheretic/ParkingLotTrackerMobileApp/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Thanks to https://github.com/mysqljs/mysql for README inspiration,
and a big thanks to the whole open source community that has created the development framework and our dependencies in general.


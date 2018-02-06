# khol [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A command line utility for performing directory related tasks easily in linux


## Installation

```sh
# install the module globally
$ npm install --global khol
```

## Info:

This package comes has 3 operations:

1. Opening the directory in GUI method.
2. Saving the long directory path into a short one.
3. Opening the long directory path using a short name of your choice in GUI method.

## Usage

- Opening the directory in GUI method:

```sh
$ khol <file_name> # or <file_path>
```

### Example

To open current directory in GUI, you can use:

```sh
$ khol ./Videos  # opens the Videos folder in your current directory

# or
$ khol .  # opens the current directory in GUI
```

- Saving the long directory path into a short one.

```sh
$ sd <file_path>
# or
$ savedir <file_path>
```

### Example


```sh
$ sd ./Videos/Movies/Bollywood/NewCollection/AkshayKumar  ak_movies  # saves the long path by mapping it to `ak_movies`.

# or
$ savedir ./Videos/Movies/Bollywood/NewCollection/AkshayKumar  ak_movies  # saves the long path by mapping it to `ak_movies`.
```

- Opening the long directory path using a short name of your choice in GUI method.

```sh
$ goto <short_name>

```

### Example

- Opening the long directory path using a short name of your choice in GUI method.

```sh
$ goto ak_movies  # opens this `./Videos/Movies/Bollywood/NewCollection/AkshayKumar` path in GUI method.

```

## License

MIT © [Amit Upadhyay](https://github.com/amit-upadhyay-IT)


[npm-image]: https://badge.fury.io/js/khol.svg
[npm-url]: https://npmjs.org/package/khol
[travis-image]: https://travis-ci.org/amit-upadhyay-it/khol.svg?branch=master
[travis-url]: https://travis-ci.org/amit-upadhyay-it/khol
[daviddm-image]: https://david-dm.org/amit-upadhyay-it/khol.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/amit-upadhyay-it/khol
[coveralls-image]: https://coveralls.io/repos/amit-upadhyay-it/khol/badge.svg
[coveralls-url]: https://coveralls.io/r/amit-upadhyay-it/khol

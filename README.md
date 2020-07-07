dxc
===

Dev buddy for tooling and comfort

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dxc.svg)](https://npmjs.org/package/dxc)
[![Downloads/week](https://img.shields.io/npm/dw/dxc.svg)](https://npmjs.org/package/dxc)
[![License](https://img.shields.io/npm/l/dxc.svg)](https://github.com/dxc04/dxc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dxc
$ dxc
...
USAGE
  $ dxc [COMMAND]

COMMANDS
  advice   Shares an advice for you.
  help     display help for dxc
  inspire  Shares a quote for you.
  share    Shares an advice or inspires you with a quote.
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dxc help [COMMAND]`](#dxc-help-command)
* [`dxc advice`](#dxc-advice)
* [`dxc inspire`](#dxc-inspire)
* [`dxc share`](#dxc-share)

## `dxc help [COMMAND]`

display help for dxc

```
USAGE
  $ dxc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `dxc advice`

Shares an advice for you.

```
USAGE
  $ dxc advice
```

_See code: [src/commands/advice.ts](https://github.com/dxc04/dxc/blob/v0.0.0/src/commands/advice.ts)_

## `dxc inspire`

Shares a quote for you.

```
USAGE
  $ dxc inspire
```

_See code: [src/commands/inspire.ts](https://github.com/dxc04/dxc/blob/v0.0.0/src/commands/inspire.ts)_

## `dxc share [FILE]`

describe the command here

```
USAGE
  $ dxc share [-n=advice, -n=inspire]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  the command to run
```

_See code: [src/commands/share.ts](https://github.com/dxc04/dxc/blob/v0.0.0/src/commands/share.ts)_
<!-- commandsstop -->

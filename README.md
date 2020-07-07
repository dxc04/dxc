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
$ npm install -g @datay/dxc
$ dxc COMMAND
running command...
$ dxc (-v|--version|version)
@datay/dxc/0.0.0 linux-x64 node-v12.18.1
$ dxc --help [COMMAND]
USAGE
  $ dxc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dxc advice`](#dxc-advice)
* [`dxc help [COMMAND]`](#dxc-help-command)
* [`dxc inspire`](#dxc-inspire)
* [`dxc share`](#dxc-share)

## `dxc advice`

Shares an advice for you.

```
USAGE
  $ dxc advice
```

_See code: [src/commands/advice.ts](https://github.com/dxc04/dxc/blob/v0.0.0/src/commands/advice.ts)_

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

## `dxc inspire`

Shares a quote for you.

```
USAGE
  $ dxc inspire
```

_See code: [src/commands/inspire.ts](https://github.com/dxc04/dxc/blob/v0.0.0/src/commands/inspire.ts)_

## `dxc share`

Shares an advice or inspires you with a quote.

```
USAGE
  $ dxc share

OPTIONS
  -n, --name=advice|inspire  What to share
```

_See code: [src/commands/share.ts](https://github.com/dxc04/dxc/blob/v0.0.0/src/commands/share.ts)_
<!-- commandsstop -->

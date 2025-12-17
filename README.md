> [!CAUTION]
> This repository has been archived.
> Please use the following repository instead, which provides similar functionality:
>
> [compass-ts](https://github.com/ryohidaka/compass-ts)

# compass-heading-js

[![npm version](https://badge.fury.io/js/compass-heading-js.svg)](https://badge.fury.io/js/compass-heading-js)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Converts device orientation to compass heading.

## Installation

You can install this library using npm:

```shell
npm install compass-heading-js
```

## Props

| key   | descriptiion                    |
| ----- | ------------------------------- |
| alpha | The device's compass heading    |
| beta  | the device's tilt front-to-back |
| gamma | the device's tilt left-to-right |

## Usage

```typescript
import { calculateCompassHeading } from "compass-heading-js";

const alpha = 45;
const beta = 30;
const gamma = 60;

const heading = calculateCompassHeading(alpha, beta, gamma);
console.log(heading);
// Output: 260.76847951640775
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

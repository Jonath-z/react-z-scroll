# react-z-scroll

> Made with create-react-library

react-z-scroll is a react scroll library built on top of [skrollr](https://github.com/Prinzhorn/skrollr).

[![NPM](https://img.shields.io/npm/v/react-z-scroll.svg)](https://www.npmjs.com/package/react-z-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## DEM0

[react-z-scroll demo](https://react-z-scroll-demo-butik004.vercel.app)

## Install

```bash
npm install --legacy-peer-deps react-z-scroll
```

## Usage

Add `ScrollProvider` into root app

```jsx
import React, { Component } from 'react'

import { ScrollProvider } from 'react-z-scroll'

const myApp = () => {
     return (
      <ScrollProvider
        init={{
          smoothScrollingDuration: 500,
          smoothScrolling: true,
          forceHeight: false
        }}
      >
      ...
      </>
    )
}
```

### Setting Scene data (Required)

Use data scrolling via props `data` (props type is object)

Skrollr [_Data attr document_](https://github.com/Prinzhorn/skrollr#absolute-vs-relative-mode)

```js
const Component = () => {
  return (
    <Scene
      data={{
        'data-center-center': 'opacity: 1;',
        'data-bottom-top': 'opacity: 0;'
      }}
    >
      Some content
    </Scene>
  )
}
```

## License

MIT © [Jonath-z](https://github.com/Jonath-z)

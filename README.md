# use-single-history

> history的单例模式

[![NPM](https://img.shields.io/npm/v/use-single-history.svg)](https://www.npmjs.com/package/use-single-history) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-single-history
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-single-history'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [](https://github.com/)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

import React from 'react'

import { useMyHook } from 'use-single-history'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App

import './App.css'

import { ScrollProvider, Scene } from 'react-z-scroll'

const data = {
  'data-0p': 'background: blue;',
  'data-20p': '',
  'data-50p': 'background: black;',
  'data-70p': '',
  'data-90p': 'background: red;',
  'data-100p': ''
  // 'data-1000p': ' tranform: tranlateY(-200px)'
}

function App() {
  return (
    <div className='App'>
      <ScrollProvider
        initProps={{
          constants: {
            box: '300p'
          }
        }}
      >
        <Scene data={data}>
          <div
            style={{
              height: '100vh',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%'
            }}
          ></div>
        </Scene>
      </ScrollProvider>
    </div>
  )
}

export default App

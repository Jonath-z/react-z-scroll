import './App.css'

import { ScrollProvider, Scene } from 'react-z-scroll'

const data = {
  'data-top-top': 'transform: translateX(-100%);',
  'data-center-center': 'opacity: 1;transform: translateX(0%);',
  'data-bottom-top': 'opacity: 0;'
}

function App() {
  return (
    <div className='App'>
      <ScrollProvider
        initProps={{
          smoothScrollingDuration: 1000,
          smoothScrolling: true,
          forceHeight: false
        }}
      >
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
        <Scene data={data}>
          <span>Start scrolling to see some magic happen {'\u2728'}</span>
        </Scene>
      </ScrollProvider>
    </div>
  )
}

export default App

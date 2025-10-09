import { useState } from 'preact/hooks'
import BannerImage from './components/BannerImage.jsx'
import PhotoEntry from './components/PhotoEntry.jsx'
import './app.css'

export function App() {

  return (
    <>
      <div className="App">
        <header className="App-header" >
          <BannerImage />
          <h1> Welcome to my blog </h1>
          <PhotoEntry />
        </header>
      </div>      
    </>
  )
}

export default App;

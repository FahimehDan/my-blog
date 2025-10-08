import { useState } from 'preact/hooks'
import BannerImage from './components/BannerImage'
import './app.css'

export function App() {

  return (
    <>
      <div className="App">
        <header className="App-header" >
          <BannerImage />
          <h1> Welcome to my blog </h1>
        </header>
      </div>      
    </>
  )
}

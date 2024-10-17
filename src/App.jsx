
import './App.css'
import Icon from "./images/icon-blacklist.svg"

function App() {

  return (
    <>
      <header className='navbar'>
        <img src={Icon} alt="" />

        <h1>A history of everything you copy</h1>

        <p>Clipboard allows you to track and organize everythingy you copy. Instantly acces your clipboard on all your devices</p>
        <div className='btn-container-downloads'>
          <button className='download-ios'>Download for IOS</button>
          <button className='download-mac'>Download for Mac</button>
        </div>
      </header>

      <main className='your-snippets'>
        <h2>keep track of your snippets</h2>
        <p>clipboard instantly storesany items you copy in the could, meaning you can access your snippets immediately on all your  devices. Our Mac and IOS apps will help you organnize everything</p>
      </main>
    </>
  )
}

export default App

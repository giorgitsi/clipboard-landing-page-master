
import './App.css'
import Icon from "./images/logo.svg"
import computer from "./images/image-computer.png"
import Google from "./images/logo-google.png"
import Ibm from "./images/logo-ibm.png"
import Microsoft from "./images/logo-microsoft.png"
import Hewlett from "./images/logo-hp.png"
import Vector from "./images/logo-vector-graphics.png"
import DevicesImage from "./images/image-devices.png"
import Blacklist from "./images/icon-blacklist.svg"
import IConText from "./images/icon-text.svg"
import Eye from "./images/icon-preview.svg"
function App() {

  return (
    <>
      <header className='navbar'>
        <img src={Icon} alt="" />

        <h1>A history of everything you copy</h1>

        <p>Clipboard allows you to track and organize everythingy you copy. Instantly acces your clipboard on all your devices</p>
        <div className='btn-container-downloads'>
          <button className='download-ios'>Download for iOS</button>
          <button className='download-mac'>Download for Mac</button>
        </div>
      </header>

      <main>
        <section className='your-snippets short-text'>
          <h2>keep track of your snippets</h2>
          <p>clipboard instantly storesany items you copy in the could, meaning you can access your snippets immediately on all your  devices. Our Mac and IOS apps will help you  organnize everything</p>
        </section>

        <section className='computer-settings'>
          <div className='pc-img-container'>
            <img className='pc-image' src={computer} alt="" />
          </div>

          <div className='pc-content-container'>
            <div className='first-pc-content pc-content'>
              <h1>Quick Search</h1>
              <p>Easily search your snippets by content, category, web address, application, and more.
              </p>
            </div>

            <div className='second-pc-content pc-content'>
              <h1>iCloud Sync</h1>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>

            <div className='third-pc-content pc-content'>
              <h1>Complete History</h1>
              <p>Retrieve any snippets from the first moment you started using the app.</p>
            </div>
          </div>
        </section>

        <section className='access-clipboard short-text'>
          <h2>Access Clipboard Anywhere</h2>
          <p>Whether you're on the go, or at you can access all your Clipboard snippets in a few simple clicks</p>
        </section>


        <section className='devices-images'>
          <img src={DevicesImage} alt="" />
        </section>

        <section className='supercharge short-text'>
          <h2>Supercharge your workflow</h2>
          <p>we've got the tools to boost your productivity.</p>
        </section>



        <section className='short-explain'>

          <div className='blacklist short-text'>
            <img className='icon-img' src={Blacklist} alt="" />
            <h2>Create blacklist</h2>
            <p>Ensure sensivite information never makes its <br /> way to your clipboard by excluding certain <br /> sources.</p>
          </div>

          <div className='text-snippets short-text'>
            <img className='icon-img' src={IConText} alt="" />
            <h2>Plain text snippets</h2>
            <p>Remove unwanted formatting from copled text <br /> for a consistent look.</p>
          </div>

          <div className='sneak-preview short-text'>
            <img className='icon-img' src={Eye} alt="" />
            <h2>Sneak preview</h2>
            <p>Quick preview of all snippets on your Clipboard <br /> for easy access.</p>
          </div>

        </section>

        <section className='company-images-container'>
          <img src={Google} alt="" />
          <img src={Ibm} alt="" />
          <img src={Microsoft} alt="" />
          <img src={Hewlett} alt="" />
          <img src={Vector} alt="" />
        </section>


        <section className='clipboard-ios-mac'>

        </section>


      </main>

    </>
  )
}

export default App

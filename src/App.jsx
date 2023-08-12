import shareIcon from './assets/share.svg';
import kcLogo from './assets/kc.svg';
import kchLogo from './assets/kch.svg';
import pfpImg from './assets/pfp.svg';
import ghIcon from './assets/gh.svg';
import slackIcon from './assets/slack.svg';
import './App.css';

function App() {
  return (
    <>
        <header className='header'>
        <div className='pfp-ctrl'>
          <img className='pfp' id='pfp' src={pfpImg} alt="" />
          <a className='share' href="http://" target="_blank" rel="noopener noreferrer">
            <img src={shareIcon} alt="" />
          </a>
        </div>
        <p className='user-name' id='user-name'>John Doe</p>
      </header>
      <main className='main'>
        <div className='link-tree' id='link-tree'>
          <div className="link-hoster">
            <p className="link-name">Twitter Link</p>
            <a href="" className="link"></a>
          </div>
          <div className="link-hoster">
            <p className="link-name">KodeCamp Team</p>
            <a href="" className="link"></a>
          </div>
          <div className="link-hoster">
            <p className="link-name">KodeCamp Books</p>
            <a href="" className="link"></a>
          </div>
          <div className="link-hoster">
            <p className="link-name">Python Books</p>
            <a href="" className="link"></a>
          </div>
          <div className="link-hoster">
            <p className="link-name">Background Check for Coders</p>
            <a href="" className="link"></a>
          </div>
          <div className="link-hoster">
            <p className="link-name">Design Books</p>
            <a href="" className="link"></a>
          </div>
        </div>
        <div className='handles'>
          <div className='handle-ctrl'>
            <img className='handle' src={slackIcon} alt="" />
            <a className='handle-link' href=""></a>
          </div>
          <div className='handle-ctrl'>
          <img className='handle' src={ghIcon} alt="" />
            <a className='handle-link' href=""></a>
          </div>
        </div>
      </main>
      <footer>
        <div className='kc-logo-ctrl'>
          <img className='kc-logo' src={kcLogo} alt="" />
          <a className='logo-link' href=""></a>
        </div>
        <p className='kci'>KodeCamp Internship Task</p>
        <div className='kc-logo-ctrl'>
          <img className='kc-logo' src={kchLogo} alt="" />
          <a className='logo-link' href=""></a>
        </div>
      </footer>
    </>
  )
}

export default App

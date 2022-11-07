import { useEffect, useRef, useState } from 'react';
import './App.css';
import LikeSection from './components/LikeSection';
import LogoHoverLayout from './components/LogoHoverLayout';
import StatusSection from './components/StatusSection';

function App() {
  const [show, setShow] = useState(false)
  const logoRef = useRef();
  const [logoInfo, setLogoInfo] = useState({
    status: false,
    posX: 0,
    posY: 0
  })
  const showContent = (e) => {
    setShow(!show)
  }


  const getMousePosition = (e) => {

    const rect = logoRef.current.getBoundingClientRect()
    console.log(rect)
    if(!logoInfo.status) {
      setLogoInfo({
        status: true,
        posX: rect.left,
        posY: rect.top
      })
    }
  }

  const removeLogoLayout = (e) => {
    if(logoInfo.status) {
      setLogoInfo({
        status:false,
        posX: e.clientX,
        posY: e.clientY
      });
    }
  }
  console.log('app rendered')
  return (
    <div className="App">
      <div className='linkedin-feed'>
        <div className='feed-header'>
          <img className='img-logo' src='https://media-exp1.licdn.com/dms/image/C5603AQG_Sw9npO7vIg/profile-displayphoto-shrink_100_100/0/1627385878879?e=1672876800&v=beta&t=LSuEEvlqYawUFJLssdkfBY5_qHIMkPVftm0Oaa4YJI0'  
          alt='img' onMouseOver={(e) => getMousePosition(e)} onMouseOut={removeLogoLayout} ref={logoRef}></img>
          <div className='middle-header'>
              <span className='middle-header-name'>Jeremy Ravenel</span>  
              <span className='middle-header-rank'>• 3rd+</span>
            <span className='middle-header-body'>
            ⚡️ Building @naas.ai - open source data platform | Stanford LEAD alumni 
            </span>
            <span className='middle-header-time'>
              10h . Edited
            </span>
          </div>
          <div className='end-header'>
            <button>Follow</button>
          </div>
        </div>
        <div className='feed-paragraph'>
          <span className='show'>
          😎⚡️You don’t need AI or ML to solve most of the problems your organization have.
          <br>
          </br>
          <br></br>
          What you need to focus on is data quality, to build trust.
          <button className='show-content' onClick={showContent} style ={{ display: show ? 'none' : 'block'}}> ...see more</button>

          <br></br>
          </span>
          <span className='hide' style={{display: show ? 'block' : 'none'}}>
          Trust in your data enables decision makers to use something better than random or guts feelings to make desicions.
          <br></br>
          Don’t over complicate things, don’t over engineer things or systems. Please. 
          <br></br>
          Just focus on one problem to solve after another and find the rmost lean/pragmatic way to do it. 
          Cheers 🥂 
          <button className='hide-content' onClick={showContent} style ={{ display: show ? 'block' : 'none'}}> ... see less </button>
          </span>
        </div>
        <div className='img-container'>
          <img className='body-img' src='https://media-exp1.licdn.com/dms/image/C5622AQFMUVjNDZcnjw/feedshare-shrink_800/0/1667548466843?e=1670457600&v=beta&t=4h6DIe8na1sSlzVyBaVFtbusd_SRYJSTkeayQ7tZenU' alt='img'></img>          
        </div>
        <div className='reactions-zone'>
          <ul className='social-medias-counts'>
                <li className='reaction-icons'>
                <img src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt' alt='likes'></img>
                <img className='second-last'src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22' alt='love'></img>
                <img src='https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8' alt='clap'></img>
                <span> Surya, and 2,539 others </span>
                </li>
                <li className='comment-zone'>
                  16 comments 
                </li>
                <li className='share-zone'>
                  1 repost
                </li>
          </ul>
          <StatusSection />
      </div>
      </div>
      {logoInfo.status && <LogoHoverLayout positions ={{x:logoInfo.posX,y:logoInfo.posY}}/>}
    </div>
  );
}

export default App;

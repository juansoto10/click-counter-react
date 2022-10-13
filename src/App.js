import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import clickCounterLogo from './images/click_icon.svg'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='title'>
        <div className='title__img-cont'>
          <img className='title__logo'
            src={clickCounterLogo}
            alt='logo click counter' />
        </div>
        <h1>Click Counter</h1>
      </div>
      <div className='counter-cont'>
        <Counter numClicks={numClicks} />
        <div className='counter-cont__buttons'>
          <Button 
            text='Click'
            isClickButton={true}
            handleClick={handleClick} />
          <Button 
            text='Restart'
            isClickButton={false}
            handleClick={restartCounter} />
        </div>
      </div>
      <div className='author'>
          <p>© Juan Soto 2022</p>
        </div>
    </div>
  );
}

export default App;

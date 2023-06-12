import React, { useState, useEffect } from 'react'
import './Page.scss'
import { MdOutlineRoundaboutRight } from 'react-icons/md'
import { ImFilePdf } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Home = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [text, setText] = useState('');
  const content = ' Hello everyone. Thank you for visiting and taking a moment to view my Portfolio.';
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href='../myinfo/CV-Pham Tran Khoi-Eng.pdf';
    link.download = 'CV-PhamTranKhoi';
    link.click()
  };

  useEffect(() => {
      let count = 0;
      const interval = setInterval(() => {
          if( count === 6){
              clearInterval(interval);
              return;
          }
          setVisibleItems(prevVisibleItems => prevVisibleItems + 1)
          count++;
      }, 200);

      let currentText = '';
      let index = 0;
      const typingInterval = setInterval(() => {
        currentText += content[index];
        setText(currentText)
        index++;

        if (index === content.length) {
          clearInterval(typingInterval);
        }
      },50);
  },[])
  return (
    <>
      <div className='home-page'>
        <section className='avatar'>
          <img src='../images/avatar.png' className='w-[300px] h-[300px]' alt='avatar' />
        </section>
        <section className='hello-world'>
          <h2 className={visibleItems >= 1 ? 'visible' : ''}>HELLO WORLD</h2>
        </section>
        <section className='name'>
          <h4 className={visibleItems >= 2 ? 'visible-h4' : ''}>MY NAME IS</h4>
          <div className='my-name'>
            <h5 className={`my-name-1 ${visibleItems >= 3 ? 'visible-1' :''}`}>PHAM</h5>
            <h5 className={`my-name-2 ${visibleItems >= 4 ? 'visible-2' :''}`}>TRAN</h5>
            <h5 className={`my-name-3 ${visibleItems >= 5 ? 'visible-3' :''}`}>KHOI</h5>
          </div>
        </section>
        <section className='recommended'>
          <p>
            {text}
          </p>
        </section>
        <section className='about-me'>
          <Link to='/aboutme'>
            KNOWN MORE ABOUT ME
            <MdOutlineRoundaboutRight />
          </Link>
          <Link className='mt-5 mb-7' onClick={handleDownload}>
            DOWNLOAD MY CV
            <ImFilePdf />
          </Link>
        </section>
      </div>
    </>
  )
}

export default Home
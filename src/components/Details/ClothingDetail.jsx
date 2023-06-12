import React, { useEffect, useState } from 'react'
import './Detail.scss'

const ClothingDetail = () => {
    const [visible, setVisible] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        window.open(e.target.href, '_blank')
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            setVisible('show');
            clearInterval(interval);
        },200)
    },[])
  return (
    <>
        <div className='pt-[10px] mr-[50px] ml-[50px] detail-page'>
            <h2>CLOTHING SHOP</h2>
            <div className={`detail-project flex flex-wrap justify-start ${visible}`}>
                <div className='describe w-[100%] lg:w-[49%] lg:mr-[2%]'>
                    <h3>DESCRIBE PROJECT</h3>
                    <p>
                        This is a website that sells clothes online with 
                        many different brands and styles so that customers 
                        can buy their favorite items right from the website 
                        without having to go out or see samples before deciding 
                        to buy. to the store to buy or not. This website can 
                        be used on many devices from laptops, tablets or phones.
                    </p>
                </div>
                <div className='intro w-[100%] lg:w-[49%]'>
                    <h3>INFORMATION</h3>
                    <ul>
                        <li>
                            <b>Project type :</b> personal.
                        </li>
                        <li>
                            <b>Job description :</b> Build the entire UI for the website.
                        </li>
                        <li>
                            <b>Data :</b> virtual data contained in JS file.
                        </li>
                    </ul>
                </div>
                <div className='technology w-[100%] lg:w-[49%] lg:mr-[2%]'>
                    <h3>TECHNOLOGY</h3>
                    <ul>
                        <li>ReactJS 18.2.</li>
                        <li>React-router-dom v6.</li>
                        <li>React Hook.</li>
                        <li>Bootstrap 5.</li>
                        <li>React-icons.</li>
                        <li>Swipper.</li>
                    </ul>
                </div>
                <div className='source-code w-[100%] lg:w-[49%]'>
                    <h3>SOURCE CODE</h3>
                    <ul>
                        <li>
                            Link source code: 
                            <a href='https://github.com/khoipham160766/clothing_shop_template' onClick={handleClick}>CLICK HERE</a>
                        </li>
                        <li>
                            Link deploy: 
                            <a href='https://khoipham160766.github.io/clothing_shop_template/' onClick={handleClick}>CLICK HERE</a>
                        </li>
                    </ul>
                </div>
                <span className='span-1'></span>
                <span className='span-2'></span>
                <span className='span-3'></span>
                <span className='span-4'></span>
                <span className='span-5'></span>
                <span className='span-6'></span>
                <span className='span-7'></span>
                <span className='span-8'></span>
            </div>
        </div>
    </>
  )
}

export default ClothingDetail
import React, { useState, useEffect } from 'react'

const BookstoreDetail = () => {
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
                        This is an e-commerce website that sells books 
                        online. The site is compatible with many devices.
                    </p>
                </div>
                <div className='intro w-[100%] lg:w-[49%]'>
                    <h3>INFORMATION</h3>
                    <ul>
                        <li>
                            <b>Project type :</b> group of 4 people.
                        </li>
                        <li>
                            <b>Position in the project :</b> Build admin UI and build basic api for website.
                        </li>
                        <li>
                            <b>Data :</b> from Database.
                        </li>
                    </ul>
                </div>
                <div className='technology w-[100%] lg:w-[49%] lg:mr-[2%]'>
                    <h3>TECHNOLOGY</h3>
                    <ul>
                        <li>ReactJS 18.2.</li>
                        <li>React-router-dom v6.</li>
                        <li>React Hook.</li>
                        <li>Laravel v8.x.</li>
                        <li>MySQL.</li>
                        <li>TailwindCSS.</li>
                    </ul>
                </div>
                <div className='source-code w-[100%] lg:w-[49%]'>
                    <h3>SOURCE CODE</h3>
                    <ul>
                        <li>
                            Link source code: 
                            <a href='https://github.com/khoipham160766/bookstore-reactjs' onClick={handleClick}>CLICK HERE</a>
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

export default BookstoreDetail
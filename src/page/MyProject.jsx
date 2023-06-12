import React, { useEffect, useState } from 'react'
import { recommendProject } from '../data'
import './Page.scss'
import { Link } from 'react-router-dom'

const MyProject = () => {
    const [visibleItems, setVisibleItems] = useState(0);

    useEffect(()=>{
        let count = 0;
        const interval = setInterval(()=>{
            if(count === recommendProject.length){
                clearInterval(interval);
                return;
            }
            setVisibleItems(prevVisbibleItems => prevVisbibleItems + 1);
            count++;
        },150)
    },[])
    return (
        <>
            <div className='pr-[70px] pl-[70px] pt-[10px] my-project-page'>
                <h1 className='text-white text-center'>MY PROJECT</h1>
                <div className='content-my-project w-[100%] flex flex-wrap justify-start mt-4'>
                    { 
                        
                        recommendProject?.map((item,index)=>(
                            <div className={`project-card w-[100%] sm:w-[48%] lg:w-[31%] xl:w-[23%] mr-[2%] ${(visibleItems>=(index + 1))?'visible-card':''}`} key={index}>
                                <div className='img-project'>
                                    <img src={item.image} alt='' />
                                </div>
                                <div className='content'>
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                </div>
                                <div className='btn-view'>
                                    <Link to={item.link}>
                                        PROJECT DETAILS
                                    </Link>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>      
        </>
    )
}

export default MyProject
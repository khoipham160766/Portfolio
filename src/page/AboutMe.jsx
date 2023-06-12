import React, {useState, useEffect} from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsGenderMale } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const AboutMe = () => {
  const [visible, setVisible] = useState('');
  useEffect(()=>{
      const interval = setInterval(()=>{
          setVisible('show');
          clearInterval(interval);
      },200)
  },[])
  return (
    <>
      <div className={`about-page w-[90%] ml-[5%] lg:ml-[20%] lg:w-[60%] ${visible}`}>
        <div className='content flex flex-wrap justify-start'>
          <div className='avatar w-[100%] lg:w-[49%] md:w-[49%] lg:mr-[2%]'>
            <img src='../images/avatar-compressed.jpg' alt='avatar' />
            <h3>PHAM TRAN KHOI</h3>
          </div>
          <div className='profile w-[100%] md:w-[49%] lg:w-[49%]'>
            <h2>PROFILE</h2>
            <ul>
              <li><FaBirthdayCake />16/07/2001</li>
              <li><BsGenderMale />Male</li>
              <li><CgMail />khoipham160701@gmail.com</li>
              <li><HiOutlineLocationMarker />Tan Hung Thuan Ward, District 12, Ho Chi Minh City </li>
            </ul>
          </div>
          <div className='objective w-[100%] lg:w-[49%] md:w-[49%] lg:mr-[2%]'>
            <h2>OBJECTIVE</h2>
            <p>
              To learn, hone and improve skills, use the learned 
              knowledge to contribute to the company. Future orientation 
              will become a full-stack website developer. From there, 
              strive to bring value to the company and promote work.
            </p>
          </div>
          <div className='skills w-[100%] lg:w-[49%] md:w-[49%]'>
            <h2>SKILLS</h2>
            <ul>
              <li>HTML5, CSS3, JavaScript, JQuery, PHP, Java.</li>
              <li>ReactJS, React Hook, Bootstrap 5, TailwindCSS, SASS/SCSS.</li>
              <li>MySQL, Firebase.</li>
              <li>Git, GitHub, VsCode.</li>
            </ul>
          </div>
          <div className='education w-[100%] lg:w-[49%] md:w-[49%] lg:mr-[2%]'>
            <h2>EDUCATION</h2>
            <ul>
              <li><b>Sai Gon University</b></li>
              <li><b>Major : </b>Information Technology (Software Engineering)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import IMG from '../../assests/home.png'
import {AiFillFormatPainter} from 'react-icons/ai'
import {AiOutlineCode} from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsSpeedometer2} from 'react-icons/bs'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {BsPhone} from 'react-icons/bs'
import IMG1 from '../../assests/services1.jpg'
import IMG2 from '../../assests/service22.png'
import IMG3 from '../../assests/service3.png'
import IMG4 from '../../assests/service4.jpg'
import IMG5 from '../../assests/service5.jpg'
import IMG6 from '../../assests/service6.png'
import IMG7 from '../../assests/service7.jpg'
import IMG8 from '../../assests/service8.jpg'
import IMG9 from '../../assests/service9.jpg'

const Home = () => {

  return (

    <>
    <header>
      <div className="container header_container">
        <div className="header_left">
          <h1>Your dream websites and instant apps awaits !</h1>
          <p>Welcome to our fresh collection of themes. Hope you find your dream website and instant apps here. Start your journey with our themes.</p>
          <a href="#services" className='btn btn-primary'>View Collections</a>
        </div>

        <div className="header_right">
          <div className="header_right-img">
            <img src={IMG} alt="Img"/>
          </div>
        </div>
      </div>
    </header>

{/* ====================== END OF HEADER ======= */}

    <section className='categories'>
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Categories</h1>
          <p>Your website is the face of your business. A well-designed website puts your best foot forward, establishing credibility and authority with your potential clients, furthermore communicating your most interesting values, messages, and mission statements.</p>

          <a href="/services" className='btn'>Learn More</a>
        </div>

        <div className="categories_right">
          <article className='category'>
            <span className='category_icon'><AiFillFormatPainter/></span>
            <h5>UI/UX</h5>
            <p>We Provide the best UI/UX for the ultimate user experience by following the latest trends of the market.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><AiOutlineCode/></span>
            <h5>Bussiness Logic</h5>
            <p>Our payment gateway supports ; Debit card, Credit card, Net banking, UPI, Wallets EMI and bank transfer.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><HiOutlineLightBulb/></span>
            <h5>Creative Ideas</h5>
            <p>Client Satisfaction is our first priority and we are best at it. We make sure our client is satisfied with our after-sales services.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><BsSpeedometer2/></span>
            <h5>Fast Loding</h5>
            <p>Your website will be hosted on Industry level servers, which will be safe, secure and amazingly fast.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><RiSecurePaymentFill/></span>
            <h5>Secure</h5>
            <p>The focus on security has never been more important than in the current times. In the IT world, it gains more relevance every day. </p>
          </article>

          <article className='category'>
            <span className='category_icon'><BsPhone/></span>
            <h5>Responsive</h5>
            <p>100% web app ready and mobile responsive e-commerce website will just make your work easier.</p>
          </article>
        </div>
      </div>
    </section>

    <section className='courses'>
        <h2>Our Services</h2>
        <div className="container courses_container">
          <article className='course'>
            <div className="course_image">
              <img src={IMG1} alt="img" />
            </div>
            <div className="course_info">
              <h4>Education</h4>
              <p>Fully Customized E-commerce website solution for Your Business
                Our partner agencies have built Multi-vendor and Single-vendor E-Commerce websites across Industries. </p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG2} alt="img" />
            </div>
            <div className="course_info">
              <h4>Sports</h4>
              <p>Looking for a dating website development team to turn your idea into a working reality? Hire top developers who bring in the market a dating portal that brings the right pairs together.

              </p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG3} alt="img" />
            </div>
            <div className="course_info">
              <h4>E-commerce</h4>
              <p>Your website is the first thing that your customer notices before taking any action so it is high time you should leave an ever lasting impression on your customer.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG4} alt="img" />
            </div>
            <div className="course_info">
              <h4>Portfolio</h4>
              <p>Our developers have the extensive technical know-how and a passion for building travel specific websites. We also offer fully-functional tourism portal development services depending upon your custom requirements.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG5} alt="img" />
            </div>
            <div className="course_info">
              <h4>Non Profit</h4>
              <p>With our fully customizable and easy-to-integrate Live SDK, you can quickly build reliable, scalable, and interactive live streaming into your mobile, web, and desktop apps.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG6} alt="img" />
            </div>
            <div className="course_info">
              <h4>Services</h4>
              <p>Client-focused, customer-centric, creating website solutions that deliver tangible business results, Appnovation's web developers helps brands the ever-changing digital landscape.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG7} alt="img" />
            </div>
            <div className="course_info">
              <h4>Aerospace</h4>
              <p>We develop conversion-ready websites that attract, educate, nurture and convert your visitors to customers in one place.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG8} alt="img" />
            </div>
            <div className="course_info">
              <h4>Chemical</h4>
              <p> we are a creative team that helps small and large business tell their story to the world. We aim to create something that is authentic and can be found nowhere else!</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG9} alt="img" />
            </div>
            <div className="course_info">
              <h4>Transport</h4>
              <p>We automate complete sales and marketing tasks by automating your repetitive task in real time to provide a personalised experience to your visitors and convert them to customers at oneplace.</p>
            </div>
          </article>
        </div>
      </section>

    </>
  )
}

export default Home;
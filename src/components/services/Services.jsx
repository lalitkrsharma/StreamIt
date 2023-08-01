import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>  

      <div className='container services__container'>

        <article className='services'>
          <div className='services__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='services__list'>
            <li>{/* AISHA Chatbot */}
              <BsCheck2All className='services__list-icon'/>
              <p>
                <a href='https://github.com/lalitkrsharma/AISHA-chatbot'>A.I.S.H.A (Chatbot)</a> : Student Support LLM Chatbot for my University which utilizes "Knowledge Embedding" for custom responses.
              - [OpenAI api, NextJs, TailwindCSS]
              </p>
            </li> 

            <li>{/* 1StopShop */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href='https://github.com/lalitkrsharma/1StopShop'>1StopShop</a> : An E-Commerce parody website with Stripe and Sanity studio integration.
              - [Sanity api, Stripe, JavaScript & CSS]
              </p>
            </li>                        

            <li>{/* RoomKhojo */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href='https://github.com/lalitkrsharma/Room_Khojo'>Room-Khojo</a> : A Room-Booking website based on the MERN Stack.
              - [React, NodeJs, JavaScript & CSS]
              </p>
            </li> 

          </ul>
        </article>
        {/* End Of Web Dev ==========================================*/}

        <article className='services'>
          <div className='services__head'>
            <h3>Machine Learning</h3>
          </div>

          <ul className='services__list'>
            <li> {/* Machine Learning Specialization */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/AF3K7NFBJKCY">ML Specialization</a> : Completed the 3-course Specialization offered by Stanford Online(Coursera).
              </p>
            </li>            

            <li> {/* Course - 1 */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href="https://coursera.org/share/26a516400956b68df16166ab1c059e5c">Course-1</a> : Completed Supervised Machine Learning: Regression and Classification.
              </p>
            </li>
                        
            <li> {/* Course - 2 */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href="https://www.coursera.org/account/accomplishments/certificate/DKR4X52NXEQ5">Course-2</a> : Completed Advanced Learning Algorithms.
              </p>
            </li>

            <li> {/* Course - 3 */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href="https://www.coursera.org/account/accomplishments/certificate/7H5FY63X2S53">Course-3</a> : Completed  Unsupervised Learning, Recommenders, Reinforcement Learning.
              </p>
            </li>

          </ul>
        </article>
    {/* End Of Software Dev ===================================================*/}

        <article className='services'>
          <div className='services__head'>
            <h3>Game Development</h3>
          </div>

          <ul className='services__list'>
            <li> {/* Virtual Anatomy */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href='https://github.com/LluisV/Z-Anatomy-testing.git'>Virtual Anatomy</a> : An educational anatomy based game I created during my XROS Fellowship tenure for Z-Anatomy. XROS Fellowship is a Meta Supported prestigious program that hires only the top 100 XR Devs of India for a 3-month Open-Source contribution period.
              </p>
            </li>    

            <li> {/* Flappy Bird */}
              <BsCheck2All className='services__list-icon' />
              <p>
                <a href='https://github.com/lalitkrsharma/Birdy-Jump'>Birdy-Jump</a> : A Flappy Bird game I created as a hobby project.
              </p>
            </li>            
          </ul>
        </article>
    {/* End Of Game Dev ===================================================*/}
      </div>

    </section>
  )
}

export default Services
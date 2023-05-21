import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>
                TechyStar
            </h1>
            <p>
                Solution to all of your problems
            </p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          We are your one and only solution to the tech problems you face every day. We are leading
          Tech company whose aim is to incease the problem solving ability in children.

        </p>
      </div>
    </div>
    <div className='home3' id='about'>
      <div>
        <h1>
          Who we are?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus voluptatem rerum fugiat, est nostrum debitis, repellendus ad hic quisquam repudiandae saepe voluptate dignissimos asperiores quo! Esse officia voluptas eveniet molestiae. Repellendus dolor ipsum saepe incidunt voluptatem velit nisi hic blanditiis recusandae eos aspernatur omnis accusamus repudiandae perferendis aperiam quia ab provident at, pariatur harum ea unde. Magnam vitae alias sed voluptates, veniam quo delectus dolor officia dolores, culpa soluta. Saepe deserunt ipsa illum ut omnis nemo similique repudiandae sapiente? Quo asperiores ducimus quisquam sit aperiam! Temporibus tempore, aspernatur quae iure odit maxime libero perspiciatis vel aut nam voluptatibus vitae!
        </p>
      </div>

    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>
          Brands
        </h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
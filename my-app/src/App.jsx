import React from 'react'
import img1 from "./assets/Logo (7).png"
import img2 from "./assets/Mobile Screen 1.png"
import vector from "./assets/Mobile Screen 2.png"
import clockimg from "./assets/Alarm_Clock copy 2.png"
import clipboard from "./assets/CLIPBOARD VERIFIED 1.png"
import vector14 from "./assets/Vector (14).png"
import vector13 from "./assets/Vector (13).png"
import vector15 from "./assets/Vector (15).png"
import icon1 from "./assets/3d_rocket.png"
import icon2 from "./assets/Icon (15).png"
import icon3 from "./assets/Icon (16).png"
import icon4 from "./assets/Icon (17).png"
import icon5 from "./assets/Icon (18).png"
import icon6 from "./assets/Icon (19).png"
import icon7 from "./assets/Content (1).png"
import obj from "./assets/Objects.png"
import icon12 from "./assets/Icon (12).png"
import icon13 from "./assets/Icon (13).png"
import icon14 from "./assets/Icon (14).png"
import imgg from "./assets/Image (64).png"
import iconreader from "./assets/Vector 10.png"
import vecytor11 from "./assets/Vector 11.png"
import ssimage from "./assets/3D Image.png"
import img1s from "./assets/3D Image (1).png"
import fillter from "./assets/Filter.png"
import dicon from "./assets/3D Icon.png"
import hand from "./assets/Hand.png"
import { Button } from "@/components/ui/button"
import tools from "./assets/Tools.png"
import ing from "./assets/Mobile Screen.png"
import but from "./assets/Button 1.png"
import but1 from "./assets/Button 2.png"
import socials from "./assets/Socials.png"
import image1 from "./assets/Image 1 (8).png"
import image2 from "./assets/Image 2.png"
import like from "./assets/like.png"
import chat from "./assets/chat.png" 
import emoji from "./assets/emoji.png"
export const App = () => {
  return (
    <div>
      <header className='lg:bg-[#FFF8F2]'>
        <nav className=' lg:flex lg:top-[20px]  lg:p-[10px] lg:justify-around lg:items-center lg:max-w-[1200px] lg:m-auto'>
          <img src={img1} className='img1' alt="" />
          <ul className='flex gap-[20px]'>
            <li>Demos</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <div className='flex gap-[10px]'>
            <Button variant="secondary">Login</Button>
            <Button className="bg-[#FF553E] ">Sign up</Button>
          </div>
        </nav>
        <section>
          <div className='lg:items-center lg:text-center lg:mt-[100px] lg:flex lg:flex-col lg:gap-[20px] '>
            <h2 className='lg:text-[64px] lg:w-[800px]'>A collaborative  Time Tracking that you Need</h2>
            <p className='lg:text-[20px] lg:w-[600px]'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
            <Button className="bg-[#FF553E] lg:mb-[300px] ">Start 14 Days Trial</Button>
            <img src={img2} className='lg:w-[300px] lg:absolute lg:top-[200px] left-[30px] lg:max-w-[1200px] lg:m-auto ' alt="" />
            <img src={vector} className='lg:w-[300px] lg:absolute lg:top-[290px] left-[1040px] lg:max-w-[1200px] lg:m-auto ' alt="" />
            <img src={clockimg} className='lg:w-[100px] lg:absolute lg:top-[110px] left-[240px] lg:max-w-[1200px] lg:m-auto ' alt="" />
            <img src={clipboard} className='lg:w-[100px] lg:absolute lg:top-[400px] left-[980px] lg:max-w-[1200px] lg:m-auto ' alt="" />
            <img src={vector13} className='lg:w-[100px] lg:absolute lg:top-[100px] left-[160px] lg:max-w-[1200px] lg:m-auto ' alt="" />
            <img src={vector14} className='lg:w-[100px] lg:absolute lg:top-[494px] left-[910px] lg:max-w-[1200px] lg:m-auto ' alt="" />
            <img src={vector15} className='lg:w-[60px] lg:absolute lg:top-[505px] left-[510px] lg:max-w-[1200px] lg:m-auto ' alt="" />

          </div>
        </section>
      </header>
      <main>
        <section>
          <div className='lg:flex lg:gap-[140px] lg:items-center  lg:text-center lg:justify-center lg:mt-[100px]'>
            <article>
              <h2 className='lg:text-[50px] lg:font-bold'>
                15k+
              </h2>
              <p className='text-gray-500 '>Active user</p>
            </article>
            <article>
              <h2 className='lg:text-[50px] lg:font-bold'>
                10k
              </h2>
              <p className='text-gray-500'>Customer</p>
            </article>
            <article>
              <h2 className='lg:text-[50px] lg:font-bold'>
                30k
              </h2>
              <p className='text-gray-500'>Total Download</p>
            </article>
          </div>
          <div className='lg:max-w-[1200px] lg:m-auto lg:text-center lg:flex lg:flex-col lg:mt-[40px]'>
            <h2 className='lg:text-[48px]'>Some excellent features for you</h2>
            <p className='lg:text-center lg:text-[18px] w-[700px] lg:items-center lg:justify-center lg:ml-[250px] lg:mt-[30px]'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
            <img src={icon1} className='lg:w-[120px] lg:absolute lg:ml-[970px] lg:mt-[40px]' alt="" />
          </div>
          <div className='lg:flex lg:mt-[50px] lg:justify-center lg:gap-[20px]'>
            <article className='lg:bg-[#70D0DC] lg:w-[340px] lg:rounded-[30px] lg:h-[250px]'>
              <img src={icon2} className='lg: lg:w-[120px] lg:ml-[20px]' alt="" />
              <h2 className='lg:text-white lg:text-[28px] lg:ml-[40px]'>Preset List of Task</h2>
              <p className='lg:text-white lg:w-[273px] lg:ml-[40px]'>Make bill payments easily using the wallet app</p>
            </article>
            <article className='lg:bg-[#7562E0] lg:w-[340px] lg:rounded-[30px] lg:h-[250px]'>
              <img src={icon3} className='lg: lg:w-[120px] lg:ml-[20px]' alt="" />
              <h2 className='lg:text-white lg:text-[28px] lg:ml-[40px]'>Reminder of Task</h2>
              <p className='lg:text-white lg:w-[273px] lg:ml-[40px]'>Make bill payments easily using the wallet app</p>
            </article>
            <article className='lg:bg-[#FA865F] lg:w-[340px] lg:rounded-[30px] lg:h-[250px]'>
              <img src={icon4} className='lg: lg:w-[120px] lg:ml-[20px]' alt="" />
              <h2 className='lg:text-white lg:text-[28px] lg:ml-[40px]'>Complecation Report</h2>
              <p className='lg:text-white lg:w-[273px] lg:ml-[40px]'>Make bill payments easily using the wallet app</p>
            </article>
          </div>
        </section>
        <section className='lg:flex lg:max-w-[1200px] lg:m-auto lg:mt-[140px]'>
          <aside>
            <img src={obj} className='w-[1000px]' alt="" />
          </aside>
          <aside>
            <div >
              <h2 className='text-[50px] lg:font-bold'>Analytics & Reporting Brackdown</h2>
              <p className='lg:text-[18px] lg:w-[560px] lg:text-gray-500'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
            </div>
            <div className='lg:mt-[50px] lg:flex lg:flex-col lg:gap-[40px] '>
              <article className='lg:flex lg:items-center lg:gap-[20px]'>
                <img src={icon5} alt="" />
                <div>
                  <h2 className='lg:text-[20px] lg:font-bold'>Automatic event tracking</h2>
                  <p className='lg:w-[250px] lg:text-gray-500'>Time Tracking is never been easier.
                    Just let the stopwatch run</p>
                </div>
              </article>
              <article className='lg:flex lg:items-center lg:gap-[20px]'>
                <img src={icon6} alt="" />
                <div>
                  <h2 className='lg:text-[20px] lg:font-bold'>Customizable dashboard</h2>
                  <p className='lg:w-[250px] lg:text-gray-500'>Time Tracking is never been easier.
                    Just let the stopwatch run</p>
                </div>
              </article>
              <article className='lg:flex lg:items-center lg:gap-[20px]'>
                <img src={icon7} alt="" />
                <div>
                  <h2 className='lg:text-[20px] lg:font-bold'>Statistics retroactively</h2>
                  <p className='lg:w-[250px] lg:text-gray-500'>Time Tracking is never been easier.
                    Just let the stopwatch run</p>
                </div>
              </article>
            </div>
          </aside>
        </section>
        <section className='lg:flex lg:max-w-[1200px] lg:m-auto lg:mt-[100px] lg:bg-[#F3FDFE]'>
          <aside>
            <div>
              <h2 className='lg:text-[43px] lg:font-bold'>How our Tracker work for you</h2>
              <p className='lg:text-gray-500 lg:mt-[10px]'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
            </div>
            <div className='lg:mt-[50px] lg:flex lg:flex-col lg:gap-[40px] lg:ml-[80px] '>
              <article className='lg:flex lg:items-center lg:gap-[20px]'>
                <img src={icon12} alt="" />
                <div>
                  <h2 className='lg:text-[20px] lg:font-bold'>Automatic event tracking</h2>
                  <p className='lg:w-[250px] lg:text-gray-500'>Time Tracking is never been easier.
                    Just let the stopwatch run</p>
                </div>
              </article>
              <article className='lg:flex lg:items-center lg:gap-[20px] lg:ml-[60px]'>
                <img src={icon13} alt="" />
                <div>
                  <h2 className='lg:text-[20px] lg:font-bold'>Customizable dashboard</h2>
                  <p className='lg:w-[250px] lg:text-gray-500'>Time Tracking is never been easier.
                    Just let the stopwatch run</p>
                </div>
              </article>
              <article className='lg:flex lg:items-center lg:gap-[20px]'>
                <img src={icon14} alt="" />
                <div>
                  <h2 className='lg:text-[20px] lg:font-bold'>Statistics retroactively</h2>
                  <p className='lg:w-[250px] lg:text-gray-500'>Time Tracking is never been easier.
                    Just let the stopwatch run</p>
                </div>
              </article>
            </div>
          </aside>
          <aside>
            <img src={imgg} alt="" />
          </aside>
          <img src={iconreader} className='lg:absolute lg:mt-[210px] lg:ml-[470px] ' alt="" />

          <img src={vecytor11} className='lg:absolute lg:mt-[340px] lg:ml-[30px] ' alt="" />
          <img src={ssimage} className='lg:absolute lg:mt-[300px] lg:ml-[-80px] lg:w-[120px] ' alt="" />
          <img src={img1s} className='lg:absolute lg:mt-[-40px] lg:ml-[1150px] lg:w-[120px] ' alt="" />
        </section>
        <section className='lg:max-w-[1200px] lg:m-auto lg:mt-[40px]'>
          <div className=' lg:items-center text-center'>
            <h2 className='lg:text-[48px]'>Flexible work, Simple Price</h2>
            <p className='lg:text-[18px]'>Growth your business with using us</p>
            <img src={fillter} className='lg:ml-[440px] lg:mt-[30px]' alt="" />
          </div>
          <div className='lg:flex lg:justify-center lg:mt-[30px] lg:gap-[40px]'>
            <article className='lg:border-[2px] lg:w-[340px] lg:h-[400px] lg:rounded-[60px] lg:text-center '>
              <h2 className='lg:text-[50px] lg:mt-[20px]'>Free</h2>
              <p className='lg:text-[#FF553E] lg:text-[20px] lg:mt-[40px]'>1 seat</p>
              <p className='lg:text-[#FF553E] lg:text-[20px] lg:mt-[20px]'>2 project</p>
              <p className='lg:text-[30px] lg:mt-[30px]'>$0 <span className='text-gray-500 lg:text-[20px]'>/Forever</span></p>
              <Button className="bg-[#FF553E] lg:mt-[45px] ">Start 14 Days Trial</Button>
            </article>
            <article className='lg:border-[2px] lg:w-[340px] lg:h-[400px] lg:rounded-[60px] lg:text-center lg:bg-[#FF553E] c'>
              <h2 className='lg:text-[50px] lg:text-white lg:mt-[20px]'>Premium</h2>
              <p className='lg:text-white lg:text-[20px] lg:mt-[40px]'>Unlimited Seat</p>
              <p className='lg:text-white lg:text-[20px] lg:mt-[20px]'>Unlimited project</p>
              <p className='lg:text-[30px] lg:text-white lg:mt-[30px]'>$30 <span className='text-white lg:text-[20px]'>/Forever</span></p>
              <Button className="bg-white lg:mt-[45px] lg:text-[#FF553E] ">Start 14 Days Trial</Button>
            </article>
            <img src={dicon} className='lg:w-[200px] lg:h-[200px] lg:absolute lg:ml-[780px] lg:z-[-1] lg:mt-[-40px]' alt="" />
            <img src={hand} className='lg:w-[200px] lg:h-[200px] lg:absolute lg:ml-[-1280px] lg:z-[-1] lg:mt-[120px]' alt="" />
          </div>
        </section>
        <section className='lg:flex lg:mt-[100px] lg:items-center lg:max-w-[1200px] lg:m-auto lg:gap-[140px]'>
          <aside>
            <img src={tools} className='lg:w-[500px]' alt="" />
          </aside>
          <aside >
            <h2 className='lg:text-[48px] lg:w-[500px] '>See Our trusted partners</h2>
            <p className='lg:w-[430px] lg:mt-[20px] lg:text-gray-500'>Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict altera legimu. Me vita de lege ndos expet end is ad. Ex mei omita aliu mi ando</p>

            <Button className="bg-[#FF553E] lg:mt-[45px] ">Get Started</Button>
          </aside>
        </section>
        <section className='lg:max-w-[1200px] lg:m-auto lg:mt-[100px]'>
          <div className='lg:text-center'>
            <h2 className='lg:text-[48px]'>What our client says</h2>
            <p>Growth your business with using us</p>
          </div >
          <div className='lg:mt-[60px] lg:ml-[400px]'>
            <p className='lg:w-[400px] lg:text-gray-500 lg:'>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding</p>
            <div className='lg:mt-[30px]'>
              <h2 className='lg:text-[15px] lg:font-bold'>Mila McSabbu</h2>
              <p className='lg:text-gray-500'>Designer</p>
            </div>
          </div>
        </section>
        <section className='lg:flex lg:mt-[90px] lg:max-w-[1200px] lg:m-auto lg:items-center lg:gap-[160px]'>
          <aside>
<h2 className='lg:text-[50px]'>Get it now for free</h2>
<p className='lg:w-[420px]'>We are offering free debit cards once you sing up and order a card. we wont chargeyou for our debit card.</p>
<div className='lg:flex lg:mt-[30px]'>
  <img src={but} alt="" />
  <img src={but1} alt="" />
</div>
          </aside>
          <aside>
<img src={ing} alt="" />
          </aside>
          <img src={image1} className='lg:absolute lg:mt-[-490px] lg:ml-[-70px]' alt="" />
          <img src={image2} className='lg:absolute lg:mt-[320px] lg:ml-[970px] lg:w-[300px]' alt="" />
          <img src={like} className='lg:absolute lg:mt-[-1320px] lg:ml-[80px] lg:w-[100px]' alt="" />
          <img src={chat} className='lg:absolute lg:mt-[-820px] lg:ml-[170px] lg:w-[100px]' alt="" />
          <img src={emoji} className='lg:absolute lg:mt-[-820px] lg:ml-[970px] lg:w-[100px]' alt="" />
        </section>
      </main>
      <footer className='lg:mt-[100px]'>
      <nav className=' lg:flex lg:top-[20px]  lg:p-[10px] lg:justify-around lg:items-center lg:max-w-[1200px] lg:m-auto'>
          <img src={img1} className='img1' alt="" />
          <ul className='flex gap-[20px]'>
            <li>Demos</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <div className='flex gap-[10px]'>
           <img src={socials} alt="" />
          </div>
        </nav>
        <div>
          <div className='lg:flex lg:max-w-[1200px] lg:m-auto lg:mt-[20px] lg:justify-around'>
            <h2>
            Terms & condition
            </h2>
            <h2>Privacy policy</h2>
            <h2>All Right Reserved @ plowv.com</h2>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App
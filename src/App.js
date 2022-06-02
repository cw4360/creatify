import logo from './images/creatify-logo.png'
import natalia from './images/natalia.jpg'
import catherine from './images/catherine.jpg'
import rosalia from './images/rosalia.jpg'
import jessi from './images/jessi.jpg'
import stephanie from './images/stephanie.jpg'
import './index.css'


function App() {
  return (
    <div className='bg-gradient-to-br from-[#4C329A] via-[#E42558] to-[#EBBAFF] text-stone-50'>

      <img className='pt-6' src={logo} alt="creatify logo" width="200" height="200"/>

      <div className='px-32 flex flex-col font-poppins text-lg tracking-wide space-y-10 text-center'>
        <div className='flex flex-col space-y-5 py-48'>
          <p className='font-shippori text-6xl tracking-wide'> creatify</p>
          <p className=''>
            Fostering thriving and creative fashion communities
          </p>
        </div>

        <div className='flex flex-col py-36 items-end text-right'>
          <p className='font-shippori text-4xl tracking-normal'> What is Creatify?</p>
          <p className=' pt-8 pb-16 w-1/2 sm:w-3/4'>
            creatify is a digital community of fashion creatives that 
            connects and empowers each other to build prosperous creative 
            careers.
          </p>
        </div>

        <div className='flex flex-col justify-center text-left'>
          <p className='font-shippori text-3xl tracking-normal'> Our Community is Passionate, Creative,  Collaborative, and Open-minded.</p>
          <p className='py-16'>
            You love what you do and are in charge of your career path. 
            We encourage creativity and want to see you sharing your gifts. 
            We believe in reciprocation, what you give, comes back in bigger
            and better ways. Together, we can build a thriving community and 
            discover our creative selves.
          </p>
        </div>

        <div className='flex flex-col pt-36 items-end text-right'>
          <p className='font-shippori text-4xl tracking-normal'> Creatify Community Member Perks</p>
          <ol className='py-16'>
            <li key={1}>1. Connect with and get to know other creatives</li>
            <li key={2}>2. Gain access to exclusive educational events and resources</li>
            <li key={3}>3. Share and get feedback on your creative projects</li>
            <li key={4}>4. Find partners for your creative project needs </li>
          </ol>
        </div>

        <div className='pb-24'>
          <p className='font-shippori text-3xl py-8 tracking-normal'>Want to join the Creatify Community?</p>
          <p>Connect with us via email @ care.creati@gmail.com!</p>
        </div>
        
        
      
        <div className='flex flex-col space-y-8'>
          <p className='font-shippori text-4xl tracking-normal pb-8'> meet the team </p>
          <div className='flex flex-row justify-center space-x-8'>
            <div className='flex flex-col space-y-5'>
              <img src={natalia} alt="Natalia" width="200" height="200"/>
              <p> Natalia Montero </p>
            </div>
            <div className='flex flex-col space-y-5'>
              <img src={catherine} alt="Catherine" width="200" height="200" />
              <p> Catherine Wang </p>
            </div>
            <div className='flex flex-col space-y-5'>
              <img src={rosalia} alt="Rosalia" width="200" height="200"/>
              <p> Rosalia Turcios </p>
            </div>
          </div>
          <div className='flex flex-row justify-center space-x-8'>
            <div className='flex flex-col space-y-5'>
              <img src={jessi} alt="Jessi" width="200" height="200"/>
              <p> Jessi Kim </p>
            </div>
            <div className='flex flex-col space-y-5'>
              <img src={stephanie} alt="Stephanie" width="200" height="200"/>
              <p> Stephanie Gutierrez</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col pt-16 pb-4 divide-y'>
        <div className='flex flex-row justify-center items-center p-4'>
          {/* <a style={{cursor: 'pointer'}}>Instagram</a>
          <a style={{cursor: 'pointer'}}>TikTok</a>
          <a style={{cursor: 'pointer'}}>Email</a> */}
          <img src={logo} alt="creatify logo" width="100" height="100"/>
          <p className='font-shippori text-3xl '> creatify </p>
        </div>
        <div className='flex flex-row justify-between px-16 py-8'>
          <div className='flex flex-col basis-1/3'>
            <p className='font-shippori font-bold pb-4'> ABOUT CREATIFY.</p>
            <p> Creatify is a digital community of fashion creatives 
            that connects and empowers each other to build prosperous
            creative careers.</p>
          </div>
          <p className='font-shippori'> © 2022 Creatify. All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
}

export default App;


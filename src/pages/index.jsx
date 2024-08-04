 import Suren from './image/profile.jpg'
 import Insta from './image/insta.png'
 import Linkedin from './image/linkedin.png'
function index(){
    return(
        <div className="profile">
            <img src={Suren} className='suren-img' alt="" />    
            <div className="suren-details">
                <h2>Hey, I am Surendhar</h2>
                <p>I'm Creative Developer from Perambalur, Tamil Nadu, learning in web development.

                    My job is to build your website so that it is functional and user-friendly but at the same time
                     attractive. Moreover, I add personal touch to your product and make sure that is eye-catching
                      and easy to use. My aim is to bring across your message and identity in the most creative way.
                </p>
                <div className="follow">
                <button className='flex-btn'>
                    <img className='social-img' src={Insta} alt="" />
                    <a className='follow-link' href="">connect</a>
                </button>
                <button className='flex-btn'>
                    <img className='social-img' src={Linkedin} alt="" />
                    <a className='follow-link' href="">connect</a>
                </button>
                </div>
            </div>
         </div>
    )
}

export default index;
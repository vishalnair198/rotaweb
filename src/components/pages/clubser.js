import React, {useEffect} from 'react'
import './clubser.css'
import { Link } from 'react-router-dom';
import aos from 'aos';
import Slider from 'react-slick';
import Footer from '../Footer';
function Clubser() {
    useEffect(() => {
        aos.init({});
    }, []);
    const settings ={
        infinite:true,
        lazyload: true,
        fade:true,
        speed: 300,
        slideToshow:3,
        centerMode: true,
        centerPadding:0,
        autoplay: true,
        autoplaySpeed: 1100,
    }
    return (
        <div className="clubser">
            <div id="portiontw" class="po">
                <section data-aos="zoom-in" class="informat">
                <h33>CLUB SERVICE 2020-21</h33>
                    <Link to='/events'><h34>BACK TO EVENTS</h34></Link>
                    <Link to='/communityo'><h46> GO TO COMMUNITY SERVICE </h46></Link>
                </section>
            </div>
            <div data-aos="flip-left" class="subport">
            <Slider {...settings}>
                <div  data-aos="zoom-in" class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h30>Installation Ceremony</h30>
                           
                            <po  class="dataoo">Installation and introduction of board members was done and we 
                            took the oath for being a rotaractor.
                            </po>
                        </section>
                    </div>
                </div>
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Socials On World Emoji Day</h32>
                            
                            <po class="dataoo">On the ocassion of world emoji day, we played a game in which one member 
                            describes the fellow member with the help of an emoji
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Sending Thank You Note and Rakhi To Soldiers</h32>
                           
                            <po class="dataoo">Approximately 240 rakhis were sent to The Soldiers who fight bravely against all the conditions. 
                            Among which, 20 rakhis in assam,150 in vadodara,50 in veraval and several other were sent at the houses of brave soldiers.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Webinar On Essence Of Leadership</h32>
                           
                            <po class="dataoo">A Webinar was conducted on the topic "Leadreship". It was an interactive session.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>World Literacy Day</h32>
                            
                            <po class="dataoo">We had a small discussion as well as a debate on Literacy during the World Literacy Day
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Joint Bulletin</h32>
                           
                            <po class="dataoo">A Joint Bulletin was made in collaboration with Rotaract Club Of PES University on the ocassion of World Literacy Day. 
                            Two articles by Tirth Patel were published in the joint bulletin.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                        <h32>RYLA</h32>
                            <po class="dataoo">An E-RYLA was conducted which was for 2 days with exciting and thrilling events such as webinars, 
                            workshops and also fun events.
                            </po>
                        </section>
                    </div>
                </div>  
                </Slider>             
            </div>
            <div class="fotter">
            <Footer/>
            </div>
        </div>
    )
}

export default Clubser

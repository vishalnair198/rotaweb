import React, {useEffect} from 'react'
import './inter.css'
import { Link } from 'react-router-dom';
import aos from 'aos';
import Slider from 'react-slick';
import Footer from '../Footer';

function Inter() {
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
        <div className="inter">
            <div id="portiontw" class="po">
                <section data-aos="zoom-in" class="informat">
                <h33>INTERNATIONAL SERVICE 2020-21</h33>
                    <Link to='/events'><h34>BACK TO EVENTS</h34></Link>
                    <Link to='/clubser'><h46> GO BACK</h46></Link>
                </section>
            </div>
            <div data-aos="flip-left" class="subport">
            <Slider {...settings}>
                <div  data-aos="zoom-in" class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h30>Movie Marathon</h30>
                           
                            <po  class="dataoo">Movie Marathon was conducted in which we played a game 
                            in which fellow rotaractors have to guess the name of the Movie by Emojis Shown
                            </po>
                        </section>
                    </div>
                </div>
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Act Of Green</h32>
                            
                            <po class="dataoo">RCPU planted several trees and made this world greener
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>International Marathon</h32>
                           
                            <po class="dataoo">International Marathon is for knowing fellow rotaractors from all over the world
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Frienship Day project-Oblivion</h32>
                           
                            <po class="dataoo">On the ocassion of friendship day, we did online meeting with 8 other clubs 
                            and introduced each others.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Dionysus Meet</h32>
                            
                            <po class="dataoo">Rotaract Members Knowing each other and having fun with each other during The Dionysus Meet.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Twin Club Agreement</h32>
                           
                            <po class="dataoo">We signed our first Twin Club agreement with RAC LPWest Happy club.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                        <h32>World Wide Bridge</h32>
                            <po class="dataoo">Articles were written during the world wide bridge.
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

export default Inter

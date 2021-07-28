import React, {useEffect} from 'react'
import './communitytw.css'
import { Link } from 'react-router-dom';
import aos from 'aos';
import Slider from 'react-slick';
import Footer from '../Footer';
function Communitytw() {
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
        centerPadding:0
    }
    return (
        <div className="communitytw">
            <div id="portiontw" class="po">
                <section data-aos="zoom-in" class="informat">
                <h50>COMMUNITY SERVICE 2020-21</h50>
                    <Link to='/events'><h34>BACK TO EVENTS</h34></Link>
                    <Link to='/communityo'><h46> GO TO COMMUNITY SERVICE 2019-20</h46></Link>
                </section>
            </div>
            <div data-aos="flip-left" class="subport">
            <Slider {...settings}>
                <div  data-aos="zoom-in" class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h30>Behind The White Coat</h30>
                           
                            <po  class="dataoo">A Collaboration video was made of doctors talking about 
                            COVID-19 and a compilation was circulated and uploaded as a tribute to doctors.
                            </po>
                        </section>
                    </div>
                </div>
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Eat Away at Hunger</h32>
                            
                            <po class="dataoo">Rotaract Club of Parul University was very happy and priviledged to spend some time and distribute 
                            food and clothes to almost 200 people who were in need during tis crucial time in Kutch Bhuj.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Make It Green</h32>
                           
                            <po class="dataoo">We Planted around 30 to 35 trees in Phase(1)
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Clothes Distribution</h32>
                           
                            <po class="dataoo">Clothes were distributed to need people.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>The Gynecologist Speaker</h32>
                            
                            <po class="dataoo">Health of woman is very important. So, we organized a webinar with Dr. Jaya Mishra 
                            in order to discuss about the problems girls usually face.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>BIG SMILE</h32>
                           
                            <po class="dataoo">Big Smile Project was organised in loving memory of Late PDRR Bhaumik Shah. 
                            Innovative Activities wre done that make you happy and people around you smile.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                        <h32>Home Made Food Distribution</h32>
                            <po class="dataoo">Home Made food was distributed by Rotaractors and an effort was made 
                            to bring smile on the faces of children.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>World Suicide Prevention Week</h32>
                        
                            <po class="dataoo">On the ocassion of World Suicide Prevention Day, we collaborated with RID 3080 and took part in this 7 day sessions.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Saree Distribution</h32>
                            
                           
                            <po class="dataoo">Sarees were distributed to the women on the occasion of Uttarayan to bring 
                            the smile on their face as well as wishing them good health
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

export default Communitytw

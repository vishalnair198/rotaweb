import React, {useEffect} from 'react'
import './communityo.css';
import fone from '../../assets/food1.png';
import ftwo from '../../assets/food2.png';
import fthree from '../../assets/food3.png';
import bione from '../../assets/bigsmile1.png';
import bitwo from '../../assets/bigsmile2.png';
import bithree from '../../assets/bigsmile3.png';
import bloodone from '../../assets/bloodd1.png';
import bloodtwo from '../../assets/bloodd2.png';
import bloodthree from '../../assets/bloodd3.png';
import shawlo from '../../assets/shawl1.png';
import shawltw from '../../assets/shawl2.png';
import shawlth from '../../assets/shawl3.png';
import kurtio from '../../assets/kurti1.png';
import kurtitw from '../../assets/kurti2.png';
import kurtith from '../../assets/kurti3.png';
import masko from '../../assets/mask1.png';
import masktw from '../../assets/mask2.png';
import maskth from '../../assets/mask3.png';
import eldero from '../../assets/elder1.png';
import eldertw from '../../assets/elder2.png';
import pato from '../../assets/Patshala1.png';
import pattw from '../../assets/Paatshala2.png';
import patth from '../../assets/Paatshala3.png';
import sareeo from '../../assets/saree1.png';
import sareetw from '../../assets/saree2.png';
import sareeth from '../../assets/saree3.png';
import aos from 'aos';
import Slider from 'react-slick';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
function Communityo() {
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
        <div className="community">
            <div id="portiono" class="po">
                <section data-aos="zoom-in" class="informa">
                    <h50>COMMUNITY SERVICE 2019-20</h50>
                    <Link to='/events'><h34>BACK TO EVENTS</h34></Link>
                    <Link to='/communitytw'><h46> GO TO COMMUNITY SERVICE 2020-21</h46></Link>
                </section>
            </div>
            <div data-aos="flip-left" class="subport">
            <Slider {...settings}>
                <div  data-aos="zoom-in" class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h30>Home Made food Distribution Drive</h30>
                            <img src={fone} data-aos="zoom-in"class="foodo" alt=""/>
                            <img src={ftwo} data-aos="zoom-in"class="foodt" alt=""/>
                            <img src={fthree} data-aos="zoom-in"class="foodth" alt=""/>
                            <po  class="dataoo">A Homemade Food Distribution Drive was organized where all the members of the club made 
                            different kinds of food at their home and united to feed the food to the poor children.
                            Approximately 50 children were fed during this community drive.
                            </po>
                        </section>
                    </div>
                </div>
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Big Smile</h32>
                            <img src={bione} class="foodo" alt=""/>
                            <img src={bitwo} class="foodt" alt=""/>
                            <img src={bithree} class="foodth" alt=""/>
                            <po class="dataoo">RCPU decided to bring smiles to the faces of small children and their family by 
                            distributing masks, chocolates and snacks to the small kids who have been much affected during the pandemic.
                            All those beautiful smiles were worth every minute our members spend with them.
                            Along with distributing goodies, they interacted with the kids bringing a ray of sunshine.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Blood Donation</h32>
                            <img src={bloodone} class="foodo" alt=""/>
                            <img src={bloodtwo} class="foodt" alt=""/>
                            <img src={bloodthree} class="foodth" alt=""/>
                            <po class="dataoo">RCPU in association with RI District 3060 took part in Blood Donation Camp 
                            where the member of the club donated blood and served for the humanity.
                            More than 100 citizens of Vadodara donated blood in this good cause.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Shawl Distribution</h32>
                            <img src={shawlo} class="foodo" alt=""/>
                            <img src={shawltw} class="foodt" alt=""/>
                            <img src={shawlth} class="foodth" alt=""/>
                            <po class="dataoo">As a matter of gratitude and respect for all the traffic police officers 
                            who are serving us day and night even in this pandemic, RCPU organized a shawl distribution drive 
                            where shawls were given to the officers as a matter of respect and goodwill.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Kurti Distribution</h32>
                            <img src={kurtio} class="foodo" alt=""/>
                            <img src={kurtitw} class="foodt" alt=""/>
                            <img src={kurtith} class="foodth" alt=""/>
                            <po class="dataoo">RCPU distributed Kurtis and some garments for women and children at Mahila Antyodaya Bhavan.
                            Protecting the women and always praying for their well being as well as helping them whenever any person need is 
                            the main motto of our club as they are oppressed in many forms.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Masks Distribution</h32>
                            <img src={masko} class="foodo" alt=""/>
                            <img src={masktw} class="foodt" alt=""/>
                            <img src={maskth} class="foodth" alt=""/>
                            <po class="dataoo">Rotaract Club of Parul University saw an opportunity to fight this pandemic 
                            during this difficult times in an innovative way.
                            Members of RCPU distributed masks and sanitizer to the shops as well as educated the importance of 
                            masks and sanitizers so that we can manage to overcome this fight against the pandemic as soon as possible
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>A Community work for the elders</h32>
                            <img src={eldero} class="foodt" alt=""/>
                            <img src={eldertw} class="foodth" alt=""/>
                            <po class="dataoo">RCPU is an assemblage of people who believe in giving back to the community 
                            in all the ways possible letting no circumstances weaken that dedication of theirs.
                            RCPU decided to distribute Juice and Snacks to the 70 Old Age People who have been affected 
                            by some diseases at Swarg Community Care.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Apni Paathshala</h32>
                            <img src={pato} class="foodo" alt=""/>
                            <img src={pattw} class="foodt" alt=""/>
                            <img src={patth} class="foodth" alt=""/>
                            <po class="dataoo">There are many children out there who want to study hard and build their future but are unable 
                            to do so because of their family’s financial condition.
                            RCPU runs APNI PATHSHALA where the underprivileged kids are taught the basic knowledge about 
                            different kinds  of languages as well as subjects.
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Saree Distribution</h32>
                            <img src={sareeo} class="foodo" alt=""/>
                            <img src={sareetw} class="foodt" alt=""/>
                            <img src={sareeth} class="foodth" alt=""/>
                            <po class="dataoo">Sarees were distributed to the women on the occasion of Uttarayan to bring 
                            the smile on their face as well as wishing them good health
                            </po>
                        </section>
                    </div>
                </div>  
                </Slider>             
            </div>
            <div class="fottr">
            <Footer/>
            </div>
            
        </div>
    )
}

export default Communityo;

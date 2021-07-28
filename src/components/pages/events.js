import React, {  useEffect }  from 'react'
import Footer from '../Footer';
import './events.css';
import { Link } from 'react-router-dom';
import aos from 'aos';
function Events() {
    useEffect(() => {
        aos.init({});
    }, []);
    return (
        <div className="events">
            <div id="sectioone" class="four">
                <section  data-aos="zoom-in" class="inform">
                    <Link to='/communityo'><h29>COMMUNITY SERVICE 2019-20</h29></Link>
                    <Link to='communitytw'><h34>COMMUNITY SERVICE 2020-21</h34></Link>
                </section>
            </div>
            <div id="sectitwo" class="four">
                <section  data-aos="zoom-in" class="five">
                    <Link to='/clubser'><h29>CLUB SERVICE</h29></Link>
                    <Link to='/inter'><h40>INTERNATIONAL SERVICE</h40></Link>
                    <Link to='/proff'><h41>PROFESSIONAL SERVICE</h41></Link>
                </section>
            </div>
            <div class="fotr">
            <Footer/>
            </div>
        </div>
    )
}

export default Events;

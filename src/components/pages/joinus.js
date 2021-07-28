import React, {useEffect} from 'react';
import emailjs from 'emailjs-com';
import aos from 'aos';
import "aos/dist/aos.css";
import './joinus.css';
import hands from '../../assets/handes.png';
import horizone from '../../horizone.png';
import rbc from '../../assets/rbc.png';
import wings from '../../assets/wings.png';
import wc from '../../WC.png';
import pupn from '../../assets/pu.png';
import Footer from '../Footer';

function sendEmail(e) {
    
    e.preventDefault();

    emailjs.sendForm('service_69dmsge', 'template_vzun5ao', e.target, 'user_CbBx0n49Mq2OsKNdERjiu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

 function Joinus(){
    useEffect(() => {
        aos.init({});
    }, []);
   
    return (
        <div className="joinus">
            <div class="frostedo">
                <svg id="svgd" width="638" height="570" viewBox="0 0 638 570" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.254395" y="0.519989" width="638" height="570" fill="black">
<rect fill="white" x="0.254395" y="0.519989" width="638" height="570"/>
<path d="M58.2784 208.88C47.3344 208.88 37.1584 206.672 27.7504 202.256C18.3424 197.648 10.6624 191.312 4.71039 183.248C2.40639 179.792 1.25439 176.432 1.25439 173.168C1.25439 168.56 3.07839 164.624 6.72639 161.36C10.3744 157.904 14.1184 156.176 17.9584 156.176C22.9504 156.176 28.3264 159.056 34.0864 164.816C37.7344 168.272 41.4784 170.768 45.3184 172.304C49.1584 173.648 53.4784 174.32 58.2784 174.32C63.8464 174.32 69.1264 172.88 74.1184 170C79.3024 167.12 83.4304 163.28 86.5024 158.48C89.5744 153.488 91.1104 148.304 91.1104 142.928V21.968C91.1104 16.976 92.9344 12.848 96.5824 9.58398C100.23 6.12798 104.454 4.39999 109.254 4.39999C114.63 4.39999 118.95 6.03199 122.214 9.29599C125.478 12.56 127.11 16.784 127.11 21.968V142.928C127.11 154.448 124.038 165.296 117.894 175.472C111.75 185.648 103.398 193.808 92.8384 199.952C82.2784 205.904 70.7584 208.88 58.2784 208.88Z"/>
<path d="M355.713 105.2C355.713 124.208 351.489 141.68 343.041 157.616C334.593 173.36 322.881 185.84 307.905 195.056C293.121 204.272 276.417 208.88 257.793 208.88C239.169 208.88 222.369 204.272 207.393 195.056C192.609 185.84 180.993 173.36 172.545 157.616C164.289 141.68 160.161 124.208 160.161 105.2C160.161 86.192 164.289 68.816 172.545 53.072C180.993 37.136 192.609 24.56 207.393 15.344C222.369 6.12798 239.169 1.51999 257.793 1.51999C276.417 1.51999 293.121 6.12798 307.905 15.344C322.881 24.56 334.593 37.136 343.041 53.072C351.489 68.816 355.713 86.192 355.713 105.2ZM318.273 105.2C318.273 92.336 315.681 80.72 310.497 70.352C305.313 59.792 298.113 51.44 288.897 45.296C279.681 39.152 269.313 36.08 257.793 36.08C246.081 36.08 235.617 39.152 226.401 45.296C217.377 51.248 210.273 59.504 205.089 70.064C200.097 80.624 197.601 92.336 197.601 105.2C197.601 118.064 200.097 129.776 205.089 140.336C210.273 150.896 217.377 159.248 226.401 165.392C235.617 171.344 246.081 174.32 257.793 174.32C269.313 174.32 279.681 171.248 288.897 165.104C298.113 158.96 305.313 150.704 310.497 140.336C315.681 129.776 318.273 118.064 318.273 105.2Z"/>
<path d="M424.772 188.432C424.772 193.424 422.948 197.648 419.3 201.104C415.652 204.368 411.428 206 406.628 206C401.444 206 397.124 204.368 393.668 201.104C390.404 197.648 388.772 193.424 388.772 188.432V21.968C388.772 16.976 390.5 12.848 393.956 9.58398C397.412 6.12798 401.828 4.39999 407.204 4.39999C412.004 4.39999 416.132 6.12798 419.588 9.58398C423.044 12.848 424.772 16.976 424.772 21.968V188.432Z"/>
<path d="M621.012 4.39999C625.62 4.39999 629.364 5.93599 632.244 9.008C635.124 12.08 636.564 15.92 636.564 20.528V188.432C636.564 193.424 634.836 197.648 631.38 201.104C628.116 204.368 623.988 206 618.996 206C616.308 206 613.62 205.616 610.932 204.848C608.436 203.888 606.612 202.64 605.46 201.104L499.764 66.896V189.872C499.764 194.48 498.228 198.32 495.156 201.392C492.276 204.464 488.436 206 483.636 206C479.028 206 475.284 204.464 472.404 201.392C469.524 198.32 468.084 194.48 468.084 189.872V21.968C468.084 16.976 469.716 12.848 472.98 9.58398C476.436 6.12798 480.66 4.39999 485.652 4.39999C488.532 4.39999 491.316 4.97599 494.004 6.128C496.884 7.27999 498.996 8.81599 500.34 10.736L605.172 144.368V20.528C605.172 15.92 606.612 12.08 609.492 9.008C612.564 5.93599 616.404 4.39999 621.012 4.39999Z"/>
<path d="M302.689 364.112C307.681 364.112 311.713 365.744 314.785 369.008C317.857 372.272 319.393 376.496 319.393 381.68V485.936C319.393 501.872 316.033 515.984 309.313 528.272C302.593 540.56 293.185 550.16 281.089 557.072C268.993 563.984 255.169 567.44 239.617 567.44C224.065 567.44 210.145 563.984 197.857 557.072C185.761 550.16 176.353 540.56 169.633 528.272C162.913 515.984 159.553 501.872 159.553 485.936V381.68C159.553 376.688 161.281 372.56 164.737 369.296C168.193 365.84 172.609 364.112 177.985 364.112C182.593 364.112 186.625 365.84 190.081 369.296C193.537 372.56 195.265 376.688 195.265 381.68V485.936C195.265 495.152 197.281 503.408 201.313 510.704C205.345 517.808 210.721 523.28 217.441 527.12C224.353 530.96 231.745 532.88 239.617 532.88C247.873 532.88 255.553 530.96 262.657 527.12C269.953 523.28 275.713 517.808 279.937 510.704C284.353 503.408 286.561 495.152 286.561 485.936V381.68C286.561 376.496 288.001 372.272 290.881 369.008C293.761 365.744 297.697 364.112 302.689 364.112Z"/>
<path d="M424.603 568.88C410.779 568.88 398.491 567.152 387.739 563.696C376.987 560.24 366.907 554.384 357.499 546.128C352.315 541.52 349.723 536.432 349.723 530.864C349.723 526.448 351.355 522.608 354.619 519.344C357.883 515.888 361.819 514.16 366.427 514.16C370.075 514.16 373.339 515.312 376.219 517.616C383.899 523.952 391.387 528.56 398.683 531.44C405.979 534.32 414.619 535.76 424.603 535.76C435.355 535.76 444.571 533.36 452.251 528.56C460.123 523.76 464.059 517.808 464.059 510.704C464.059 502.064 460.219 495.344 452.539 490.544C444.859 485.552 432.667 481.808 415.963 479.312C373.915 473.168 352.891 453.584 352.891 420.56C352.891 408.464 356.059 398 362.395 389.168C368.731 380.144 377.371 373.328 388.315 368.72C399.259 363.92 411.451 361.52 424.891 361.52C436.987 361.52 448.315 363.344 458.875 366.992C469.627 370.64 478.555 375.44 485.659 381.392C491.227 385.808 494.011 390.896 494.011 396.656C494.011 401.072 492.379 405.008 489.115 408.464C485.851 411.728 482.011 413.36 477.595 413.36C474.715 413.36 472.123 412.496 469.819 410.768C464.827 406.736 457.819 403.088 448.795 399.824C439.963 396.368 431.995 394.64 424.891 394.64C412.795 394.64 403.387 396.944 396.667 401.552C390.139 405.968 386.875 411.824 386.875 419.12C386.875 427.376 390.235 433.616 396.955 437.84C403.867 442.064 414.619 445.52 429.211 448.208C445.723 451.088 458.875 454.832 468.667 459.44C478.651 463.856 486.139 470 491.131 477.872C496.123 485.552 498.619 495.824 498.619 508.688C498.619 520.784 495.163 531.44 488.251 540.656C481.531 549.68 472.507 556.688 461.179 561.68C449.851 566.48 437.659 568.88 424.603 568.88Z"/>
</mask>
<path d="M58.2784 208.88C47.3344 208.88 37.1584 206.672 27.7504 202.256C18.3424 197.648 10.6624 191.312 4.71039 183.248C2.40639 179.792 1.25439 176.432 1.25439 173.168C1.25439 168.56 3.07839 164.624 6.72639 161.36C10.3744 157.904 14.1184 156.176 17.9584 156.176C22.9504 156.176 28.3264 159.056 34.0864 164.816C37.7344 168.272 41.4784 170.768 45.3184 172.304C49.1584 173.648 53.4784 174.32 58.2784 174.32C63.8464 174.32 69.1264 172.88 74.1184 170C79.3024 167.12 83.4304 163.28 86.5024 158.48C89.5744 153.488 91.1104 148.304 91.1104 142.928V21.968C91.1104 16.976 92.9344 12.848 96.5824 9.58398C100.23 6.12798 104.454 4.39999 109.254 4.39999C114.63 4.39999 118.95 6.03199 122.214 9.29599C125.478 12.56 127.11 16.784 127.11 21.968V142.928C127.11 154.448 124.038 165.296 117.894 175.472C111.75 185.648 103.398 193.808 92.8384 199.952C82.2784 205.904 70.7584 208.88 58.2784 208.88Z" stroke="#F3567C" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M355.713 105.2C355.713 124.208 351.489 141.68 343.041 157.616C334.593 173.36 322.881 185.84 307.905 195.056C293.121 204.272 276.417 208.88 257.793 208.88C239.169 208.88 222.369 204.272 207.393 195.056C192.609 185.84 180.993 173.36 172.545 157.616C164.289 141.68 160.161 124.208 160.161 105.2C160.161 86.192 164.289 68.816 172.545 53.072C180.993 37.136 192.609 24.56 207.393 15.344C222.369 6.12798 239.169 1.51999 257.793 1.51999C276.417 1.51999 293.121 6.12798 307.905 15.344C322.881 24.56 334.593 37.136 343.041 53.072C351.489 68.816 355.713 86.192 355.713 105.2ZM318.273 105.2C318.273 92.336 315.681 80.72 310.497 70.352C305.313 59.792 298.113 51.44 288.897 45.296C279.681 39.152 269.313 36.08 257.793 36.08C246.081 36.08 235.617 39.152 226.401 45.296C217.377 51.248 210.273 59.504 205.089 70.064C200.097 80.624 197.601 92.336 197.601 105.2C197.601 118.064 200.097 129.776 205.089 140.336C210.273 150.896 217.377 159.248 226.401 165.392C235.617 171.344 246.081 174.32 257.793 174.32C269.313 174.32 279.681 171.248 288.897 165.104C298.113 158.96 305.313 150.704 310.497 140.336C315.681 129.776 318.273 118.064 318.273 105.2Z" stroke="#F3567C" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M424.772 188.432C424.772 193.424 422.948 197.648 419.3 201.104C415.652 204.368 411.428 206 406.628 206C401.444 206 397.124 204.368 393.668 201.104C390.404 197.648 388.772 193.424 388.772 188.432V21.968C388.772 16.976 390.5 12.848 393.956 9.58398C397.412 6.12798 401.828 4.39999 407.204 4.39999C412.004 4.39999 416.132 6.12798 419.588 9.58398C423.044 12.848 424.772 16.976 424.772 21.968V188.432Z" stroke="#F3567C" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M621.012 4.39999C625.62 4.39999 629.364 5.93599 632.244 9.008C635.124 12.08 636.564 15.92 636.564 20.528V188.432C636.564 193.424 634.836 197.648 631.38 201.104C628.116 204.368 623.988 206 618.996 206C616.308 206 613.62 205.616 610.932 204.848C608.436 203.888 606.612 202.64 605.46 201.104L499.764 66.896V189.872C499.764 194.48 498.228 198.32 495.156 201.392C492.276 204.464 488.436 206 483.636 206C479.028 206 475.284 204.464 472.404 201.392C469.524 198.32 468.084 194.48 468.084 189.872V21.968C468.084 16.976 469.716 12.848 472.98 9.58398C476.436 6.12798 480.66 4.39999 485.652 4.39999C488.532 4.39999 491.316 4.97599 494.004 6.128C496.884 7.27999 498.996 8.81599 500.34 10.736L605.172 144.368V20.528C605.172 15.92 606.612 12.08 609.492 9.008C612.564 5.93599 616.404 4.39999 621.012 4.39999Z" stroke="#F3567C" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M302.689 364.112C307.681 364.112 311.713 365.744 314.785 369.008C317.857 372.272 319.393 376.496 319.393 381.68V485.936C319.393 501.872 316.033 515.984 309.313 528.272C302.593 540.56 293.185 550.16 281.089 557.072C268.993 563.984 255.169 567.44 239.617 567.44C224.065 567.44 210.145 563.984 197.857 557.072C185.761 550.16 176.353 540.56 169.633 528.272C162.913 515.984 159.553 501.872 159.553 485.936V381.68C159.553 376.688 161.281 372.56 164.737 369.296C168.193 365.84 172.609 364.112 177.985 364.112C182.593 364.112 186.625 365.84 190.081 369.296C193.537 372.56 195.265 376.688 195.265 381.68V485.936C195.265 495.152 197.281 503.408 201.313 510.704C205.345 517.808 210.721 523.28 217.441 527.12C224.353 530.96 231.745 532.88 239.617 532.88C247.873 532.88 255.553 530.96 262.657 527.12C269.953 523.28 275.713 517.808 279.937 510.704C284.353 503.408 286.561 495.152 286.561 485.936V381.68C286.561 376.496 288.001 372.272 290.881 369.008C293.761 365.744 297.697 364.112 302.689 364.112Z" stroke="#F3567C" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M424.603 568.88C410.779 568.88 398.491 567.152 387.739 563.696C376.987 560.24 366.907 554.384 357.499 546.128C352.315 541.52 349.723 536.432 349.723 530.864C349.723 526.448 351.355 522.608 354.619 519.344C357.883 515.888 361.819 514.16 366.427 514.16C370.075 514.16 373.339 515.312 376.219 517.616C383.899 523.952 391.387 528.56 398.683 531.44C405.979 534.32 414.619 535.76 424.603 535.76C435.355 535.76 444.571 533.36 452.251 528.56C460.123 523.76 464.059 517.808 464.059 510.704C464.059 502.064 460.219 495.344 452.539 490.544C444.859 485.552 432.667 481.808 415.963 479.312C373.915 473.168 352.891 453.584 352.891 420.56C352.891 408.464 356.059 398 362.395 389.168C368.731 380.144 377.371 373.328 388.315 368.72C399.259 363.92 411.451 361.52 424.891 361.52C436.987 361.52 448.315 363.344 458.875 366.992C469.627 370.64 478.555 375.44 485.659 381.392C491.227 385.808 494.011 390.896 494.011 396.656C494.011 401.072 492.379 405.008 489.115 408.464C485.851 411.728 482.011 413.36 477.595 413.36C474.715 413.36 472.123 412.496 469.819 410.768C464.827 406.736 457.819 403.088 448.795 399.824C439.963 396.368 431.995 394.64 424.891 394.64C412.795 394.64 403.387 396.944 396.667 401.552C390.139 405.968 386.875 411.824 386.875 419.12C386.875 427.376 390.235 433.616 396.955 437.84C403.867 442.064 414.619 445.52 429.211 448.208C445.723 451.088 458.875 454.832 468.667 459.44C478.651 463.856 486.139 470 491.131 477.872C496.123 485.552 498.619 495.824 498.619 508.688C498.619 520.784 495.163 531.44 488.251 540.656C481.531 549.68 472.507 556.688 461.179 561.68C449.851 566.48 437.659 568.88 424.603 568.88Z" stroke="#F3567C" stroke-width="2" mask="url(#path-1-outside-1)"/>
</svg>

            </div>
            
            <section className="secfront">
               
            </section>
            <img src={pupn} alt=""  class="pudin"></img>
           <div data-aos="flip-left" class="container">
           <img src={wc} alt=""  class="d"></img>
           <img src={hands} alt="" class="hand"></img>
           <img src={horizone} alt="" class="hor"></img>
           <img src={rbc} alt="" class="rbc"></img>
           <img src={wings} alt="" class="wings"></img>
           <img src={pupn} alt="" class="pupn"></img>
            <form onSubmit={sendEmail} class="rcform">
            
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Full Name</div>
                <input type="text" name="name"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Contact number</div>
                <input type="text" name="contact" />
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Email</div>
                <input type="text" name="email"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Date of Birth</div>
                <input type="text" name="dob"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Address</div>
                <input type="text" name="address"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Blood group</div>
                <input type="text" name="blood"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">college name</div>
                <input type="text" name="college"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">Branch</div>
                <input type="text" name="branch"/>
            </div>
            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">member of rcpu before yes/no</div>
                <input type="text" name="member"/>
            </div>

            <div data-aos="fade-left"class="formcontrol">
                <div data-aos="fade-left"class="tag">payment date</div>
                <input type="text" name="pdate"/>
            </div>
            <input type="submit" class= "submi"value="Send" />
         
        </form>
    </div>
        <div class="footr">
            <Footer/>
        </div>
        </div>
       
    );
}

export default Joinus;
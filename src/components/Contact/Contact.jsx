import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="contactUs" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We are ready to help by providing the best service and believe a
            good way to make you life a better place
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* First Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">399 287 376 09</span>
                  </div>
                </div>
                {/*  */}
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">887 656 776 89</span>
                  </div>
                </div>
                {/*  */}
                <div className="flexCenter button">Chat </div>
              </div>
            </div>
            {/* Second row */}
            <div className="flexStart row">
              {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">061 177 023 19</span>
                  </div>
                </div>
                {/*  */}
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* Second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">978 088 211 09</span>
                  </div>
                </div>
                {/*  */}
                <div className="flexCenter button">Chat </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

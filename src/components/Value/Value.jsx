import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
  const [className, setClassName] = useState(null);
  console.log("Checking state of classname", className);
  return (
    <section id="ourValue" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="img" />
          </div>
        </div>
        {/* Right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we Give to You</span>
          <span className="secondaryText">
            We are ready to help you by providing the best services for you.
            <br />
            We believe you can have a best living experience with it.
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      {/* this compo checks the sate if opened or not */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

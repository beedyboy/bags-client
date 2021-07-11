/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Ripple } from "primereact/ripple";
import Helmet from "react-helmet";
import classNames from "classnames";
const FAQS = () => {
  return (
    <Fragment>
      <Helmet>
        <title>FAQ Page</title>
      </Helmet>

      <div className="p-d-flex p-flex-column p-jc-between p-ac-between">
       
      <div className="landing_banner p-mb-3">
      <img
        src="/assets/banners/faq_bwm.jpg"
          alt="faq"
          style={{ width: "100%", height: "100%" }}
          // style={{ width: "fit-content", height: "100%" }}
        />
        <div className="p-text-center p-text-bold p-mb-4" style={{ marginTop: "-25%", zIndex:99999, color: 'white' }}>
          Frequently Asked Questions(FAQ)
        </div>
        </div>
        
         {/* <div className="p-text-center p-text-bold p-mb-4">
          Frequently Asked Questions(FAQ)
        </div> */}
        <div className="p-text-center p-text-bold p-mb-4">
          We've put together some commonly asked questions to give you more
          information about products and services we offer.
        </div>
        <Accordion
          multiple
          iconPos="right"
          expandIcon="pi pi-plus"
          collapseIcon="pi pi-minus"
        >
          <AccordionTab
            className="p-text-uppercase"
            header="I AM WONDERING IF AN OUT OF STOCK ITEM WILL BE RESTOCKED?"
          >
            <p>
              If an item is out of stock please contact us via our contact form
              below and we will endeavour to reply to you asap to let you know
              if and when an item will be restocked. If you would like to be
              notified when an item is restocked, select the product and size
              you want and click on "Notify Me" to enter your email.
            </p>
          </AccordionTab>
          <AccordionTab header="HOW DO I RETURN AN ITEM?">
            <p>
              If it doesn’t work out we gladly accept returns for unworn items
              in original condition with the tags still attached (excluding SALE
              ITEMS, ACCESSORIES, SWIMWEAR, VINTAGE AND INTIMATES). We offer
              simple returns for all Aus & US orders. For information, please
              visit our RETURNS PAGE
            </p>
          </AccordionTab>
          <AccordionTab header=" CAN I CANCEL OR CHANGE MY ORDER?">
            <p>
              Once your order has been placed, we are typically not able to
              change it as our team works fast. Please reach out to our customer
              care team at help@truelinkswear.com as soon as you need assistance
              and we will do our best to expedite a solution. Don’t worry
              though, we have you covered with our no hassle return or exchange
              program.
            </p>
          </AccordionTab>
          <AccordionTab
            header="HOW LONG BEFORE I RECEIVE MY ORDER?
"
          >
            Orders placed via our website should arrive in 3-6 business days
            with standard shipping. If you select a quicker mode of
            transportation, expect to see them even sooner!
          </AccordionTab>
        </Accordion>
      </div>
    </Fragment>
  );
};

export default FAQS;

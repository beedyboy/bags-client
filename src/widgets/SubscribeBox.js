import React, { Fragment, useEffect, useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { observer } from "mobx-react-lite";
import SubscriberStore from "../store/SubscriberStore";

const SubscribeBox = () => {
  const store = useContext(SubscriberStore);
  const { loading, subscribe, saved} = store;
  const [email, setEmail] = useState("");
  useEffect(() => {
   if(saved === true) {
    setEmail("");
   }
  }, [saved]);
  const submit = () => {
    const data = { email: email};
    subscribe(data)
  }
  return (
    <Fragment>
      <div
        className="p-d-flex p-flex-column p-ai-center p-mb-2 p-p-4"
        style={{ background: "#DDC0B4", color: "white", width: "100%" }}
      >
        <p
          style={{
            fontFamily: "Libre Baskerville",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "60px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Let's Be Friends
        </p>
        <p
          style={{
            fontGamily: "Roboto",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "35px",
            letterSpacing: "0em",
            textAlign: "left",
            marginTop: "-10px",
          }}
        >
          Subscribe to receive updates,access to exclusive deals , and more
        </p>
        <div className="p-grid p-mt-2">
          <div className="p-col-7">
            <span className="p-float-label">
              <InputText
                type="email"
                size="40"
                id="in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  border: 0,
                  borderBottom: "3px solid #FFFFFF",
                  background: "transparent",
                }}
              />
              <label
                htmlFor="in"
                style={{ background: "transparent", color: "white" }}
              >
                Your email address...
              </label>
            </span>
          </div>
          <div className="p-col-5">
            <Button
              label="Subscribe"
              className="p-button-plain"
              style={{
                border: 0,
                borderBottom: "3px solid #FFFFFF",
                background: "transparent",
              }}
              onClick={submit}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default observer(SubscribeBox);

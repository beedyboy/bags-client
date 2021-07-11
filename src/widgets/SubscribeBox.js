/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  Fragment,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { observer } from "mobx-react-lite";
import SubscriberStore from "../store/SubscriberStore";

const SubscribeBox = () => {
  const toast = useRef(null);
  const store = useContext(SubscriberStore);
  const { loading, resetProperty, subscribe, message, saved } = store;
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (saved) {
      toast.current.show({
        severity: "success",
        summary: "Success Message",
        detail: message,
      });
      setEmail("");
    }
    return () => {
      resetProperty("message", "");
      resetProperty("saved", false);
      setEmail("");
    };
  }, [saved]);
  const submit = () => {
    const data = { email: email };
    subscribe(data);
  };
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
          {/* Let's Be Friends */}
          Join The Party
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
              loading={loading}
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
      <Toast ref={toast} position="top-right" />
    </Fragment>
  );
};

export default observer(SubscribeBox);

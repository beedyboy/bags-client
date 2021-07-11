import { makeObservable, observable, action, runInAction } from "mobx";
import { createContext } from "react";
import backend from "../engine/config";

class ContactStore {
  error = false;
  sending = false; 
  saved = false; 
  message = "";
  action = null; 

  constructor() {
    makeObservable(this, {
      action: observable,
      error: observable,
      sending: observable, 
      message: observable,   
      saved: observable, 
      getInTouch: action,    
      resetProperty: action,  
    });
  }
 

  
  getInTouch = (data) => {
    this.sending = true; 
    this.saved = false;
    try {
      backend
        .post("contact", data)
        .then((res) => {
          this.sending = false; 
          if (res.data.status) {
            runInAction(() => {
              this.fetching = false;
              if (res.status === 200) {
                this.error = false;
                this.message = res.data.message;
                this.saved = true;
              }
            })
         
          }
        })
        .catch((err) => {
          this.sending = false;
          this.error = true; 
          this.saved = false;
          this.message = err.response
            ? "Oops! something went wrong"
            : "Network Connection seems slow.";
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  resetProperty = (key, value) => {
    this[key] = value;
  };  
}

export default createContext(new ContactStore());

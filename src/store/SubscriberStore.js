import { makeObservable, observable, action, runInAction } from "mobx";
import { createContext } from "react";
import backend from "../engine/config";

class SubscriberStore {
  error = false;
  loading = false; 
  saved = false; 
  message = "";
  action = null; 

  constructor() {
    makeObservable(this, {
      action: observable,
      error: observable,
      loading: observable, 
      message: observable,   
      saved: observable, 
      subscribe: action,    
      resetProperty: action,  
    });
  }
 

  
  subscribe = (data) => {
    this.loading = true; 
    this.saved = false;
    try {
      backend
        .post("subscribers", data)
        .then((res) => {
          this.loading = false; 
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
          this.loading = false;
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

export default createContext(new SubscriberStore());

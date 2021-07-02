import { makeObservable, observable, action, computed } from "mobx";
import { createContext } from "react";
import backend from "../engine/config";

class SubscriberStore {
  error = false;
  loading = false; 
  message = "";
  action = null;
  errMessage = ""; 
  searches = []; 
  recommends = [];

  constructor() {
    makeObservable(this, {
      action: observable,
      error: observable,
      loading: observable,
      recommends: observable,
      message: observable, 
      searches: observable, 
      errMessage: observable, 
      getRecommendations: action,   
      searchProducts: action,   
      resetProperty: action,  
    });
  }
 

  getRecommendations = (data) => {
    this.loading = true;
    backend.put(`/search`, data).then((res) => {
      this.loading = false;
      if (res.status === 200) {
        this.recommends = res.data;
      }
    });
  };
  searchProducts = (data) => {
    this.loading = true;
    backend.post(`/search`, data).then((res) => {
      this.loading = false;
      if (res.status === 200) {
        this.searches = res.data;
      }
    });
  };
 
  resetProperty = (key, value) => {
    this[key] = value;
  }; 
  get products() {
    return Object.keys(this.allProduct || {}).map((key) => ({
      ...this.allProduct[key],
    }));
  } 
}

export default createContext(new SubscriberStore());

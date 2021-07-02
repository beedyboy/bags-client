import { makeObservable, observable, action, computed } from "mobx";
import { createContext } from "react";
import backend from "../engine/config";

class SearchStore {
  error = false;
  fetching = false; 
  message = "";
  action = null;
  errMessage = ""; 
  searches = []; 
  recommends = [];

  constructor() {
    makeObservable(this, {
      action: observable,
      error: observable,
      fetching: observable,
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
    this.fetching = true;
    backend.post(`/search/recommend`, data).then((res) => {
      this.fetching = false;
      if (res.status === 200) {
        this.recommends = res.data;
      }
    });
  };
  searchProducts = (data) => {
    this.fetching = true;
    backend.post(`/search`, data).then((res) => {
      this.fetching = false;
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

export default createContext(new SearchStore());

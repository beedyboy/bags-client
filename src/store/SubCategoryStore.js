import { makeObservable, observable, action, computed } from "mobx";  
import { createContext } from "react";
import backend from "../engine/config";
class SubCategoryStore {
  error = false;  
  action = null;
  loading = false;   
  subcategory = [];
  categorysubs = [];
  message = "";
 
  constructor() {
    makeObservable(this, {
      message: observable, 
      categorysubs: observable,  
      error: observable, 
      stats: computed,
      subcategorySelect: computed,
      loading: observable,
      subcategory: observable, 
      getSubByCategory: action, 
      resetProperty: action,
    });
  }

  getSubCategories = () => {
    this.loading = true;
    backend.get("subcategory").then((res) => {
      this.subcategory = res.data;
      this.loading = false;
    });
  }; 
  getSubByCategory = (category) => {
    try {
      this.loading = true;
      backend
        .get("subcategory/" + category)
        .then((res) => {
          this.loading = false;
          this.categorysubs = res.data;
        })
        .catch((err) => {
          console.log("my_subcategory", err.code);
          console.log("my_subcategory", err.message);
          console.log("my_subcategory", err.stack);
        });
    } catch (e) {
      console.error(e);
    }
  };

  resetProperty = (key, value) => {
    this[key] = value;
  };
 
  get stats() {
    return this.subcategory.length;
  }
  get subcategorySelect() {
    return Object.keys(this.categorysubs || {}).map((key) => ({
      value: this.categorysubs[key].id,
      label: this.categorysubs[key].name,
    }));
  }
}
 

export default createContext(new SubCategoryStore());
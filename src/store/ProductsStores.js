import { makeObservable, observable, action, computed } from "mobx";
import { createContext } from "react";
import backend from "../engine/config";

class ProductStore {
  error = false;
  loading = false;
  sending = false; 
  message = "";
  action = null;
  errMessage = "";

  product = [];
  allProduct = [];
  productsBySlug = [];
  productsByCategory = [];
  productsBySubCategory = [];
  similarProducts = [];

  constructor() {
    makeObservable(this, {
      action: observable,
      error: observable,
      loading: observable,
      similarProducts: observable,
      message: observable,
      allProduct: observable, 
      product: observable,
      productsBySlug: observable,
      errMessage: observable,
      productsByCategory: observable,
      getProducts: action, 
      getSimilarProductItem: action,
      getProductsByCategory: action,
      getProductInfo: action,
      productsBySubCategory: observable,
      getProductsBySlug: action, 
      resetProperty: action,
      productSlugMenu: computed, 
      brandedProduct: computed, 
      featuredProduct: computed,
      products: computed,
      arrivalProduct: computed,
      getProductsBySubCategory: action,
      sending: observable, 
      stats: computed,
    });
  }

  getProductById = (id) => {
    this.loading = true;
    try {
      backend.get(`/products/${id}`).then((res) => {
        this.loading = false;
        if (res.status === 200) {
          this.product = res.data;
        }
      });
    } catch (err) {
      this.error = err;
    }
  };

  getProductInfo = (name) => {
    this.loading = true;
    try {
      backend.get(`/products/${name}/details`).then((res) => {
        this.loading = false;
        if (res.status === 200) {
          this.product = res.data;
        }
      });
    } catch (err) {
      this.error = err;
    }
  };

  getProducts = () => {
    this.loading = true;
    backend.get(`/products`).then((res) => {
      this.loading = false;
      if (res.status === 200) {
        this.allProduct = res.data;
      }
    });
  };

  getProductsBySlug = (slug) => {
    this.loading = true;
    backend.get(`/products?slug=${slug}`).then((res) => {
      this.loading = false;
      if (res.data.status) {
        this.product = res.data.data[0];
      }
    });
  };

  getProductsByCategory = (category_menu) => {
    this.loading = true;
    backend.get(`/products/category_menu/${category_menu}`).then((res) => {
      this.loading = false;
      try {
        if (res.status === 200) {
          this.productsByCategory = res.data;
        }
      } catch (err) {}
    });
  };

  getProductsBySubCategory = (category_id) => {
    this.loading = true;
    backend.get(`/products/category=${category_id}/sub`).then((res) => {
      try {
        this.loading = false;
        if (res.data.status) {
          this.productsBySubCategory = res.data.data;
        }
      } catch (err) {}
    });
  };

  getSimilarProductItem = () => {
    this.similarProducts = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  };
 
  resetProperty = (key, value) => {
    this[key] = value;
  };
  get stats() {
    return this.allProduct.length;
  }
  get productMenu() {
    return Object.keys(this.product || {}).map((key) => ({
      ...this.product[key],
    }));
  }
  get productCategoryMenu() {
    return Object.keys(this.productsByCategory || {}).map((key) => ({
      ...this.productsByCategory[key],
    }));
  }
  get productSlugMenu() {
    return Object.keys(this.productsBySlug || {}).map((key) => ({
      ...this.productsBySlug[key],
    }));
  } 
  get products() {
    return Object.keys(this.allProduct || {}).map((key) => ({
      ...this.allProduct[key],
    }));
  }
  get brandedProduct() {
     
      return this.allProduct.filter(x=> x.branded === true);
  }
  get featuredProduct() { 
    return this.allProduct.filter(x=> x.featured === true);
  }
  get arrivalProduct() { 
    return this.allProduct.filter(x=> x.arrival === true);
  }
}

export default createContext(new ProductStore());

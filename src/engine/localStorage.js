// persist data t local storage
const Utils = {
    save:(key, value) => {
        localStorage.setItem(key, value);
    },
    get:(key) => {
      
        if (localStorage.getItem(key) === null) { 
            return "";
          }
          return localStorage.getItem(key);
    },
    clear:() => {
        localStorage.clear();
    },
    remove:(key) => {
        localStorage.removeItem(key);
    },
     logout: () => {
        localStorage.removeItem('admin_token');  
        localStorage.removeItem('acl');  
        localStorage.removeItem('name');  
        window.location.href = '/#/auth/login'; 
    }
}
 
export default Utils;
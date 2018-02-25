import footer from "./footer/footer";
import footerItem from "./footer/footer-item";

const install = function (Vue) {
	
	Vue.component("kk-footer",footer);
	Vue.component("kk-footer-item",footerItem);
	
};
export default install;

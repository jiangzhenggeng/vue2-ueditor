
import loadingComponent from './loading';
const loading = {
	install: function(Vue) {
		Vue.component('loading', loadingComponent);
	}
}

export default loading;

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const initState = {
	//页面加载提示
	show:true
};

export default new Vuex.Store({
	state:initState,
	actions,
	mutations,
});

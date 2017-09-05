
import * as types from './types';

export const showPageLoading = ({ commit }) => {
	commit(types.PAGE_LOADING_QUERY, {
		show: true
	})
};
export const hidePageLoading = ({ commit }) => {
	commit(types.PAGE_LOADING_QUERY, {
		show: false
	})
};
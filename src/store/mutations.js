/**
 * Created by jiangzg on 2017/7/18.
 */

import * as types from './types';
const mutations = {
    [types.PAGE_LOADING_QUERY] (state, { show }) {
        state.show = show || false;
    },
}
export default mutations;
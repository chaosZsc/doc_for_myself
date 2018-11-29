import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface DocState {
  docs: {
    name: string,
    desc: string,
    tags?: string[],
  }[],
};

const state: DocState = {
  docs: [],
};

export default new Vuex.Store({
  state,
});

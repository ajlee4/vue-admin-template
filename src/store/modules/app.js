export default {
	state: {
		sidebar: {
			opened: true,
			withoutAnimation: false,
		},
		device: 'desktop',
	},

	mutations: {
		toggleSideBar: (state) => {
			state.sidebar.opened = !state.sidebar.opened;
			state.sidebar.withoutAnimation = false;
		},
		closeSidebar: (state, withoutAnimation) => {
			state.sidebar.opened = false;
			state.sidebar.withoutAnimation = withoutAnimation;
		},
		toggleDevice: (state, device) => {
			state.device = device;
		},
	},
	getters: {
		sidebar: (state) => state.sidebar,
		device: (state) => state.device,
	},
	actions: {
		toggleSideBar({ commit }) {
			commit('toggleSideBar');
		},
		closeSideBar({ commit }, { withoutAnimation }) {
			commit('closeSidebar', withoutAnimation);
		},
		toggleDevice({ commit }, device) {
			commit('toggleDevice', device);
		},
	},
};

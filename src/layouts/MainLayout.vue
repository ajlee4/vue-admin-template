<template>
	<div :class="classObj" class="app-wrapper">
		<Sidebar></Sidebar>
		<div class="main-container">
			<navbar @sidebarShow="sidebarShow"></navbar>
			<app-main />
		</div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/components';

export default {
	name: 'Layout',
	components: {
		Sidebar,
		Navbar,
		AppMain,
	},

	methods: {
		sidebarShow() {
			this.sidebarVisible = !this.sidebarVisible;
		},
	},
	computed: {
		sidebar() {
			return this.$store.getters.sidebar;
		},
		device() {
			return this.$store.getters.device;
		},

		classObj() {
			return {
				hideSidebar: !this.sidebar.opened,
				openSidebar: this.sidebar.opened,
				withoutAnimation: this.sidebar.withoutAnimation,
				mobile: this.device === 'mobile',
			};
		},
	},
};
</script>

<style lang="scss">
.app-main {
	/*50 = navbar  */
	min-height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	overflow: hidden !important;
}
.fixed-header + .app-main {
	padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
	.fixed-header {
		padding-right: 15px;
	}
}
</style>

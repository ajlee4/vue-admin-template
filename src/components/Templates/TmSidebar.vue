<template>
	<div class="sidebar-container">
		<el-scrollbar wrap-class="scrollbar-wrapper">
			<el-scrollbar wrap-class="scrollbar-wrapper">
				<Logo />

				<el-menu
					:default-active="activeMenu"
					class="el-menu-vertical-demo"
					background-color="#1f2d3d"
					text-color="#fff"
					active-text-color="#ffd04b"
					:collapse="isCollapse"
				>
					<SidebarItem
						v-for="route in routes"
						:key="route.path"
						:item="route"
						:url="route.path"
					></SidebarItem>
				</el-menu>
			</el-scrollbar>
		</el-scrollbar>
	</div>
</template>
<script>
import { Logo, SidebarItem } from '@/components';
export default {
	props: {
		sidebarVisible: Boolean,
	},
	components: {
		Logo,
		SidebarItem,
	},
	computed: {
		isCollapse() {
			return !this.$store.getters.sidebar.opened;
		},
		routes() {
			return this.$router.options.routes;
		},
		activeMenu() {
			const route = this.$route;
			const { meta, path } = route;
			// if set path, the sidebar will highlight the path you set
			if (meta.activeMenu) {
				return meta.activeMenu;
			}
			return path;
		},
	},
	created() {
		console.log(this.routes);
	},
};
</script>
<style lang="scss">
.aside {
	&__logo {
		margin-bottom: 20px;
		padding: 10px 5px;
		display: block;
		max-width: 100%;
		svg {
			max-width: 100%;
		}
	}
}
.logo {
	.name {
		fill: #ffffff;
	}
	.circle {
		fill: #003e7e;
	}
}
</style>

<template>
	<div class="navbar">
		<div class="navbar-right">
			<el-dropdown :hide-on-click="false">
				<i class="el-icon-menu"></i>

				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item><a href="">Выйти</a></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script></script>
<style lang="scss" scoped>
.navbar {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
}
.el-dropdown {
	padding: 10px;
	display: block;
	cursor: pointer;
}
.el-dropdown-link {
	cursor: pointer;
}
.el-icon-arrow-down {
	font-size: 12px;
}
.navbar-right {
	margin-left: auto;
	display: inline-block;
}
</style>

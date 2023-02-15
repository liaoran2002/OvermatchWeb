<template>
	<div id="nav">
		<div id="fav"><img src="../assets/p1.png"></div>
		<ul>
			<li><a href="./">游戏</a></li>
			<li><a href="./heroes">英雄</a></li>
			<li><a href="./news">新闻</a></li>
			<li><a href="./media">娱乐</a>
				<div class="xYX">
					<ul>
						<li><a href="./Donot.html">钢琴块</a></li>
						<li><a href="./snake.html">贪吃蛇</a></li>
						<li><a href="./qiao.html">忍者搭桥</a></li>
						<li><a href="./fly.html">飞机大战</a></li>
						<li><a href="./shoot.html">雷霆战机</a></li>
					</ul>
				</div>
			</li>
			<li><a href="./主页.html">图片</a></li>
			<li>
				<router-link tag="a" target="_blank" to="./shop">商城</router-link>
			</li>
		</ul>
		<div class="xz"><a href="./download">下载游戏</a></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	#nav {
		display: flex;
		align-items: center;
		justify-content: left;
		width: 94%;
		height: 72px;
		margin-left: 2.5%;
		background-color: rgba(255, 255, 255, 0.7);
		z-index: 1;
		border-radius: 5px;
		position: fixed;
		top: 20px;
	}

	#fav {
		border-radius: 5px 0 0 5px;
		width: 72px;
		height: 60px;
		padding-left: 25px;
		padding-top: 12px;
		background-color: #fff;
	}

	#nav>ul>li {
		list-style: none;
		display: inline-block;
		margin-left: 16px;
		font-family: "黑体";
		font-weight: 700;
		font-size: 18px;

	}

	#nav>ul>li>a {
		text-decoration: none;
		color: black;
		padding: 16px 16px;
	}

	#nav>ul>li:hover {
		background-color: rgba(180, 180, 180, 0.4);
		padding: 16px 0px;
		border-radius: 10px;
	}

	#nav>ul>li:nth-of-type(4) {
		position: relative;
	}


	#nav>ul>li:nth-of-type(4):hover .xYX {
		visibility: visible;
	}

	.xz {
		display: flex;
		position: fixed;
		right: 4.8%;
	}

	.xz a {
		border-radius: 13%;
		color: white;
		background-color: #f06414;
		height: 40px;
		padding: 10px 20px;
		font-weight: 700;
		box-sizing: border-box;
		text-decoration: none;
	}

	.xz a:hover {
		border-radius: 13%;
		color: white;
		background-color: #f1742b;
	}

	.xYX {
		position: absolute;
		left: -25px;
		top: 50px;
		visibility: hidden;
	}

	.xYX ul {
		/* display: none; */
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 5px;
		padding: 16px;
		list-style: none;
		width: auto;
	}

	.xYX ul li a:hover {
		background-color: rgba(180, 180, 180, 0.4);

	}

	.xYX ul li a {
		border-radius: 8%;
		height: 10px;
		text-decoration: none;
		color: black;
		text-align: center;
		padding: 12px 12px;

	}

	.xYX ul li {
		padding: 10px;
		font-size: 16px;
		width: max-content
	}
</style>
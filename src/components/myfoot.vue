<template>
	<div id="ffoot">
		<h1>与我们一同为明日而战!</h1><br>
		<a href="./fire.html"><button>开始游戏</button></a>
	</div>
	<div id="mf">
		<div class="inscribed">
			<div class="provisions">
				<a href="./">隐私</a>丨
				<a href="./">法律</a>丨
				<a href="./">条款</a>丨
				<a href="./">API</a>
				<h1>&copy;2022 暴雪娱乐有限公司版权所有 由上海网之易网络科技发展有限公司运营 | 新广出审[2016]378号<br>
					文网游进字[2016]0025号 | <a href="">增值电信业务经营许可证编号：沪B2－20080012</a> | <a
						href="">沪ICP备：沪B2－20080012－15</a><br>
					互联网违法和不良信息举报电话：0571-28090163 沪公网安备 31011502052167号 | <a href="">上海市网络游戏行业自律公约</a>
				</h1>
				<h1><a href="./"><img src="https://blz.nosdn.127.net/1/frame/cprt/zx110.png" alt=""></a>
					<a href="./"><img src="https://blz.nosdn.127.net/1/frame/cprt/sgs-icon.png" alt=""></a>
					<a href="./"><img src="https://blz.nosdn.127.net/1/frame/cprt/icon20120516.png" alt=""></a>
					丨适龄提示：适合13岁及以上使用 <a href="">家长监护工程</a> | <a href="">网上有害信息专区</a>
				</h1>
			</div>
			<div class="prompt">
				<hr class="h1" color="#184f85">
				<p align="center">积极健康的游戏心态是健康游戏的开端，本游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱。</p>
				<p align="center">健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
		}
	}
</script>

<style>
	#mf {
		padding-top: 40px;
		padding-bottom: 40px;
		background-color: #1c2135;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#ffoot {
		background-image: url("../assets/p2.png");
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 660px;
	}

	#ffoot h1 {
		color: white;
		font-size: 120px;
		margin-top: 75px;
		font-weight: 700;
		font-family: "方正幼圆体";
		margin-bottom: -10px;
	}

	#ffoot button {
		font-size: 30px;
		background-color: #f06414;
		color: white;
		border-radius: 8%;
		height: 70px;
		width: 160px;
	}

	#ffoot button:hover {
		background-color: #f1742b;

	}

	.provisions a {
		font-size: 15px;
		color: #c6c7c8;
		;
		text-decoration: none;

	}

	.provisions a:hover {
		color: white;
	}

	.provisions h1 {
		font-size: 15px;
		color: #c6c7c8;
		;
	}

	.prompt p {
		color: #576c88;
		font-size: 12px;
	}
</style>

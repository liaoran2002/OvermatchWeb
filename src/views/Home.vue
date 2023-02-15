<script>
	export default {
		data() {
			return {
				luntext: [
					{
						img: "https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Tank_Heroes_Mobile.png",
						title: "重装",
						text: "重装英雄可以承受大量伤害，还能粉碎森严的防线，不论是抱团的敌人还是狭窄的要道都不在话下。身为重装英雄，领军冲锋由你一马当先。"
					},
					{
						img: "https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Damage_Heroes_Mobile.png",
						title: "输出",
						text: "输出英雄负责搜寻敌人、全力出击并将其歼灭，本领和技能多样，风格百变。这些英雄的力量令人生畏，但自身较为脆弱，需要支援照应才能生存。"
					},
					{
						img: "https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Support_Heroes_Mobile.png",
						title: "支援",
						text: "支援英雄可以通过治疗、护盾、伤害增强和封锁敌人来强化盟友。作为支援英雄，你就是团队生存的支柱。"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<template>
	<mytitle></mytitle>
	<!-- 头部区域 -->
	<div id="header">
		<!-- 下面的图片 -->
		<div id="navNoticeImg">
			<img src="../assets/home/1_common_CommonUnderAgeIconLev16.png" alt="">
		</div>
		<!-- 中间的文字提示 -->
		<div id="headerTitleBox">
			<img src="../assets/home/1_assets_img_pages_home_logo_new_0321.png" alt="">
			<div id="centerTitle">
				<h2 class="cen-header">一个值得奋斗的未来</h2>
				<p class="cen-headerTwo">次时代团队动作游戏 · 免费游玩</p>
			</div>
			<a href="./download"><input type="button" class="btn btn-downLoad" value="下载游戏"></a>
		</div>
		<!-- 有宽高属性,独占一行 -->
		<!-- 视频 -->
		<video muted loop src="https://blz.nosdn.127.net/1/tm/blz/overwatch/home/F2P_Trailer.webm" id="myVideo"
			autoplay="true"
			poster="https://blz.nosdn.127.net/1/tm/blz/overwatch/home/1600_F2P_Masthead_Fallback.jpg"></video>

		<!-- 暂停播放按钮 -->
		<div id="playBox">
			<img src="../assets/home/1_assets_img_icons_menus_video_control_icon.png" alt="" @click="">
		</div>
	</div>
	<!-- 第二部分  字幕+字母 -->
	<div id="activityBox">
		<!-- 左边的字幕盒子 -->
		<div class="left">
			<h2 class="headering">全新时代来袭</h2>
			<p class="description">
				《守望先锋》“归来”是一款设定在光明未来的免费团队动作游戏，每场对战都是一次5v5的终极乱斗。扮演能时间跳跃的自由斗士、节奏随身的战场DJ，以及其他30多位独一无二的英雄，在全球各地大显身手。</p>
		</div>
		<!-- 视频 -->
		<video poster="../assets/home/1_tm_blz_overwatch_home_OW2_Launch_Trailer_Thumbnails_Phoenix_1920x1080.jpg"
			controls src="https://blz-videos.nosdn.127.net/1/OverWatch/Overwatch_Seas1_Launch_zhCN_CADPA.mp4"
			style="width: 50%;height: 75%" id="rightVideo"></video>
	</div>


	<!-- 活动页面 -->
	<!-- 背景图 -->
	<div class="sectio season">
		<!-- 中间的内容居中 -->
		<div class="content">
			<!-- 内容 -->
			<!-- preload 加载目标资源 -->
			<div class="left">
				<div class="image">
					<video style="height: 100%;width: 100%;" controls preload="none"
						poster="../assets/home/1_tm_blz_overwatch_home_OW2_S2_KeyArt_thumb_1840x1036.png">
						<source
							src="https://blz-videos.nosdn.127.net/1/OverWatch/Overwatch_RamattraGameplay_zhCN_CAPDA.mp4"
							type="video/mp4" />
					</video>
				</div>
			</div>
			<!-- 文字部分 -->
			<div class="right">
				<h2 class="headering">第2赛季即将推出：拉玛刹</h2>
				<div class="description">第2赛季即将于12月7日开启，化身《守望先锋》“归来”最新重装英雄拉玛刹，为所有智械的未来而战！</div>
				<div class="btn-wrap">
					<a href="" class="btn-primary" one-link-mark="yes">了解详情</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 新闻页面 -->
	<div class="sectio news">
		<!-- 标题 -->
		<a href="./news">
			<h2 class="heading">新闻</h2>
		</a>
		<!-- 外层盒子 -->
		<div class="gallery-wrap">
			<!-- 中间部分的内容(target="_blank" 浏览器总在一个新的页面打开文档) -->
			<div class="gallery-list">
				<div class="gallery-items">
					<a title="网之易关于暴雪游戏产品运营到期的重要公告" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_28_e14ee304820b024ddc0ba399b7d623da.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">网之易关于暴雪游戏产品运营到期的重要公告</h4>
							</div>
							<div class="gallery-footer">2022-11-17</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="第2赛季内容前瞻：拉玛刹、香巴里寺院和奥林匹斯之战" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_30_cd3abfbb35b6751f702d8b92cf7e4fd9.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">第2赛季内容前瞻：拉玛刹、香巴里寺院和奥林匹斯之战</h4>
							</div>
							<div class="gallery-footer">2022-11-30</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="《守望先锋》”归来“第2赛季预览视频" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_30_9e60ec42db7ecde6d27145bbdf3c66f8.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">《守望先锋》”归来“第2赛季预览视频</h4>
							</div>
							<div class="gallery-footer">2022-11-17</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="革命者的诞生：英雄设计团队带来拉玛刹幕后秘闻" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_28_c021be56f512a4878306dbef9ad0596f.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">革命者的诞生：英雄设计团队带来拉玛刹幕后秘闻</h4>
							</div>
							<div class="gallery-footer">2022-11-30</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="《守望先锋》“归来”拉玛刹游戏预览" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_28_c4a34d5b38125ab906519a96dc1c68a4.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">《守望先锋》“归来”拉玛刹游戏预览</h4>
							</div>
							<div class="gallery-footer">2022-11-30</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="和《守望先锋》团队一同解析赛博恶灵源氏神话皮肤" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_10_750e88d60f1abe8799264029a2f7b571.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">和《守望先锋》团队一同解析赛博恶灵源氏神话皮肤</h4>
							</div>
							<div class="gallery-footer">2022-11-30</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="英雄故事：拉玛刹" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_7_898bb059e1de4cf0e4cf33996aae2c37.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">英雄故事：拉玛刹</h4>
							</div>
							<div class="gallery-footer">2022-11-30</div>
						</div>
					</a>
				</div>

				<div class="gallery-items">
					<a title="《守望先锋》“归来”雾子动画短片 中文配音幕后花絮" href="" target="_blank">
						<!-- 照片 -->
						<div class="image-wrapper">
							<img src="../assets/home/a_images_2022_11_7_2315432f6142b895d6dbe0015bcd0fc2.jpg" />
						</div>
						<!-- 文本 -->
						<div class="gallery-text">
							<div class="main">
								<h4 class="heading">《守望先锋》“归来”雾子动画短片 中文配音幕后花絮</h4>
							</div>
							<div class="gallery-footer">2022-11-30</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<!-- 按钮 -->
		<a href="#" class="btn-tertiary">查看更多</a>
	</div>


	<!-- 活动英雄页面!!! -->
	<div class="sectio features-heroes">
		<!-- 头部文本部分 -->
		<div class="header">
			<h3 class="subheading">现已上线</h3>
			<h2 class="heading">与你的英雄伙伴<br class="isMobile">并肩作战</h2>
			<div class="description">
				集结你的好友,组成队伍,
				一同探索《守望先锋》“归来”的全新世界！
			</div>
		</div>

		<div class="gallery-wrap">
			<div class="gallery-items">
				<!-- 图片部分 -->
				<div class="image-wrapper">
					<img src="../assets/home/英雄活动1.jpeg" />
				</div>
				<!-- 文本部分 -->
				<div class="gallery-text">
					<h4 class="heading">激动人心的全新英雄</h4>
					<div class="description">
						更多不同凡响的英雄将会加入当前的英雄阵容。
						无论你喜欢领军冲锋、伏击敌人还是援助盟友，
						总有适合你的新英雄。
					</div>
				</div>
			</div>

			<div class="gallery-items">
				<!-- 图片部分 -->
				<div class="image-wrapper">
					<img src="../assets/home/英雄活动4.png" />
				</div>
				<!-- 文本部分 -->
				<div class="gallery-text">
					<h4 class="heading">屡获殊荣的动作游戏</h4>
					<div class="description" style="line-height: 28px;">
						全新英雄上阵，探索更多地图，
						体验5v5战斗赋予玩家改写战局的能力，
						畅享紧张刺激的战斗。
					</div>
				</div>
			</div>

			<div class="gallery-items">
				<!-- 图片部分 -->
				<div class="image-wrapper">
					<img src="../assets/home/英雄活动3.jpeg" />
				</div>
				<!-- 文本部分 -->
				<div class="gallery-text">
					<h4 class="heading">焕然一新的全新体验</h4>
					<div class="description">
						获得全方位重制的众多英雄、全新的战斗音效和英雄语音、
						引人注目的新皮肤和酷炫外观。
						更多精彩内容尽在《守望先锋》“归来”。
					</div>
				</div>
			</div>

			<div class="gallery-items">
				<!-- 图片部分 -->
				<div class="image-wrapper">
					<img src="../assets/home/英雄活动4.png" />
				</div>
				<!-- 文本部分 -->
				<div class="gallery-text">
					<h4 class="heading">次时代版本 免费游玩</h4>
					<div class="description">
						《守望先锋》“归来”是一款免费游玩、
						长期运营并持续带来优化与更新的在线游戏。
						与好友组队同行，探索焕然一新的PvP体验。
					</div>
				</div>
			</div>
		</div>

		<!-- 英雄动作页面 -->
		<div class="heroes-wrap">
			<div class="heroes-con">
				<div class="table-wrap">
					<div class="left">
						<img style="width: 750px;height: 1107px;"
							src="https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Support_Heroes_Full_Body_05.png" />
					</div>
					<div class="right">
						<h2>英雄</h2>
						<!-- 图片部分 -->
						<div class="right-image">
							<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Tank.svg" />
							<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Damage.svg" />
							<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Support.svg" />
						</div>
						<div class="right-text">
							<h2>支援</h2>
							<div class="description">
								支援英雄可以通过治疗、护盾、
								伤害增强和封锁敌人来强化盟友。
								作为支援英雄，你就是团队生存的支柱。
							</div>
							<a>查看所有英雄</a>
						</div>
					</div>
				</div>
			</div>

			<!-- 文本部分   (做不出来(*******)) -->
			<!-- aria-lable 搭配tabindex="0"使用(可获取焦点) 读取文字 -->
			<!-- <div class="swiper-wapper">
				<div class="swiper-text" tabindex="0">
	
				</div>
				<div class="swiper-text" tabindex="0"></div>
				<div class="swiper-text" tabindex="0"></div>
			</div> -->

		</div>
	</div>

	<!-- 轮播 -->
	<div class="sectio maps">
		<!-- 给你留的位置嗷! -->
		<div class="background-image">
			<div class="one"></div>
			<div class="two"></div>
			<div class="three"></div>
			<div class="four"></div>
			<div class="five active"></div>
			<div class="six"></div>
			<div class="seven"></div>
			<div class="eight"></div>
		</div>

		<!-- 头部文本 -->
		<div class="header">
			<h2 class="heading">地图</h2>
			<div class="description">走遍世界，在全球各地为未来而战。
				从罗马的恢弘古迹，到遍地白雪的多伦多街头，每张地图都有需要完成的目标、
				等待揭开的秘密和有待探索的战术策略。</div>
		</div>

		<!-- 轮播区域 -->
		<div class="content">
			<div class="left-button" role="button">
				<div></div>
			</div>
			<div class="center-image">
				<div class="tab">
					<ul>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Tug_of_War.svg">
							</div>
							<p>机动推进</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Control.svg">
							</div>
							<p>占领要点</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Escort.svg">
							</div>
							<p>运载目标</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Hybrid.svg">
							</div>
							<p>攻击/护送</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Capture_the_Flag.svg">
							</div>
							<p>勇夺锦旗</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Elimination.svg">
							</div>
							<p>决斗先锋</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Deathmatch.svg">
							</div>
							<p>死斗</p>
						</li>
						<li class="bullet">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Team_Deathmatch.svg">
							</div>
							<p>团队死斗</p>
						</li>
					</ul>
				</div>
				<!-- 图片 -->
				<div class="swiper-wrapper">
					<div class="image">
						<img src="https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/Oasis_Control.jpg">
					</div>
					<div class="buttom-text">
						<h2 class="heading">占领要点</h2>
						<div class="description">双方队伍必须争夺同一个目标点，率先赢得两个回合的队伍获胜。</div>
					</div>
				</div>
			</div>
			<!-- 右边的按钮 -->
			<div class="right-button">

			</div>
		</div>
	</div>
	<!-- 底部PVE内容 -->
	<div class="pve-background">
		<div class="pve">
			<div class="content">
				<div class="header">
					<h3>更多内容 即将推出</h3>
					<h2>PvE内容 续写全新故事</h2>
					<div class="description">
						从2023年起，你将通过第二次智械危机期间的一系列PvE任务，
						体验《守望先锋》的传奇新篇！
						召集守望先锋特工，在世界各地对抗归零者的夺命部队。
					</div>
				</div>
			</div>
		</div>
		<div class="image-yuanshi"></div>
	</div>
	<myfoot></myfoot>
</template>

<style>
	li {
		/* 去掉小黑点 */
		list-style: none;
	}

	a {
		text-decoration: none;
		color: #999;
	}

	#header {
		width: 100%;
		/* background: red; */
		/* 给大盒子一个相对定位 */
		/* 什么时候用到定位？ 浮动解决不了问题时就可以用定位
	        特殊场景都是可以用它解决的！！
	    */
		min-height: 725px;
		position: relative;
	}

	#myVideo {
		/* 绝对定位 */
		position: absolute;
		width: 100%;
		/* ===== 视频的高度没有办法适应大盒子的高度 bug ==== */
		height: auto;
		/* ================= */
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -10;
	}

	.navLogo {
		/* 把行标签 变成 块标签 */
		display: block;
		width: 61px;
		height: 40px;
		background: url("../assets/home/1_fsbnet_icon-sprite.png")no-repeat;
		/* 背景图片定位效果 */
		background-position: -20px -76px;
		float: left;
		margin-right: 30px;
	}

	.navLogo:hover {
		background: url("../assets/home/1_fsbnet_icon-sprite.png")no-repeat;
		/* 背景图片定位效果 */
		background-position: -20px -120px;
	}

	.leftBox li {
		float: left;
		margin-right: 30px;
	}

	.leftBox .active {
		text-shadow: 0px 0px 15px #fff, 0 0 30px rgb(255 255 255 / 30%);
		color: #fff;
	}

	.rightBox {
		float: right;
	}

	.rightBox ul li {
		float: left;
		margin-right: 15px;
	}

	.rightActive {
		padding-right: 50px;
	}

	.rightActive img {
		vertical-align: middle;
	}

	.navTwoImg {
		background: url("../assets/home/1_assets_img_logos_nav_logo_new.jpg")no-repeat;
		height: 48px;
		width: 48px;
	}

	/* 下面提示文字的图片 */
	#navNoticeImg {
		margin: 0 auto;
		margin-top: 100px;
	}

	#navNoticeImg img {
		width: 66px;
		height: 84px;
		margin-top: 3px;
	}

	/* 中间文字提示 */
	#headerTitleBox {
		width: 633px;
		height: 196px;
		margin: 0 auto;
		margin-top: 230px;
		text-align: center;
		margin-top: 20px;
	}

	#headerTitleBox img {
		width: 100%;
	}

	#headerTitleBox .btn {
		width: 174px;
		height: 42px;
		border: none;
		color: #fff;
		font-weight: bolder;
		border-radius: 3px;
	}

	#headerTitleBox .btn:hover {
		cursor: pointer;
	}

	#headerTitleBox .btn-downLoad {
		background: #FF9C00;
	}

	/* 中间的字幕 */
	#centerTitle {
		text-align: center;
	}

	#centerTitle .cen-header {
		font-size: 60px;
		line-height: 80px;
		color: #fff;
		font-weight: 700;
		text-align: center;
		/* 斜体 */
		font-style: normal;
		white-space: nowrap
	}

	#centerTitle .cen-headerTwo {
		color: #fff;
		font-size: 20px;
		line-height: 80px;
	}

	/* 在头部加入暂停按钮 */
	#playBox {
		width: 72px;
		height: 32px;
		position: absolute;
		bottom: 10px;
		left: 30px;
		color: #fff;
		/* 超出部分隐藏 */
		overflow: hidden;
		line-height: 32px;
	}

	/* 活动页面 */
	#activityBox {
		background: url("../assets/home/1_tm_blz_overwatch_home_2600_Silver_Background.jpg") no-repeat center;
		background-size: cover;
		height: 673px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#activityBox .left {
		display: inline-block;
		width: 40%;
		height: 673px;
		margin-right: 25px;
	}

	#activityBox .headering {
		color: #1d253a;
		font-size: 60px;
		margin-top: 232px;
	}

	#activityBox .description {
		color: rgba(29, 37, 58, .9);
		font-size: 20px;
	}

	#activityBox .right {
		width: 40%;
	}

	.sectio {
		padding: 80px 40px;
	}

	.season {
		background: url("../assets/home/1_tm_blz_overwatch_home_OW2_S2_KeyArt_desktop_2600x800.png") no-repeat 50% 0;
		/* 用于设置元素上遮罩层的图像。 */
		-webkit-mask-box-image: url("../assets/home/1_tm_blz_overwatch_home_Top_and_Bottom_Divider-e96feb1c3a.svg");
		-webkit-mask-box-image-slice: 20 350 fill;
		height: 544px;
		margin-top: -18px;
	}

	.content {
		margin: 0px 0 0 90px;
		max-width: 1600px;
		max-height: 620px;
	}

	.content .left .image {
		height: 524px;
		width: 700px;
		margin-top: 10px;
		float: left;
		margin-right: 39px;
		box-sizing: border-box;
	}

	.right .headering {
		padding-top: 100px;
		color: #fff;
		font-weight: 700;
		font-size: 60px;
		line-height: 66px;
		text-shadow: 0 4px 10px rgb(0 0 0 / 20%);
		font-style: normal;
	}

	.season .description {
		font-size: 20px;
		color: #fff;
		text-shadow: 0 4px 10px rgb(0 0 0 / 20%);
		margin-top: 24px;
	}

	.season .btn-wrap a {
		margin-right: 24px;
	}


	.btn-primary {
		padding: 0 40px;
		font-size: 24px;
		height: 58px;
		line-height: 72px;

		background-color: #f06414;
		position: relative;
		z-index: 1;
		border-radius: 5px;
		box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
		color: #fff;
		font-weight: 700;
		display: inline-flex;
		text-align: center;
		align-items: center;
		margin-top: 82px;
	}

	.news {
		/* background: url("./img/1_tm_blz_overwatch_home_2600_Silver_Background.jpg")
		 no-repeat 50% 0; */
		background: url("../assets/home/1_tm_blz_overwatch_home_2600_Silver_Background.jpg") no-repeat 50% 0;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
		max-width: 2600px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		margin: 0 auto;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		padding: 80px 40px;
		margin-top: -18px;
	}

	.news h2.heading {
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		margin-bottom: 40px;
	}

	.news .gallery-wrap {
		width: 100%;
	}

	.news .gallery-list {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		max-width: 1400px;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin: 0 auto;
	}

	.news .gallery-items {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		border-radius: 5px;
		overflow: hidden;
		/* 算法 整个宽度的25%-32px好看一点! */
		width: calc(25% - 32px);
		margin: 0px 16px 32px;
		position: relative;
		/* 颜色 不知道啥颜色 */
		background: radial-gradient(124.81% 124.81% at 50% -.29%, #242a42 43.75%, #121524 100%);
	}

	/* a标签框框 */
	.news .gallery-items a {
		width: 100%;
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
	}

	/* 新闻图片 */
	.news .image-wrapper {
		position: relative;
		width: 100%;
		padding-top: 44%;
	}

	.news .image-wrapper img {
		width: 100%;
		height: 175px;
		transition: .3s ease;
		/* 定位置 */
		position: absolute;
		left: 0;
		top: 0;
	}

	/* 新闻文本 */
	.news .gallery-text {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
		margin: 15px;
		font-size: 20px;
		color: #fff;
	}

	.news .gallery-text .heading {
		overflow: hidden;
		/* 文本超出部分变成省略号 */
		text-overflow: ellipsis;
		font-size: 18px;
		display: -webkit-box;
		height: 48px;
	}

	.news .gallery-footer {
		font-size: 14px;
		margin-top: -20px;
		color: #aaa;
	}

	.btn-tertiary {
		padding: 0 40px;
		font-size: 24px;
		height: 72px;
		line-height: 72px;
		border-radius: 5px;
		background-color: #05a0fa;
		color: #fff;
		font-weight: 700;
	}

	.pve-background {
		width: 100%;
		height: 100%;
		position: relative;
		max-width: 2600px;
	}

	.pve {
		background: url("../assets/home/1_tm_blz_overwatch_home_2600_Silver_Background.jpg") no-repeat 50% 0;
		/* 调整背景边框 */
		-webkit-mask-box-image: url("../assets/home/1_tm_blz_overwatch_home_Inverse_Top_and_Bottom_Divider-57c3fb4a1a.svg");
		-webkit-mask-box-image-slice: 20 350 fill;
		margin-top: -19px;
		margin-bottom: -19px;
		align-items: flex-start;
		z-index: 1;
		padding: 80px 40px
	}

	.pve .content {
		max-width: 1400px;
		width: 100%;
	}

	.content {
		margin: 0 auto;
	}

	.pve .header {
		max-width: 720px;
		width: 100%;
		margin-bottom: 40px;
	}

	.pve .header h3 {
		color: #5b6272;
		font-size: 20px;
		margin-bottom: 4px;
		font-weight: 700;
	}

	.pve .header h2 {
		color: #1d253a;
		font-size: 60px;
		font-weight: 700;
		margin-top: 0;
	}

	.pve .description {
		margin-top: 24px;
		font-size: 20px;
		color: #30384c;
	}

	.pve-background .image-yuanshi {
		background-image: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/home/genji.png");
		background-size: auto 100%;
		background-position: bottom left;
		background-repeat: no-repeat;
		z-index: 1;
		height: 110%;
		width: 688px;
		right: 0px;
		top: 64px;
		position: absolute;
	}

	/* 英雄活动部分 背景and头部文字!!*/
	.features-heroes {
		background: url("../assets/home/蓝天.jpg") no-repeat 50% 17%;
		margin-top: -30px;
		-webkit-mask-box-image: url("../assets/home/蓝天背景1.svg");
		-webkit-mask-box-image-slice: 20 350 fill;
		overflow: hidden;
	}

	.features-heroes .header {
		margin-bottom: 60px;
		display: flex;
		text-align: center;
		color: #fff;
		flex-direction: column;
		align-items: center;
	}

	.features-heroes .header .subheading {
		margin-bottom: 4px;
		font-size: 20px;
		line-height: 22px;
	}

	.features-heroes .header .heading {
		margin-top: 0;
		font-size: 60px;
		max-width: 800px;
		font-weight: 700;
		line-height: 1.2;
	}

	.isMobile {
		display: none;
	}

	.features-heroes .header .description {
		margin-top: 24px;
		max-width: 800px;
		font-size: 20px;
	}

	/* 英雄活动!!!!(四个) */
	.features-heroes .gallery-wrap {
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		align-items: center;
	}

	.features-heroes .gallery-items {
		text-align: center;
		margin: 0 16px;
		width: 18%;
		height: 350px;
	}

	.features-heroes .image-wrapper {
		position: relative;
		overflow: hidden;
		border-radius: 5px;
	}

	.features-heroes .image-wrapper img {
		vertical-align: top;
		width: 100%;
	}

	.features-heroes .gallery-text {
		margin: 20px;
	}

	.features-heroes .gallery-text .heading {
		color: #fff;
		font-size: 20px;
		line-height: 28px;
	}

	.features-heroes .gallery-text .description {
		font-size: 16px;
		margin-top: 16px;
		color: #fff;
	}


	/* 英雄动作 */
	.heroes-wrap {
		display: flex;
		width: 100%;
		color: #fff;
		flex-direction: column;
	}

	.heroes-con {
		display: flex;
		flex-direction: column;
	}

	.table-wrap {
		display: flex;
		justify-content: center;
	}

	.table-wrap .left {
		max-width: 750px;
		width: 100%;
		position: relative;
	}

	.table-wrap .right {
		width: 570px;
	}

	.table-wrap .right h2 {
		font-weight: 700;
		margin-bottom: 30px;
		font-size: 60px;
	}

	.table-wrap .right .right-image {
		width: 570px;
	}

	.table-wrap .right .right-image img {
		margin: 8px;
		padding: 10px;
		border: 2px solid rgb(255 255 255 / 30%);
		border-radius: 50%;
	}

	.table-wrap .right .right-text {
		max-width: 570px;
	}

	.table-wrap .right .right-text h2 {
		font-size: 32px;
		margin-top: 58px;
	}

	.table-wrap .right .right-text .description {
		margin-top: 16px;
		font-size: 20px;
		margin-bottom: 50px;
	}

	.table-wrap .right .right-text a {
		padding: 0 40px;
		font-size: 24px;
		height: 72px;
		line-height: 72px;
		background-color: #fff;
		position: relative;
		z-index: 1;
		border-radius: 5px;
		color: #000;
		font-weight: 700;
		display: inline-block;
	}


	/* 轮播区域 */
	.maps {
		overflow: hidden;
		color: #fff;
		background-color: #6e93c1;
		/* 背景框框 */
		-webkit-mask-box-image: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Top_Solid_Divider-66d5db5c53.svg");
		-webkit-mask-box-image-slice: 16 200 fill;
		margin-top: -20px;
		align-items: center;
		position: relative;
		max-width: 2600px;
		display: flex;
		flex-direction: column;
		padding: 80px 40px;
		margin-top: -550px;
	}



	.maps .background-image {
		position: absolute;
		left: 0;
		top: 10px;
		width: 100%;
		height: 100%;
	}

	.maps .background-image>div {
		width: 100%;
		height: 100%;
		-webkit-mask-box-image: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/home/Top_Solid_Divider-66d5db5c53.svg");
		-webkit-mask-box-image-slice: 16 200 fill;
		display: none;
	}

	.maps .background-image .one {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Push.jpg") no-repeat 50% 0;
	}

	.maps .background-image .two {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Control.jpg") no-repeat 50% 0
	}

	.maps .background-image .three {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Escort.jpg") no-repeat 50% 0;
	}

	.maps .background-image .four {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Hybrid.jpg") no-repeat 50% 0;
	}

	.maps .background-image .five {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Capture_the_Flag.jpg") no-repeat 50% 0;
	}

	.maps .background-image .active {
		display: block;
	}

	.maps .background-image .six {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Elimination.jpg") no-repeat 50% 0;
	}

	.maps .background-image .seven {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Deathmatch.jpg") no-repeat 50% 0;
	}

	.maps .background-image .eight {
		background: url("https://blz.nosdn.127.net/1/tm/blz/overwatch/maps/2600_Team_Deathmatch.jpg") no-repeat 50% 0;
	}

	.maps .header {
		position: relative;
		max-width: 720px;
		text-align: center;
		margin-bottom: 40px;
	}

	.maps .header .heading {
		font-weight: 700;
		font-size: 60px;
	}

	.maps .header .description {
		margin-top: 24px;
		font-size: 20px;
		line-height: 28px;
		margin-bottom: 80px;
	}


	/* 左右按钮   中间图片  */
	.maps .content {
		max-width: 1136px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		position: relative;
	}

	.maps .left-button {}

	.maps .center-image {
		overflow: hidden;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
	}

	.maps .tab {
		margin: 0 auto 20px
	}

	.maps .tab ul {
		display: flex;
		margin: 20px 0;
	}

	.maps .tab .bullet {
		padding: 1px;
		text-align: center;
		opacity: .5;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: 0;
		max-width: 120px;
		width: 145px;
	}

	.maps .tab .bullet div {
		border: 2px solid hsla(0, 0%, 100%, 1);
		border-radius: 50%;
		margin-bottom: 5px;
		height: 65px;
		width: 65px;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.maps .tab .bullet p {
		font-weight: 700;
	}

	.maps .swiper-wrapper .image {
		width: 100%;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		height: 540px;
		width: 960px;
	}

	.maps .swiper-wrapper .buttom-text {
		width: 100%;
		margin: 20px auto 0;
		text-align: center;
	}

	.swiper-wrapper .buttom-text .heading {
		font-weight: 700;
		font-size: 32px;
		margin-bottom: 20px;
	}

	.swiper-wrapper .buttom-text .description {
		line-height: 28px;
		font-size: 20px;

	}
</style>

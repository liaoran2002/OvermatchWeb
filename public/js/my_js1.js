function quanbu() {
	let html = `
				<ul class="u1">
					<li style="background-color: white;">
						<div  class="u1d1">全部</div>
					</li>
					<li onclick="tank()">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg">
								<div class="dd">重装</div>
					</li>
					<li onclick="shuchu()">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg">
						<div class="dd">输出</div>
						
						
					</li>
					<li onclick="zhiyuan()">
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg">
						<div class="dd">支援</div>
					</li>
				</ul>
				`
	document.getElementsByClassName("d2_1")[0].innerHTML = html
	let html2=`
		<div>
				<ul>
					<li>
						<a href="hero1.html" target="_blank">
							<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_ramattra_3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png"
								class="img1">
							<div>
								<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">拉玛刹</div>
							</div>
						</div>
						</a>
					</li>
					<li>
						<a href="hero.html" target="_blank">
							<div>
								<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_kiriko_088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png"
									class="img1">
								<div>
									<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
										class="img2">
									<div class="s1">雾子</div>
								</div>
							</div>
						</a>
		
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_ana_3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">安娜</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_ashe_8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">艾什</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_baptiste_f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">巴蒂斯特</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_bastion_4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">堡垒</div>
							</div>
						</div>
					</li>
		
		
				<!-- </ul>
				<ul> -->
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_brigitte_48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">布丽吉塔</div>
							</div>
						</div>
					</li>
		
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_cassidy_6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png"
								class="img1">
							<div>
								<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">卡西迪</div>
							</div>
						</div>
					</li>
		
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_d.va_ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">D.Va</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_doomfist_13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">末日铁拳</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_echo_f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">回声</div>
							</div>
						</div>
					</li>
				<!-- </ul>
				<ul> -->
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_genji_4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">源氏</div>
							</div>
						</div>
					</li>
		
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_hanzo_aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png"
								class="img1">
							<div>
								<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">半藏</div>
							</div>
						</div>
					</li>
		
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_junker%20queen_1c6a0b942da79de8df3ebcc652fbf239cf74ff3d607e0f35af38570ee3536fd3.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">渣客女王</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_junkrat_037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">狂鼠</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_l%C3%BAcio_7fc54a1056e11892e1f5366fc15ad50e0e4b4691dedb58ee25da6ee853f3408e.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">卢西奥</div>
							</div>
						</div>
					</li>
				<!-- </ul>
				<ul> -->
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_mei_1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">美</div>
							</div>
						</div>
					</li>
		
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_mercy_2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png"
								class="img1">
							<div>
								<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">天使</div>
							</div>
						</div>
					</li>
		
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_moira_000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">莫伊拉</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_orisa_95090aeae38cf8bd4852c024a8eb624b99cfda63f59f162db56ec12a17f4a9de.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">奥丽莎</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_pharah_f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">法老之鹰</div>
							</div>
						</div>
					</li>
				<!-- </ul>
				<ul> -->
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_reaper_2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">死神</div>
							</div>
						</div>
					</li>
				
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_reinhardt_490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">莱因哈特</div>
							</div>
						</div>
					</li>
				
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_roadhog_72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">路霸</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_sigma_cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">西格玛</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_sojourn_a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">索杰恩</div>
							</div>
						</div>
					</li>
				<!-- </ul>
				<ul> -->
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_soldier:%2076_20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">士兵：76</div>
							</div>
						</div>
					</li>
				
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_sombra_bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">黑影</div>
							</div>
						</div>
					</li>
				
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_symmetra_7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">秩序之光</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_torbj%C3%B6rn_1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">托比昂</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_tracer_a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">猎空</div>
							</div>
						</div>
					</li>
					
				<!-- </ul>
				<ul> -->
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_widowmaker_a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
									class="img2">
								<div class="s1">黑百合</div>
							</div>
						</div>
					</li>
				
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_winston_054bb916d0737a246b48c6d12c34f01b7ee7e3576a60f50523b44d72ce36a0e9.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">梅飞</div>
							</div>
						</div>
					</li>
				
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_wrecking%20ball_5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">破坏球</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_zarya_8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
									class="img2">
								<div class="s1">查莉娅</div>
							</div>
						</div>
					</li>
					<li>
						<div>
							<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_zenyatta_71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png"
								class="img1">
							<div>
								<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
									class="img2">
								<div class="s1">禅雅塔</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		
	`
	document.getElementsByClassName("d4")[0].innerHTML = html2
}

function tank() {
	let html = `
				<ul class="u1">
					<li onclick="quanbu()">
						<div  class="u1d1">全部</div>
					</li>
					<li style="background-color: white;">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg">
								<div class="dd">重装</div>
					</li>
					<li onclick="shuchu()">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg">
						<div class="dd">输出</div>
						
						
					</li>
					<li onclick="zhiyuan()">
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg">
						<div class="dd">支援</div>
					</li>
				</ul>
				`
	document.getElementsByClassName("d2_1")[0].innerHTML = html
	let html2=`
	<ul>
		<li>
			<a href="hero1.html" target="_blank">
				<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_ramattra_3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png"
					class="img1">
				<div>
					<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">拉玛刹</div>
				</div>
			</div>
			</a>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_d.va_ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">D.Va</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_doomfist_13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">末日铁拳</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_junker%20queen_1c6a0b942da79de8df3ebcc652fbf239cf74ff3d607e0f35af38570ee3536fd3.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">渣客女王</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_orisa_95090aeae38cf8bd4852c024a8eb624b99cfda63f59f162db56ec12a17f4a9de.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">奥丽莎</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_reinhardt_490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">莱因哈特</div>
				</div>
			</div>
		</li>
							
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_roadhog_72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">路霸</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_sigma_cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">西格玛</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_winston_054bb916d0737a246b48c6d12c34f01b7ee7e3576a60f50523b44d72ce36a0e9.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">梅飞</div>
				</div>
			</div>
		</li>
							
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_wrecking%20ball_5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">破坏球</div>
				</div>
			</div>
		</li>
		<li>
			<div>
				<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_zarya_8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png"
					class="img1">
				<div>
					<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg"
						class="img2">
					<div class="s1">查莉娅</div>
				</div>
			</div>
		</li>
	</ul>
	`
	document.getElementsByClassName("d4")[0].innerHTML = html2
}

function shuchu() {
	let html = `
				<ul class="u1">
					<li onclick="quanbu()">
						<div  class="u1d1">全部</div>
					</li>
					<li onclick="tank()">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg">
								<div class="dd">重装</div>
						
					
					</li>
					<li style="background-color: white;">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg">
						<div class="dd">输出</div>
						
						
					</li>
					<li onclick="zhiyuan()">
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg">
						<div class="dd">支援</div>
					</li>
				</ul>
				`
	document.getElementsByClassName("d2_1")[0].innerHTML = html
	let html2=`
		<ul>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_ashe_8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">艾什</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_bastion_4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">堡垒</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_cassidy_6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png"
						class="img1">
					<div>
						<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">卡西迪</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_echo_f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">回声</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_genji_4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">源氏</div>
					</div>
				</div>
			</li>
			
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_hanzo_aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png"
						class="img1">
					<div>
						<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">半藏</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_junkrat_037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">狂鼠</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_mei_1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">美</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_pharah_f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">法老之鹰</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_reaper_2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
							class="img2">
						<div class="s1">死神</div>
					</div>
				</div>
			</li>
			<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_sojourn_a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">索杰恩</div>
						</div>
					</div>
				</li>
				<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_soldier:%2076_20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">士兵：76</div>
						</div>
					</div>
				</li>
			
				<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_sombra_bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">黑影</div>
						</div>
					</div>
				</li>
			
				<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_symmetra_7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">秩序之光</div>
						</div>
					</div>
				</li>
				<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_torbj%C3%B6rn_1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">托比昂</div>
						</div>
					</div>
				</li>
				<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_tracer_a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">猎空</div>
						</div>
					</div>
				</li>
				
			<!-- </ul>
			<ul> -->
				<li>
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_widowmaker_a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg"
								class="img2">
							<div class="s1">黑百合</div>
						</div>
					</div>
				</li>
		</ul>
	`
	document.getElementsByClassName("d4")[0].innerHTML = html2
}

function zhiyuan() {
	let html = `
				<ul class="u1">
					<li onclick="quanbu()">
						<div  class="u1d1">全部</div>
					</li>
					<li onclick="tank()">
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Tank.svg">
								<div class="dd">重装</div>
						
					
					</li>
					<li onclick="shuchu()" >
						
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Damage.svg">
						<div class="dd">输出</div>
						
						
					</li>
					<li style="background-color: white;">
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg">
						<div class="dd">支援</div>
					</li>
				</ul>
				`
	document.getElementsByClassName("d2_1")[0].innerHTML = html
	let html2=`
		<ul>
			<li>
				<a href="hero.html" target="_blank">
					<div>
						<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_kiriko_088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png"
							class="img1">
						<div>
							<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
								class="img2">
							<div class="s1">雾子</div>
						</div>
					</div>
				</a>
			
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_ana_3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">安娜</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_baptiste_f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">巴蒂斯特</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_brigitte_48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">布丽吉塔</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_l%C3%BAcio_7fc54a1056e11892e1f5366fc15ad50e0e4b4691dedb58ee25da6ee853f3408e.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">卢西奥</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_mercy_2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png"
						class="img1">
					<div>
						<img src="	https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">天使</div>
					</div>
				</div>
			</li>
			
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_moira_000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">莫伊拉</div>
					</div>
				</div>
			</li>
			<li>
				<div>
					<img src="https://overwatch.nosdn.127.net/ow2heroes/heroes/images/overwatch_zenyatta_71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png"
						class="img1">
					<div>
						<img src="https://blz.nosdn.127.net/1/tm/overwatch/ow2heroes/Dark_Circle_Support.svg"
							class="img2">
						<div class="s1">禅雅塔</div>
					</div>
				</div>
			</li>
		</ul>
	`
	document.getElementsByClassName("d4")[0].innerHTML = html2
}

<?php
session_start();
?>

<html>
<head>

	<title>GenCalc | Calculator</title>
	<link rel="stylesheet" href="css/style.css" type="text/css"/>
	<link rel="stylesheet" href="css/fontello.css" type="text/css"/>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,500&display=swap" rel="stylesheet">
	
	<script type="text/javascript" src="js/calc.js"></script>

</head>
<body>

	<div id="conall">
		<?php require_once "main/menu.php"; ?>
		<div id="content">
			<div id="c-char">
				<div id="c-char-up">
					<div id="c-char-up-img-frame">
						<img id="c-char-up-img" src="">
					</div>
					<div id="c-char-up-stat-frame">
						<div class="c-char-up-stat-ele">
							<div class="c-char-up-stat-ele-name">Name</div><div id="c-char-up-stat-ele-name-val">
								<select id="c-char-up-stat-ele-name-select" onchange="character()">
									<option value="0">---</option>
									<option value="1">Amber</option>
									<option value="2">Barbara</option>
									<option value="3">Beidou</option>
									<option value="4">Bennett</option>
									<option value="5">Chongyun</option>
									<option value="6">Diluc</option>
									<option value="7">Fischl</option>
									<option value="8">Jean</option>
									<option value="9">Kaeya</option>
									<option value="10">Keqing</option>
									<option value="11">Klee</option>
									<option value="12">Lisa</option>
									<option value="13">Mona</option>
									<option value="14">Ningguang</option>
									<option value="16">Qiqi</option>
									<option value="29">Ganyu</option>
									<option value="31">Hu Tao</option>
								</select>
							</div>
						</div>
						<div class="c-char-up-stat-ele">
							<div class="c-char-up-stat-ele-name">Level</div> 
							<form method="post">
							<select id="c-char-up-stat-ele-level-select" onchange="characterlevel()">
								<option value="1">1</option>
								<option value="2">20</option>
								<option value="3">20+</option>
								<option value="4">40</option>
								<option value="5">40+</option>
								<option value="6">50</option>
								<option value="7">50+</option>
								<option value="8">60</option>
								<option value="9">60+</option>
								<option value="10">70</option>
								<option value="11">70+</option>
								<option value="12">80</option>
								<option value="13">80+</option>
								<option value="14">90</option>
							</select>
							</form>
						</div>
						<div class="c-char-up-stat-ele">
							<div class="c-char-up-stat-ele-name">Conste..</div>
							<input class="c-char-eq-skill-ele-val" type="number" value="0" min="0" max="6">
						</div>
					</div>
					<div class="c-f"></div>
				</div>
				<div id="c-char-eq">
					<div id="c-char-eq-skill-frame"> 
						<div class="c-char-eq-name">Skills:</div>
						<div class="c-char-eq-skill-ele">
							<div class="c-char-eq-skill-ele-name">Std</div>
							<input id="c-char-eq-skill-std" class="c-char-eq-skill-ele-val" type="number" value="1" min="1" max="15" onchange="characterlevel()">
						</div>
						<div class="c-char-eq-skill-ele">
							<div class="c-char-eq-skill-ele-name">Skill</div>
							<input id="c-char-eq-skill-skill" class="c-char-eq-skill-ele-val" type="number" value="1" min="1" max="15" onchange="characterlevel()">
						</div>
						<div class="c-char-eq-skill-ele">
							<div class="c-char-eq-skill-ele-name">Burst</div>
							<input id="c-char-eq-skill-burst" class="c-char-eq-skill-ele-val" type="number" value="1" min="1" max="15" onchange="characterlevel()">
						</div>
						<div class="c-f"></div>
					</div>
					<div id="c-char-eq-weap">
						<div>
							<div class="c-char-eq-name">Weapon:</div>
							<form method="post">
							<select id="c-char-eq-weap-select" onchange="weapon()"></select>
							<div class="c-char-eq-skill-ele">
								<div class="c-char-eq-skill-ele-name">Lvl</div>
								<select id="c-char-eq-weap-select-level" onchange="weapon()">
									<option value="1">1</option>
									<option value="2">20</option>
									<option value="3">20+</option>
									<option value="4">40</option>
									<option value="5">40+</option>
									<option value="6">50</option>
									<option value="7">50+</option>
									<option value="8">60</option>
									<option value="9">60+</option>
									<option value="10">70</option>
									<option value="11">70+</option>
									<option value="12">80</option>
									<option value="13">80+</option>
									<option value="14">90</option>
								</select>
							</div>
							<div class="c-char-eq-skill-ele">
								<div class="c-char-eq-skill-ele-name">Refine</div>
								<input class="c-char-eq-skill-ele-val" type="number" value="1" min="1" max="15">
							</div>
							</form>
						</div>
					</div>
				</div>
				<div id="c-char-stat">
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name-bas">HP:</div>
						<div id="c-char-stat_hp-base" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-char-stat-frame-splite">+</div>
						<div id="c-char-stat_hp-other" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-char-stat-frame-splite">=</div>
						<div id="c-char-stat_hp-score" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name-bas">ATK:</div>
						<div id="c-char-stat_atk-base" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-char-stat-frame-splite">+</div>
						<div id="c-char-stat_atk-other" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-char-stat-frame-splite">=</div>
						<div id="c-char-stat_atk-score" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name-bas">DEF:</div>
						<div id="c-char-stat_def-base" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-char-stat-frame-splite">+</div>
						<div id="c-char-stat_def-other" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-char-stat-frame-splite">=</div>
						<div id="c-char-stat_def-score" class="c-char-stat-frame-value-bas">0</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Elemental Mastery:</div>
						<div id="c-char-stat_Elemental" class="c-char-stat-frame-value">0</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">CRIT Rate:</div>
						<div id="c-char-stat_CRIT-Rate" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">CRIT Damage:</div>
						<div id="c-char-stat_CRIT-Damage" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Healing Bonus:</div>
						<div id="c-char-stat_Healing" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Incoming Healing Bonus:</div>
						<div id="c-char-stat_Healing-Income" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Energy Recharge:</div>
						<div id="c-char-stat_Energy" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">CD Reduction:</div>
						<div id="c-char-stat_CD" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Shield Strength:</div>
						<div id="c-char-stat_Shield" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Pyro DMG Bonus:</div>
						<div id="c-char-stat_Pyro-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Pyro RES Bonus:</div>
						<div id="c-char-stat_Pyro-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Hydro DMG Bonus:</div>
						<div id="c-char-stat_Hydro-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Hydro RES Bonus:</div>
						<div id="c-char-stat_Hydro-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Dendro DMG Bonus:</div>
						<div id="c-char-stat_Dendro-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Dendro RES Bonus:</div>
						<div id="c-char-stat_Dendro-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Electro DMG Bonus:</div>
						<div id="c-char-stat_Electro-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Electro RES Bonus:</div>
						<div id="c-char-stat_Electro-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Anemo DMG Bonus:</div>
						<div id="c-char-stat_Anemo-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Anemo RES Bonus:</div>
						<div id="c-char-stat_Anemo-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Cyro DMG Bonus:</div>
						<div id="c-char-stat_Cyro-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Cyro RES Bonus:</div>
						<div id="c-char-stat_Cryo-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Geo DMG Bonus:</div>
						<div id="c-char-stat_Geo-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Geo RES Bonus:</div>
						<div id="c-char-stat_Geo-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-empty"></div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Physical DMG Bonus:</div>
						<div id="c-char-stat_Phys-DMG" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
					<div class="c-char-stat-frame">
						<div class="c-char-stat-frame-name">Physical RES Bonus:</div>
						<div id="c-char-stat_Phys-RES" class="c-char-stat-frame-value">0%</div>
						<div class="c-f"></div>
					</div>
				</div>
			</div>
			<div id="c-r">
				<div id="c-r-art">
					<div style="margin:200px 100px;">Artifact... Comming Soon!</div>
				</div>
				<div class="c-f"></div>
				<div class="c-char-empty"></div>
				<div id="c-r-out">
					<div id="c-r-out-hitsetting"></div> <!-- Hit Setting -->
					<div id="c-r-out-classsetting"></div> <!-- Class Setting -->
					<div class="c-char-empty"></div>
					<div id="c-r-out-esetting"></div> <!-- E Setting -->
					<div id="c-r-out-qsetting"></div> <!-- Q Setting -->
					<div class="c-char-empty"></div>
					<div id="c-r-out-specialsetting"></div> <!-- Special Setting -->
				</div>
				<div id="c-ene">
					<p class="c-ene-text">Ustawienia obrażeń na przeciwnika:</p><input id="c-ene-check" type="checkbox" onchange="characterlevel()">
					<select id="c-ene-select-name" onchange="characterlevel()">
						<option value="1">Hilichurl</option>
					</select>
					<input id="c-ene-select-level" class="c-char-eq-skill-ele-val" type="number" value="1" min="1" max="90" onchange="characterlevel()">
				</div>
			</div>
			<div class="c-f"></div>
		</div>
		
		<?php require_once "main/footer.php"; ?>
	</div>
</body>
</html>
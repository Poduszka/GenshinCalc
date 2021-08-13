function character()
{
	window.Level = [1,20,20,40,40,50,50,60,60,70,70,80,80,90];
	window.EnemyLevel = 1;

	window.BaseWeapon = 0;
	window.BaseHP = 0;
	window.BaseHPPer = 0;
	window.BaseATK = 0;
	window.BaseATKPer = 0;
	window.BaseDEF = 0;
	window.BaseElemental = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseCritDMG = [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5];
	window.BaseCritRate = [0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05];
	window.BaseHealBonus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseIncomingHealBonus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseEnergy = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	window.BaseCD = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseShield = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BasePyroDMG = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseElectroDMG = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	window.Base1Hit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.Base2Hit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.Base3Hit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.Base4Hit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.Base5Hit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.Base6Hit = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseAim = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseAimChar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseFrostflake = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.BaseFrostflakeBloom = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	window.WeaponBaseATK = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.WeaponSubStatType = "";
	window.WeaponSubStat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.WeaponRefineType = "";
	window.WeaponRefine = [0,0,0,0,0,];
	window.WeaponRefineType2 = "";
	window.WeaponRefine2 = [0,0,0,0,0,];

	document.getElementById("c-r-out-esetting").innerHTML = '<div class="c-r-out-frame"><div class="c-r-out-name">Skill DMG</div><div id="c-char-stat_E-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_E-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div>';
	document.getElementById("c-r-out-qsetting").innerHTML = '<div class="c-r-out-frame"><div class="c-r-out-name">Burst DMG</div><div id="c-char-stat_Q-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_Q-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div>';
	document.getElementById("c-r-out-specialsetting").innerHTML = "";
	document.getElementById("c-r-out-classsetting").innerHTML  = "";



	window.chara = document.getElementById("c-char-up-stat-ele-name-select").value

	// ---------- Character ----------
	if(window.chara == "1") // Amber
	{
		document.getElementById("c-char-up-img").src = "resources/amber.png";
		
		window.BaseWeapon = 4;
		window.BaseHP = [793,2038,2630,3940,4361,5016,5578,6233,6654,7309,7730,8385,8806,8461];
		window.BaseATK = [19,48,62,93,103,118,131,147,157,172,182,198,208,223];
		window.BaseDEF = [50,129,167,250,277,318,354,396,422,464,491,532,559,601];
		window.BaseHPPer = [0,0,0,0,0.06,0.06,0.12,0.12,0.12,0.12,0.18,0.18,0.24,0.24];
	}
	else if(window.chara == "2") // Barbara
	{
		document.getElementById("c-char-up-img").src = "resources/barbara.png";
		
		window.BaseWeapon = 5;
		window.BaseHP = [821,2108,2721,4076,4512,5189,5770,6448,6884,7561,7996,8674,9110,9787];
		window.BaseATK = [13,34,44,66,73,84,94,105,112,123,130,141,148,159];
		window.BaseDEF = [56,144,186,279,308,355,394,441,470,517,546,593,623,669];
		window.BaseATKPer = [0,0,0,0,0.06,0.06,0.12,0.12,0.12,0.12,0.18,0.18,0.24,0.24];
	}
	else if(window.chara == "3") // Beidou
	{
		document.getElementById("c-char-up-img").src = "resources/beidou.png";
		
		window.BaseWeapon = 2;
		window.BaseHP = [1094,2811,3628,5435,6015,6919,7694,8597,9178,10081,10662,11565,12146,13050];
		window.BaseATK = [19,48,63,94,104,119,133,148,158,174,184,200,210,225];
		window.BaseDEF = [54,140,180,270,299,344,382,427,356,501,530,575,603,648];
		window.BaseElectroDMG = [0,0,0,0,0.06,0.06,0.12,0.12,0.12,0.12,0.18,0.18,0.24,0.24];
	}
	else if(window.chara == "4") // Bennett
	{
		document.getElementById("c-char-up-img").src = "resources/bennett.png";
		
		window.BaseWeapon = 1;
		window.BaseHP = [1039,2670,3447,5163,5715,6573,7309,8168,8719,9577,10129,10987,11539,12397];
		window.BaseATK = [16,41,53,80,88,101,113,126,134,148,156,169,178,191];
		window.BaseDEF = [65,166,214,321,356,409,455,508,542,596,630,684,718,771];
		window.BaseEnergy = [1,1,1,1,1.067,1.067,1.133,1.133,1.133,1.133,1.2,1.2,1.267,1.267];
	}
	else if(window.chara == "5") // Chongyun
	{
		document.getElementById("c-char-up-img").src = "resources/chongyun.png";
		
		window.BaseWeapon = 2;
		window.BaseHP = [921,2366,3054,4574,5063,5824,6475,7236,7725,8485,8974,9734,10223,10983];
		window.BaseATK = [19,48,62,93,103,118,131,147,157,172,182,198,208,223];
		window.BaseDEF = [54,140,180,270,299,344,382,427,456,501,530,575,603,648];
		window.BaseATKPer = [0,0,0,0,0.06,0.06,0.12,0.12,0.12,0.12,0.18,0.18,0.24,0.24];
	}
	else if(window.chara == "6") // Diluc
	{
		document.getElementById("c-char-up-img").src = "resources/diluc.png";
		
		window.BaseWeapon = 2;
		window.BaseHP = [1011,2621,3488,5219,5834,6712,7533,8421,9036,9932,10547,11453,12068,12981];
		window.BaseATK = [26,68,90,135,151,173,194,217,233,256,272,295,311,335];
		window.BaseDEF = [61,158,211,315,352,405,455,509,546,600,637,692,729,784];
		window.BaseCritRate = [0.05,0.05,0.05,0.05,0.098,0.098,0.146,0.146,0.146,0.146,0.194,0.194,0.242,0.242];
	}
	else if(window.chara == "7") // Fischl
	{
		document.getElementById("c-char-up-img").src = "resources/fischl.png";
		
		window.BaseWeapon = 5;
		window.BaseHP = [770,1979,2555,3827,4236,4872,5418,6054,6463,7099,7508,8144,8553,9189];
		window.BaseATK = [20,53,68,102,113,130,144,161,172,189,200,216,227,244];
		window.BaseDEF = [50,128,165,247,274,315,350,391,418,459,485,526,553,594];
		window.BaseATKPer = [0,0,0,0,0.06,0.06,0.12,0.12,0.12,0.12,0.18,0.18,0.24,0.24];
	}
	else if(window.chara == "8") // Jean
	{
		document.getElementById("c-char-up-img").src = "resources/jean.png";
		
		window.BaseWeapon = 1;
		window.BaseHP = [1144,2967,3948,5908,6605,7599,8528,9533,10230,11243,11940,12965,13662,14695];
		window.BaseATK = [19,48,64,96,108,124,139,155,166,183,194,211,222,239];
		window.BaseDEF = [60,155,206,309,345,397,446,499,535,588,624,678,715,769];
		window.BaseHealBonus = [0,0,0,0,0.055,0.055,0.111,0.111,0.111,0.111,0.166,0.166,0.222,0.222];
	}
	else if(window.chara == "9") // Kaeya
	{
		document.getElementById("c-char-up-img").src = "resources/kaeya.png";
		
		window.BaseWeapon = 1;
		window.BaseHP = [976,2506,3235,4846,5364,6170,6860,7666,8184,8989,9507,10312,10830,11636];
		window.BaseATK = [19,48,62,93,103,118,131,147,157,172,182,198,208,223];
		window.BaseDEF = [66,171,220,330,365,420,467,522,557,612,647,702,737,792];
		window.BaseEnergy = [1,1,1,1,1.067,1.067,1.133,1.133,1.133,1.133,1.2,1.2,1.267,1.267];
	}
	else if(window.chara == "10") // Keqing
	{
		document.getElementById("c-char-up-img").src = "resources/keqing.png";
		
		window.BaseWeapon = 1;
		window.BaseHP = [1020,2646,3521,5268,5889,6776,7604,8500,9121,10025,10647,11561,12182,13103];
		window.BaseATK = [25,65,87,130,145,167,187,209,225,247,262,285,300,323];
		window.BaseDEF = [62,161,215,321,359,413,464,519,556,612,649,705,743,799];
		window.BaseCritDMG = [0.5,0.5,0.5,0.5,0.596,0.596,0.692,0.692,0.692,0.692,0.788,0.788,0.884,0.884];
	}
	else if(window.chara == "11") // Klee
	{
		document.getElementById("c-char-up-img").src = "resources/klee.png";
		
		window.BaseWeapon = 5;
		window.BaseHP = [801,2077,2764,4136,4623,5319,5970,6673,7161,7870,8358,9076,9563,10287];
		window.BaseATK = [24,63,84,125,140,161,180,202,216,238,253,274,289,311];
		window.BaseDEF = [48,124,165,247,276,318,357,399,428,470,500,542,572,615];
		window.BasePyroDMG = [0,0,0,0,0.072,0.072,0.144,0.144,0.144,0.144,0.216,0.216,0.288,0.288];
	}
	else if(window.chara == "12") // Lisa
	{
		document.getElementById("c-char-up-img").src = "resources/lisa.png";
		
		window.BaseWeapon = 5;
		window.BaseHP = [802,2061,2661,3985,4411,5074,5642,6305,6731,7393,7818,8481,8907,9570];
		window.BaseATK = [19,50,64,96,107,123,136,153,163,179,189,205,215,232];
		window.BaseDEF = [48,123,159,239,264,304,338,378,403,443,468,508,534,573];
		window.BaseElemental = [0,0,0,0,24,24,48,48,48,48,72,72,96,96];
	}
	else if(window.chara == "13") // Mona
	{
		document.getElementById("c-char-up-img").src = "resources/mona.png";
		
		window.BaseWeapon = 5;
		window.BaseHP = [810,2102,2797,4185,4678,5383,6041,6752,7246,7964,8458,9184,9677,10409];
		window.BaseATK = [22,58,77,115,129,148,167,186,200,220,233,253,267,287];
		window.BaseDEF = [51,132,176,263,294,338,379,424,455,500,531,576,607,653];
		window.BaseEnergy = [1,1,1,1,1.08,1.08,1.16,1.16,1.16,1.16,1.24,1.24,1.32,1.32];
	}
	else if(window.chara == "14") // Ningguang
	{
		document.getElementById("c-char-up-img").src = "resources/ningguang.png";
		
		window.BaseWeapon = 5;
		window.BaseHP = [];
		window.BaseATK = [];
		window.BaseDEF = [];
		window.BaseEnergy = [];
	}
	else if(window.chara == "16") // Qiqi
	{
		document.getElementById("c-char-up-img").src = "resources/qiqi.png";
		
		window.BaseWeapon = 1;
		window.BaseHP = [963,2498,3323,4973,5559,6396,7178,8023,8610,9463,10050,10912,11499,12368];
		window.BaseATK = [22,58,77,115,129,148,167,186,200,220,233,253,267,287];
		window.BaseDEF = [72,186,248,371,415,477,535,598,642,706,749,814,857,922];
		window.BaseHealBonus = [0,0,0,0,0.055,0.055,0.111,0.111,0.111,0.111,0.166,0.166,0.222,0.222];
	}
	else if(window.chara == "29") // Ganyu
	{
		document.getElementById("c-char-up-img").src = "resources/ganyu.png";
		
		window.BaseWeapon = 4;
		window.BaseHP = [763,1978,2632,3939,4403,5066,5686,6355,6820,7495,7960,8643,9108,9797];
		window.BaseATK = [26,68,90,135,151,173,194,217,233,256,272,295,311,335];
		window.BaseDEF = [49,127,169,253,283,326,366,409,439,482,512,556,586,630];
		window.BaseCritDMG = [0.5,0.5,0.5,0.5,0.596,0.596,0.692,0.692,0.692,0.692,0.788,0.788,0.884,0.884];

		window.Base1Hit = [0.3173,0.3432,0.369,0.4059,0.4317,0.4613,0.5018,0.5424,0.583,0.6273,0.678,0.7377,0.7974,0.7974,0.857,0.9221];
		window.Base2Hit = [0.356,0.385,0.414,0.4554,0.4844,0.5175,0.563,0.6086,0.6541,0.7038,0.7607,0.8277,0.8946,0.9616,1.0346];
		window.Base3Hit = [0.4549,0.492,0.529,0.5819,0.6189,0.6613,0.7194,0.7776,0.8358,0.8993,0.972,1.0576,1.1431,1.2287,1.322];
		window.Base4Hit = window.Base3Hit;
		window.Base5Hit = [0.4825,0.5217,0.561,0.6171,0.6564,0.7013,0.763,0.8247,0.8864,0.9537,1.0308,1.1216,1.2123,1.303,1.4019];
		window.Base6Hit = [0.5762,0.6231,0.67,0.737,0.7839,0.8375,0.9112,0.9849,1.0586,1.139,1.2311,1.3395,1.4478,1.5561,1.6743];
		window.BaseAim = [0.4386,0.4743,0.51,0.561,0.5967,0.6375,0.6936,0.7497,0.8058,0.867,0.9282,0.9894,1.0506,1.1118,1.173];
		window.BaseAimChar = [1.24,1.333,1.426,1.55,1.643,1.736,1.86,1.984,2.108,2.232,2.356,2.48,2.635,2.79,2.945];
		window.BasePlunge = [0.5683,0.6145,0.6608,0.7269,0.7731,0.826,0.8987,0.9714,1.0441,1.1234,1.2027,1.282,1.3612,1.4405,1.5198];
		window.BasePlungeLow = [1.1363,1.2288,1.3213,1.4535,1.5459,1.6517,1.797,1.9423,2.0877,2.2462,2.4048,2.5634,2.7219,2.8805,3.039]
		window.BasePlungeHigh = [1.4193,1.5349,1.6504,1.8154,1.931,2.063,2.2445,2.4261,2.6076,2.8057,3.0037,3.2018,3.3998,3.5979,3.7959];
		// Spec STD
		window.BaseFrostflake = [1.28,1.376,1.472,1.60,1.696,1.792,1.92,2.048,2.176,2.304,2.432,2.56,2.72,2.88,3.04];
		window.BaseFrostflakeBloom = [2.176,2.3392,2.5024,2.72,2.8832,3.0464,3.264,3.4816,3.6992,3.9168,4.1344,4.352,4.624,4.896,5.168];
		// E
		window.BaseESkill = [1.32,1.419,1.518,1.65,1.749,1.848,1.98,2.112,2.244,2.376,2.508,2.64,2.805,2.97,3.135];
		// Q
		window.BaseQSkill = [0.7027,0.7554,0.8081,0.8784,0.9311,0.9838,1.0541,1.1244,1.1946,1.2649,1.3352,1.4054,1.4933,1.5811,1.669];
		
		document.getElementById("c-r-out-specialsetting").innerHTML = '<div class="c-r-out-frame"><div class="c-r-out-name">Frostflake Arrow</div><div id="c-char-stat_Frost-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_Frost-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div><div class="c-r-out-frame"><div class="c-r-out-name">Frostflake Bloom</div><div id="c-char-stat_FrostBloom-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_FrostBloom-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div>';

	}
	else if(window.chara == "31") // Hu Tao
	{
		document.getElementById("c-char-up-img").src = "resources/hutao.png";
		
		window.BaseWeapon = 3;
		window.BaseHP = [1211,3141,4179,6253,6990,8042,9026,10089,10826,11899,12637,13721,14459,15552];
		window.BaseATK = [8,21,29,43,48,55,62,69,74,81,86,94,99,106];
		window.BaseDEF = [68,177,235,352,394,453,508,568,610,670,712,773,815,876];
		window.BaseCritDMG = [0.5,0.5,0.5,0.5,0.596,0.596,0.692,0.692,0.692,0.692,0.788,0.788,0.884,0.884];

		window.Base1Hit = [0.4689,0.5008,0.5328,0.5754,0.6074,0.6447,0.6926,0.7406,0.7885,0.8365,0.8844,0.9324,0.9804,1.0283,1.0763];
		window.Base2Hit = [0.4825,0.5154,0.5483,0.5922,0.6251,0.6635,0.7128,0.7622,0.8115,0.8609,0.9102,0.9596,1.0089,1.0583,1.1076];
		window.Base3Hit = [0.6105,0.6521,0.6938,0.7493,0.7909,0.8394,0.9019,0.9643,1.0268,1.0892,1.1516,1.2141,1.2765,1.3389,1.4014];
		window.Base4Hit = [0.6564,0.7012,0.7459,0.8056,0.8503,0.9026,0.9697,1.0368,1.104,1.1711,1.2382,1.3054,1.3725,1.4396,1.5068];
		Base5Hit_first = [0.3327,0.3554,0.3781,0.4084,0.431,0.4575,0.4915,0.5256,0.5596,0.5936,0.6277,0.6617,0.6957,0.7298,0.7638];
		Base5Hit_second = [0.352,0.376,0.40,0.432,0.456,0.484,0.52,0.556,0.592,0.628,0.664,0.70,0.736,0.772,0.808];
		for(i=0; i <= 14; i++)
		{
			window.Base5Hit[i] = (+Base5Hit_first[i])+(+Base5Hit_second[i]);
		}
		window.Base6Hit = [0.8596,0.9182,0.9768,1.0549,1.1136,1.1819,1.2698,1.3578,1.4457,1.5336,1.6215,1.7094,1.7973,1.8852,1.9731];
		window.BaseCharged = [1.3596,1.4523,1.545,1.6686,1.7613,1.8695,2.0085,2.1476,2.2866,2.4257,2.5647,2.7038,2.8428,2.9819,3.1209];
		window.BasePlunge = [0.6542,0.6988,0.7434,0.8029,0.8475,0.8995,0.9664,1.0333,1.1002,1.1671,1.234,1.301,1.3679,1.4348,1.5017];
		window.BasePlungeLow = [1.3081,1.3973,1.4865,1.6054,1.6946,1.7986,1.9324,2.0662,2.2,2.3338,2.4676,2.6013,2.7351,2.8689,3.0027]
		window.BasePlungeHigh = [1.6339,1.7453,1.8567,2.0052,2.1166,2.2466,2.4137,2.5808,2.7479,2.915,3.0821,3.2492,3.4163,3.5834,3.7505];
		// E
		window.BaseEATKIn = [0.0384,0.0407,0.043,0.046,0.0483,0.0506,0.0536,0.0566,0.0596,0.0626,0.0656,0.0685,0.0715,0.0745,0.0775];
		window.BaseESkill = [0.64,0.688,0.736,0.80,0.848,0.896,0.96,1.024,1.088,1.152,1.216,1.28,1.36,1.44,1.52];
		// Q
		window.BaseQSkill = [3.0327,3.2143,3.3959,3.632,3.8136,3.9952,4.2313,4.4674,4.7034,4.9395,5.1756,5.4117,5.6478,5.8838,6.1199];
		window.BaseQSkillLow = [3.7909,4.0179,4.2449,4.54,4.767,4.994,5.2891,5.5842,5.8793,6.1744,6.4695,6.7646,7.0597,7.3548,7.6499];
		
		// Special
		innervalue = document.getElementById("c-r-out-qsetting").innerHTML
		document.getElementById("c-r-out-qsetting").innerHTML = innervalue+'<div class="c-r-out-frame"><div class="c-r-out-name">Burst LowHP DMG</div><div id="c-char-stat_BurstLow-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_BurstLow-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div>';
		document.getElementById("c-r-out-specialsetting").innerHTML = '<div class="c-r-out-frame"><div class="c-r-out-name">Special Setting</div><dfn style="color:#ec7d33">Paramita Papilio </dfn><input id="c-r-out-specialsetting-HuTaoPlus" type="checkbox" onchange="characterlevel()"></div><div class="c-f"></div>';
		
	}
	
	if(window.BaseWeapon == 1)
	{
		a = 1;
		var WeaponList5 = ["Primordial Jade Cutter", "Summit Shaper", "Skyward Blade", "Aquila Favonia"];
		var WeaponList4 = ["Festering Desire", "Sword of Descension", "The Flute", "The Black Sword", "The Alley Flash", "Sacrificial Sword", "Royal Longsword", "Prototype Rancour", "Lion's Roar", "Iron Sting", "Favonius Sword", "Blackcliff Longsword"];
		var WeaponList3 = ["Traveler's Handy Sword", "Skyrider Sword", "Harbinger of Dawn", "Fillet Blade", "Dark Iron Sword", "Cool Steel"];
		var WeaponList2 = ["Silver Sword"];
	}
	if(window.BaseWeapon == 2)
	{
		a = 2;
		var WeaponList5 = [];
		var WeaponList4 = [];
		var WeaponList3 = [];
		var WeaponList2 = [];
	}
	if(window.BaseWeapon == 3)
	{
		a = 3;
		var WeaponList5 = ["Staff of Homa", "Skyward Spine", "Primordial Jade Winged-Spear", "Vortex Vanquisher"];
		var WeaponList4 = ["Dragonspine Spear", "Royal Spear", "Favonius Lance", "Prototype Starglitter", "Lithic Spear", "Dragon's Bane", "Deathmatch", "Crescent Pike", "Blackcliff Pole"];
		var WeaponList3 = ["White Tassel", "Halberd", "Black Tassel"];
		var WeaponList2 = ["Iron Point"];


	}
	if(window.BaseWeapon == 4)
	{
		a = 4;
		var WeaponList5 = ["Elegy for the End","Amos' Bow","Skyward Harp"];
		var WeaponList4 = [];
		var WeaponList3 = [];
		var WeaponList2 = [];
		document.getElementById("c-r-out-classsetting").innerHTML  = '<div class="c-r-out-frame"><div class="c-r-out-name">Aimed Shot</div><div id="c-char-stat_Aim-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_Aim-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div><div class="c-r-out-frame"><div class="c-r-out-name">Aimed Charge</div><div id="c-char-stat_AimChar-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_AimChar-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div>';
	}
	if(window.BaseWeapon == 5)
	{
		a = 5;
		var WeaponList5 = [];
		var WeaponList4 = [];
		var WeaponList3 = [];
		var WeaponList2 = [];
	}
	res = "";
	// 5*
	y = WeaponList5.length;
	res = res + '<optgroup label="5*">';
	for( i = 0 ; i < y ; i++ )
	{
		res = res + '<option value="'+a+'.5.'+(1+i)+'">'+WeaponList5[i]+'</option>';
	}
	res = res + '</optgroup>';
	// 4*
	y = WeaponList4.length;
	res = res + '<optgroup label="4*">';
	for( i = 0 ; i < y ; i++ )
	{
		res = res + '<option value="'+a+'.4.'+(1+i)+'">'+WeaponList4[i]+'</option>';
	}
	res = res + '</optgroup>';
	// 3*
	y = WeaponList3.length;
	res = res + '<optgroup label="3*">';
	for( i = 0 ; i < y ; i++ )
	{
		res = res + '<option value="'+a+'.3.'+(1+i)+'">'+WeaponList3[i]+'</option>';
	}
	res = res + '</optgroup>';
	y = WeaponList2.length;
	res = res + '<optgroup label="2*">';
	for( i = 0 ; i < y ; i++ )
	{
		res = res + '<option value="'+a+'.2.'+(1+i)+'">'+WeaponList2[i]+'</option>';
	}
	res = res + '</optgroup>';
	document.getElementById("c-char-eq-weap-select").innerHTML = res;
	
	weapon();
}

function weapon()
{
	window.WeaponBaseATK = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.WeaponSubStatType = "";
	window.WeaponSubStat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	window.WeaponRefineType = "";
	window.WeaponRefine = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	var weap = document.getElementById("c-char-eq-weap-select").value

	// ==== Sword ====
	if(weap == "1.5.1") // Primordial Jade Cutter
	{
		window.WeaponBaseATK = [44,110,141,210,241,275,307,341,373,408,439,475,506,542];
		window.WeaponSubStatType = "CRIT Rate%";
		window.WeaponSubStat = [0.096,0.17,0.17,0.247,0.247,0.286,0.286,0.325,0.325,0.363,0.363,0.402,0.402,0.441];
		window.WeaponRefineType = "HP%";
		window.WeaponRefine = [0.2,0.25,0.3,0.35,0.4];
	}
	else if(weap == "1.5.2") // Summit Shaper
	{
		window.WeaponBaseATK = [46,122,153,235,266,308,340,382,414,457,488,532,563,608];
		window.WeaponSubStatType = "ATK%";
		window.WeaponSubStat = [0.108,0.191,0.191,0.278,0.278,0.322,0.322,0.365,0.365,0.409,0.409,0.453,0.453,0.496];
	}
	// ==== Claymore ====
	// ==== Polearm 5* ====
	else if(weap == "3.5.1") // Staff of Homa
	{
		window.WeaponBaseATK = [46,122,153,235,266,308,340,382,414,457,488,532,563,608];
		window.WeaponSubStatType = "CRIT DMG%";
		window.WeaponSubStat = [0.144,0.254,0.254,0.371,0.371,0.429,0.429,0.487,0.487,0.545,0.545,0.603,0.603,0.662];
		window.WeaponRefineType = "HP%";
		window.WeaponRefine = [0.2,0.25,0.3,0.35,0.4];
	}
	else if(weap == "3.5.2") // Skyward Spine
	{
		window.WeaponBaseATK = [48,133,164,261,292,341,373,423,455,506,537,590,621,674];
		window.WeaponSubStatType = "Energy Recharge%";
		window.WeaponSubStat = [0.08,0.141,0.141,0.206,0.206,0.238,0.238,0.271,0.271,0.303,0.303,0.335,0.335,0.368];
		window.WeaponRefineType = "CRIT Rate%";
		window.WeaponRefine = [0.08,0.1,0.12,0.14,0.16];
	}
	else if(weap == "3.5.3") // Primordial Jade Winged-Spear
	{
		window.WeaponBaseATK = [48,133,164,261,292,341,373,423,455,506,537,590,621,674];
		window.WeaponSubStatType = "CRIT Rate%";
		window.WeaponSubStat = [0.048,0.085,0.085,0.124,0.124,0.143,0.143,0.162,0.162,0.182,0.182,0.201,0.201,0.221];
	}
	else if(weap == "3.5.4") // Vortex Vanquisher
	{
		window.WeaponBaseATK = [46,122,153,235,266,308,340,382,414,457,488,532,563,608];
		window.WeaponSubStatType = "ATK%";
		window.WeaponSubStat = [0.108,0.191,0.191,0.278,0.278,0.322,0.322,0.365,0.365,0.409,0.409,0.453,0.453,0.496];
	}
	// Polearm 4*
	else if(weap == "3.4.1") // Dragonspine Spear
	{
		window.WeaponBaseATK = [41,99,125,184,210,238,264,293,319,347,373,401,427,454];
		window.WeaponSubStatType = "Phys DMG%";
		window.WeaponSubStat = [0.15,0.265,0.265,0.387,0.387,0.447,0.447,0.508,0.508,0.568,0.568,0.629,0.629,0.69];
	}
	else if(weap == "3.4.2") // Royal Spear
	{
		window.WeaponBaseATK = [44,119,144,226,252,293,319,361,387,429,455,497,523,565];
		window.WeaponSubStatType = "ATK%";
		window.WeaponSubStat = [0.06,0.106,0.106,0.155,0.155,0.179,0.179,0.203,0.203,0.227,0.227,0.251,0.251,0.276];
	}
	else if(weap == "3.4.3") // Favonius Lance
	{
		window.WeaponBaseATK = [44,119,144,226,252,293,319,361,387,429,455,497,523,565];
		window.WeaponSubStatType = "Energy Recharge%";
		window.WeaponSubStat = [0.067,0.118,0.118,0.172,0.172,0.199,0.199,0.226,0.226,0.252,0.252,0.279,0.279,0.306];
	}
	else if(weap == "3.4.4") // Prototype Starglitter
	{
		window.WeaponBaseATK = [42,109,135,205,231,266,292,327,353,388,414,449,475,510];
		window.WeaponSubStatType = "Energy Recharge%";
		window.WeaponSubStat = [0.1,0.177,0.177,0.258,0.258,0.298,0.298,0.338,0.338,0.379,0.379,0.419,0.419,0.459];
	}
	// Polearm 3*
	else if(weap == "3.3.1") // White Tassel
	{
		window.WeaponBaseATK = [39,94,113,169,189,216,236,263,282,309,329,355,375,401];
		window.WeaponSubStatType = "CRIT Rate%";
		window.WeaponSubStat = [0.051,0.09,0.09,0.131,0.131,0.152,0.152,0.173,0.173,0.193,0.193,0.214,0.241,0.234];
		window.WeaponRefineType = "Normal Attack DMG%";
		window.WeaponRefine = [0.24,0.3,0.36,0.42,0.48];
	}
	else if(weap == "3.3.2") // Halberd
	{
		window.WeaponBaseATK = [40,102,121,187,207,239,259,292,311,344,363,396,415,448];
		window.WeaponSubStatType = "ATK%";
		window.WeaponSubStat = [0.051,0.09,0.09,0.131,0.131,0.152,0.152,0.173,0.173,0.193,0.193,0.214,0.241,0.234];
	}
	else if(weap == "3.3.3") // Black Tassel
	{
		window.WeaponBaseATK = [38,86,105,151,171,193,212,234,253,274,294,314,334,354];
		window.WeaponSubStatType = "HP%";
		window.WeaponSubStat = [0.102,0.18,0.18,0.263,0.263,0.304,0.304,0.346,0.346,0.387,0.387,0.428,0.428,0.469];
	}
	// Polearm 2*
	else if(weap == "3.2.1") // Iron Point
	{
		window.WeaponBaseATK = [33,80,91,139,151,174,186,209,220,243];
	}
	// ==== Bow ====
	else if(weap == "4.5.2") // Amos’ Bow
	{
		window.WeaponBaseATK = [46,122,153,235,266,308,340,382,414,457,488,532,563,608];
		window.WeaponSubStatType = "ATK%";
		window.WeaponSubStat = [0.108,0.191,0.191,0.278,0.278,0.322,0.322,0.365,0.365,0.409,0.409,0.453,0.453,0.496];
		window.WeaponRefineType = "Normal Attack DMG%";
		window.WeaponRefine = [0.12,0.15,0.18,0.21,0.24];
		window.WeaponRefineType2 = "Charged Attack DMG%";
		window.WeaponRefine2 = [0.12,0.15,0.18,0.21,0.24];
	}
	else if(weap == "4.5.3") // Skyward Harp
	{
		window.WeaponBaseATK = [48,133,164,261,292,341,373,423,455,506,537,590,621,674];
		window.WeaponSubStatType = "CRIT Rate%";
		window.WeaponSubStat = [0.048,0.085,0.085,0.124,0.124,0.143,0.143,0.162,0.162,0.182,0.182,0.201,0.201,0.221];
		window.WeaponRefineType = "CRIT DMG%";
		window.WeaponRefine = [0.2,0.25,0.3,0.35,0.4];
	}
	// ==== Catalyst ====
	characterlevel();
}

function enemyselector()
{
	window.BaseenemyRES = 0;

	SelectNameVal = document.getElementById("c-ene-select-name").value;
	if(document.getElementById("c-ene-check").checked == true)
	{
		if(SelectNameVal == "1") // Hilichurl
		{
			window.BaseenemyRES = 0.9;
		}
		window.EnemyLevel = document.getElementById("c-ene-select-level").value
	}
	
}

function characterlevel()
{
	// Wartości
	wBaseHP = 0;
	wOtherHP = 0;
	wScoreHP = 0;
	wBaseATK = 0;

	WeaponHP = 0;
	WeaponATK = 0;
	WeaponDEF = 0;
	WeaponCritRate = 0;
	WeaponCritDamage = 0;

	ATKPer = 0;
	wFlatATK = 0;

	DEFMulti = 1;
	RESMulti = 1;

	HuTaoDMGEPlus = 0;

	x = document.getElementById("c-char-up-stat-ele-level-select").value;
	x = (+x)-1;
	y = document.getElementById("c-char-eq-weap-select-level").value;
	y = (+y)-1;
	std = document.getElementById("c-char-eq-skill-std").value;
	std = (+std)-1;
	skill = document.getElementById("c-char-eq-skill-skill").value;
	skill = (+skill)-1;
	burst = document.getElementById("c-char-eq-skill-burst").value;
	burst = (+burst)-1;

	// Podstawowe obliczenia
	if(window.WeaponSubStatType == "HP%") { WeaponHP = (+window.WeaponSubStat[y]); }
	else if(window.WeaponSubStatType == "ATK%") { WeaponATK = (+window.WeaponSubStat[y]); }
	else if(window.WeaponSubStatType == "DEF%") { WeaponDEF = (+window.WeaponSubStat[y]); }
	else if(window.WeaponSubStatType == "CRIT Rate%") { WeaponCritRate = (+window.WeaponSubStat[y]); }
	else if(window.WeaponSubStatType == "CRIT DMG%") { WeaponCritDamage = (+window.WeaponSubStat[y]); }

	// Dane do obliczeń końcowych
	
	
	
	if(document.getElementById("c-ene-check").checked == true)
	{
		SelectNameVal = document.getElementById("c-ene-select-name").value;
		if(SelectNameVal == "1") // Hilichurl
		{
			BaseenemyRES = 0.9;
		}
		
		EnemyLevel = document.getElementById("c-ene-select-level").value;
		DEFMulti = ((+window.Level[x])+100)/((+window.Level[x])+(+EnemyLevel)+200);
		RESMulti = BaseenemyRES;
	}

	// HP WeaponCritDamage
	wBaseHP = (+window.BaseHP[x]);
	wOtherHP = (wBaseHP*(1+WeaponHP)-wBaseHP);
	wOtherHP = Math.round(wOtherHP);
	wScoreHP = wBaseHP+wOtherHP;
	wScoreHP = Math.round(wScoreHP);
	document.getElementById("c-char-stat_hp-base").innerHTML = wBaseHP;
	document.getElementById("c-char-stat_hp-other").innerHTML = wOtherHP;
	document.getElementById("c-char-stat_hp-score").innerHTML = wScoreHP;

	// ATK
	ATKPer = WeaponATK;

	wBaseATK = (+window.BaseATK[x])+(+window.WeaponBaseATK[y]);
	wOtherATK = wBaseATK*(1+ATKPer)+wFlatATK;
	wOtherATK = wOtherATK-wBaseATK;
	wOtherATK = Math.round(wOtherATK);
	wScoreATK = wBaseATK+wOtherATK;
	wScoreATK = Math.round(wScoreATK);
	document.getElementById("c-char-stat_atk-base").innerHTML = wBaseATK;
	document.getElementById("c-char-stat_atk-other").innerHTML = wOtherATK;
	document.getElementById("c-char-stat_atk-score").innerHTML = wScoreATK;

	// DEF
	wBaseDEF = (+window.BaseDEF[x]);
	wOtherDEF = (wBaseDEF*(1+WeaponDEF)-wBaseDEF);
	wOtherDEF = Math.round(wOtherDEF);
	wScoreDEF = wBaseDEF+wOtherDEF;
	wScoreDEF = Math.round(wScoreDEF);
	document.getElementById("c-char-stat_def-base").innerHTML = wBaseDEF;
	document.getElementById("c-char-stat_def-other").innerHTML = wOtherDEF;
	document.getElementById("c-char-stat_def-score").innerHTML = wScoreDEF;

	// Elemental Mastery
	wScoreEle = (+window.BaseElemental[x]);
	document.getElementById("c-char-stat_Elemental").innerHTML = wScoreEle;

	// CRIT RATE%
	wScoreCrit_Rate = ((+window.BaseCritRate[x])*WeaponCritRate)*100;
	wScoreCrit_Rate = Math.round(wScoreCrit_Rate*10)/10;
	document.getElementById("c-char-stat_CRIT-Rate").innerHTML = wScoreCrit_Rate+"%";

	// CRIT DMG%
	wNextCrit_DMG = ((+window.BaseCritDMG[x])+WeaponCritDamage);
	wScoreCrit_DMG = wNextCrit_DMG*100;
	wScoreCrit_DMG = Math.round(wScoreCrit_DMG*10)/10;
	document.getElementById("c-char-stat_CRIT-Damage").innerHTML = wScoreCrit_DMG+"%";

	// Healing Bonus
	wScoreHeal = (+window.BaseHealBonus[x])*100;
	wScoreHeal = Math.round(wScoreHeal*10)/10;
	document.getElementById("c-char-stat_Healing").innerHTML = wScoreHeal+"%";

	// Incoming Healing Bonus:
	wScoreIncomingHealBonus = (+window.BaseIncomingHealBonus[x])*100;
	wScoreIncomingHealBonus = Math.round(wScoreIncomingHealBonus*10)/10;
	document.getElementById("c-char-stat_Healing-Income").innerHTML = wScoreIncomingHealBonus+"%";

	// Energy Recharge
	wScoreEnergy = (+window.BaseEnergy[x])*100;
	wScoreEnergy = Math.round(wScoreEnergy*10)/10;
	document.getElementById("c-char-stat_Energy").innerHTML = wScoreEnergy+"%";

	// CD

	// Shield

	// Pyro DMG window.BasePyroDMG
	wScorePyroDMG = (+window.BasePyroDMG[x])*100;
	wScorePyroDMG = Math.round(wScorePyroDMG*10)/10;
	document.getElementById("c-char-stat_Pyro-DMG").innerHTML = wScorePyroDMG+"%";

	// Pyro RES

	// Hydro DMG

	// Hydro RES

	// Dendro DMG

	// Dendro RES

	// Electro DMG
	wScoreElectroDMG = (+window.BaseElectroDMG[x])*100;
	wScoreElectroDMG = Math.round(wScoreElectroDMG*10)/10;
	document.getElementById("c-char-stat_Electro-DMG").innerHTML = wScoreElectroDMG+"%";

	// Electro RES
	
	// Anemo DMG

	// Anemo RES

	// Cyro DMG

	// Cyro RES
	
	// Geo DMG

	// Geo RES

	// Phys DMG

	// Phys RES

	///////// Specjalne

	// Hu tao DMG+ E
	if(window.chara == "31")
	{
		if(document.getElementById("c-r-out-specialsetting-HuTaoPlus").checked == true)
		{
			HuTaoDMGEPlus = (wScoreHP*window.BaseEATKIn[skill])/100;
			wScoreATK = wBaseATK*(1+(ATKPer+HuTaoDMGEPlus))+wFlatATK;
		}
	}
	

	/////////
	// Hit
	HitNumber = [window.Base1Hit[std],window.Base2Hit[std],window.Base3Hit[std],window.Base4Hit[std],window.Base5Hit[std],window.Base6Hit[std]];
	InnerNumber = ["1","2","3","4","5","6"];
	drawhit = "";
	for(i=0; i < 6; i++)
	{
		drawhit = drawhit+'<div class="c-r-out-frame"><div class="c-r-out-name">'+InnerNumber[i]+'-Hit DMG</div><div id="c-char-stat_'+InnerNumber[i]+'-Hit" class="c-r-out-val-std">0</div><div id="c-char-stat_'+InnerNumber[i]+'-HitCrit" class="c-r-out-val-crit">0</div><div class="c-f"></div></div>';
	}
	document.getElementById('c-r-out-hitsetting').innerHTML = drawhit;
	for(i=0; i < 6; i++)
	{
		Score = wScoreATK*(+HitNumber[i])*DEFMulti*RESMulti;
		ScoreCrit = ((wScoreATK*(+HitNumber[i]))*(1+wNextCrit_DMG))*DEFMulti*RESMulti;
		Score = Math.round(Score);
		ScoreCrit = Math.round(ScoreCrit);
		document.getElementById('c-char-stat_'+InnerNumber[i]+'-Hit').innerHTML = Score;
		document.getElementById('c-char-stat_'+InnerNumber[i]+'-HitCrit').innerHTML = ScoreCrit;
	}

	if(window.BaseWeapon == 4)
	{
		// Aimed Shot
		Skillname = "Aim";
		Score = wScoreATK*(+window.BaseAim[std])*DEFMulti*RESMulti;
		ScoreCrit = (wScoreATK*(+window.BaseAim[std]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
		Score = Math.round(Score);
		ScoreCrit = Math.round(ScoreCrit);
		document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
		document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;
		// Aimed Charge Shot
		Skillname = "AimChar";
		Score = wScoreATK*(+window.BaseAimChar[std])*DEFMulti*RESMulti;
		ScoreCrit = (wScoreATK*(+window.BaseAimChar[std]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
		Score = Math.round(Score);
		ScoreCrit = Math.round(ScoreCrit);
		document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
		document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;
	}
	// E
	Skillname = "E";
	Score = wScoreATK*(+window.BaseESkill[skill])*DEFMulti*RESMulti;
	ScoreCrit = (wScoreATK*(+window.BaseESkill[skill]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
	Score = Math.round(Score);
	ScoreCrit = Math.round(ScoreCrit);
	document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
	document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;

	// Q
	Skillname = "Q";
	Score = wScoreATK*(+window.BaseQSkill[burst])*DEFMulti*RESMulti;
	ScoreCrit = (wScoreATK*(+window.BaseQSkill[burst]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
	Score = Math.round(Score);
	ScoreCrit = Math.round(ScoreCrit);
	document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
	document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;

	if(window.chara == "29") // Ganyu
	{
		
		// Frostflake
		Skillname = "Frost";
		Score = wScoreATK*(+window.BaseFrostflake[std])*DEFMulti*RESMulti;
		ScoreCrit = (wScoreATK*(+window.BaseFrostflake[std]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
		Score = Math.round(Score);
		ScoreCrit = Math.round(ScoreCrit);
		document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
		document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;

		// Frostflake Bloom
		Skillname = "FrostBloom";
		Score = wScoreATK*(+window.BaseFrostflakeBloom[std])*DEFMulti*RESMulti;
		ScoreCrit = (wScoreATK*(+window.BaseFrostflakeBloom[std]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
		Score = Math.round(Score);
		ScoreCrit = Math.round(ScoreCrit);
		document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
		document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;
	}
	if(window.chara == "31") // Hu Tao
	{
		// Burst Low
		Skillname = "BurstLow";
		Score = wScoreATK*(+window.BaseQSkillLow[std])*DEFMulti*RESMulti;
		ScoreCrit = (wScoreATK*(+window.BaseQSkillLow[std]))*(1+wNextCrit_DMG)*DEFMulti*RESMulti;
		Score = Math.round(Score);
		ScoreCrit = Math.round(ScoreCrit);
		document.getElementById('c-char-stat_'+Skillname+'-Hit').innerHTML = Score;
		document.getElementById('c-char-stat_'+Skillname+'-HitCrit').innerHTML = ScoreCrit;
	}
}
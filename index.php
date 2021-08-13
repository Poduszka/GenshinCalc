<?php
session_start();
?>

<html>
<head>

	<title>GenCalc | Home</title>
	<link rel="stylesheet" href="css/style.css" type="text/css"/>
	<link rel="stylesheet" href="css/fontello.css" type="text/css"/>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,500&display=swap" rel="stylesheet">

</head>
<body>

	<div id="conall">
		<?php require_once "main/menu.php"; ?>
		<div id="content">
			
			<?php if(empty($_SESSION['user'])) : ?>
			<!-- ========== Niezalogowany ========== -->
			
			<!-- Sesja Logowania -->
			
			<div id="con-log-frame">
				<div id="con-log">
					<div id="con-log-title">LOG IN</div>
					<div class="con-log-con">
						<form action="main/account/login.php" method="post">
							<input type="text" class="intext-log" placeholder="Login" name="login" minlength="6" maxlength="20" required><br>
							<input type="password" class="intext-log" placeholder="Password" name="password" minlength="6" maxlength="20" required><br>
							<div class="con-log-error-frame">
								<?php if(!empty($_SESSION['elog'])) if($_SESSION['elog']=="ELOG_01") : ?>
								<div style="color:red;" class="con-log-error">Błąd, nazwa użytkownika lub hasło jest nieprawidłowe.</div>
								<?php endif; ?>
							</div>
							<button type="submit" class="sub-log-in">Log In</button>
						</form>
					</div>
				</div>
				<div id="con-reg">
					<div id="con-reg-title">SIGN UP</div>
					<div class="con-log-con">
						<form action="main/account/signup.php" method="post">
							<input type="text" class="intext-log" placeholder="Login" name="login" minlength="6" maxlength="20" required><br>
							<input type="password" class="intext-log" placeholder="Password" name="password" minlength="6" maxlength="20" required><br>
							<div class="con-log-error-frame">
								<?php if(!empty($_SESSION['elog'])) if($_SESSION['elog']=="ELOG_02") : ?>
								<div style="color:red;" class="con-log-error">Błąd, taki użytkownik jest już zajęty.</div>
								<?php elseif($_SESSION['elog']=="ELOG_03") : ?>
								<div style="color:green;" class="con-log-error">Konto zostało utworzone pomyślnie.</div>
								<?php endif; ?>
							</div>
							<button type="submit" class="sub-log-reg">Sign Up</button>
						</form>
					</div>
				</div>
				<div class="c-f"></div>
			</div>
			
			<!-- Informacje -->
			
			<div id="con-inf">
				<div id="con-inf-title">Ułatw sobie grę!</div>
				<div class="con-inf-obj">
					<div class="con-inf-obj-img"><img src="csa" class="con-inf-obj-img-obj"></div>
					<div class="con-inf-obj-text-frame">
						<div class="con-inf-obj-text-title">Szybko podliczaj swój DMG!</div>
						<div class="con-inf-obj-text-text">
						Rozwinięty i szybki kalkulator, który potrafi podliczyć wszystkie twoje najważniejsze parametry. Teraz nie musisz marnować czasu i możesz skupić się na grze.<br><br>
						Funkcja odróżniania żywiołów ( Physical, <dfn style="color:#00ffaa">Anemo</dfn>, <dfn style="color:#ffc558">Geo</dfn>, <dfn style="color:#ec7d33">Pyro</dfn>, <dfn style="color:#4542ff">Hydro</dfn>, <dfn style="color:#ff52ff">Electro</dfn>, <dfn style="color:#80d0ff">Cryo</dfn> ) przez co kalkulator jest czytelniejszy i łatwiejszy w obsłudze.
						</div>
					</div>
				</div>
				<div class="con-inf-obj">
					<div class="con-inf-obj-text-frame">
						<div class="con-inf-obj-text-title">Twoje artefakty w kolekcji!</div>
						<div class="con-inf-obj-text-text">
						Dodajesz je tylko raz i zakładasz gdzie chcesz i kiedy chcesz. Dość ciągłego i żmudnego powtarzania tego samego. My zapiszemy twoje artefakty a ty masz więcej czasu na zdobywanie mocniejszej kolekcji!<br><br>
						Łatwe dodawanie parametrów, aplikacja zna i przewiduje możliwości twoich artefaktów.
						</div>
					</div>
					<div class="con-inf-obj-img"><img src="csa" class="con-inf-obj-img-obj"></div>
				</div>
				<div class="con-inf-obj">
					<div class="con-inf-obj-img"><img src="csa" class="con-inf-obj-img-obj"></div>
					<div class="con-inf-obj-text-frame">
						<div class="con-inf-obj-text-title">Podsumowanie twoich losowań!</div>
						<div class="con-inf-obj-text-text">
						Twoje wszystkie losy poukładane za jednym kliknięciem! Czytelna, z ładnym, nowoczesnym design'em tabelka. Wygodna i szybka w praktyce.<br><br>
						Możliwość sortowania tak by widziesz to czego ty chcesz i skupić się na najważniejszym!
						</div>
					</div>
				</div>
				
			</div>
				
			<?php else : ?>
			
			<!-- ========== Zalogowany ========== -->
			
			<div id="cona-title">Witaj w głównym panelu aplikacji <dfn style="weight:600;"><?=$_SESSION['user']?></dfn>.</div>
			<div class="cona-app"><a href="calc.php" class="dec-a"><div class="cona-app-inframe">
				<div class="cona-app-img-frame"><img src="csa" class="cona-app-img-obj"></div>
				<div class="cona-app-text-frame">
					<div class="cona-app-text-title">Kalkulator DMG</div>
					<div class="cona-app-text-text">cos</div>
				</div>
			</div></div></a>
			<div class="cona-app"><a href="artifact.php" class="dec-a"><div class="cona-app-inframe">
				<div class="cona-app-img-frame"><img src="csa" class="cona-app-img-obj"></div>
				<div class="cona-app-text-frame">
					<div class="cona-app-text-title">Twoje Artefakty</div>
					<div class="cona-app-text-text">cos</div>
				</div>
			</div></div></a>
			<div class="cona-app"><a href="wish.php" class="dec-a"><div class="cona-app-inframe">
				<div class="cona-app-img-frame"><img src="csa" class="cona-app-img-obj"></div>
				<div class="cona-app-text-frame">
					<div class="cona-app-text-title">Twoje Wishe</div>
					<div class="cona-app-text-text">cos</div>
				</div>
			</div></div></a>
			<?php endif; ?>
			
		</div>
		<?php require_once "main/footer.php"; ?>
	</div>
</body>
<?php unset($_SESSION['elog']); ?>
</html>
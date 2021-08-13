<?php
session_start();
?>

<html>
<head>

	<title>GenCalc | Wish</title>
	<link rel="stylesheet" href="css/style.css" type="text/css"/>
	<link rel="stylesheet" href="css/fontello.css" type="text/css"/>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,500&display=swap" rel="stylesheet">

</head>
<body>

	<div id="conall">
		<?php require_once "main/menu.php"; ?>
		<div id="content">
			<div id="w-title">Tabelka wish'y użytkownika <dfn style="font-weight:600;"><?php echo $_SESSION['user']; ?></div>
			
			<div id="w-menu">
				<a href="?tab=standard" class="dec-a"><div class="w-menu-button">Standard</div></a>
				<a href="?tab=evchar" class="dec-a"><div class="w-menu-button">Event Character</div></a>
				<a href="?tab=evweap" class="dec-a"><div class="w-menu-button">Event Weapon</div></a>
				<a href="?tab=novice" class="dec-a"><div class="w-menu-button">Novice</div></a>
				<div class="c-f"></div>
			</div>
			
			<div id="w-tab">
				<div class="w-tab-tab-title">
					<div class="w-tab-tab" style="width:50;">Nr.</div>
					<div class="w-tab-tab" style="width:70;">Poziom</div>
					<div class="w-tab-tab" style="width:120;">Kategoria</div>
					<div class="w-tab-tab" style="width:200;">Nazwa</div>
					<div class="w-tab-tab" style="width:60;">Pity 4*</div>
					<div class="w-tab-tab" style="width:60;">Pity 5*</div>
					<div class="w-tab-tab" style="width:220;">Date</div>
					<div class="c-f"></div>
				</div>
				<?php 
					require_once "main/account/db.php";
					$connect = mysqli_connect($host, $user, $password);
					$dat = mysqli_select_db($connect, $database);
					
					$user = $_SESSION['user'];
					
					$userid = mysqli_query($connect, "SELECT `UID` FROM `accounts` WHERE `Login`='$user'");
					$idrow = mysqli_fetch_assoc($userid);
					$cuserid = $idrow['UID'];
					
					if(empty($_GET['tab'])) $_GET['tab'] = 'standard';
					
					if( $_GET['tab'] == 'standard' )
					{
						$wynik = mysqli_query($connect, "SELECT * FROM `wish` WHERE `IDuser`='$cuserid' AND `IDtab`='1'");
					}
					elseif( $_GET['tab'] == 'evchar' )
					{
						$wynik = mysqli_query($connect, "SELECT * FROM `wish` WHERE `IDuser`='$cuserid' AND `IDtab`='2'");
					}
					elseif( $_GET['tab'] == 'evweap' )
					{
						$wynik = mysqli_query($connect, "SELECT * FROM `wish` WHERE `IDuser`='$cuserid' AND `IDtab`='3'");
					}
					elseif( $_GET['tab'] == 'novice' )
					{
						$wynik = mysqli_query($connect, "SELECT * FROM `wish` WHERE `IDuser`='$cuserid' AND `IDtab`='4'");
					}
					
					if(empty($wynik))
					{
						echo 'error';
					}
					
					$ilosc = mysqli_num_rows($wynik);
					
					if ($ilosc >= 1)
					{
						for ($i = 1; $i <= $ilosc; $i++)
						{
							$row = mysqli_fetch_assoc($wynik);
							$Nr = $row['Nr.'];
							$Level = $row['Level'];
							$Category = $row['Category'];
							$Name = $row['Name'];
							$Pity4 = $row['Pity 4*'];
							$Pity5 = $row['Pity 5*'];
							$Date = $row['Date'];
							
							$wNr = 'class="w-tab-tab" style="width:50;"';
							$wLe = 'class="w-tab-tab" style="width:70;"';
							$wCa = 'class="w-tab-tab" style="width:120;"';
							$wNa = 'class="w-tab-tab" style="width:200;"';
							$wP4 = 'class="w-tab-tab" style="width:60;"';
							$wP5 = 'class="w-tab-tab" style="width:60;"';
							$wDa = 'class="w-tab-tab" style="width:220;"';
							
							$c = '<div class="c-f"></div>';
							$ctab = "<div $wNr>$Nr</div>
							<div $wLe>$Level*</div>
							<div $wCa>$Category</div>
							<div $wNa>$Name</div>
							<div $wP4>$Pity4</div>
							<div $wP5>$Pity5</div>
							<div $wDa>$Date</div>$c";
							
							if ($Level == '5')
							{
								$endclass = 'class="w-tab-tab5"';
								echo "<div $endclass>$ctab</div>";
							}
							elseif ($Level == '4')
							{
								$endclass = 'class="w-tab-tab4"';
								echo "<div $endclass>$ctab</div>";
							}
							elseif ($Level == '3')
							{
								if ($i%2 == 0)
								{
									$endclass = 'class="w-tab-tab3-1"';
									echo "<div $endclass>$ctab</div>";
								}
								else
								{
									$endclass = 'class="w-tab-tab3-2"';
									echo "<div $endclass>$ctab</div>";
								}
							}
							else
							{
								$endclass = 'class="w-tab-tab-error"';
								echo "<div $endclass>$ctab</div>";
							}
						}
					}
					else
					{
						echo '<div class="w-tab-tab-none">Jeszcze nic tutaj nie ma :(</div>';
					}
				?>
			</div>
		</div>
		<?php require_once "main/footer.php"; ?>
	</div>
</body>
</html>
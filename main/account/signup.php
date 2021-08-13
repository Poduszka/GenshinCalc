<?php
session_start();

if (!empty($_POST['login']) && !empty($_POST['password']))
{
	if(!empty($_SESSION['elog'])) unset($_SESSION['elog']);
	require_once('db.php');
	$connect = mysqli_connect($host, $user, $password);
	if(!$connect) // Sprawdzanie połączenia z MySQL
	{
		echo 'Brak połączenia z MySQL!';
		exit;
	}
	$datab = mysqli_select_db($connect, $database);
	if(!$datab) // Sprawdzanie połączenia z bazą danych
	{
      echo 'Brak połączenia z bazą uzytkowników!';
      exit;
    }
	$slog = $_POST['login'];
	$llogin = mysqli_query($connect, "SELECT * FROM accounts WHERE Login = '$slog'");
	$row = mysqli_fetch_assoc($llogin);
	if(!$llogin) // Sprawdzanie czy zapytanie jest poprawne
	{
		echo 'Błąd zapytania!';
		exit;
	}
    if (!empty($row['Login']))
    {
        $_SESSION['elog'] = "ELOG_02";
    }
	else
	{
		$passhash = $_POST['password'];
		$newpass = password_hash($passhash, PASSWORD_DEFAULT);
		$newlog = $_POST['login'];
		mysqli_query($connect, "INSERT INTO `accounts` (`UID`, `Login`, `Password`) VALUES (NULL, '$newlog', '$newpass')");
		mysqli_close($connect);
		$_SESSION['elog'] = "ELOG_03";
	}
}

header("Location: ../../../genshincalc");
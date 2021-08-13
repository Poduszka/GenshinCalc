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
	$lrow = mysqli_fetch_assoc($llogin);
	if(!$llogin) // Sprawdzanie czy zapytanie jest poprawne
	{
		echo 'Błąd zapytania!';
		exit;
	}
    if (!empty($lrow['Login']))
    {
		//$spass = $_POST['password'];
		//$pver = password_verify($lrow['Password']);
		if (password_verify($_POST['password'], $lrow['Password'])==TRUE)
		{
			$_SESSION['user'] = htmlspecialchars($_POST['login']);
		}
		else 
		{
			$_SESSION['elog'] = "ELOG_01";
		}
    }
	else 
	{
		$_SESSION['elog'] = "ELOG_01";
	}
}

header("Location: ../../../genshincalc");
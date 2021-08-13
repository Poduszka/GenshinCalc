<div id="menu">
	<a href="index.php" class="dec-a"><div id="icon-home-frame"><div class="icon-home"></div><span id="icon-home-title">Home</span></div></a>
	<?php if(!empty($_SESSION['user'])) : ?>
	<a href="main/account/logout.php" class="dec-a"><div id="user-button">LogOut</div></a>
	<?php endif; ?>
	<div class="c-f"></div>
</div>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="app/public/assets/img/favicon.png">
    <title>6º Encontro de devs PHP com Rapadura 2025</title>

    <!-- CSS  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://use.fontawesome.com/6c531641d9.js"></script>
    <link href="app/public/assets/css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="app/public/assets/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body class="grey lighten-2">

    <!-- Top Navigation -->
    <?php require_once 'app/views/nav.php'; ?>

    <!-- Section Banner -->
    <?php require_once 'app/views/banner.php'; ?>

    <!-- Section Parallax One -->
    <?php require_once 'app/views/parallax-one.php'; ?>

    <!-- Section About -->
    <?php require_once 'app/views/about.php'; ?>

    <!-- Section Speakers -->
    <?php require_once 'app/views/speakers.php'; ?>

    <!-- Section Parallax two -->
    <?php require_once 'app/views/parallax-two.php'; ?>
    <br>
    <!-- Section Local -->
    <?php require_once 'app/views/local.php'; ?>

    <!-- Section Parallax three -->
    <?php require_once 'app/views/parallax-three.php'; ?>

    <!-- Section schedule -->
    <?php require_once 'app/views/schedule.php'; ?>

    <!-- Section Parallax three -->
    <?php require_once 'app/views/parallax-four.php'; ?>

    <!-- Section sponsors -->
    <?php require_once 'app/views/sponsors.php'; ?>

    <!-- Section codigo de conduta -->
    <?php require_once 'app/views/conduta.php'; ?>

    <!-- Section sponsors -->
    <?php require_once 'app/views/footer.php'; ?>

    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="app/public/assets/js/materialize.js"></script>
    <script src="app/public/assets/js/init.js"></script>

    <script>
        var $doc = $('html, body');
        $('.scrollSuave').click(function() {
            $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 2000);
            return false;
        });
        
    </script>
</body>
</html>
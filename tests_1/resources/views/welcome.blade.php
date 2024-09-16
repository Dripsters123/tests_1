<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3x3 table</title>
    <link rel="stylesheet" href="{{ asset('style.css') }}">
</head>
<body>

<div class="container">
        <div class="box" id="box1">
            <img src="{{url('images/vtdt.jpg')}}" alt="Image" class="sliding-image"/>
        </div>
        <div class="box" id="box2"></div>
        <div class="box" id="box3">
            <button class="rotate-button">Click for surprise</button>
        </div>
        <div class="box" id="box4">
            <div class="bubble"></div>
        </div>
        <div class="box" id="box5">
            <a href="https://www.youtube.com/" class="link">Youtube</a>
            <a href="https://www.google.com/" class="link">Google</a>
            <a href="https://www.e-klase.lv/" class="link">E-klase</a>
            <a href="https://www.y8.com/" class="link">Spēles</a>
            <a href="http://pt.edu.lv/pt/stundas.php?id=m&g=IPa22&dat=2024-09-16/" class="link">Stundu saraksts</a>
        </div>
        <div class="box" id="box6">Laikapstākļi</div>
        <div class="box" id="box7">
            <form id="add-user-form">
                <input type="text" id="name" placeholder="Vārds" required>
                <input type="text" id="surname" placeholder="Uzvārds" required>
                <input type="tel" id="phone" placeholder="Telefona numurs" required pattern="\d{8}">
                <input type="text" id="personalCode" placeholder="Personas kods" required pattern="\d{6}-\d{5}">
                <button type="submit">Pievienot lietotāju</button>
            </form>
        </div>
        <div class="box" id="box8">
            <form id="edit-user-form">
                <input type="text" id="edit-name" placeholder="Vārds" required>
                <input type="text" id="edit-surname" placeholder="Uzvārds" required>
                <input type="tel" id="edit-phone" placeholder="Telefona numurs" required pattern="\d{8}">
                <input type="text" id="edit-personalCode" placeholder="Personas kods" required pattern="\d{6}-\d{5}">
                <button type="submit">Rediģēt lietotāju</button>
            </form>
        </div>
        <div class="box" id="box9">
            <form id="delete-user-form">
                <input type="text" id="delete-id" placeholder="Lietotāja ID" required>
                <button type="submit">Dzēst lietotāju</button>
            </form>
        </div>
    </div>


    <script src="{{ asset('script.js') }}"></script>
</body>
</html>*/

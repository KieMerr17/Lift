document.getElementById('lift_open').addEventListener('click', function() {
    document.getElementById('lift_open_img').style.display = 'block';
    document.getElementById('lift_closed_img').style.display = 'none';
});

document.getElementById('lift_closed').addEventListener('click', function() {
    document.getElementById('lift_open_img').style.display = 'none';
    document.getElementById('lift_closed_img').style.display = 'block';
});

document.getElementById('lift_environ_1').addEventListener('click', function() {
    document.getElementById('lift_environ_img_2').style.display = 'none';
    document.getElementById('lift_environ_img_1').style.display = 'block';
});

document.getElementById('lift_environ_2').addEventListener('click', function() {
    document.getElementById('lift_environ_img_1').style.display = 'none';
    document.getElementById('lift_environ_img_2').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function () {
    var namesArray = ['Samuel', 'Daniel', 'Nana'];
    var cityArray = ['Quezon City', 'Santo Tomas', 'Davao City'];
    // var alert = document.querySelector('.alert');
    // var alertName = alert.querySelector('.alert__name');
    // var alertCity = alert.querySelector('.alert__city');
    // var alertCount = alert.querySelector('.alert__count');
    // var clsAlertShow = 'alert--show';
    const cursorText = document.querySelector('.cursor-text');

    var alertInterval = null;

        if(cursorText) {
        cursorText.addEventListener("click", function(e) {
                setTimeout(function () {
                    alert.classList.add(clsAlertShow);
                }, 10000);
        });
    }

    function createAlertMessage() {
        var name = namesArray[getRandom(0, namesArray.length - 1)];
        var city = cityArray[getRandom(0, cityArray.length - 1)];
        var count = getRandom(2, 4);
        alertName.textContent = name;
        alertCity.textContent = city;
        alertCount.textContent = count;
    }
 
    function alertHidden() {
        alert.classList.remove(clsAlertShow);
    }
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});


  
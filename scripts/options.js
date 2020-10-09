chrome.storage.sync.get({ "key": defaultName, "language": "English", "year": "First", "seconds": true, "solidbackground": false }, function (items) {
    $('#name').val(items.key.trim() == "" ? defaultName : items.key);
    $('#language').val(items.language);
    $('#year').val(items.year);
    $('#seconds').prop('checked', items.seconds);
    $('#solid').prop('checked', items.solidbackground);
});

$('#name').bind('input propertychange', function () {
    console.log("Name change to " + $('#name').val());
    setName($('#name').val());
});

$('#language').on('change', function () {
    var language = $('#language').find(":selected").text();
    console.log("Language change to " + language);
    setLanguage(language);
});

$('#year').on('change', function () {
    var year = $('#year').find(":selected").text();
    console.log("Year change to " + year);
    setYear(year);
});

$('#seconds').on('change', function () {
    console.log("Display seconds change to  " + $('#seconds').is(":checked"));
    setDisplaySeconds($('#seconds').is(":checked"));
});

$('#solid').on('change', function () {
    console.log("Solid background change to  " + $('#solid').is(":checked"));
    setSolidBackground($('#solid').is(":checked"));
});
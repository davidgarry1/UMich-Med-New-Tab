function updateText() {
    chrome.storage.sync.get({ "key": defaultName, "language": "English" }, function (items) {
        var today = new Date()
        var curHr = today.getHours()
        var timeInt = -1;
        if (curHr < 4) {
            timeInt = 0;
        } else if (curHr < 12) {
            timeInt = 1;
        } else if (curHr < 18) {
            timeInt = 2;
        } else {
            timeInt = 3;
        }
        if (items.key.trim() == "") {
            items.key = defaultName;
        }
        $('.message').html("<a href='https://docs.google.com/document/d/1T2B9aWCSyYJ3rLy8Ci5HhH60A8T6X1u14-1pKUx3ZuE/'>" + getTextForLanguage(timeInt, items.language) + "</a>, " + items.key + ".");
    });
}

updateText();
setInterval(function () {
    updateText();
}, 60 * 1000);

chrome.storage.sync.get({ "year": "First" }, function (items) {
    if (items.year === "First") {
        $('.first').css('display', 'flex');
    } else {
        $('.second').css('display', 'flex');
    }
});

chrome.storage.sync.get({ "solidbackground": false }, function (items) {
    if (items.solidbackground) {
        $('body').css('background-image', 'none');
        $('body').css('background-color', '#002E5E');
        $("#logo").show();
    } else {
        $("#logo").hide();
        $('body').css('background-image', 'url("' + getBackgroundURL() + '")');
        $('body').css('background-color', 'black');
    }
});

chrome.storage.sync.get({ "seconds": true }, function (items) {
    $('.clock').FlipClock({
        clockFace: 'TwelveHourClock',
        showSeconds: items.seconds,
    });
    if (items.seconds == true) {
        $('.clock').css('margin-left', '8px');
    } else {
        $('.clock').css('margin-left', '90px');
    }
});

$('#settings').click(function () {
    chrome.runtime.openOptionsPage();
});

function getTextForLanguage(timeInt, language) {
    english = ["You're up late", 'Good morning', 'Good afternoon', 'Good evening'];
    spanish = ["Te levantas tarde", 'Buenos días', 'Buenas tardes', 'Buenas noches'];
    french = ["Tu te lèves tard", 'Bonjour', 'Bonjour', 'Bonsoir'];
    chinese = ["你迟到了", '早上好', '下午好', '晚上好'];
    vietnamese = ["Bạn dậy muộn", 'Chào buổi sáng', 'Chào buổi chiều', 'Chào buổi tối'];
    armenian = ["Դուք ուշ եք", 'Բարի առավոտ', 'Բարի օր', 'Բարի երեկո'];
    hindi = ["तुम देर से उठे हो", 'शुभ प्रभात', 'नमस्कार', 'सुसंध्या'];

    if (language == "English") {
        return english[timeInt];
    } else if (language == "Spanish") {
        return spanish[timeInt];
    } else if (language == "French") {
        return french[timeInt];
    } else if (language == "Chinese") {
        return chinese[timeInt];
    } else if (language == "Vietnamese") {
        return vietnamese[timeInt];
    } else if (language == "Armenian") {
        return armenian[timeInt];
    } else if (language == "Hindi") {
        return hindi[timeInt];
    } else {
        console.error("Language not found error, using English");
        return english[timeInt];
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getBackgroundURL() {
    return "images/backgrounds/" + randomIntFromInterval(1, 4) + ".jpg";
}
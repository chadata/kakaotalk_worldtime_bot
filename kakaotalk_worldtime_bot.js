function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == "//") {
        // 현재 시간을 가져옴
        var now = new Date();

        // 한국 시간 설정 (UTC+9)
        var koreaTime = formatDate(now);

        // 파리 시간은 한국시간에서 8시간 전
        var parisTime = new Date(now.getTime() - 8 * 60 * 60 * 1000);
        var parisTimeFormatted = formatDate(parisTime);

        // 오클라호마시간은 한국시간에서 15시간 전
        var oklahomaTime = new Date(now.getTime() - 15 * 60 * 60 * 1000);
        var oklahomaTimeFormatted = formatDate(oklahomaTime);

        replier.reply("민준: " + koreaTime + "\n지현: " + parisTimeFormatted + "\n윤서: " + oklahomaTimeFormatted);
    }
}

function formatDate(date) {
    var year = date.getFullYear();
    var month = pad(date.getMonth() + 1, 2);
    var day = pad(date.getDate(), 2);
    var hours = pad(date.getHours(), 2);
    var minutes = pad(date.getMinutes(), 2);
    var seconds = pad(date.getSeconds(), 2);

    return year + "년 " + month + "월 " + day + "일 " + hours + "시 " + minutes + "분 " + seconds + "초";
}

// 숫자를 지정된 자릿수로 채우는 함수
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

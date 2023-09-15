// > 이후달
// < 이전달


// var thisMonthLastDate;

// // 현재 날짜를 얻습니다.
// var currentDate = new Date();

// // 다음 달로 이동하여 이번 달의 마지막 날짜를 구합니다.
// currentDate.setMonth(currentDate.getMonth() + 1);
// currentDate.setDate(0);

// // thisMonthLastDate에 마지막 날짜를 할당합니다.
// thisMonthLastDate = currentDate.getDate();

// console.log(thisMonthLastDate);


// var thisMonthFirstDate = 1;
// var thisMonthFirstDay;

// // 현재 날짜를 얻습니다.
// var currentDate = new Date();

// // 현재 날짜를 이번 달의 첫 번째 날짜로 설정합니다.
// currentDate.setDate(thisMonthFirstDate);

// // 요일을 얻습니다 (0은 일요일, 1은 월요일, ..., 6은 토요일을 나타냅니다).
// thisMonthFirstDay = currentDate.getDay();

// console.log(thisMonthFirstDay);


var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];


const setCalendar = (year, month) => {

    var titleMonthDiv = document.getElementsByClassName("month")[0];

    titleMonthDiv.innerHTML = `${month}월`;
    //현재 월 제목에 표시하자 html => js로 옮기기

    var thisMonthLastDate = new Date(year, month + 1 - 1, 0).getDate();
   
    for(var date = 1; date <= thisMonthLastDate; date++){
     
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add = ("date");
        dateItemDiv.classList.add = ("item");
        dateItemDiv.innerHTML = date;
     
        datesContainerDiv.appendChild(dateItemDiv);
    }


    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay();

    console.log(thisMonthLastDate, thisMonthFirstDay)


}

setCalendar(year, month);
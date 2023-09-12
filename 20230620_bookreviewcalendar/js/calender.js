var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

// < : 이전달
// > : 이후달
// month += 1;

const setCalendar = (year, month) => {
    //현재 월 제목에 표시하자
    //html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];

    // = `${month월}`;
    titleMonthDiv.innerHTML = `${month}월`;
    
    // 1~해당 월의 마지막 날짜 까지 날짜 div만들기
    //해당 월의 마지막날
    var thisMonthLastDate = new Date(year,  month + 1 - 1, 0).getDate();  //전달 마지막 날
    for (var date = 1; date <= thisMonthLastDate; date++ ) {
        let dateItemDiv = document.createElement("div");
        console.log(date);
    }
   
    console.log(thisMonthLastDate);

    
    //해당 월의 1일 요일
    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay(); //0: sum, 1: mon, 2: tue, 3: wed, 4: the, 5: fri, 6: sat 
    console.log(thisMonthFirstDay);
}
setCalendar(year,month);

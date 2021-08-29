var today = moment().format("dddd, MMM D, YYYY")
currentDay.textContent = today

$(document).ready(function() {
    $(".saveBtn").click(function() {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    function getHours() {
        var currTime = moment().hour();

        $(".time-block").each(function() {
            var timeBlockEl = parseInt($(this).attr("id").split("hour")[1]);

            if(timeBlockEl < currTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeBlockEl === currTime) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            
        })
    }
    getHours();
})

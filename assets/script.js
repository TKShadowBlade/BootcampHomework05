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
        console.log(currTime);

        $(".time-block").each(function() {
            var timeBlockEl = parseInt($(this).data("hour"));

            if(timeBlockEl < currTime) {
                $(".time-block").removeClass("future");
                $(".time-block").removeClass("present");
                $(".time-block").addClass("past");
            }
            else if (timeBlockEl === currTime) {
                $(".time-block").removeClass("future");
                $(".time-block").removeClass("past");
                $(".time-block").addClass("present");
            }
            else {
                $(".time-block").removeClass("present");
                $(".time-block").removeClass("past");
                $(".time-block").addClass("future");
            }
            
        })
    }

    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

    getHours();
})

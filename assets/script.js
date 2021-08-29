var today = moment().format("dddd, MMM D, YYYY")
currentDay.textContent = today

$(document).ready(function() {
    $(".saveBtn").click(function() {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    
})

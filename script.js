$(function () {
    fetch(`https://api.adviceslip.com/advice`).then(response => {
        return response.json();
    }).then(adviceData => {
        let slip = adviceData.slip;
        $("p").html(slip.advice);
        $("span").html(slip.id);
    });
    if (screen.width > 768) {
        $(".pc").removeClass("hidden");
        $(".mob").addClass("hidden");
    }
    else {
        $(".pc").addClass("hidden");
        $(".mob").removeClass("hidden");
    }
    $(window).on("resize", function () {
        if (screen.width > 768) {
            $(".pc").removeClass("hidden");
            $(".mob").addClass("hidden");
        }
        else {
            $(".pc").addClass("hidden");
            $(".mob").removeClass("hidden");
        }
    });
    $(".dice").on('click', function () {
        fetch(`https://api.adviceslip.com/advice`).then(response => {
            return response.json();
        }).then(adviceData => {
            let slip = adviceData.slip;
            $("p").fadeOut(500);
            setTimeout(() => {
                $("p").html(slip.advice);
                $("span").html(slip.id);
            }, 500)
            $("p").fadeIn(500);
        });
    });
});
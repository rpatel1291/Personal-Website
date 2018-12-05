$(document).ready(function() {
    $("button#undergrad-button").click(function() {

        $(".education-undergrad").removeClass("hidden")
        $(".education-undergrad").addClass("visible")

        $(".education-graduate").removeClass("visible")
        $(".education-graduate").addClass("hidden")
    })

    $("button#grad-button").click(function() {
        $(".education-undergrad").removeClass("visible")
        $(".education-undergrad").addClass("hidden")

        $(".education-graduate").removeClass("hidden")
        $(".education-graduate").addClass("visible")
    });
})
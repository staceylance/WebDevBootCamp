
// Click on X to delete Todo
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add new Todo
$("#NewTodo").on("change", function(){
    var NewLi = "<li> <span><i class='fa-solid fa-trash-can'></i></span>" + " " + $(this).val() + "</li>";
    $(this).val("");
    $("ul").append(NewLi);
});

// Fades out input field when clicking + sign
$(".fa-plus").click(function(){
    $("#NewTodo").fadeToggle();
})
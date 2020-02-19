// JavaScript Document

setTimeout(function() {
	document.getElementById('popup_target').classList.remove('hide');
}, 1000); //set timer

function closePopup() {
	var element = document.getElementById("popup_target");
	element.classList.add("hide");
}

$(".popup").on('hidden.bs.modal', function (e) {
                $("iframe").attr("src", $("iframe").attr("src"));
            });
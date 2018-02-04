function deleteDog() {
  var confirmation = confirm("are you sure?");
  if (confirmation) {
    $.ajax({
      type: "DELETE",
      url: "/delete/" + $(this).data("id")
    }).done(
      res =>
        window.location.replace(
          "/"
        ) /*this isn't running for unknown reasons so I just put it below*/
    );
    window.location.replace("/");
  } else {
    return false;
  }
}

$(document).ready(function() {
  $(".deleteDog").on("click", deleteDog);
});

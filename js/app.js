$(function () {
    $('#submit').click(function (e) {
        e.preventDefault();
        var value = $('#txtName').val();
        if (value) {
            $("#myModal").modal('show');
        }
    });
});
app.controller('DefaultController', function ($scope, $routeParams, Data) {
    Data.ShowHome = true;
    Data.ShowCourse = false;

    Data.ShowQRCode = false;

    Data.ShowAssignments = false;
    Data.ShowAddAssignmentsButton = false;
    Data.ClassName = "";
    Data.Instructor = "";
    Data.Location = "";
    $("#btnSubmitCourse").attr("disabled", "disabled");
    $scope.Data = Data;
});
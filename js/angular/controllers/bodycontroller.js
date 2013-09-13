app.controller('BodyController',
    function ($scope, $location, Data, REST) {

        $scope.VerifyClassInfo = function () {
            var ClassName = $scope.Data.ClassName;
            var Instructor = $scope.Data.Instructor;

            if (ClassName != null && ClassName != "" && Instructor != null && Instructor != "") {
                $("#btnSubmitCourse").removeAttr("disabled", "disabled");
            }
            else {
                $("#btnSubmitCourse").attr("disabled", "disabled");
            }
        };

        $scope.SubmitCourse = function () {
            $("#body").hide();
            Data.ShowClassForm = false;
            Data.ShowClassInfo = true;
            Data.ShowSubmitCourseButton = false;
            Data.ShowAddAssignmentsButton = true;

            Data.ClassName = $scope.Data.ClassName;
            Data.Instructor = $scope.Data.Instructor;
            Data.Location = $scope.Data.Location;

            //$scope.Data = Data;

            //            var text = "";
            //            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            //            for (var i = 0; i < 5; i++)
            //                text += possible.charAt(Math.floor(Math.random() * possible.length));

            var apiUrl = "https://api.parse.com/1/classes/Course2";
            REST.POST(apiUrl, null, { courseName: Data.ClassName, instructor: Data.Instructor, location: Data.Location, assignments: [] }, function (data) {
                $location.path("/course/" + data.objectId);
            });
        };

        $scope.OpenDialog = function () {
            $("#dialog").dialog("open");
        };

        $scope.Data = Data;
    }
);
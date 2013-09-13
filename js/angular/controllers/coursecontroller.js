app.controller('CourseController', function ($scope, $routeParams, Data, REST, $location) {

    var id = $routeParams.param1;
    if (Data.Student == null) {
        LoadStudentData(Data, REST, $location, function (data) {
            Data = data;
        });
    }
    LoadCourse(REST, $location, id, function (data) {
        //alert(JSON.stringify(data));
        Data.Course = data;

        $scope.qrdata = "https://chart.googleapis.com/chart?cht=qr&chs=125x125&chl=" + encodeURIComponent("http://fzzl.com/#/course/" + $routeParams.param1) + "&chld=L|0";
        $scope.url = "http://fzzl.com/#/course/" + id;

        Data.ShowHome = false;
        Data.ShowCourse = true;

    });
    //alert(JSON.stringify(Data.Course));
    var course = encodeURIComponent('where={"CourseID":"' + id + '"}');

    LoadAssignments(REST, $location, course, function (data) {
        $scope.$apply(function () {
            Data.Assignments = data.results;
            Data.ShowAssignments = true;
            Data.ShowAddAssignmentsButton = true;
        });
    });

    //Data.Courses[] = data.courseName;
    //            Data.Instructor = data.instructor;
    //            Data.Location = data.location;
    //            Data.ID = data.objectId;

    //   
    //    var apiUrl = "https://api.parse.com/1/classes/Course/" + id;

    //    REST.GET(apiUrl, null, { "X-Parse-Application-Id": "4w98VHawUnGJBws8Y448AeqeKnlfv4KstnDNGgtd", "X-Parse-REST-API-Key": "VhDpJcabQNULUMHRphEdnz0fbI7WxcV8Wox3Xmep" }, function (data) {
    //        if (data.error) {
    //            Data.ShowQRCode = false;
    //            $scope.Data = Data;
    //            $location.path("/");
    //        }
    //        else {
    //            $scope.qrdata = "https://chart.googleapis.com/chart?cht=qr&chs=125x125&chl=" + encodeURIComponent("http://fzzl.com/#/course/" + $routeParams.param1) + "&chld=L|0";
    //            $scope.url = "http://fzzl.com/#/course/" + $routeParams.param1;

    //            Data.ClassName = data.courseName;
    //            Data.Instructor = data.instructor;
    //            Data.Location = data.location;
    //            Data.ID = data.objectId;
    //            Data.RESTDATA = data;
    //            if (data.assignments.length > 0) {
    //                Data.Assignments = data.assignments;
    //                Data.ShowTable = true;
    //            }


    //            Data.ShowClassForm = false;
    //            Data.ShowClassInfo = true;
    //            Data.ShowSubmitCourseButton = false;
    //            Data.ShowAddAssignmentsButton = true;
    //            Data.ShowQRCode = true;
    //            $scope.Data = Data;
    //        }
    //        //$("#body").show();
    //    });

});
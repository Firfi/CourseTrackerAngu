app.controller('HomePageController', function ($scope, Data, REST, $location, Auth) {

    LoadStudentData(Data, REST, $location, function (data) {
        Data = data;
        LoadCourses(Data, REST, $location, function (data) {
            Data = data;
        });
    });

    $(".aCheck").live("click", function () {
        var isChecked = [];
        $('.aCheck:checkbox:checked').each(function () {
            isChecked.push('"' + $(this).attr("id") + '"');
        });

        if (isChecked.length > 0) {
            var courses = encodeURIComponent('where={"CourseID":{"$in":[' + isChecked + ']}}');
            LoadAssignments(REST, $location, courses, function (data) {
                $scope.$apply(function () {
                    Data.Assignments = data.results;
                    Data.ShowAssignments = true;
                });
            });
        }
        else {
            $scope.$apply(function () {
                Data.ShowAssignments = false;
                Data.Assignments = [];
            });
        }
    });

});

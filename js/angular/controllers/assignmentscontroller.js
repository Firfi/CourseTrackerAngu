app.controller('AssignmentsController', function ($scope, $routeParams, Data, REST, $location) {
    
    Data.Assignments = [];

    $(document).ready(function () {
        $("#dialog").dialog({
            position: 'center',
            autoOpen: false,
            draggable: false,
            width: 370,
            buttons: [
                { text: "SAVE", click: function () {

                    $scope.$apply(function () {

                        var assignments = $scope.Assignment
                        assignments.CourseID = Data.Course.objectId;
                        assignments.SID = Data.Course.objectId

                        Data.Assignments.push(assignments);
                        Data.ShowTable = true;

                        var apiUrl = "https://api.parse.com/1/classes/Assignment";
                        REST.POST(apiUrl, null, assignments, function (data) {
                            //alert(JSON.stringify(data));
                        });

                    });


                    ClearForm();
                    $(this).dialog("close");
                }
                },
                {
                    text: "CANCEL", click: function () {
                        ClearForm();
                        $(this).dialog("close");
                    }
                }
        ]
        });
    });

    var ClearForm = function () {
        $scope.Assignment = {};
    }

});
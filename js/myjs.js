
var LoadStudentData = function (Data, REST, $location, callback) {
    var apiUrl = "https://api.parse.com/1/classes/Student";

    REST.GET(apiUrl, null, null, function (data) {
        if (data.error) {
            $location.path("/");
        }
        else {
            Data.Student = data.results[0];
        }
        callback(Data);
    });
}

var LoadCourses = function (Data, REST, $location, callback) {
    var len = Data.Student.Courses.length;

    var courses = Data.Student.Courses;

    Data.Courses = [];
    apiUrl = "https://api.parse.com/1/classes/Course/";

    for (var i = 0; i < len; i++) {
        REST.GET(apiUrl + "/" + courses[i], null, null, function (data) {
            if (data.error) {
                //$location.path("/");
            }
            else {
                Data.Courses.push(data);
            }
        });
    }
    callback(Data);
}

var LoadCourse = function (REST, $location, courseId, callback) {

    apiUrl = "https://api.parse.com/1/classes/Course/";

    REST.GET(apiUrl + "/" + courseId, null, null, function (data) {
        if (data.error) {
            $location.path("/");
        }
        else {
            callback(data);
        }
    });
}

var LoadAssignments = function (REST, $location, courses, callback) {
    apiUrl = "https://api.parse.com/1/classes/Assignment/";
    
    $.ajax({
        url: apiUrl,
        headers: { "X-Parse-Application-Id": "4w98VHawUnGJBws8Y448AeqeKnlfv4KstnDNGgtd", "X-Parse-REST-API-Key": "VhDpJcabQNULUMHRphEdnz0fbI7WxcV8Wox3Xmep" },
        data: courses,
        type: "GET",
        success: function (data) {
            callback(data);
        },
        dataType: "json"
    });

    //    var x =  encodeURIComponent({ "CourseID": courseID });
    //    REST.GET(apiUrl, x, null, function (data) {
    //        if (data.error) {
    //            $location.path("/");
    //        }
    //        else {
    //            callback(data);
    //        }
    //    });
}

var LoadAssignment = function (REST, $location, courseId, callback) {

    apiUrl = "https://api.parse.com/1/classes/Assignment/";

    REST.GET(apiUrl + "/" + courseId, null, null, function (data) {
        if (data.error) {
            $location.path("/");
        }
        else {
            callback(data);
        }
    });
}
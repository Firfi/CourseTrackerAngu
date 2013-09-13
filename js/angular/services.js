app.factory('REST', function ($http) {
    return {
        GET: function (apiURL, params, data, callback) {
            $http({ url: apiURL, method: "GET", params: params, data: data, headers: { "X-Parse-Application-Id": "4w98VHawUnGJBws8Y448AeqeKnlfv4KstnDNGgtd", "X-Parse-REST-API-Key": "VhDpJcabQNULUMHRphEdnz0fbI7WxcV8Wox3Xmep"} })
            .success(function (data) {
                callback(data);
            })
            .error(function (data) {
                callback(data);
            });
        },
        POST: function (apiURL, params, data, callback) {
            $http({ url: apiURL, method: "POST", params: params, data: data, headers: { "X-Parse-Application-Id": "4w98VHawUnGJBws8Y448AeqeKnlfv4KstnDNGgtd", "X-Parse-REST-API-Key": "VhDpJcabQNULUMHRphEdnz0fbI7WxcV8Wox3Xmep"} })
            .success(function (data) {
                callback(data);
            })
            .error(function (data) {
                callback(data);
            });
        },
        PUT: function (apiURL, params, data, callback) {
            $http({ url: apiURL, method: "PUT", params: params, data: data, headers: { "X-Parse-Application-Id": "4w98VHawUnGJBws8Y448AeqeKnlfv4KstnDNGgtd", "X-Parse-REST-API-Key": "VhDpJcabQNULUMHRphEdnz0fbI7WxcV8Wox3Xmep"} })
            .success(function (data) {
                callback(data);
            })
            .error(function (data) {
                callback(data);
            });
        }
    };
});

app.factory('Data', function () {
    return {
        "ShowClassForm":null,
        "ShowClassInfo":null,
        "ShowSubmitCourseButton": null,
        "ShowTable":null,
        "ShowAddAssignmentsButton": null,
        "Courses": [],
        "Course": null,
        "Assignments": [],
        "Assignment": null,
        "Student": null
        };
});
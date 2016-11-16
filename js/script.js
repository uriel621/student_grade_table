 /**
 * Define all global variables here
 */
var studentArray;
var inputIds;
var addClicked;
var cancelClicked;
var addStudent;
var clearAddStudentForm;
var calculateAverage;
var updateData;
var updateStudentList;
var addStudentToDom;
var reset;

var getData;

/**
 * student_array - global array to hold student objects
 * @type {Array}
 */
studentArray = [];

/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 */


/**
 * addClicked - Event Handler when user clicks the add button
 */

addClicked = function(){

    console.log("add");
    var studentNames = $("#studentName").val();
    var studentCourse = $("#course").val();
    var studentGrades = $("#studentGrade").val();
    var student = addStudent (studentNames, studentCourse, studentGrades);


    addStudentToDom(student);
    calculateAverage(studentArray);
    createStudent()


    $("#studentName").val("");
    $("#course").val("");
    $("#studentGrade").val("");

};

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 */
cancelClicked = function(){
    console.log("cancel");
    $("#studentName").val("");
    $("#course").val("");
    $("#studentGrade").val("");
};

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */
addStudent = function (name, course, grade){

    var studentObj = {
        name: name,
        course: course,
        grade: grade
    };
    studentArray.push(studentObj)
    return studentObj;
};


/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */
clearAddStudentForm = function(){
    $("#studentName").val("");
    $("#course").val("");
    $("#studentGrade").val("");
};
/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */
calculateAverage = function(arr){
    if(arr.length>0) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            element = arr[i];
            ele = parseInt(element.grade);
            sum += ele;
        }
        var average = sum / arr.length;
    } else {
        average = 0;
    }
    console.log(average);
    $(".avgGrade").empty()
    $(".avgGrade").append(average.toFixed(2));
};


/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */
addStudentToDom = function(student){

    var studentRow = $("<tr>");
    var studentTD = $("<td>").text(student.name);
    var courseTD = $("<td>").text(student.course);
    var gradeTD = $("<td>").html(student.grade);

    var deleteTD = $("<td>");
    var deleteButton = $('<button>').addClass("btn btn-danger").html("Delete");

    $(deleteButton).click(function(){
        console.log("delete Button clicked");
        $(studentRow).remove(); //selects studentRow and removes text node, lines, and bootstrap button


        console.log(studentArray.indexOf(student));
        studentArray.splice(studentArray.indexOf(student), 1)

        console.log(calculateAverage(studentArray));
        calculateAverage(studentArray)
    });

    deleteTD.append(deleteButton);
    studentRow.append(studentTD, courseTD, gradeTD, deleteTD);
    $("tbody").append(studentRow);
};

/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */
reset = function(){
    $("#studentName").val("")
    $("#course").val("");
    $("#studentGrade").val("")
};

/**
 * Listen for the document to load and reset the data to the initial state
 */

$(document).ready("click", function(){
    $("#ajaxButton").click(getData())
    });


getData = function() {
    $.ajax({
        type: "POST",
        url: "http://s-apis.learningfuze.com/sgt/get",
        data: {
            api_key: "if7HDdAEWE"
        },
        dataType: "json",
        processData: true,
        success: function (response) {
            console.log("success");
            console.log(response);

            for(var i = 0; i < response.data.length; i++){
                console.log(response.data[i]);
                studentArray.push(response.data[i]);
                var studentsFromServer = studentArray[i]
                addStudentToDom(studentsFromServer);
                calculateAverage(studentArray);
            }
        },
        error: function () {
            console.log('error');
        }
    })
};

var createStudent = function(){
    var studentData = {
        api_key: "if7HDdAEWE",
        name: $("#studentName").val(),
        course: $("#course").val(),
        grade: $("#studentGrade").val()
    }

        $.ajax({
            data: studentData,
            dataType: "json",
            url: "http://s-apis.learningfuze.com/sgt/get",
            method: "post",
            success: function(response){
                console.log(response)
            }
        })

}

var deleteStudent = function(){
    var remove_student = {
        api_key: "if7HDdAEWE",
        name: $("#studentName").remove(),
        course: $("#course").remove(),
        grade: $("#studentGrade").remove()
    }

    $.ajax({
            data: student_data,
            dataType: "json",
            url: "http://s-apis.learningfuze.com/sgt/get",
            method: "post",
            success: function(response){
                console.log(response)
            }
        })
} 

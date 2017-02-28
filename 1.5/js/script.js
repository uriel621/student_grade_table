// var student_grade_table = (function(){
    

    var studentArray = [];
    var clearInputs;
    var delete_button
    
    var studentInfo = {
        name: $("#studentName"),
        course: $("#course"),
        grade: $("#studentGrade")
    }
    
    var actionButtons = {    
        
        add: function(){
            $("#add").click(function(){
                // alert("Add");
                var name = studentInfo.name.val();
                var course = studentInfo.course.val();
                var grade = studentInfo.grade.val();
                domCreation(name, course, grade);
                
                var info = {
                    name: name,
                    course: course,
                    grade: grade
                };
    
                studentArray.push(info);
                console.log(studentArray);
                // clearInputs(); 
            });
        },
        


        remove: function(){
            $("body").on("click", ".delete", function(element){
                console.log("delete");
                // var value = studentInfo.
                var index = studentArray.splice(0, 1)
                console.log("Splicing", index);
                console.log("After The Splice", studentArray);
            });
        },

        cancel: function(){
            $("#cancel").click(function(){
                clearInputs()
            });
        },


        server: function(){
            $("#server").click(function(){
                alert("server");
            });
        }
    };

    
// $(".delete").click(function(){
//                 alert("delete");
//                 console.log("delete")
//             });
            

    var init = {
        addStudents: actionButtons.add(),
        deleteStudents: actionButtons.remove(),
        cancelStudents: actionButtons.cancel(),
        serverStudents: actionButtons.server(),
    };

    var domCreation = function(name, course, grade){
        var studentRow = $("<tr>");
                        
        var studentName = $("<td>", {
            text: name
        });
        var studentCourse = $("<td>", {
            text: course
        });
        var studentGrade = $("<td>", {
            text: grade
        });
        var deleteStudent = $("<td>", {
            text: "Delete",
            class: "btn btn-danger delete"
        });
                        
        $(studentRow).append(studentName, studentCourse, studentGrade, deleteStudent);
        $("tbody").append(studentRow);

    }; 

    var clearInputs = function(){
        $("#studentName").val("");
        $("#course").val("");
        $("#studentGrade").val("");

        $("#studentName").removeClass("missing");
        $("#course").removeClass("missing");
        $("#studentGrade").removeClass("missing");
    }

    var testCheck = function(){
        var noName = info.name;
        var noCourse = info.course;
        var noGrade = info.grade;

        if(noName && noCourse && noGrade !== ""){
            pushesInfoToStudentInfo();
            domCreation();
            clearInputs();
                        
        }
        else {
            if(noName === ""){
                alert("you are missing student's name")
                $("#studentName").addClass("missing");
            }
            else if(noCourse === ""){
                alert("you are missing student's course")
                $("#course").addClass("missing");
            }
            else if(noGrade === ""){
                alert("you are missing student's grade")
                $("#studentGrade").addClass("missing");
            }

        }
    };
    

        
            
        
// }());





        


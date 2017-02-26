var student_grade_table = (function(){
    

    var studentInfo = [];
    var actions = {
        
        
        add: function(){
            $("#add").click(function(name, course, grade){
                // alert("Add");

                var info = {
                    name: $("#studentName").val(),
                    course: $("#course").val(),
                    grade: $("#studentGrade").val(),
                }
                
                var pushesInfoToStudentInfo = function(){
                    studentInfo.push(info)
                    console.log(studentInfo)
                };

                var clearInputs = (function(){
                    $("#studentName").val("");
                    $("#course").val("");
                    $("#studentGrade").val("");
                }());
                    
                var domCreation = function(){
                    var studentRow = $("<tr>");
                        
                    var studentName = $("<td>", {
                        text: info.name
                    });
                    var studentCourse = $("<td>", {
                        text: info.course
                    });
                    var studentGrade = $("<td>", {
                        text: info.grade
                    });
                    var studentOperations = $("<td>", {
                        text: "Delete",
                        class: "btn btn-danger delete"
                    });
                        
                    $(studentRow).append(studentName, studentCourse, studentGrade, studentOperations);
                    $("tbody").append(studentRow);
                }; 

                var test = (function(){
                    // pushesInfoToStudentInfo();
                    // domCreation()

                    var noName = info.name;
                    var noCourse = info.course;
                    var noGrade = info.grade;

                    if(noName === false){
                        alert("Student Name is missing")
                        $()
                    }
                    else {
                        alert("you are missing something")
                    }
                }());

                

            });
        },


        delete: function(){
            $(".delete").click(function(){
                alert("delete");
            });
        },


        cancel: function(){
            $("#cancel").click(function(){
                alert("cancel");
            });
        },


        server: function(){
            $("#server").click(function(){
                alert("server");
            });
        }
    };


            

    var init = {
        addStudents: actions.add(),
        deleteStudents: actions.delete(),
        cancelStudents: actions.cancel(),
        serverStudents: actions.server(),
    };
    

        
            
        
}());

        


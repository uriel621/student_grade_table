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

                var clearInputs = function(){
                    $("#studentName").val("");
                    $("#course").val("");
                    $("#studentGrade").val("");

                    $("#studentName").removeClass("missing");
                    $("#course").removeClass("missing");
                    $("#studentGrade").removeClass("missing");
                };
                    
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
                    var deleteStudent = $("<td>", {
                        text: "Delete",
                        class: "btn btn-danger delete"
                    });
                        
                    $(studentRow).append(studentName, studentCourse, studentGrade, deleteStudent);
                    $("tbody").append(studentRow);
                }; 

                var test = (function(){
                    
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
                }());

                

            });
        },


        delete: function(){
            $(".delete").click(function(){
                alert("delete");
                console.log("delete")
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





        


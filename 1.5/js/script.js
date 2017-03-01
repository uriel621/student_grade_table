// var student_grade_table = (function(){
    

    var studentArray = [];
    
    var studentInfo = {
        name: $("#studentName"),
        course: $("#course"),
        grade: $("#studentGrade")
    }
    var addBtn = $("#add");
    var removeBtn = $(".delete");
    var cancelBtn = $("#cancel");
    var serverBtn = $("#server");

    var add = function(){
        console.log("add");
    };
    var remove = function(){
        alert("remove");
    };
    var cancel = function(){
        alert("cancel");
    };
    var server = function(){
        alert("server");
    };
    
    var events = {
        addStudents: addBtn.onclick = function(){
            add();
        },
        removeStudents: removeBtn.onclick = function(){
            remove();
        },
        cancelStudents: cancelBtn.onclick = function(){
            cancel();
        },
        serverStudents: serverBtn.onclick = function(){
            server();
        }
    };
            

    // var init = {
    //     addStudents: add(),
    //     deleteStudents: remove(),
    //     cancelStudents: cancel(),
    //     serverStudents: server(),
    // };

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





        

// var actionButtons = {    
        
    //     add: function(){
    //         $("#add").click(function(){
    //             // alert("Add");
    //             var name = studentInfo.name.val();
    //             var course = studentInfo.course.val();
    //             var grade = studentInfo.grade.val();
    //             domCreation(name, course, grade);
                
    //             var info = {
    //                 name: name,
    //                 course: course,
    //                 grade: grade
    //             };
    
    //             studentArray.push(info);
    //             console.log("Just Added", studentArray);
    //             // clearInputs(); 
    //         });
    //     },
        


    //     remove: function(){
    //         $("body").on("click", ".delete", function(studentArray){
    //             console.log("delete");
    //             // console.log(array)

    //             $(this).click(function(studentArray){
    //                 console.log("This", studentArray)
    //             })
                
    //             // $(this).click(function(){
    //             //     var index = studentArray.splice(array, 1);
    //             //     console.log("Spliced", index);
    //             //     console.log("After The Splice", studentArray);
    //             // })
                

    //             // // $(this).click(function(){
    //             //     var text = $(this).html()
    //             //     text = text.substring(0, text.length);
    //             //     studentArray.splice(studentArray.indexOf(text), 1);
    //             //     console.log("After The Splice", studentArray)
    //             //     $(this).closest("button").remove();
    //             // // });

            
                   
                
    //     })},

    //     cancel: function(){
    //         $("#cancel").click(function(){
    //             clearInputs()
    //         });
    //     },


    //     server: function(){
    //         $("#server").click(function(){
    //             alert("server");
    //         });
    //     }
    // };

    
// $(".delete").click(function(){
//                 alert("delete");
//                 console.log("delete")
//             });
// var student_grade_table = (function(){
    

    var studentArray = [];
    
    var buttons = {
        addButton: document.querySelector("#add"),
        // removeButton: document.querySelector(".delete"),
        cancelButton: document.querySelector("#cancel"),
        serverButton: document.querySelector("#server")
    };
    
    var events = {
        addStudent: function(){
            // console.log("add")
            var studentInfo = {
                name: $("#studentName").val(),
                course: $("#course").val(),
                grade: $("#studentGrade").val()
            }
            studentArray.push(studentInfo)
            console.log("add", studentArray)
        },
        removeStudent: function(array){
            // console.log("remove");
            console.log("remove", array)


        },
        cancelStudent: function(){
            console.log("cancel");
        },
        serverStudent: function(){
            console.log("server");
        },
    }

    var init = {
        add: buttons.addButton.onclick = function(){
            events.addStudent();
        },
        remove: buttons.removeButton.onclick = function(){
            events.removeStudent(studentArray)
        },
        cancel: buttons.cancelButton.onclick = function(){
            events.cancelStudent();
        },
        server: buttons.serverButton.onclick = function(){
            events.serverStudent();
        },
    }


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
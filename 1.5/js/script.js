var student_grade_table = (function(){
    
    var actions = {
        
        
        add: function(){
            $("#add").click(function(){
                alert("Add");

                var add = $("<div>", {
                    text: "Name"
                })
                $("tbody").append(add)

            });
        },


        delete: function(){
            $("#delete").click(function(){
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


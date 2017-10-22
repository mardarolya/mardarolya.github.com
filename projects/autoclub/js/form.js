var sendButton = document.getElementById("submit");
sendButton.onclick = function() {
    var check = document.getElementById("sendApp");
    var form = document.getElementById("sendTheApp");
    
    var nameUser = document.getElementById("name");
    var phoneUser = document.getElementById("phone");
    var mailUser = document.getElementById("mail");
    var commentUser = document.getElementById("comment");

    var err = false;
    nameUser.classList.remove("error");
    phoneUser.classList.remove("error");
    mailUser.classList.remove("error");
    if (!nameUser.value || nameUser.value == "") {
        err = true;
        nameUser.placeholder = "Заполните имя";
        nameUser.classList.add("error");
    }
    if (!phoneUser.value || phoneUser.value == "") {
        err = true;
        phoneUser.placeholder = "Заполните телефон";
        phoneUser.classList.add("error");
    }
    if (!mailUser.value || mailUser.value == "") {
        err = true;
        mailUser.placeholder = "Заполните почту";
        mailUser.classList.add("error");
    }

    if (!err) {
        // response.setHeader("Access-Control-Allow-Origin", "*");
        // response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
        // response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        $.ajax({
            type: "POST", //Метод отправки
            url: "../php/index.php", //путь до php фаила отправителя
            cache: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: $(form).serialize(),
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
                }
            });
        }
        // $.ajax({
        //     type: 'POST',
        //     url: '../php/index.php',
        //     cache: false,
        //     contentType: "application/json; charset=utf-8",
        //     dataType: 'json',
        //     data: {'name':nameUser.calue, 'phone':phoneUser.value, 'email':mailUser.value, 'comment':commentUser},          
        //     beforeSend: function() {
        //         sendButton.disabled = true;
        //     },
        //     success: function(answer) {
        //         var messageDone = form.querySelector(".messageDone");
        //         messageDone.classList.add("show");
        //         setTimeout(function(){
        //             sendApp.checked = false;
        //             messageDone.classList.remove("show");
        //             sendButton.disabled = false;
        //             nameUser.value = "";
        //             phoneUser.value = "";
        //             mailUser.value = "";
        //         }, 1500);   
        //     },
        //     failure: function(errMsg) {
        //         console.log(errMsg);
        //     }
        // });       
        
    
}
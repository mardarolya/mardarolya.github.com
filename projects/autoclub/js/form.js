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
        $.ajax({
            type: 'GET',
            url: 'php/index.php',
            cache: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: {'name':nameUser.value, 'phone':phoneUser.value, 'email':mailUser.value, 'comment':commentUser.value},          
            beforeSend: function() {
                console.log('1');
                sendButton.disabled = true;
            },
            success: function(answer) {
                console.log(answer);
                var messageDone = form.querySelector(".messageDone");
                messageDone.classList.add("show");
                setTimeout(function(){
                    sendApp.checked = false;
                    messageDone.classList.remove("show");
                    sendButton.disabled = false;
                    nameUser.value = "";
                    phoneUser.value = "";
                    mailUser.value = "";
                }, 1500);   
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        });     
    }
}
function senMail(){
    let parms = {
      name :document.getElementbyId("name").Value,
      email : document.getElementById("email").Value,
      subject : document.getElementById("subject").Value
      message : document.getElementById("message").Value
    } 

    emailjs.sendEmail("service_px57z18")
} 
function validateAndSendEmail() {
  var userEmail = document.getElementById("userEmail").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var emailMessage = document.getElementById("emailMessage").value;

  if (userEmail && emailSubject && emailMessage) {
      document.getElementById("validationError").classList.add("d-none");
      sendEmail(userEmail, emailSubject, emailMessage);
  } else {
      document.getElementById("validationError").classList.remove("d-none");
  }
}

function sendEmail(userEmail, emailSubject, emailMessage) {
  // Append user's email to the start of the email message
  var fullMessage = "User's Email: " + userEmail + "\n\n Subject: " + emailSubject + " Message: \n\n" + emailMessage;

  // Perform the actual email sending logic here (you may use AJAX to send data to the server)
  alert("Email sent successfully!\n\nI will get back to you as soon as possible!");
  // Optional: Close the modal after sending the email
  $('#emailModal').modal('hide');
}

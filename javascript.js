const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "josarango024@gmail.com",
//     Password: "",
//     To: "josarango024@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "Contact Form",
//     Body:
//       "Name: " +
//       document.getElementById("name").value +
//       "<br> Email: " +
//       document.getElementById("email").value +
//       "<br> Subject: " +
//       document.getElementById("subject").value +
//       "<br> Message: " +
//       document.getElementById("message").value,
//   }).then((message) => alert(message));
// }

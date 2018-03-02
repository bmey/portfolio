const templateKey = "portfolio";
const serviceKey = "gmail";

const handleSuccess = function(response) {
  console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
};

const handleError = function(err) {
  console.log("FAILED. error=", err);
};

const sendEmail = function(form) {
  return emailjs
    .send(serviceKey, templateKey, form)
    .then(handleSuccess, handleError);
};

export default sendEmail;

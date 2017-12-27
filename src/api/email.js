
import axios from "axios";

/**
 * Send an email to myself. Contact object should have already
 * been validated.
 * @param self - a vue instance
 * @param contact - {email, subject, message}
 */
module.exports.sendEmailToMe = (contact) => {
  let url = "https://formspree.io/danjamrozik@gmail.com";

  let body = {
    email: contact.email,
    message: contact.message,
    subject: contact.subject || "New message from danjamrozik.com"
  };

  // return as a promise
  return axios.post(url, body);
}
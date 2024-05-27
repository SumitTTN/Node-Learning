const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sumit.yadav@tothenew.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sumit.yadav@tothenew.com",
    subject: "Your are cannceling the account!",
    text: `GoodBye  ${name}. I hope to see you back after sometime`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

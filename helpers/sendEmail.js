// const ElasticEmail = require("@elasticemail/elasticemail-client");

// require("dotenv").config();
// const { ELASTICEMAIL_API_KEY } = process.env;

// const defaultClient = ElasticEmail.ApiClient.instance;

// const { apikey } = defaultClient.authentications;
// apikey.apiKey = ELASTICEMAIL_API_KEY;

// const api = new ElasticEmail.EmailsApi();

// const email = ElasticEmail.EmailMessageData.constructFromObject({
//   Recipients: [new ElasticEmail.EmailRecipient("kornilov.dm95@gmail.com")],
//   Content: {
//     Body: [
//       ElasticEmail.BodyPart.constructFromObject({
//         ContentType: "HTML",
//         Content: "<p>GoIT HW6</p>",
//       }),
//     ],
//     Subject: "JS EE lib test",
//     From: "dp310895kdi@gmail.com",
//   },
// });

// const callback = function (error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("API called successfully.");
//   }
// };
// api.emailsPost(email, callback);

const nodemailer = require("nodemailer");

require("dotenv").config();
const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "dp310895kdi@gmail.com",
//   subject: "Verify email",
//   html: "<p>GoIT HW6</p>",
// };

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  await transport.sendMail(email);
  return true;
};

// transport
//   .sendMail(email)
//   .then(() => console.log("Email successfully"))
//   .catch((err) => console.log(err.message));

module.exports = sendEmail;

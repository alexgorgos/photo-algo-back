"use strict";

const recaptcha = require("recaptcha-validator");
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

const isHuman = async (secret, token) => {
  const data = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const res = await data.json();
  return res;
};

module.exports = (policyContext, config, { strapi }) => {
  const secret = strapi.config.get("server.reCaptchaSecret");
  const token = policyContext.request.body.token;

  isHuman(secret, token)
    .then((res) => {
      return res.success;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

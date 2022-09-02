"use strict";

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

  console.log(res);
  return res;
};

module.exports = (policyContext, config, { strapi }) => {
  const secret = strapi.config.get("server.reCaptchaSecret");
  const token = policyContext.request.body.token;

  return isHuman(secret, token)
    .then((res) => {
      return res.success;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

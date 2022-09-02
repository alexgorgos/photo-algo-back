"use strict";

/**
 * message router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::message.message", {
  config: {
    create: {
      policies: ["verify-captcha"],
    },
  },
});

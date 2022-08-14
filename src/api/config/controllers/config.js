"use strict";

/**
 *  config controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::config.config", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: "deep" };

    const response = await super.find(ctx);
    return response;
  },
}));

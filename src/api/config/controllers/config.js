"use strict";

/**
 *  config controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const {
  default: entityService,
} = require("@strapi/strapi/lib/services/entity-service");

module.exports = createCoreController("api::config.config", ({ strapi }) => ({
  async find(ctx) {
    console.log(ctx.query);
    ctx.query = { ...ctx.query, populate: "deep" };

    const response = await super.find(ctx);
    return response;
  },
}));

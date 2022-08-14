"use strict";

/**
 *  bio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::bio.bio", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: "deep" };

    const response = await super.find(ctx);
    return response;
  },
}));

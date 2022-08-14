"use strict";

/**
 *  photo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::photo.photo", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: "deep" };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: "deep" };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
}));

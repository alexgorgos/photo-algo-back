"use strict";

/**
 *  gallery controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::gallery.gallery", ({ strapi }) => ({
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

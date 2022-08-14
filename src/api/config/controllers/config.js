"use strict";

/**
 *  config controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::config.config", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.find({
      ...query,
      populate: "deep",
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));

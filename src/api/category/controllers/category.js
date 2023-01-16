"use strict";

/**
 *  category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// Experiment
module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await strapi.entityService
        .findMany("api::category.category")
        .then((res) => {
          if (res.length >= 3) {
            return "You have already created 3 categories!";
          }
        });

      // Create category if count not greater than 3, otherwise return the message
      return response ?? super.create(ctx);
    },
  })
);

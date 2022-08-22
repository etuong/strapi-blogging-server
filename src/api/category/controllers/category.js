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

      // If not great than 3, then create category, if true return the message
      const finalRes = (await response) ?? super.create(ctx);

      return finalRes;
    },
  })
);

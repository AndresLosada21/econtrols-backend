'use strict';

/**
 * funding-agency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funding-agency.funding-agency');

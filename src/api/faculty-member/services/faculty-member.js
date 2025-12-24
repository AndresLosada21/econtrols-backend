'use strict';

/**
 * faculty-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faculty-member.faculty-member');

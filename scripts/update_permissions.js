const Strapi = require('@strapi/strapi');

async function setPermissions() {
  const strapi = await Strapi().load();

  try {
    console.log('🔓 Setting Public Permissions for API...');

    // 1. Find the Public Role
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (!publicRole) {
      throw new Error('Public role not found');
    }

    // 2. List of content types to enable 'find' and 'findOne'
    const contentTypes = [
      'api::tag.tag',
      'api::partner.partner',
      'api::funding-agency.funding-agency',
      'api::research-line.research-line',
      'api::faculty-member.faculty-member',
      'api::dashboard-metric.dashboard-metric',
      'api::collaborator.collaborator',
      'api::software-tool.software-tool',
      'api::project.project',
      'api::publication.publication',
      'api::alumnus.alumnus',
      'api::news-item.news-item'
    ];

    // Single types that need find permission
    const singleTypes = [
      'api::homepage-setting.homepage-setting',
      'api::research-page-setting.research-page-setting',
      'api::projects-page-setting.projects-page-setting',
      'api::people-page-setting.people-page-setting'
    ];

    const permissions = {};

    // 3. Build permissions object
    // Note: The structure depends on how users-permissions stores it.
    // Easier way: iterate and use the service to update.
    
    // We need to fetch the full permission structure or update it manually.
    // Actually, just using the service might be complex because it overwrites.
    // Let's rely on adding them to the database directly via the query engine if possible, 
    // or better, just tell the user to check permissions if the script is too risky.
    
    // SAFE APPROACH: Just logging what to do or trying to update specific actions.
    
    // Let's try to update the role using the users-permissions service.
    // We need to construct the permissions object that the plugin expects.
    // It's deeply nested.

    // ALTERNATIVE: Use the entity service to create 'plugin::users-permissions.permission' entries.
    // This is safer and standard in v4.
    
    // Process collection types (find + findOne)
    for (const uid of contentTypes) {
      const controllers = uid.split('.')[0]; // e.g., api::tag
      const controllerName = uid.split('.')[1]; // e.g., tag
      
      const actions = ['find', 'findOne'];
      
      for (const action of actions) {
        // Check if permission exists
        const existing = await strapi.query('plugin::users-permissions.permission').findOne({
            where: {
                action: `${uid}.${action}`,
                role: publicRole.id
            }
        });

        if (!existing) {
            await strapi.query('plugin::users-permissions.permission').create({
                data: {
                    action: `${uid}.${action}`,
                    role: publicRole.id,
                }
            });
            console.log(`   + Enabled ${uid}.${action}`);
        } else {
            console.log(`   = Already enabled ${uid}.${action}`);
        }
      }
    }

    // Process single types (find and update for seeding)
    for (const uid of singleTypes) {
      const actions = ['find', 'update'];
      
      for (const action of actions) {
        // Check if permission exists
        const existing = await strapi.query('plugin::users-permissions.permission').findOne({
            where: {
                action: `${uid}.${action}`,
                role: publicRole.id
            }
        });

        if (!existing) {
            await strapi.query('plugin::users-permissions.permission').create({
                data: {
                    action: `${uid}.${action}`,
                    role: publicRole.id,
                }
            });
            console.log(`   + Enabled ${uid}.${action}`);
        } else {
            console.log(`   = Already enabled ${uid}.${action}`);
        }
      }
    }
    
    console.log('✅ Permissions updated successfully!');

  } catch (error) {
    console.error('❌ Error setting permissions:', error);
  } finally {
    strapi.stop();
    process.exit(0);
  }
}

setPermissions();

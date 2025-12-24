import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAlumnusAlumnus extends Schema.CollectionType {
  collectionName: 'alumni_members';
  info: {
    description: 'Egressos do e-Controls (PhD, Mestrado, IC) conforme blueprint Se\u00E7\u00E3o 3.2';
    displayName: 'Alumni';
    pluralName: 'alumni';
    singularName: 'alumnus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    advisor: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::alumnus.alumnus',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    currentInstitution: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    currentPosition: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    currentSector: Attribute.Enumeration<
      ['Academia', 'Ind\u00FAstria', 'Governo', 'Outro', 'Desconhecido']
    >;
    defenseYear: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 2100;
          min: 2000;
        },
        number
      >;
    degreeLevel: Attribute.Enumeration<
      ['PhD', 'Mestrado', 'Inicia\u00E7\u00E3o Cient\u00EDfica/TCC']
    > &
      Attribute.Required;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    email: Attribute.Email;
    fullName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    lattesUrl: Attribute.String;
    linkedinUrl: Attribute.String;
    photo: Attribute.Media<'images'>;
    publicationsCount: Attribute.Integer & Attribute.DefaultTo<0>;
    publishedAt: Attribute.DateTime;
    researchTopic: Attribute.Text;
    slug: Attribute.UID<'api::alumnus.alumnus', 'fullName'>;
    thesisTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::alumnus.alumnus',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollaboratorCollaborator extends Schema.CollectionType {
  collectionName: 'collaborators';
  info: {
    description: 'Colaboradores externos (nacionais e internacionais) do e-Controls conforme blueprint Se\u00E7\u00E3o 5.2 e 5.3';
    displayName: 'Collaborator';
    pluralName: 'collaborators';
    singularName: 'collaborator';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collaborationDescription: Attribute.RichText;
    collaborationType: Attribute.Enumeration<['Internacional', 'Nacional']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collaborator.collaborator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    email: Attribute.Email;
    fullName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    googleScholarUrl: Attribute.String;
    institution: Attribute.Relation<
      'api::collaborator.collaborator',
      'manyToOne',
      'api::partner.partner'
    >;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    jointProjects: Attribute.JSON;
    jointPublications: Attribute.JSON;
    lattesUrl: Attribute.String;
    orcidUrl: Attribute.String;
    photo: Attribute.Media<'images'>;
    position: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    publishedAt: Attribute.DateTime;
    researchArea: Attribute.Text;
    researchGateUrl: Attribute.String;
    slug: Attribute.UID<'api::collaborator.collaborator', 'fullName'>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::collaborator.collaborator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    websiteUrl: Attribute.String;
  };
}

export interface ApiDashboardMetricDashboardMetric
  extends Schema.CollectionType {
  collectionName: 'dashboard_metrics';
  info: {
    description: 'VERS\u00C3O 2 - STANDBY: M\u00E9tricas para dashboard interativo conforme blueprint Se\u00E7\u00E3o 8';
    displayName: 'Dashboard Metric';
    pluralName: 'dashboard-metrics';
    singularName: 'dashboard-metric';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    chartType: Attribute.Enumeration<
      [
        'Counter',
        'Line Chart',
        'Bar Chart',
        'Pie Chart',
        'Heatmap',
        'Map',
        'Gantt',
        'Network Graph',
        'Table'
      ]
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dashboard-metric.dashboard-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dataSource: Attribute.String;
    description: Attribute.Text;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    jsonData: Attribute.JSON;
    lastUpdated: Attribute.DateTime;
    metricName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    metricType: Attribute.Enumeration<
      [
        'Overview',
        'Publication Trends',
        'Research Impact',
        'Team Composition',
        'Geographic Collaboration',
        'Project Portfolio',
        'Student Training',
        'Software Impact'
      ]
    > &
      Attribute.Required;
    stringValue: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::dashboard-metric.dashboard-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updateFrequency: Attribute.Enumeration<
      ['Real-time', 'Daily', 'Weekly', 'Monthly', 'Manual']
    > &
      Attribute.DefaultTo<'Manual'>;
    value: Attribute.Decimal;
  };
}

export interface ApiFacultyMemberFacultyMember extends Schema.CollectionType {
  collectionName: 'faculty_members';
  info: {
    description: 'Faculty members (corpo docente) do grupo e-Controls conforme blueprint';
    displayName: 'Faculty Member';
    pluralName: 'faculty-members';
    singularName: 'faculty-member';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    academicFormation: Attribute.Component<'faculty.academic-formation', true>;
    academicTitle: Attribute.Enumeration<
      ['Graduado', 'Especialista', 'Mestre', 'Doutor', 'P\u00F3s-Doutor']
    >;
    awardsDistinctions: Attribute.Component<'faculty.award-distinction', true>;
    biography: Attribute.RichText;
    completedAdvisees: Attribute.Component<'faculty.advisee', true>;
    coordinatedProjects: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'oneToMany',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    currentGraduateAdvisees: Attribute.Component<'faculty.advisee', true>;
    department: Attribute.String &
      Attribute.DefaultTo<'Departamento de Eletricidade, FT/UFAM'>;
    displayName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    email: Attribute.Email;
    fullName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    googleScholarCitations: Attribute.Integer & Attribute.DefaultTo<0>;
    googleScholarUrl: Attribute.String;
    hIndex: Attribute.Integer & Attribute.DefaultTo<0>;
    institutionalPositions: Attribute.JSON;
    internationalCollaborations: Attribute.RichText;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    lattesUrl: Attribute.String;
    linkedinUrl: Attribute.String;
    newsAsAuthor: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'oneToMany',
      'api::news-item.news-item'
    >;
    newsAsMentioned: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'manyToMany',
      'api::news-item.news-item'
    >;
    orcidUrl: Attribute.String;
    participatingProjects: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'manyToMany',
      'api::project.project'
    >;
    personalWebsite: Attribute.String;
    phone: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    photo: Attribute.Media<'images'>;
    position: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    publications: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'manyToMany',
      'api::publication.publication'
    >;
    publishedAt: Attribute.DateTime;
    researchGateUrl: Attribute.String;
    researchLines: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'manyToMany',
      'api::research-line.research-line'
    >;
    role: Attribute.Enumeration<
      [
        'L\u00EDder',
        'Co-l\u00EDder',
        'Pesquisador Permanente',
        'Pesquisador Associado',
        'Colaborador'
      ]
    > &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    showOnHomepage: Attribute.Boolean & Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::faculty-member.faculty-member', 'fullName'>;
    specializationAreas: Attribute.JSON;
    teachingGraduate: Attribute.JSON;
    teachingPostgraduate: Attribute.JSON;
    totalPublications: Attribute.Integer & Attribute.DefaultTo<0>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::faculty-member.faculty-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterSettingFooterSetting extends Schema.SingleType {
  collectionName: 'footer_settings';
  info: {
    description: 'Configura\u00E7\u00F5es completas do rodap\u00E9 do site';
    displayName: 'Footer Settings';
    pluralName: 'footer-settings';
    singularName: 'footer-setting';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bottomText: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Attribute.DefaultTo<'Desenvolvido com \u2764\uFE0F na Amaz\u00F4nia.'>;
    contactInfo: Attribute.Component<'layout.contact-info'>;
    copyrightText: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }> &
      Attribute.DefaultTo<'e-Controls Research Group. Todos os direitos reservados.'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-setting.footer-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    departmentName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Attribute.DefaultTo<'Departamento de Eletricidade - Faculdade de Tecnologia'>;
    description: Attribute.Text;
    institutionName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Attribute.DefaultTo<'Universidade Federal do Amazonas (UFAM)'>;
    logo: Attribute.Media<'images'>;
    logoAlt: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Attribute.DefaultTo<'e-Controls Logo'>;
    menuColumns: Attribute.Component<'layout.footer-menu-column', true>;
    newsletterDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    newsletterTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    showNewsletter: Attribute.Boolean & Attribute.DefaultTo<false>;
    siteName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Attribute.DefaultTo<'e-Controls'>;
    socialLinks: Attribute.Component<'shared.social-link', true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::footer-setting.footer-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageSettingHomepageSetting extends Schema.SingleType {
  collectionName: 'homepage_setting';
  info: {
    description: 'Configura\u00E7\u00F5es e conte\u00FAdo espec\u00EDfico da homepage (Hero, M\u00E9tricas, etc.)';
    displayName: 'Homepage Settings';
    pluralName: 'homepage-settings';
    singularName: 'homepage-setting';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage-setting.homepage-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    defaultSeo: Attribute.Component<'shared.seo'>;
    department: Attribute.String &
      Attribute.DefaultTo<'Departamento de Eletricidade - Faculdade de Tecnologia'>;
    foundingYear: Attribute.String & Attribute.DefaultTo<'2015'>;
    groupName: Attribute.String &
      Attribute.DefaultTo<'e-Controls - Grupo de Estudos em Controle de Sistemas'>;
    institutionalAffiliation: Attribute.String &
      Attribute.DefaultTo<'Universidade Federal do Amazonas (UFAM)'>;
    introductionText: Attribute.RichText;
    keyMetrics: Attribute.Component<'shared.key-metric', true>;
    location: Attribute.String &
      Attribute.DefaultTo<'Manaus, Amazonas, Brasil'>;
    partnerLogos: Attribute.Media<'images', true>;
    showOnHomepage: Attribute.JSON;
    tagline: Attribute.String &
      Attribute.DefaultTo<'Excel\u00EAncia em Controle de Sistemas na Amaz\u00F4nia'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::homepage-setting.homepage-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavbarSettingNavbarSetting extends Schema.SingleType {
  collectionName: 'navbar_settings';
  info: {
    description: 'Configura\u00E7\u00F5es do menu de navega\u00E7\u00E3o principal (Header)';
    displayName: 'Navbar Settings';
    pluralName: 'navbar-settings';
    singularName: 'navbar-setting';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar-setting.navbar-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ctaButton: Attribute.Component<'layout.cta-button'>;
    isSticky: Attribute.Boolean & Attribute.DefaultTo<true>;
    logo: Attribute.Media<'images'>;
    logoAlt: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Attribute.DefaultTo<'e-Controls Logo'>;
    mainMenu: Attribute.Component<'layout.menu-link', true>;
    showSearch: Attribute.Boolean & Attribute.DefaultTo<false>;
    siteName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Attribute.DefaultTo<'e-Controls'>;
    transparentOnTop: Attribute.Boolean & Attribute.DefaultTo<true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::navbar-setting.navbar-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsItemNewsItem extends Schema.CollectionType {
  collectionName: 'news_items';
  info: {
    description: 'Not\u00EDcias e eventos do e-Controls conforme blueprint Se\u00E7\u00E3o 7';
    displayName: 'News';
    pluralName: 'news-items';
    singularName: 'news-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Attribute.Relation<
      'api::news-item.news-item',
      'manyToOne',
      'api::faculty-member.faculty-member'
    >;
    category: Attribute.Enumeration<
      [
        'Publica\u00E7\u00F5es',
        'Projetos',
        'Eventos',
        'Pr\u00EAmios e Distin\u00E7\u00F5es',
        'Defesas de Tese/Disserta\u00E7\u00E3o',
        'Novas Parcerias',
        'Financiamento',
        'M\u00EDdia/Imprensa',
        'Geral'
      ]
    > &
      Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    coverImage: Attribute.Media<'images'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-item.news-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    eventDate: Attribute.Date;
    externalUrl: Attribute.String;
    gallery: Attribute.Media<'images' | 'videos', true>;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    isPinned: Attribute.Boolean & Attribute.DefaultTo<false>;
    publishDate: Attribute.DateTime & Attribute.Required;
    publishedAt: Attribute.DateTime;
    readingTime: Attribute.Integer & Attribute.DefaultTo<0>;
    relatedMembers: Attribute.Relation<
      'api::news-item.news-item',
      'manyToMany',
      'api::faculty-member.faculty-member'
    >;
    relatedNews: Attribute.Relation<
      'api::news-item.news-item',
      'manyToMany',
      'api::news-item.news-item'
    >;
    relatedProjects: Attribute.Relation<
      'api::news-item.news-item',
      'manyToMany',
      'api::project.project'
    >;
    relatedPublications: Attribute.Relation<
      'api::news-item.news-item',
      'manyToMany',
      'api::publication.publication'
    >;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::news-item.news-item', 'title'>;
    summary: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    tags: Attribute.JSON;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::news-item.news-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    viewCount: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

export interface ApiPartnerPartner extends Schema.CollectionType {
  collectionName: 'partners';
  info: {
    description: 'Parceiros do e-Controls (International, National, Industrial, Funding Agencies) conforme blueprint Se\u00E7\u00E3o 5';
    displayName: 'Partner';
    pluralName: 'partners';
    singularName: 'partner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    collaborationArea: Attribute.Text;
    collaborationType: Attribute.Enumeration<
      [
        'Pesquisa Conjunta',
        'Interc\u00E2mbio Acad\u00EAmico',
        'Desenvolvimento de Software',
        'P&D Industrial',
        'Financiamento',
        'Cotutela',
        'Outros'
      ]
    >;
    collaborators: Attribute.Relation<
      'api::partner.partner',
      'oneToMany',
      'api::collaborator.collaborator'
    >;
    country: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    fundedProjects: Attribute.Component<'shared.funded-project', true>;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    jointPublications: Attribute.JSON;
    logo: Attribute.Media<'images'>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    partnerType: Attribute.Enumeration<
      [
        'International University',
        'National University',
        'Industrial Partner',
        'Research Center',
        'Funding Agency',
        'Government',
        'Other'
      ]
    > &
      Attribute.Required;
    projects: Attribute.Relation<
      'api::partner.partner',
      'manyToMany',
      'api::project.project'
    >;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::partner.partner', 'name'>;
    startDate: Attribute.Date;
    state: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    supportType: Attribute.JSON;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    websiteUrl: Attribute.String;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    description: 'Projetos de pesquisa do e-Controls (Current e Finished) conforme blueprint';
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    achievedResults: Attribute.RichText;
    coordinator: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::faculty-member.faculty-member'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    currentStatus: Attribute.Text;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    duration: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    endDate: Attribute.Date;
    expectedResults: Attribute.RichText;
    featuredImage: Attribute.Media<'images'>;
    fundingAgency: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    fundingAmount: Attribute.Decimal;
    gallery: Attribute.Media<'images' | 'videos', true>;
    impactLegacy: Attribute.RichText;
    keywords: Attribute.JSON;
    methodology: Attribute.RichText;
    objectives: Attribute.RichText;
    processNumber: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    progressPercentage: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    publishedAt: Attribute.DateTime;
    relatedNews: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::news-item.news-item'
    >;
    relatedPartners: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::partner.partner'
    >;
    relatedPublications: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::publication.publication'
    >;
    repositoryUrl: Attribute.String;
    researchLine: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::research-line.research-line'
    >;
    seo: Attribute.Component<'shared.seo'>;
    showOnHomepage: Attribute.Boolean & Attribute.DefaultTo<false>;
    slug: Attribute.UID<'api::project.project', 'title'>;
    startDate: Attribute.Date & Attribute.Required;
    status: Attribute.Enumeration<
      ['Em Andamento', 'Conclu\u00EDdo', 'Pausado', 'Planejado']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Em Andamento'>;
    summary: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    teamMembers: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::faculty-member.faculty-member'
    >;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    websiteUrl: Attribute.String;
  };
}

export interface ApiPublicationPublication extends Schema.CollectionType {
  collectionName: 'publications';
  info: {
    description: 'Publica\u00E7\u00F5es cient\u00EDficas do e-Controls (Journal, Conference, Thesis, Software) conforme blueprint';
    displayName: 'Publication';
    pluralName: 'publications';
    singularName: 'publication';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    abstract: Attribute.RichText;
    authors: Attribute.Relation<
      'api::publication.publication',
      'manyToMany',
      'api::faculty-member.faculty-member'
    >;
    authorsText: Attribute.Text & Attribute.Required;
    awardReceived: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    bookTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    citationAbnt: Attribute.Text;
    citationApa: Attribute.Text;
    citationBibtex: Attribute.Text;
    citationCount: Attribute.Integer & Attribute.DefaultTo<0>;
    conferenceName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    coverImage: Attribute.Media<'images'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::publication.publication',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    datasetUrl: Attribute.String;
    doi: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    downloadCount: Attribute.Integer & Attribute.DefaultTo<0>;
    externalUrl: Attribute.String;
    impactFactor: Attribute.Decimal;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    isOpenAccess: Attribute.Boolean & Attribute.DefaultTo<false>;
    issnIsbn: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    issue: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    journalName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    keywords: Attribute.JSON;
    month: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      >;
    pages: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    pdfFile: Attribute.Media<'files'>;
    pdfUrl: Attribute.String;
    publicationStatus: Attribute.Enumeration<
      ['Published', 'Accepted', 'Submitted', 'In Press']
    > &
      Attribute.DefaultTo<'Published'>;
    publicationType: Attribute.Enumeration<
      [
        'Journal Article',
        'Conference Paper',
        'Book',
        'Book Chapter',
        'Thesis - PhD',
        'Thesis - Masters',
        'Technical Report',
        'Software/Tool'
      ]
    > &
      Attribute.Required;
    publishedAt: Attribute.DateTime;
    publisher: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    qualis: Attribute.Enumeration<
      ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C', 'N/A']
    >;
    quartile: Attribute.Enumeration<['Q1', 'Q2', 'Q3', 'Q4', 'N/A']>;
    relatedNews: Attribute.Relation<
      'api::publication.publication',
      'manyToMany',
      'api::news-item.news-item'
    >;
    relatedProject: Attribute.Relation<
      'api::publication.publication',
      'manyToOne',
      'api::project.project'
    >;
    repositoryUrl: Attribute.String;
    researchLine: Attribute.Relation<
      'api::publication.publication',
      'manyToOne',
      'api::research-line.research-line'
    >;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::publication.publication', 'title'>;
    supplementaryMaterials: Attribute.Media<'files', true>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::publication.publication',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    videoUrl: Attribute.String;
    viewCount: Attribute.Integer & Attribute.DefaultTo<0>;
    volume: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    year: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 2100;
          min: 1950;
        },
        number
      >;
  };
}

export interface ApiResearchLineResearchLine extends Schema.CollectionType {
  collectionName: 'research_lines';
  info: {
    description: 'Linhas de pesquisa do e-Controls conforme blueprint (8 \u00E1reas principais)';
    displayName: 'Research Line';
    pluralName: 'research-lines';
    singularName: 'research-line';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.Enumeration<
      ['Principal', 'Secund\u00E1ria', 'Emergente']
    > &
      Attribute.DefaultTo<'Principal'>;
    colorTheme: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::research-line.research-line',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    facultyMembers: Attribute.Relation<
      'api::research-line.research-line',
      'manyToMany',
      'api::faculty-member.faculty-member'
    >;
    featuredImage: Attribute.Media<'images'>;
    fullDescription: Attribute.RichText;
    icon: Attribute.Media<'images'>;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    keywords: Attribute.JSON;
    practicalApplications: Attribute.RichText;
    publishedAt: Attribute.DateTime;
    relatedProjects: Attribute.Relation<
      'api::research-line.research-line',
      'oneToMany',
      'api::project.project'
    >;
    relatedPublications: Attribute.Relation<
      'api::research-line.research-line',
      'oneToMany',
      'api::publication.publication'
    >;
    relatedSoftwareTools: Attribute.Relation<
      'api::research-line.research-line',
      'manyToMany',
      'api::software-tool.software-tool'
    >;
    researchTopics: Attribute.Component<'research.subtopic', true>;
    seo: Attribute.Component<'shared.seo'>;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    slug: Attribute.UID<'api::research-line.research-line', 'title'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::research-line.research-line',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSoftwareToolSoftwareTool extends Schema.CollectionType {
  collectionName: 'software_tools';
  info: {
    description: 'Ferramentas de software desenvolvidas pelo e-Controls conforme blueprint Se\u00E7\u00E3o 6 p\u00E1gina 6';
    displayName: 'Software Tool';
    pluralName: 'software-tools';
    singularName: 'software-tool';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::software-tool.software-tool',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    currentVersion: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Attribute.RichText & Attribute.Required;
    developedInCollaborationWith: Attribute.Component<
      'software.collaboration',
      true
    >;
    developers: Attribute.Component<'software.developer', true>;
    displayOrder: Attribute.Integer & Attribute.DefaultTo<0>;
    documentationUrl: Attribute.String;
    downloadCount: Attribute.Integer & Attribute.DefaultTo<0>;
    downloadUrl: Attribute.String;
    forkCount: Attribute.Integer & Attribute.DefaultTo<0>;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    license: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    logo: Attribute.Media<'images'>;
    mainApplication: Attribute.Text;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    platforms: Attribute.JSON;
    programmingLanguages: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    relatedPublications: Attribute.JSON;
    releaseYear: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 2100;
          min: 2000;
        },
        number
      >;
    repositoryUrl: Attribute.String;
    researchLines: Attribute.Relation<
      'api::software-tool.software-tool',
      'manyToMany',
      'api::research-line.research-line'
    >;
    screenshots: Attribute.Media<'images', true>;
    shortDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    slug: Attribute.UID<'api::software-tool.software-tool', 'name'>;
    starCount: Attribute.Integer & Attribute.DefaultTo<0>;
    tags: Attribute.JSON;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::software-tool.software-tool',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    websiteUrl: Attribute.String;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    description: 'Sistema de tags/taxonomia para organiza\u00E7\u00E3o e filtragem de conte\u00FAdo conforme blueprint';
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    color: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text;
    displayName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    icon: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    parentTag: Attribute.Relation<'api::tag.tag', 'manyToOne', 'api::tag.tag'>;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::tag.tag', 'name'>;
    tagType: Attribute.Enumeration<
      [
        'Linha de Pesquisa',
        'Tipo de Conte\u00FAdo',
        'Status',
        'Audi\u00EAncia',
        'Geral'
      ]
    > &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    usageCount: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::alumnus.alumnus': ApiAlumnusAlumnus;
      'api::collaborator.collaborator': ApiCollaboratorCollaborator;
      'api::dashboard-metric.dashboard-metric': ApiDashboardMetricDashboardMetric;
      'api::faculty-member.faculty-member': ApiFacultyMemberFacultyMember;
      'api::footer-setting.footer-setting': ApiFooterSettingFooterSetting;
      'api::homepage-setting.homepage-setting': ApiHomepageSettingHomepageSetting;
      'api::navbar-setting.navbar-setting': ApiNavbarSettingNavbarSetting;
      'api::news-item.news-item': ApiNewsItemNewsItem;
      'api::partner.partner': ApiPartnerPartner;
      'api::project.project': ApiProjectProject;
      'api::publication.publication': ApiPublicationPublication;
      'api::research-line.research-line': ApiResearchLineResearchLine;
      'api::software-tool.software-tool': ApiSoftwareToolSoftwareTool;
      'api::tag.tag': ApiTagTag;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}

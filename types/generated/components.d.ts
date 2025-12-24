import type { Attribute, Schema } from '@strapi/strapi';

export interface FacultyAcademicFormation extends Schema.Component {
  collectionName: 'components_faculty_academic_formations';
  info: {
    description: 'Forma\u00E7\u00E3o acad\u00EAmica (gradua\u00E7\u00E3o, mestrado, doutorado, etc)';
    displayName: 'Academic Formation';
  };
  attributes: {
    degree: Attribute.Enumeration<
      [
        'Gradua\u00E7\u00E3o',
        'Especializa\u00E7\u00E3o',
        'Mestrado',
        'Doutorado',
        'P\u00F3s-Doutorado',
        'Livre-Doc\u00EAncia'
      ]
    > &
      Attribute.Required;
    details: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    field: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    institution: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
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

export interface FacultyAdvisee extends Schema.Component {
  collectionName: 'components_faculty_advisees';
  info: {
    description: 'Orientando de p\u00F3s-gradua\u00E7\u00E3o ou gradua\u00E7\u00E3o';
    displayName: 'Advisee (Orientando)';
  };
  attributes: {
    level: Attribute.Enumeration<
      ['Doutorado', 'Mestrado', 'Inicia\u00E7\u00E3o Cient\u00EDfica', 'TCC']
    > &
      Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    startYear: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 2100;
          min: 2000;
        },
        number
      >;
    status: Attribute.Enumeration<['Em andamento', 'Conclu\u00EDdo']> &
      Attribute.DefaultTo<'Em andamento'>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    topic: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    year: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 2100;
          min: 2000;
        },
        number
      >;
  };
}

export interface FacultyAwardDistinction extends Schema.Component {
  collectionName: 'components_faculty_award_distinctions';
  info: {
    description: 'Pr\u00EAmios e distin\u00E7\u00F5es recebidos';
    displayName: 'Award/Distinction';
  };
  attributes: {
    description: Attribute.Text;
    event: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
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

export interface LayoutContactInfo extends Schema.Component {
  collectionName: 'components_layout_contact_infos';
  info: {
    description: 'Informa\u00E7\u00F5es de contato para o footer';
    displayName: 'Contact Info';
  };
  attributes: {
    address: Attribute.Text;
    city: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    country: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Attribute.DefaultTo<'Brasil'>;
    email: Attribute.Email & Attribute.Required;
    mapUrl: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    phone: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    postalCode: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    state: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface LayoutCtaButton extends Schema.Component {
  collectionName: 'components_layout_cta_buttons';
  info: {
    description: 'Bot\u00E3o de call-to-action para navbar e outras se\u00E7\u00F5es';
    displayName: 'CTA Button';
  };
  attributes: {
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<true>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Attribute.DefaultTo<'contato'>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Attribute.DefaultTo<'#contact'>;
    variant: Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost']
    > &
      Attribute.DefaultTo<'outline'>;
  };
}

export interface LayoutFooterMenuColumn extends Schema.Component {
  collectionName: 'components_layout_footer_menu_columns';
  info: {
    description: 'Coluna de links para o footer';
    displayName: 'Footer Menu Column';
  };
  attributes: {
    links: Attribute.Component<'layout.menu-link', true>;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface LayoutMenuLink extends Schema.Component {
  collectionName: 'components_layout_menu_links';
  info: {
    description: 'Link de navega\u00E7\u00E3o para o menu principal';
    displayName: 'Menu Link';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface ResearchSubtopic extends Schema.Component {
  collectionName: 'components_research_subtopics';
  info: {
    description: 'Subt\u00F3pico de uma linha de pesquisa';
    displayName: 'Research Subtopic';
  };
  attributes: {
    description: Attribute.Text;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SharedFundedProject extends Schema.Component {
  collectionName: 'components_shared_funded_projects';
  info: {
    description: 'Projeto financiado por ag\u00EAncia de fomento';
    displayName: 'Funded Project';
  };
  attributes: {
    amount: Attribute.Decimal;
    description: Attribute.Text;
    grantNumber: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    projectTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    year: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 2100;
          min: 2000;
        },
        number
      >;
  };
}

export interface SharedKeyMetric extends Schema.Component {
  collectionName: 'components_shared_key_metrics';
  info: {
    description: 'M\u00E9trica chave para exibi\u00E7\u00E3o na homepage (ex: total de publica\u00E7\u00F5es, cita\u00E7\u00F5es)';
    displayName: 'Key Metric';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    value: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seo';
  info: {
    description: 'Metadados para SEO e compartilhamento em redes sociais';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaRobots: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    ogImage: Attribute.Media<'images'>;
    ogTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    twitterCard: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Attribute.DefaultTo<'summary_large_image'>;
    twitterDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    twitterImage: Attribute.Media<'images'>;
    twitterTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSocialLink extends Schema.Component {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Link para rede social ou plataforma externa';
    displayName: 'Social Link';
  };
  attributes: {
    label: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    platform: Attribute.Enumeration<
      [
        'LinkedIn',
        'Twitter',
        'Facebook',
        'Instagram',
        'YouTube',
        'GitHub',
        'ResearchGate',
        'Google Scholar',
        'ORCID',
        'Lattes',
        'Website',
        'Outro'
      ]
    > &
      Attribute.Required;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface SoftwareCollaboration extends Schema.Component {
  collectionName: 'components_software_collaborations';
  info: {
    description: 'Institui\u00E7\u00E3o colaboradora no desenvolvimento do software';
    displayName: 'Collaboration';
  };
  attributes: {
    collaborationType: Attribute.Enumeration<
      ['Co-development', 'Funding', 'Testing', 'Support']
    >;
    country: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    institutionName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SoftwareDeveloper extends Schema.Component {
  collectionName: 'components_software_developers';
  info: {
    description: 'Desenvolvedor ou institui\u00E7\u00E3o envolvida no desenvolvimento do software';
    displayName: 'Developer';
  };
  attributes: {
    affiliation: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    role: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faculty.academic-formation': FacultyAcademicFormation;
      'faculty.advisee': FacultyAdvisee;
      'faculty.award-distinction': FacultyAwardDistinction;
      'layout.contact-info': LayoutContactInfo;
      'layout.cta-button': LayoutCtaButton;
      'layout.footer-menu-column': LayoutFooterMenuColumn;
      'layout.menu-link': LayoutMenuLink;
      'research.subtopic': ResearchSubtopic;
      'shared.funded-project': SharedFundedProject;
      'shared.key-metric': SharedKeyMetric;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'software.collaboration': SoftwareCollaboration;
      'software.developer': SoftwareDeveloper;
    }
  }
}

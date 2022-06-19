export interface Messages {
  backToHome: string;
  siteOwner: string;
  siteDescription: string;
  contact: {
    footer: string;
    title: string;
    details: string;
  };
  home: {
    subtitle: string;
  };
  firstExamples: {
    title: string;
    details: string;
  };
  operatingForm: {
    title: string;
  };
  activityAndConcept: {
    title: string;
  };
  development: {
    title: string;
  };
  piaget: {
    title: string;
    details: string;
  };
  firstYears: {
    title: string;
    details: string;
  };
  professional: {
    title: string;
  };
  epistemology: {
    title: string;
  };
  conceptualFields: {
    title: string;
  };
  unpublished: {
    title: string;
    details: {
      first: string;
      second: string;
    };
  };
  appendix: {
    title: string;
  };
  notFound: {
    title: string;
    message: string;
  };
}

export interface AllNamespaces {
  messages: Messages;
}

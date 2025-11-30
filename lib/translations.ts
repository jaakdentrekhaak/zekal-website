export type Language = "nl" | "fr" | "en";

export interface Translations {
  nav: {
    home: string;
    products: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  products: {
    title: string;
    acceptor: {
      name: string;
      description: string;
      benefits: string[];
    };
    inspector: {
      name: string;
      description: string;
      benefits: string[];
    };
  };
  reference: {
    title: string;
    quote: string;
    company: string;
  };
  contact: {
    title: string;
    subtitle: string;
    availabilityLink: string;
    autoresponse: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      subjectGeneral: string;
      subjectOther: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
    };
  };
  about: {
    title: string;
    description: string;
    mission: string;
  };
  footer: {
    company: string;
    vat: string;
    rights: string;
  };
  availability: {
    title: string;
    subtitle: string;
    backToHome: string;
  };
}

export const translations: Record<Language, Translations> = {
  nl: {
    nav: {
      home: "Home",
      products: "Producten",
      about: "Over Ons",
    },
    hero: {
      title: "Platformen voor Industriële Parken",
      subtitle:
        "Optimaliseer uw bedrijfsprocessen met onze innovatieve software voor acceptatie en inspectie",
      cta: "Ontdek onze oplossingen",
    },
    products: {
      title: "Onze Oplossingen",
      acceptor: {
        name: "AcceptOr",
        description:
          "Acceptatieplatform om non-conformiteiten op inkomende vrachten te verminderen",
        benefits: [
          "Efficiënt goederenbeheer",
          "Verminder non-conformiteiten",
          "Digitaal goedkeuringsproces",
          "Real-time tracking en rapportage",
        ],
      },
      inspector: {
        name: "InspectOr",
        description:
          "Inspectieplatform voor inspecties en onderhoud van machines en installaties",
        benefits: [
          "Gestructureerde inspecties",
          "Preventief onderhoud",
          "Digitale checklists",
          "Historiek en traceerbaarheid",
        ],
      },
    },
    reference: {
      title: "Vertrouwd Door",
      quote:
        "Het goedkeuringssysteem van Zekal heeft het aantal non-conformiteiten op onze parken sterk verminderd.",
      company: "Bruco - Recycling & Containers",
    },
    contact: {
      title: "Neem Contact Op",
      subtitle:
        "Geïnteresseerd in onze oplossingen? Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op.",
      availabilityLink: "Plan een afspraak",
      autoresponse:
        "Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.",
      form: {
        name: "Naam",
        namePlaceholder: "Uw volledige naam",
        email: "E-mailadres",
        emailPlaceholder: "uw.email@voorbeeld.be",
        company: "Bedrijf",
        companyPlaceholder: "Uw bedrijfsnaam",
        subject: "Onderwerp",
        subjectPlaceholder: "Selecteer een onderwerp",
        subjectGeneral: "Algemene vraag",
        subjectOther: "Andere",
        message: "Bericht",
        messagePlaceholder: "Vertel ons hoe we u kunnen helpen...",
        submit: "Verstuur Bericht",
        sending: "Bezig met versturen...",
      },
    },
    about: {
      title: "Over Zekal",
      description:
        "Bij Zekal zijn we toegewijd aan het leveren van innovatieve softwareoplossingen die processen voor industriële parken vereenvoudigen.",
      mission:
        "Onze missie is om de bedrijfsvoering te optimaliseren, de productiviteit te verhogen en fouten te verminderen door middel van gebruiksvriendelijke digitale platforms.",
    },
    footer: {
      company: "Zekal",
      vat: "BTW: BE 1002.570.026",
      rights: "© 2025 Zekal. Alle rechten voorbehouden.",
    },
    availability: {
      title: "Beschikbaarheid",
      subtitle:
        "Bekijk mijn agenda om een geschikt moment te vinden voor een afspraak.",
      backToHome: "Terug naar home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      products: "Produits",
      about: "À Propos",
    },
    hero: {
      title: "Platformes pour Parcs Industriels",
      subtitle:
        "Optimisez vos processus opérationnels avec nos logiciels innovants d'acceptation et d'inspection",
      cta: "Découvrez nos solutions",
    },
    products: {
      title: "Nos Solutions",
      acceptor: {
        name: "AcceptOr",
        description:
          "Plateforme d'acceptation pour réduire les non-conformités sur les livraisons entrantes",
        benefits: [
          "Gestion efficace des marchandises",
          "Réduire les non-conformités",
          "Processus d'approbation numérique",
          "Suivi et rapports en temps réel",
        ],
      },
      inspector: {
        name: "InspectOr",
        description:
          "Plateforme d'inspection pour les inspections et la maintenance des machines et installations",
        benefits: [
          "Inspections structurées",
          "Maintenance préventive",
          "Listes de contrôle numériques",
          "Historique et traçabilité",
        ],
      },
    },
    reference: {
      title: "Ils Nous Font Confiance",
      quote:
        "Le système d'approbation de Zekal a considérablement réduit le nombre de non-conformités dans nos parcs.",
      company: "Bruco - Recyclage & Conteneurs",
    },
    contact: {
      title: "Contactez-Nous",
      subtitle:
        "Intéressé par nos solutions ? Vous avez des questions ou souhaitez plus d'informations ? N'hésitez pas à nous contacter.",
      availabilityLink: "Planifier un rendez-vous",
      autoresponse:
        "Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom complet",
        email: "Adresse e-mail",
        emailPlaceholder: "votre.email@exemple.be",
        company: "Entreprise",
        companyPlaceholder: "Nom de votre entreprise",
        subject: "Sujet",
        subjectPlaceholder: "Sélectionnez un sujet",
        subjectGeneral: "Question générale",
        subjectOther: "Autre",
        message: "Message",
        messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
        submit: "Envoyer le Message",
        sending: "Envoi en cours...",
      },
    },
    about: {
      title: "À Propos de Zekal",
      description:
        "Chez Zekal, nous nous engageons à fournir des solutions logicielles innovantes qui simplifient les processus pour les parcs industriels.",
      mission:
        "Notre mission est d'optimiser les opérations, d'augmenter la productivité et de réduire les erreurs grâce à des plateformes numériques conviviales.",
    },
    footer: {
      company: "Zekal",
      vat: "TVA: BE 1002.570.026",
      rights: "© 2025 Zekal. Tous droits réservés.",
    },
    availability: {
      title: "Disponibilité",
      subtitle:
        "Consultez mon calendrier pour trouver un moment approprié pour un rendez-vous.",
      backToHome: "Retour à l'accueil",
    },
  },
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
    },
    hero: {
      title: "Platforms for Industrial Parks",
      subtitle:
        "Optimize your operational processes with our innovative acceptance and inspection software",
      cta: "Discover our solutions",
    },
    products: {
      title: "Our Solutions",
      acceptor: {
        name: "AcceptOr",
        description:
          "Acceptance platform to reduce non-conformities on incoming shipments",
        benefits: [
          "Efficient goods management",
          "Reduce non-conformities",
          "Digital approval process",
          "Real-time tracking and reporting",
        ],
      },
      inspector: {
        name: "InspectOr",
        description:
          "Inspection platform for inspections and maintenance of machines and installations",
        benefits: [
          "Structured inspections",
          "Preventive maintenance",
          "Digital checklists",
          "History and traceability",
        ],
      },
    },
    reference: {
      title: "Trusted By",
      quote:
        "Zekal's approval system has significantly reduced the number of non-conformities at our parks.",
      company: "Bruco - Recycling & Containers",
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Interested in our solutions? Have questions or need more information? Feel free to reach out to us.",
      availabilityLink: "Schedule a meeting",
      autoresponse:
        "Thank you for your message! We will get back to you as soon as possible.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email Address",
        emailPlaceholder: "your.email@example.com",
        company: "Company",
        companyPlaceholder: "Your company name",
        subject: "Subject",
        subjectPlaceholder: "Select a subject",
        subjectGeneral: "General inquiry",
        subjectOther: "Other",
        message: "Message",
        messagePlaceholder: "Tell us how we can help you...",
        submit: "Send Message",
        sending: "Sending...",
      },
    },
    about: {
      title: "About Zekal",
      description:
        "At Zekal, we are committed to delivering innovative software solutions that simplify processes for industrial parks.",
      mission:
        "Our mission is to optimize operations, increase productivity, and reduce errors through user-friendly digital platforms.",
    },
    footer: {
      company: "Zekal",
      vat: "VAT: BE 1002.570.026",
      rights: "© 2025 Zekal. All rights reserved.",
    },
    availability: {
      title: "Availability",
      subtitle: "Check my calendar to find a suitable time for a meeting.",
      backToHome: "Back to home",
    },
  },
};

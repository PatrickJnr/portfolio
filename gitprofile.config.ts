// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'patrickjnr', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/patrickjnr/patrickjnr.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/patrickjnr/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['patrickjnr/my-project1', 'patrickjnr/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['patrickjnr/gitprofile', 'patrickjnr/pandora'], // List of repository names to display. example: ['patrickjnr/my-project1', 'patrickjnr/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
    },
  },
  seo: {
    title: 'Portfolio of Patrick Jr.',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'patrickjrc',
    twitter: '_patrickjnr',
    mastodon: 'PatrickJr@tonybark.com',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: 'PatrickJr',
    threads: '',
    youtube: 'patrickjrschannel', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://grimtech.co.uk',
    phone: '',
    email: 'admin@grimtech.co.uk',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [],
  experiences: [{}, {}],
  certifications: [{}],
  educations: [{}, {}],
  publications: [{}, {}],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-J2EWZCWC7R', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/patrickjnr/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

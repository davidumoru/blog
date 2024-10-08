/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'David Umoru',
  author: 'David Umoru',
  headerTitle: 'David Umoru',
  image: '/static/images/avatar.png',
  description: `I'm a current college student navigating life's twists and turns. I'm constantly exploring and experimenting and writing is a new way for me to understand myself. Feel free to leave a comment or contact me!`,
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://davidumoru.me',
  siteRepo: 'https://github.com/davidumoru/blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'hey@davidumoru.me',
  github: 'https://github.com/davidumoru',
  twitter: 'https://twitter.com/thedavidumoru',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/david-umoru/',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // googleAnalytics: {
    //  googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'mailchimp',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata

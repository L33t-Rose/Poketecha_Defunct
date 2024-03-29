const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  //   purge: {
  //     // purge:{

  //     // }
  //     content: ['./**/**/*.html', './**/**/*.svelte'],
  //     // purge: ['./**/**/*.html', './**/**/*.svelte'],

  //     // options: {
  //     //     whitelistPatterns: [/svelte-/],
  //     //     defaultExtractor: (content) =>
  //     //         [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
  //     // },
  //     defaultExtractor: (content) => {
  //       const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
  //       const broadMatchesWithoutTrailingSlash = broadMatches.map((match) =>
  //         _.trimEnd(match, '\\')
  //       );
  //       const matches = broadMatches.concat(broadMatchesWithoutTrailingSlash);
  //       return matches;
  //     },
  //     enabled: isProduction,
  //   },

  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};

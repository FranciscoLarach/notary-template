const path = require(`path`);

const aliasesMapper = (prefix = `src`) => ({
  '@assets': `${prefix}/assets`,
  '@components': `${prefix}/components`,
  '@design-system': `${prefix}/design-system`,
  '@hooks': `${prefix}/hooks`,
  '@styles': `${prefix}/styles`,
});

const SRC = `./src`;
const aliases = aliasesMapper(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};

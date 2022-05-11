/** @type {import('next').NextConfig} */
module.exports = {
  compress: true,
  reactStrictMode: true,

  sassOptions: {
    prependData: `@import "./src/assets/scss/index.scss";`,
  },
};

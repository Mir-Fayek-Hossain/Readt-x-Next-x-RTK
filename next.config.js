/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        // providing the locales supported by your application
        locales: ["fr", "en"],
        //  default locale used when the non-locale paths are visited
        defaultLocale: "en",
        //localeDetection: false,
    },
};

module.exports = nextTranslate(nextConfig);

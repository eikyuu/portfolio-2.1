const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  distDir: "build",
  include: path.resolve(__dirname, "public/svg"),
  images: {
    deviceSizes: [640, 780, 1280, 1920, 3840],
  },
  target: "serverless",
});

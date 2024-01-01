const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
 
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  themes: ["light", "dark", "cupcake"]
});
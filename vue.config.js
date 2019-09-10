module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/variables.scss";
          @import "@/styles/keyframes.scss";
          @import "@/styles/mixins.scss";
        `
      }
    }
  }
};

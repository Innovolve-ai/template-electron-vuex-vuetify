module.exports = {
  devServer: {
    port: process.env.PORT
  },
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        directories: {
          buildResources: "build"
        },
        asar: true,
        win: {
          target: "nsis"
        },
        mac: {
          category: "public.app-category.productivity"
        },
        deb: {
          packageCategory: "devel"
        }
      },
      linux: {
        category: "Development"
      }
    }
  }
};

module.exports = ({ env }) => ({
  menus: {
    enabled: true,
    config: {
      maxDepth: 3,
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          upload_preset: "algophotos",
        },
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "hello@alexandrugorgos.com",
        defaultReplyTo: "hello@alexandrugorgos.com",
      },
    },
  },
  graphql: { config: { shadowCRUD: true, depthLimit: 10 } },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a3dc6c0aeadcc36f2f3687b6e02e03a'),
  },
});

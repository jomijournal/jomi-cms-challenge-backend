module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfee1c43fb8d2e506ad627'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});

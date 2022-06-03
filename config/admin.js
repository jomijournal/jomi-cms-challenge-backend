module.exports = ({ env }) => ({
  auth: {
    secret: env('JWT_SECRET'),
  },
  apiToken: {
    salt: env('APP_KEYS'),
  },
});

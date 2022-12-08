module.exports = {
  include: ['src/**/*.js'],
  exclude: [
    'src/api/**',
    '**/*.{test,spec}.js',
    'src/database/models/index.js',
    'src/database/migrations/**',
    'src/database/seeders/**',
    'src/database/routers/**',
    'src/database/middlewares/**',
  ],
};

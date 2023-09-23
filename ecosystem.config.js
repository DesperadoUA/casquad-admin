module.exports = {
  apps: [
    {
      name: 'admin',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        PORT: 3001
      }
    }
  ]
}


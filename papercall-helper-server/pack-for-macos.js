const { exec } = require('pkg')

exec(['src/app.js', '--target', 'latest-macos-x64', '--output', 'papercall-helper-mac'])

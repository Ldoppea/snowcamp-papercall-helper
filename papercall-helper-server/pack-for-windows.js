const { exec } = require('pkg')

exec(['src/app.js', '--target', 'latest-win-x64', '--output', 'papercall-helper-win.exe'])
// exec(['src/app.js', '--target', 'latest-macos-x64', '--output', 'papercall-helper-mac.app'])
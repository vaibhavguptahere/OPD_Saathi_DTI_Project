const fs = require('fs');
const path = require('path');

const screensDir = 'c:/Users/vaibh/Downloads/OPD_Saathi_Working/mobile/src/screens';
const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.tsx'));

const routeMap = {
  '/dashboard': 'Dashboard',
  '/home': 'Dashboard',
  '/select-hospital': 'SelectHospital',
  '/departments': 'Departments',
  '/doctors': 'Doctors',
  '/queue': 'Queue',
  '/profile': 'Profile',
  '/history': 'History',
  '/login': 'Auth',
  '/signup': 'Auth',
  '/auth': 'Auth',
  '/confirm': 'Confirm',
  '/success': 'Success',
  '/schedule': 'Schedule'
};

files.forEach(file => {
  const filePath = path.join(screensDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix navigation.navigate('/path') -> navigation.navigate('Screen')
  content = content.replace(/navigation\.navigate\(['"](\/[^'"]+)['"]\)/g, (match, path) => {
    // Find matching route or capitalize and remove slash
    const screen = routeMap[path.toLowerCase()] || path.substring(1).charAt(0).toUpperCase() + path.substring(2);
    return `navigation.navigate('${screen}')`;
  });

  fs.writeFileSync(filePath, content);
});

console.log('Navigation Routing Hardened');

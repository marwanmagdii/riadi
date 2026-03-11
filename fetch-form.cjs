const https = require('https');

https.get('https://docs.google.com/forms/d/e/1FAIpQLScYDgPYlaN0WZBpwu3I0mZdPzD-ITAFdjiw3J8fQOeFglg7HA/viewform', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/entry\.[0-9]+/g);
    if (matches) {
      console.log([...new Set(matches)]);
    }
    
    const fbzxMatch = data.match(/name="fbzx" value="(.*?)"/);
    console.log("fbzx:", fbzxMatch ? fbzxMatch[1] : null);
    
    const scriptMatches = data.match(/var FB_PUBLIC_LOAD_DATA_ = (.*?);/);
    if (scriptMatches) {
        try {
            const parsed = JSON.parse(scriptMatches[1]);
            const fields = parsed[1][1];
            fields.forEach(f => {
                console.log(f[1], "-> entry." + f[4][0][0]);
            });
        } catch(e) {
            console.log("Error parsing");
        }
    }
  });
});

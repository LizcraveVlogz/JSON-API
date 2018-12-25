const staticData = require("./static/data.json");
if (!staticData) return;

console.log(`${JSON.stringify(staticData, null, 4)}`);
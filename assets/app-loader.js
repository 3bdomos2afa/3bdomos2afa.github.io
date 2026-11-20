const files = ["/assets/app-part0.txt?v=2", "/assets/app-part1.txt?v=2", "/assets/app-part2.txt?v=2"];
const parts = await Promise.all(files.map(async (path) => { const response = await fetch(path); if (!response.ok) throw new Error(`App asset failed: ${path}`); return response.text(); }));
const app = URL.createObjectURL(new Blob([parts.join("")], {type: "text/javascript"}));
await import(app);

import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
    const country = params.country;
    const dir = path.join(process.cwd(), 'src', 'app', 'api', country + "Daten" + '.json');
    const fileContents = fs.readFileSync(dir, 'utf8');
    const weatherData = JSON.parse(fileContents);
    return new Response(JSON.stringify(weatherData), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

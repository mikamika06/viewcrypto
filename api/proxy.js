export default async function handler(req, res) {
    const { endpoint, ...params } = req.query;
    
    try {
        const apiUrl = `https://api.coingecko.com/api/v3/${endpoint}`;
        const response = await fetch(`${apiUrl}?${new URLSearchParams(params)}`);
        
        if (!response.ok) {
            return res.status(response.status).json({ 
                error: `API responded with status code ${response.status}` 
            });
        }
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
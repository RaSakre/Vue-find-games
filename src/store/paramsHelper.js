export function buildApiUrl(endpoint, params = {}) {
        const baseUrl = 'https://api.rawg.io/api';
        const apiKey = '785f5a66e21f48a59ed6501ba3d2c48a';
        const searchParams = new URLSearchParams({ key: apiKey });
        
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                searchParams.append(key, value);
            }
        });
        const paramsString = searchParams.toString().replace(/\+/g, '%20');
        return `${baseUrl}/${endpoint}?${paramsString}`;
    }



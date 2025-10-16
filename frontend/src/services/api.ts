const API_URL = 'http://localhost:8000/game/';
export const api = {
  get(endpoint: string): Promise<any> {
	return new Promise((resolve, reject) => {
	  fetch(`${API_URL}${endpoint}`)
		.then(response => response.json())
		.then(data => resolve(data))
		.catch(error => reject(error));
	});
  },
  post(endpoint: string, data: any): Promise<any> {
	return new Promise((resolve, reject) => {
	  fetch(`${API_URL}${endpoint}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	  })
		.then(response => response.json())
		.then(data => resolve(data))
		.catch(error => reject(error));
	});
  }
};
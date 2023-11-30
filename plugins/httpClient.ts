import { defineNuxtPlugin } from "nuxt/app"

export interface HttpClient {
    get: (url: string, options?: RequestInit) => Promise<any>;
    post: (url: string, body: any, options?: RequestInit) => Promise<any>;
}

export default defineNuxtPlugin(() => {
    const httpClient: HttpClient = {
        async get(url, options: RequestInit = {}) {
            try {
                const response = await fetch(url, { ...options, method: 'GET', credentials: 'include' });
                return await response.json();
            } catch (error) {
                console.error('HTTP GET Error:', error);
            }
        },

        async post(url, body, options = {}) {
            try {
                const response = await fetch(url, {
                    ...options,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(options.headers || {}),
                    },
                    body: JSON.stringify(body),
                });
                return await response.json();
            } catch (error) {
                console.error('HTTP POST Error:', error);
            }
        }
    };

    return {
        provide: {
            httpClient
        }
    };
});

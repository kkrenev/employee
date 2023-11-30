import type {HttpClient} from "~/plugins/httpClient";
import type {ICollection, IItem, IResponse, IUnsplashResponse} from "~/types/data-contract";

class ApiService {
    private readonly httpClient: HttpClient;

    constructor() {
        const { $httpClient} = useNuxtApp();
        this.httpClient = $httpClient;
    }

    async fetchItems(page: number = 1): Promise<IItem[]> {
        const res: IResponse = await this.httpClient.get(`/api/search/winter/${page}/photo`);
        const unsplash: IUnsplashResponse = JSON.parse(res.unsplash);
        if (!unsplash.results) throw new Error('No items found');
        return unsplash.results;
    }

}

export default ApiService;

import {ApiService} from '~/services/apiService';

declare module '#app' {
    interface NuxtApp {
        $apiService: ApiService;
        $isMobile: ref<boolean>;
    }
}

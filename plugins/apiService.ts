// plugins/apiService.ts
import { defineNuxtPlugin } from 'nuxt/app';
import ApiService from '~/services/apiService';

export default defineNuxtPlugin((nuxtApp) => {
    const apiService = new ApiService();

    nuxtApp.provide('apiService', apiService);
});
import {ref} from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    const isMobile = ref(false);

    function updateMobileStatus() {
        isMobile.value = window.innerWidth <= 900;
    }

    if (process.client) {
        updateMobileStatus();
        window.addEventListener('resize', updateMobileStatus);
    }

    nuxtApp.provide('isMobile', isMobile);
});

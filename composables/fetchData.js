export default function (url, options) {
    let baseURL = useNuxtApp().ssrContext?.event.node.req.headers.host ?? location?.host;
    if (baseURL) baseURL = 'http://' + baseURL;
    return useFetch(url, { ...{ baseURL }, ...options });
}
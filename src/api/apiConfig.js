const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b1b49192966446a0c66907f484b8b283',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
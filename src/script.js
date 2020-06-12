class FlotiqRotator {
    constructor(elementId, readOnlyKey) {

        let linkElement = document.getElementById(elementId);
        if (!linkElement) {
            throw new Error(`Element #${elementId} not found`);
        }

        let imgElement = linkElement.getElementsByTagName('img')[0];
        if (!imgElement) {
            throw new Error(`Child element img of #${elementId} not found`);
        }

        fetch(`https://api.flotiq.com/api/v1/content/rotator/rotator-986160?hydrate=1&auth_token=${readOnlyKey}`)
            .then(response => response.json())
            .then(rotator => {
                let enabledBanners = rotator.Banners.filter((banner) => banner.enabled === true);
                let randomBanner = enabledBanners[Math.floor(Math.random() * enabledBanners.length)];
                if (enabledBanners.length) {
                    imgElement.src = `https://api.flotiq.com/image/${rotator.Width}x${rotator.Height}/${randomBanner.image[0].id}.${randomBanner.image[0].extension}`;
                    imgElement.alt = randomBanner.title;
                    linkElement.href = randomBanner.link;
                    linkElement.title = randomBanner.title;
                }
            });
    }
}
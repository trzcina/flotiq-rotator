(function() {

    let initRotator = function (linkElement) {

        let createHtmlBanner = (src, title, link) => {
            let anchor = document.createElement("a");
            let image = document.createElement("img");
            anchor.href = link;
            anchor.title = title;
            image.src = src;
            image.alt = title;
            image.classList.add('img-responsive', 'img-fluid');
            anchor.append(image);
            return anchor;
        }

        const rotatorId = linkElement.getAttribute('data-rotator-id');
        const readOnlyKey = linkElement.getAttribute('data-rotator-key');

        fetch(`https://api.flotiq.com/api/v1/content/rotator/${rotatorId}?hydrate=1&auth_token=${readOnlyKey}`)
            .then(response => response.json())
            .then(rotator => {
                let enabledBanners = rotator.Banners.filter((banner) => banner.enabled === true);
                let randomBanner = enabledBanners[Math.floor(Math.random() * enabledBanners.length)];
                if (enabledBanners.length) {
                    linkElement.innerHTML = '';
                    linkElement.append(createHtmlBanner(
                        `https://api.flotiq.com/image/${rotator.Width}x${rotator.Height}/${randomBanner.image[0].id}.${randomBanner.image[0].extension}`,
                        randomBanner.title,
                        randomBanner.link));
                }
            });
    }

    document.querySelectorAll('[data-rotator-id]').forEach((element) => {
        initRotator(element);
    })

})();
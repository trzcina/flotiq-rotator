Simple banner rotator implementation
===

This script displays random banners stored in Flotiq.com 

## How to use

### Flotiq.com system

Create [Flotiq](https://flotiq.com) account, next:

1. Create Content Type Definition "Rotator" with attributes
    * Name (text)
    * Width (number)
    * Height (number)
    * Banners (list)
      * Enabled (boolean)
      * Image (media)
      * Link (text)
      * Title (text)
1. Create scoped API Key for "Media" and "Rotator" objects.

### Client system

1. Add html markup to the webpage:
    ```html
        <div data-rotator-id="__ROTATOR_ID__" data-rotator-key="__FLOTIQ_SCOPED_READ_ONLY_KEY__">
            <!--<img src="https://placehold.it/360x360" alt="Placeholder data (optional)">-->
        </div>
    ```
    where:
    * `__ROTATOR_ID__` is the id of 'Rotator' object in Flotiq (see last part of url in the web browser when editing rotator).
    * `__FLOTIQ_SCOPED_READ_ONLY_KEY__` is created already scoped API Key

1. Above the closing `</body>` tag load script:
    ```html
       <script src="https://cdn.jsdelivr.net/gh/trzcina/flotiq-rotator@1/src/script.min.js" async></script>
    ```
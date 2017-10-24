## A-frame scripting toolbar
Toolbar with ES6 scripts that you can right-click and edit. [Live demo here](https://metavrse-toolbar-bvcjpmogek.now.sh).

### How it works
When you hover or click anything in the sample a-frame scene, the currently selected script receives an `onHover`, `onHoverEnd` or `onClick` event. Scripts you modify are persisted in local storage.

For example, a simple script to remove an object when you click it would look like this:

```js
export default class ObjectMurderer {
  onClick(object) {
    object.parentNode.removeChild(object);
  }
}
```

### NPM support
Inside those scripts it's possible to import npm scripts (through JSPM CDN).

For example, hovering an `<a-sphere>` using this script...

```js
import doge from 'npm:dogefy';

export default class MuchScript {
  onHover(object) {
    const objectName = object.tagName.toLowerCase().split('-')[1];
    console.log(doge(objectName));
  }
}
```

...would render this beautiful result in the console:

                      ▄              ▄           
                     ▌▒█           ▄▀▒▌           
                     ▌▒▒█        ▄▀▒▒▒▐           
                    ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐           
                  ▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐           
                ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌           
               ▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌           
               ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐ such sphere
              ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌           
              ▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌         wow
             ▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐           
             ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌           
             ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐           
              ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌           
              ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐           
               ▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌           
                 ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀           
                   ▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀           
                      ▒▒▒▒▒▒▒▒▒▒▀▀           

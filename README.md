# Example

```shell
$ npm install sensitive-words-mf --save
```

```javascript
const {sensitiveWords} = require('sensitive-words-mf');
// ES2015
import {sensitiveWords} from 'sensitive-words-mf';

const filtered = 
    sensitiveWords(
        'The new Apple Macbook Pro will have touchbar',
        ['Pro', 'Touchbar']
    )

console.log(filtered)
// The new Apple Macbook ***** will have *****
```
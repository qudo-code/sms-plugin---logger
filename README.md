[⬅ Back to 🍕](https://github.com/qudo-lucas/state-machine-snacks)

# 🔌 Plugin Logger
```javascript
import sms from "state-machine-snacks";
import logger from "state-machine-snacks/plugins/logger";

const config = { /* ...machine config */ };

const service = sms({
    config,

    // Add plugin
    plugins : [
       logger(),
    ]
});

service.start();    
```

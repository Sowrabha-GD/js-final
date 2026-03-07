---
title: "LWC Component Communication: Parent-Child, Events &amp; Pub-Sub Patterns"
date: 2025-03-11
categories:
- "LWC"
---

![](/images/Events-Pub.png)


Lightning Web Components (LWC) is a powerful framework for building modern, reusable, and efficient components on the Salesforce platform. One of the most important aspects of building applications with LWC is enabling communication between components. Whether you're working with parent-child relationships, custom events, or the publish-subscribe (pub-sub) model, understanding how to facilitate communication is crucial. In this blog post, we'll explore the different methods of communication between LWC components with practical examples.

### 1\. Parent-to-Child Communication

Parent-to-child communication is the simplest and most direct way to pass data between components. In this model, the parent component passes data to the child component using properties.

#### How It Works:

- The parent component sets a public property (`@api`) in the child component.
    
- The child component receives the data and reacts to changes.
    

#### Example:

##### Parent Component (parentComponent.js):

```
 import { LightningElement } from 'lwc';
export default class ParentComponent extends LightningElement {
    message = 'Hello from Parent!';
} 
```

##### Parent Component HTML (parentComponent.html):

```
 < template>
    < c-child-component message={message}>
< /template>
```

##### Child Component (childComponent.js):

```
 import { LightningElement, api } from 'lwc';
export default class ChildComponent extends LightningElement {
    @api message;
}
```

##### Child Component HTML (childComponent.html):

```
< template>
    < p>{message}< /p>
< /template> 
```

In this example, the parent component passes the `message` property to the child component, which then displays it.

### 2\. Child-to-Parent Communication Using Custom Events

When a child component needs to communicate with its parent, it can dispatch a custom event. The parent component listens for this event and handles the data accordingly.

#### How It Works:

- The child component creates and dispatches a custom event using `CustomEvent`.
    
- The parent component listens for the event using `on{eventname}` and handles the data.
    

#### Example:

##### Child Component (childComponent.js):

```
import { LightningElement } from 'lwc';
export default class ChildComponent extends LightningElement {
    handleClick() {
        const event = new CustomEvent('notifyparent', {
            detail: { message: 'Hello from Child!' }
        });
        this.dispatchEvent(event);
    }
} 
```

#### Child Component HTML (childComponent.html):

```

    < template>
    < button onclick={handleClick}>Notify Parent 
 
```

#### Parent Component (parentComponent.js):

```

    import { LightningElement } from 'lwc';
export default class ParentComponent extends LightningElement {
    handleNotification(event) {
        console.log('Received message:', event.detail.message);
    }
} 
```

#### Parent Component HTML (parentComponent.html):

```

    < template>
    < c-child-component onnotifyparent={handleNotification}>< /c-child-component>
< /template > 
```

Here, the child component dispatches a `notifyparent` event when the button is clicked, and the parent component listens for and handles the event.

### 3\. Communication Between Unrelated Components Using Pub-Sub

When components are not directly related (e.g., they are not in a parent-child relationship), the pub-sub model is a great way to facilitate communication. This pattern involves a centralized event bus that allows components to publish and subscribe to events.

#### How It Works:

- A shared JavaScript module acts as the event bus.
    
- Components can publish events using `publish`.
    
- Other components can subscribe to events using `subscribe`.
    

#### Example:

##### Event Bus (pubsub.js):

```
 const callbacks = {};
const PubSub = {
    register(eventName, callback) {
        if (!callbacks[eventName]) {
            callbacks[eventName] = new Set();
        }
        callbacks[eventName].add(callback);
    },
    unregister(eventName, callback) {
        if (callbacks[eventName]) {
            callbacks[eventName].delete(callback);
        }
    },
    fire(eventName, payload) {
        if (callbacks[eventName]) {
            callbacks[eventName].forEach(callback => {
                callback(payload);
            });
        }
    }
};
export { PubSub }; 
```

##### Publisher Component (publisherComponent.js):

```
 import { LightningElement } from 'lwc';
import { PubSub } from 'c/pubsub';
export default class PublisherComponent extends LightningElement {
    handleClick() {
        PubSub.fire('message', { text: 'Hello from Publisher!' });
    }
} 
```

##### Publisher Component HTML (publisherComponent.html):

```
 < template>
    < button onclick={handleClick}>Publish Message< /button>
< /template> 
```

##### Subscriber Component (subscriberComponent.js):

```
import { LightningElement } from 'lwc';
import { PubSub } from 'c/pubsub';
export default class SubscriberComponent extends LightningElement {
    message;
    connectedCallback() {
        this.callback = (payload) => {
            this.message = payload.text;
        };
        PubSub.register('message', this.callback);
    }
    disconnectedCallback() {
        PubSub.unregister('message', this.callback);
    }
} 
```

##### Subscriber Component HTML (subscriberComponent.html):

```
 < template>
    < p>Received: {message}< /p>
< /template> 
```

In this example, the publisher component fires a `message` event, and the subscriber component listens for and handles the event.

## Conclusion

Effective communication between LWC components is essential for building dynamic and interactive applications on the Salesforce platform. Whether you're using parent-child communication, custom events, or the pub-sub model, each method has its use cases and benefits. By mastering these techniques, you can create more modular, maintainable, and scalable Lightning Web Components.

                                                                                                                                                           **-Jeet Singh**

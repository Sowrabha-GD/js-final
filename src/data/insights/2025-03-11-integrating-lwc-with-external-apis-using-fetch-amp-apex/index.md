---
title: "Integrating LWC with External APIs: Fetch & Apex Best Practices"
date: 2025-03-11
categories:
- "Integration"
---


![](/images/External.png)


Lightning Web Components (LWC) is a powerful framework for building modern, dynamic, and reusable components on the Salesforce platform. One of the most common requirements in application development is integrating with external APIs to fetch or send data. In LWC, you can achieve this integration in two primary ways: using **JavaScript Fetch API** for client-side calls or leveraging **Apex** for server-side calls. In this blog post, we’ll explore both approaches and discuss their use cases, benefits, and best practices.

### 1\. Using JavaScript Fetch API for Client-Side Integration

The **Fetch API** is a modern JavaScript interface for making HTTP requests. It allows you to call external APIs directly from your LWC component without involving server-side logic. This approach is ideal for simple integrations or when you need to avoid the overhead of Apex.

#### When to Use Fetch API:

- The external API is public and doesn’t require sensitive credentials.
    
- You need to make a quick, lightweight call without server-side processing.
    
- The API response is straightforward and doesn’t require complex transformations.
    

#### Add Your Heading Text Steps to Use Fetch API in LWC:

1. Use the `fetch()` method to make an HTTP request.
    
2. Handle the response using promises or async/await.
    
3. Process the data and update the component’s state.
    

##### Example: Fetching Data from a Public API

```
import { LightningElement } from 'lwc';
export default class FetchApiExample extends LightningElement {
    data;
    error;
    async connectedCallback() {
        const apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.data = await response.json();
        } catch (error) {
            this.error = error;
            console.error('Error fetching data:', error);
        }
    }
}
```

#### Best Practices for Using Fetch API:

- **CORS (Cross-Origin Resource Sharing)**: Ensure the external API supports CORS if you’re making requests from the browser.
    
- **Error Handling**: Always handle errors gracefully to avoid runtime issues.
    
- **Security**: Avoid using Fetch API for sensitive data or APIs that require credentials, as these can be exposed in the client-side code.
    

### 2\. Using Apex for Server-Side Integration

For more complex integrations or when dealing with sensitive data, **Apex** is the preferred approach. Apex allows you to make server-side calls to external APIs, ensuring that credentials and sensitive information are securely stored and managed.

#### When to Use Apex:

- The external API requires authentication (e.g., API keys, OAuth tokens).
    
- You need to perform complex data transformations or business logic before or after the API call.
    
- The API response is large or requires server-side processing.
    

#### Steps to Use Apex for External API Integration:

1. Create an Apex class to handle the HTTP callout.
    
2. Use `HttpRequest` and `HttpResponse` classes to make the API call.
    
3. Expose the Apex method to LWC using the `@AuraEnabled` annotation.
    
4. Call the Apex method from your LWC component using `wire` or imperative Apex.
    

#### Example: Calling an External API Using Apex

##### Apex Class (ExternalApiService.cls):

```
public with sharing class ExternalApiService {
    @AuraEnabled(cacheable=true)
    public static String fetchDataFromApi() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.example.com/data'); // Replace with your API endpoint
        req.setMethod('GET');
        // Add headers or authentication tokens if required
        req.setHeader('Authorization', 'Bearer YOUR_ACCESS_TOKEN');
        HttpResponse res = new Http().send(req);
        if (res.getStatusCode() == 200) {
            return res.getBody();
        } else {
            throw new AuraHandledException('Error: ' + res.getStatusCode() + ' ' + res.getStatus());
        }
    }
} 
```

#### LWC Component (apexApiExample.js):

```
import { LightningElement, wire } from 'lwc';
import fetchDataFromApi from '@salesforce/apex/ExternalApiService.fetchDataFromApi';
export default class ApexApiExample extends LightningElement {
    data;
    error;
    @wire(fetchDataFromApi)
    wiredData({ error, data }) {
        if (data) {
            this.data = JSON.parse(data);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
            console.error('Error fetching data:', error);
        }
    }
}
```

#### Best Practices for Using Apex:

- **Authentication**: Store sensitive credentials (e.g., API keys, tokens) securely in **Named Credentials** or **Custom Settings**.
    
- **Governor Limits**: Be mindful of Salesforce governor limits when making API calls from Apex.
    
- **Error Handling**: Use try-catch blocks in Apex to handle exceptions gracefully.
    
- **Caching**: Use the `@AuraEnabled(cacheable=true)` annotation to enable client-side caching for improved performance.
    

### Choosing Between Fetch API and Apex

| **Criteria** | **Fetch API** | **Apex** |
| --- | --- | --- |
| **Use Case** | Simple, public APIs | Complex or secure APIs |
| **Security** | Less secure (client-side) | More secure (server-side) |
| **Performance** | Faster for lightweight calls | Better for heavy processing |
| **Governor Limits** | Not subject to Apex limits | Subject to Salesforce governor limits |
| **CORS** | Requires CORS support | No CORS issues |

### Conclusion

Integrating LWC with external APIs is a common requirement for building dynamic and data-driven applications. Whether you choose to use the **Fetch API** for client-side calls or **Apex** for server-side calls depends on your specific use case, security requirements, and the complexity of the integration.

- Use **Fetch API** for simple, public APIs that don’t require sensitive data.
    
- Use **Apex** for secure, complex integrations that involve sensitive data or require server-side processing.
    

By following best practices and leveraging the strengths of each approach, you can build robust and efficient integrations that enhance the functionality of your LWC components.

                                                                                                                                                **-Jeet Singh**

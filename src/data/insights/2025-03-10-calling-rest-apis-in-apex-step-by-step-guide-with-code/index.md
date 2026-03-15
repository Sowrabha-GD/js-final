In today’s interconnected world, integrating external systems with Salesforce is a common requirement. Whether you’re fetching data from a third-party service or sending information to an external platform, **calling REST APIs in Apex** is a powerful way to achieve seamless integration.

In this blog, we’ll walk you through a step-by-step guide on how to call REST APIs in Apex, complete with code examples and best practices.

### Why Call REST APIs in Apex?

REST APIs allow Salesforce to communicate with external systems, enabling functionalities like:

- Fetching real-time data from external services.
    
- Sending data to third-party platforms.
    
- Automating workflows across multiple systems.
    

By leveraging Apex, you can programmatically interact with REST APIs to extend the capabilities of your Salesforce org.

### Step-by-Step Guide to Calling REST APIs in Apex

#### Step 1: Set Up a Remote Site Setting

Before making API calls, you need to whitelist the external endpoint in Salesforce. This is done using **Remote Site Settings**.

1. Go to **Setup** → **Security** → **Remote Site Settings**.
    
2. Click **New Remote Site**.
    
3. Enter the **Remote Site Name** and **Remote Site URL** (the base URL of the API).
    
4. Save the settings.
    

#### Step 2: Create an Apex Class for the API Call

Use the `Http` and `HttpRequest` classes in Apex to make REST API calls.

###### Example: GET Request

```
public class ApiCalloutService {
public static void makeGetCallout() {
Http http = new Http();
HttpRequest request = new HttpRequest();
// Set the endpoint URL
request.setEndpoint('https://api.example.com/data');
// Set the HTTP method (GET, POST, etc.)
request.setMethod('GET');
// Set headers if required
request.setHeader('Content-Type', 'application/json');
request.setHeader('Authorization', 'Bearer YOUR_ACCESS_TOKEN');
// Send the request
HttpResponse response = http.send(request);
// Process the response
if (response.getStatusCode() == 200) {
// Successful response
System.debug('Response Body: ' + response.getBody());
} else {
// Handle errors
System.debug('Error: ' + response.getStatusCode() + ' ' + response.getStatus());
}
}
}
```

#### Step 3: Handle POST Requests

For POST requests, you’ll need to include a request body.

###### Example: POST Request

```
public static void makePostCallout() {
Http http = new Http();
HttpRequest request = new HttpRequest();
// Set the endpoint URL
request.setEndpoint('https://api.example.com/create');
// Set the HTTP method
request.setMethod('POST');
// Set headers
request.setHeader('Content-Type', 'application/json');
request.setHeader('Authorization', 'Bearer YOUR_ACCESS_TOKEN');
// Set the request body
String requestBody = '{"name": "Test Account", "industry": "Technology"}';
request.setBody(requestBody);
// Send the request
HttpResponse response = http.send(request);
// Process the response
if (response.getStatusCode() == 201) {
System.debug('Record Created: ' + response.getBody());
} else {
System.debug('Error: ' + response.getStatusCode() + ' ' + response.getStatus());
}
}
```

#### Step 4: Handle Authentication

Many APIs require authentication, such as OAuth 2.0 or API keys. Here’s how to handle OAuth 2.0:

1. **Obtain an Access Token**: Use a named credential or make a separate callout to get the token.
    
2. **Include the Token in Headers**: Add the token to the `Authorization` header.
    

###### Example: OAuth 2.0 Authentication

```
public static void getAccessToken() {
Http http = new Http();
HttpRequest request = new HttpRequest();
request.setEndpoint('https://api.example.com/oauth/token');
request.setMethod('POST');
request.setHeader('Content-Type', 'application/x-www-form-urlencoded');
String clientId = 'YOUR_CLIENT_ID';
String clientSecret = 'YOUR_CLIENT_SECRET';
String username = 'YOUR_USERNAME';
String password = 'YOUR_PASSWORD';
String requestBody = 'grant_type=password' +
'&client_id=' + clientId +
'&client_secret=' + clientSecret +
'&username=' + username +
'&password=' + password;
request.setBody(requestBody);
HttpResponse response = http.send(request);
if (response.getStatusCode() == 200) {
Map result = (Map) JSON.deserializeUntyped(response.getBody());
String accessToken = (String) result.get('access_token');
System.debug('Access Token: ' + accessToken);
} else {
System.debug('Error: ' + response.getStatusCode() + ' ' + response.getStatus());
}
}
```

#### Step 5: Test Your API Call

Always test your API callouts to ensure they work as expected. Use anonymous Apex or unit tests to validate the functionality.

###### Example: Anonymous Apex Test

```
ApiCalloutService.makeGetCallout();
ApiCalloutService.makePostCallout();
```

#### Best Practices for Calling REST APIs in Apex

1. **Use Named Credentials**: Store endpoint URLs and authentication details securely using Named Credentials.
    
2. **Handle Exceptions**: Use try-catch blocks to handle exceptions and errors gracefully.
    
3. **Bulkify Callouts**: Ensure your code can handle multiple records if used in triggers or batch jobs.
    
4. **Monitor Limits**: Be aware of Salesforce’s **callout limits** (100 callouts per transaction) and optimize accordingly.
    
5. **Asynchronous Callouts**: Use `@future(callout=true)` or Queueable Apex for asynchronous callouts to avoid blocking the main transaction.
    

#### Example: Using Named Credentials

Named Credentials simplify API callouts by storing endpoint and authentication details securely.

###### Example

```
HttpRequest request = new HttpRequest();
request.setEndpoint('callout:My_Named_Credential/api/data');
request.setMethod('GET');
HttpResponse response = new Http().send(request);
```

#### Conclusion

Calling REST APIs in Apex opens up a world of possibilities for integrating Salesforce with external systems. By following this step-by-step guide, you can confidently make API callouts, handle authentication, and process responses effectively.

Remember: **Always test your code, handle exceptions, and follow best practices to ensure reliable and secure integrations.** Whether you’re fetching data or sending information, Apex provides the tools you need to build powerful, connected applications.                                                             

                                                                                                                                                                  **-Jeet Singh**

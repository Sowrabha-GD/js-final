---
title: "Building Secure REST API Endpoints in Salesforce: Apex Best Practices"
date: 2025-03-10
categories:
- "Integration"
---

![](/images/Endpoints.png)


In today's connected digital world, integrating external applications with Salesforce is crucial. The **Apex REST API** allows developers to expose Salesforce data and business logic securely over HTTP, making it easier to integrate with external systems. However, building a **secure and scalable API** is essential to protect sensitive data and ensure compliance with best practices.

In this blog, we will explore how to **build secure Apex REST API endpoints**, covering **authentication, authorization, input validation, and best security practices**.

## What is the Apex REST API?

Apex REST API enables developers to expose Salesforce Apex classes and methods as **RESTful web services**. These services can be consumed by external applications, allowing data exchange between Salesforce and third-party systems.

### **Key Features of Apex REST API:**

✅ Uses standard **HTTP methods** (GET, POST, PUT, DELETE).  
✅ Supports **JSON and XML** for data exchange.  
✅ Can be secured using **OAuth 2.0 authentication**.  
✅ Enables **custom logic and data transformations** before exposing data.

## How to Build an Apex REST API in Salesforce

### **Step 1: Create an Apex REST Class**

To create a RESTful service, you need to define an **Apex class with the @RestResource annotation**.

```
 @RestResource(urlMapping='/customers/*')
global with sharing class CustomerAPI {
    @HttpGet
    global static Customer__c getCustomerById() {
        RestRequest req = RestContext.request;
        String customerId = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);
        Customer__c customer = [SELECT Id, Name, Email__c FROM Customer__c WHERE Id = :customerId LIMIT 1];
        return customer;
    }
} 
```

### **Step 2: Test the API Endpoint**

Use **Postman or cURL** to send a GET request to:

```
https://yourInstance.salesforce.com/services/apexrest/customers/{customerId} 
```

## Securing Apex REST API Endpoints

### **1\. Implement Authentication with OAuth 2.0**

To ensure **only authorized users and applications** can access the API, use **OAuth 2.0**. Salesforce provides **OAuth tokens** that must be included in API requests.

- **Steps to Secure API with OAuth 2.0:**  
    1. **Create a Connected App** in Salesforce.
    2. Enable OAuth and specify the required **OAuth scopes**.
    3. Generate **Consumer Key & Secret** for authentication.
    4. Use the **OAuth access token** in API requests.

Example of an authenticated request:

```
curl -X GET "https://yourInstance.salesforce.com/services/apexrest/customers/001XX000003DHPFQA4" 
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" 
-H "Content-Type: application/json" 
```

### **2\. Implement Role-Based Access Control (RBAC)**

To **restrict API access** based on user roles, leverage **Salesforce Profiles, Permission Sets, and Sharing Rules**.

- Use **“with sharing”** in Apex classes to enforce record-level security:

```
global with sharing class CustomerAPI { ... }
```

Check if the user has a required permission:

```
if (!System.Permission.hasAccess('API_Access__c')) {
    throw new SecurityException('Unauthorized access');
}
```

### **3\. Validate & Sanitize Input Data**

Never trust input data from external sources. Validate it before processing to prevent **injection attacks and security vulnerabilities**.

- **Validate incoming request parameters:**

```
if (String.isEmpty(customerId) || !Pattern.matches('[a-zA-Z0-9]{15,18}', customerId)) {
    throw new IllegalArgumentException('Invalid Customer ID');
} 
```

Sanitize inputs to prevent SOQL injection:

```
String safeCustomerId = String.escapeSingleQuotes(customerId); 
```

### **4\. Limit Data Exposure (Field-Level Security)**

Ensure that only required data is returned in the response.

- Use **SELECT only required fields** instead of `SELECT *`.
- Enforce **Field-Level Security (FLS)** to prevent unauthorized access.

```
if (!Schema.sObjectType.Customer__c.fields.Email__c.isAccessible()) {
    throw new SecurityException('Unauthorized field access');
}
```

### **5\. Implement API Rate Limits**

To prevent **DDoS attacks** and excessive API usage, implement **rate limiting** and **governor limits**.

- Use `Limits.getConcurrentAPIRequests()` to check active API requests.
- Restrict requests using **Governor Limits**:

```
if (Limits.getCallouts() >= Limits.getLimitCallouts()) {
    throw new LimitException('API rate limit exceeded');
} 
```

## Best Practices for Apex REST API Security

🔹 **Always use OAuth 2.0 for authentication** instead of API keys.  
🔹 **Enforce CRUD, FLS, and sharing rules** in your Apex class.  
🔹 **Validate and sanitize input data** to prevent SOQL & injection attacks.  
🔹 **Limit exposed data fields** to reduce security risks.  
🔹 **Implement rate limiting** to protect against abuse.  
🔹 **Enable API logging** using Salesforce Event Monitoring for security audits.

## Conclusion

Building a **secure Apex REST API** in Salesforce requires **authentication, authorization, input validation, and data protection**. By leveraging **OAuth 2.0, field-level security, role-based access control, and governor limits**, you can create a robust and scalable API that protects sensitive data while allowing seamless integrations.

By following **best security practices**, you can ensure that your Salesforce API remains **protected against threats, maintains high performance, and provides a secure interface** for external applications.

                                                                                                                                                                   **\-Jeet Singh**

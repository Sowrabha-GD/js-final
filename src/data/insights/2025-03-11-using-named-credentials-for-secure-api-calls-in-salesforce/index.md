---
title: "Using Named Credentials for Secure API Calls in Salesforce"
date: 2025-03-11
categories:
- "Integration"
---

![](/images/API-Calls.png)


Integrating Salesforce with external systems often requires making secure API calls. Managing authentication credentials directly in Apex code can lead to security risks, maintenance challenges, and compliance issues. To address this, **Named Credentials** in Salesforce provide a secure and efficient way to handle authentication while simplifying API callouts. This guide will explore what Named Credentials are, their benefits, how to configure them, and best practices for using them in Salesforce.

## What are Named Credentials?

Named Credentials are a secure way to store authentication details required for making external API calls in Salesforce. Instead of hardcoding authentication details in Apex, Named Credentials allow developers to securely configure and manage API authentication using the Salesforce UI. These credentials can include various authentication methods such as **OAuth 2.0, Basic Authentication, JWT, and AWS Signature**.

## Benefits of Using Named Credentials

1. **Enhanced Security** – Eliminates the need to store authentication details in Apex code, reducing security vulnerabilities.
    
2. **Simplified Authentication** – Supports multiple authentication methods like OAuth 2.0 and AWS Signature without requiring custom authentication logic.
    
3. **Easy Management** – Credentials can be updated in **Setup** without modifying the Apex code.
    
4. **Automated Token Management** – Salesforce automatically handles token refresh for OAuth-based integrations.
    
5. **Improved Governance & Compliance** – Provides an auditable and centralized approach to managing API credentials.
    

## How to Configure Named Credentials in Salesforce

#### **Step 1: Create an External Credential**

1. Go to **Setup** and search for **External Credentials**.
    
2. Click **New** and provide a meaningful **Name**.
    
3. Choose the appropriate **Authentication Protocol** (OAuth, JWT, etc.).
    
4. Configure the necessary authentication settings based on the API requirements.
    

#### **Step 2: Set Up Named Credentials**

1. Navigate to **Setup** → **Named Credentials**.
    
2. Click **New Named Credential**.
    
3. Provide a **Name** (e.g., `ExternalAPI_NC`).
    
4. Enter the **External Service URL** (base URL of the API you are integrating with).
    
5. Select the **External Credential** created earlier.
    
6. Choose the **Identity Type** (Per-User or Named Principal).
    
7. Click **Save**.
    

#### **Step 3: Use Named Credentials in Apex**

After setting up the Named Credential, you can reference it in Apex code without hardcoding authentication details.

```
 HttpRequest req = new HttpRequest();
req.setEndpoint('callout:ExternalAPI_NC/some-endpoint');
req.setMethod('GET');
Http http = new Http();
HTTPResponse res = http.send(req);
System.debug(res.getBody());
```

In this example, `callout:ExternalAPI_NC` automatically uses the stored authentication details, making the callout secure and manageable.

## Best Practices for Using Named Credentials

1. **Use OAuth 2.0 Where Possible** – OAuth provides a more secure authentication mechanism with automatic token refresh.
    
2. **Avoid Hardcoding Credentials** – Always use Named Credentials instead of storing credentials in Apex or Custom Settings.
    
3. **Monitor API Call Usage** – Use **Salesforce Event Monitoring** to track API call performance and error rates.
    
4. **Use Named Principal for System-Wide Authentication** – If the integration does not require user-specific authentication, use **Named Principal** to simplify management.
    
5. **Regularly Rotate Credentials** – Ensure credentials are periodically updated to align with security best practices.
    

## Conclusion

Named Credentials in Salesforce provide a secure, efficient, and manageable way to handle API authentication without compromising security. By leveraging Named Credentials, developers and administrators can simplify integrations, reduce maintenance overhead, and enhance security compliance. Whether you are integrating with third-party services, cloud applications, or internal systems, Named Credentials are the best practice for handling API authentication in Salesforce.

Need help with **Salesforce integrations**? Contact us for expert guidance!

                                                                                                                                                                      **-Jeet Singh**

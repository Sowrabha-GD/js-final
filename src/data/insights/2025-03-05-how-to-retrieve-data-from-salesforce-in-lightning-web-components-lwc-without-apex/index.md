---
title: "How to Retrieve Data from Salesforce in Lightning Web Components (LWC) Without Apex"
date: 2025-03-05
---

In Salesforce Lightning Web Components (LWC), you can retrieve data from Salesforce without writing custom Apex code. LWC provides powerful, declarative tools like **Lightning Data Service (LDS)** and **Wire Adapters** to fetch and manage data efficiently. In this guide, we’ll explore how to retrieve data in LWC using these tools, along with practical examples and best practices.

## Why Retrieve Data Without Apex?

Using LWC’s built-in tools to fetch data offers several advantages:

- **No Apex Required**: Eliminates the need for custom server-side logic.
    
- **Improved Performance**: Built-in caching and optimized data handling.
    
- **Simplified Development**: Declarative approach reduces code complexity.
    
- **Security**: Automatically enforces field-level security and sharing rules.
    

Let’s dive into the methods you can use to retrieve data in LWC without Apex.

### **1\. Using Lightning Data Service (LDS)**

Lightning Data Service (LDS) is a powerful tool for interacting with Salesforce data declaratively. It supports CRUD operations (Create, Read, Update, Delete) without requiring Apex. LDS is ideal for working with standard objects and is fully integrated with Lightning Experience.

#### **Key Benefits of LDS:**

- No server-side code required.
    
- Built-in caching for better performance.
    
- Automatically handles record updates and refreshes.
    

#### **Example 1: `lightning-record-form`**

The `lightning-record-form` component automatically generates a form for viewing, editing, or creating records.

<template>  
<lightning-record-form  
object-api-name="Account"  
record-id={accountId}  
layout-type="Full"  
mode="View">  
</lightning-record-form>  
</template>  
  

- - **Usage**: Displays a full layout form for an Account record in view mode.
        
    - **Best For**: Quickly displaying or editing standard object records.
        

#### **Example 2: `lightning-record-edit-form`**

This component provides more control over the fields displayed in the form.

htmlCopy

```
<template>
    <lightning-record-edit-form
        object-api-name="Account"
        record-id={accountId}
        onsuccess={handleSuccess}>
        <lightning-input-field field-name="Name"></lightning-input-field>
        <lightning-input-field field-name="Industry"></lightning-input-field>
        <lightning-button type="submit" label="Save"></lightning-button>
    </lightning-record-edit-form>
</template>
```

 Run HTML

- **Usage**: Displays a form with specific fields (Name and Industry) for editing an Account record.
    
- **Best For**: Custom forms with selected fields.
    

* * *

#### **Example 3: `lightning-record-view-form`**

This component displays record data in a read-only format.

htmlCopy

```
<template>
    <lightning-record-view-form record-id={accountId} object-api-name="Account">
        <lightning-output-field field-name="Name"></lightning-output-field>
        <lightning-output-field field-name="Industry"></lightning-output-field>
    </lightning-record-view-form>
</template>
```

 Run HTML

- **Usage**: Displays the Name and Industry fields of an Account record in a read-only format.
    
- **Best For**: Displaying record details without editing capabilities.
    

### 2\. Using Wire Adapters

Wire adapters in LWC allow you to fetch Salesforce data declaratively using the `@wire` decorator. These adapters are perfect for retrieving data without writing Apex.

#### **Key Benefits of Wire Adapters:**

- Declarative and easy to use.
    
- Supports real-time updates.
    
- No Apex required for standard use cases.
    

* * *

#### **Example 1: `getRecord`**

Retrieves data for a single record.

javascriptCopy

```
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class ContactRecord extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, EMAIL_FIELD] })
    contact;
    get name() {
        return this.contact.data ? this.contact.data.fields.Name.value : '';
    }
    get email() {
        return this.contact.data ? this.contact.data.fields.Email.value : '';
    }
}
```

- **Usage**: Fetches the Name and Email fields of a Contact record.
    
- **Best For**: Displaying specific fields of a single record.
    

* * *

#### **Example 2: `getRecords`**

Retrieves data for multiple records in a single call.

javascriptCopy

```
import { LightningElement, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import CONTACT_FIELDS from '@salesforce/schema/Contact.Name';
const contactIds = ['003XXXXXXXXXXXXAAA', '003XXXXXXXXXXXXBBB'];
export default class MultipleContacts extends LightningElement {
    @wire(getRecords, { recordIds: contactIds, fields: [CONTACT_FIELDS.Name] })
    contacts;
    get contactNames() {
        return this.contacts.data ?
            this.contacts.data.records.map(record => record.fields.Name.value).join(', ') :
            '';
    }
}
```

- **Usage**: Fetches the Name field for multiple Contact records.
    
- **Best For**: Batch retrieval of records.
    

* * *

#### **Example 3: `getPicklistValues`**

Retrieves picklist values for a specific field.

javascriptCopy

```
import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class IndustryPicklist extends LightningElement {
    @wire(getPicklistValues, { fieldApiName: INDUSTRY_FIELD })
    picklistValues;
    get options() {
        return this.picklistValues.data ? this.picklistValues.data.values : [];
    }
}
```

- **Usage**: Fetches picklist values for the Industry field on the Account object.
    
- **Best For**: Dynamically populating dropdowns.
    

* * *

### **3\. Using the Salesforce REST API**

For more advanced use cases, you can use the Salesforce REST API to fetch data programmatically. This method is useful when you need more control over your queries or when working with custom objects.

#### **Example: Fetching Data Using REST API**

javascriptCopy

```
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class FetchAccountData extends LightningElement {
    connectedCallback() {
        this.fetchAccountData();
    }
    async fetchAccountData() {
        const query = 'SELECT Name FROM Account';
        const apiVersion = '53.0';
        const url = `/services/data/v${apiVersion}/query/?q=${encodeURIComponent(query)}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionId}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log('Query Result:', data.records);
        } catch (error) {
            this.showErrorToast('Error loading data', error.body ? error.body.message : 'Unknown error');
        }
    }
    showErrorToast(title, message) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: 'error'
            })
        );
    }
}
```

- **Usage**: Fetches Account data using a SOQL query via the REST API.
    
- **Best For**: Advanced data retrieval scenarios.
    

### **Conclusion**

Retrieving data in Lightning Web Components (LWC) without Apex is not only possible but also highly efficient. By leveraging **Lightning Data Service (LDS)**, **Wire Adapters**, and the **Salesforce REST API**, you can build dynamic, data-driven components with minimal code. Whether you’re working with standard objects, picklists, or custom queries, these tools provide the flexibility and performance you need.

Start implementing these techniques in your LWC projects today and experience the power of declarative data retrieval in Salesforce!

* * *

**Happy Coding!** 🚀

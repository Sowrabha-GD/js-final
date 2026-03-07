---
title: "What Is Apex Bulkification in Salesforce? Rule #1 for Asynchronous and Oracle Apex Developers"
date: 2025-03-11
categories:
- "Apex"
---

![](/images/Apex-Follow.png)


If you’re a Salesforce developer, you’ve probably heard the term **bulkification** thrown around. But what does it really mean, and why is it so important? In this blog, we’ll dive into the concept of Apex bulkification, why it’s the #1 rule every developer must follow, and how you can implement it to build scalable and efficient Salesforce applications.

#### What Is Apex Bulkification?

Apex bulkification refers to the practice of writing code that can handle multiple records at once, rather than processing records one at a time. Salesforce processes records in batches, especially in scenarios like:

- Data imports
    
- Bulk API calls
    
- Triggers fired by mass actions
    

If your code isn’t bulkified, it can hit governor limits, fail during execution, or perform poorly. Bulkification ensures your code is optimized to handle large volumes of data efficiently.

#### Why Is Bulkification the #1 Rule?

Salesforce operates in a multi-tenant environment, meaning resources are shared across multiple organizations. To ensure fair usage, Salesforce enforces **governor limits**, such as limits on the number of SOQL queries, DML operations, and CPU time.

If your code isn’t bulkified, it might work perfectly for a single record but fail catastrophically when processing multiple records. This can lead to:

- **Governor Limit Exceptions**: Your code might exceed limits and throw errors.
    
- **Poor Performance**: Inefficient code can slow down processes and frustrate users.
    
- **Data Integrity Issues**: Failed transactions can leave your data in an inconsistent state.
    

By following the #1 rule of bulkification, you can avoid these pitfalls and build robust, scalable solutions.

#### How to Bulkify Your Apex Code

Here are the key principles and best practices for bulkifying your Apex code:

##### 1\. Use Collections Instead of Single Records

Always work with collections like `List`, `Set`, or `Map` instead of processing records individually. This allows you to handle multiple records in a single operation.

##### 2\. Avoid SOQL Queries and DML Statements Inside Loops

Placing SOQL queries or DML statements inside loops is a common mistake. Instead, gather data in collections and perform queries or DML operations outside the loop.

###### Bad Example:

```

    for (Account acc : Trigger.new) {
Contact con = [SELECT Id FROM Contact WHERE AccountId = :acc.Id LIMIT 1]; // SOQL inside loop
con.LastName = 'Updated';
update con; // DML inside loop
}
```

###### Good Example

```

Set accountIds = new Set();
for (Account acc : Trigger.new) {
accountIds.add(acc.Id);
}
List contactsToUpdate = [SELECT Id FROM Contact WHERE AccountId IN :accountIds];
for (Contact con : contactsToUpdate) {
con.LastName = 'Updated';
}
update contactsToUpdate; // Single DML outside loop
```

##### 3\. Leverage Trigger Context Variables

Use `Trigger.new`, `Trigger.old`, `Trigger.newMap`, and `Trigger.oldMap` to access records in bulk. These variables provide all the records being processed in the current transaction.

##### 4\. Batch Your DML Operations

Instead of performing DML operations on individual records, batch them together. For example, use `insert`, `update`, or `delete` on a list of records

##### 5\. Test with Large Data Volumes

Always test your code with large datasets to ensure it performs well under real-world conditions. Use Salesforce’s **Bulk API** or data loader to simulate bulk operations.

#### Real-World Example of Bulkification

Let’s say you’re writing a trigger to update related contacts whenever an account’s industry changes. Here’s how you can bulkify the code:

```

trigger UpdateContactsOnAccountChange on Account (after update) {
Set accountIds = new Set();
for (Account acc : Trigger.new) {
if (acc.Industry != Trigger.oldMap.get(acc.Id).Industry) {
accountIds.add(acc.Id);
}
}
if (!accountIds.isEmpty()) {
List contactsToUpdate = [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds];
for (Contact con : contactsToUpdate) {
con.Industry__c = Trigger.newMap.get(con.AccountId).Industry;
}
update contactsToUpdate;
}
}
```

**In this example:**

- We use collections to store account IDs.
    
- We perform a single SOQL query to fetch related contacts.
    
- We update all contacts in a single DML operation.
    

#### Common Pitfalls to Avoid

1. **Hardcoding IDs or Limits**: Avoid hardcoding record IDs or assuming a small number of records. Always design for scalability.
    
2. **Ignoring Trigger Context**: Understand the differences between `before` and `after` triggers and use the appropriate context variables.
    
3. **Overlooking Testing**: Failing to test with bulk data can lead to surprises in production.
    

#### Conclusion

Apex bulkification isn’t just a best practice—it’s a necessity for building scalable and efficient Salesforce applications. By following the #1 rule of bulkification, you can avoid governor limits, improve performance, and ensure your code works seamlessly in real-world scenarios.

Remember: **Always write code that can handle multiple records at once.** Whether you’re working on triggers, batch classes, or custom logic, bulkification should be at the core of your development process.

                                                                                                                                      **-Jeet Singh**

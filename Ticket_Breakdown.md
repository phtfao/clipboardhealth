# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### **Ticket 1 - Add custom id field for Agents**
#### **Acceptance Criteria**
- A new field for custom id should be added to the Agents table in the database
- The custom id field should be able to store alphanumeric characters
- The custom id should be unique for each Agent within a single Facility
- The custom id field should be optional and can be left blank if the Facility does not wish to use it

#### **Time/Effort Estimate**
2 hours

#### **Implementation Details**
- Add a new column to the Agents table in the database to store the custom id
- Update the database schema and apply the changes
- Add validation to ensure that the custom id is unique for each Agent within a single Facility
- Add logic to handle the case where the custom id field is left blank

### **Ticket 2 - Return custom id in getShiftsByFacility function**
#### **Acceptance Criteria**
- The getShiftsByFacility function should return the custom id for each Agent if it exists, otherwise it should return their internal database id

#### **Time/Effort Estimate**
2 hour

#### **Implementation Details**
- Modify the getShiftsByFacility function to retrieve the custom id for each Agent if it exists, otherwise retrieve their internal database id
- Ensure that the returned data structure contains the appropriate id for each Agent

### **Ticket 3 - Use custom id in generateReport function**
#### **Acceptance Criteria**
- The generateReport function should use the custom id for each Agent if it exists, otherwise it should use their internal database id when generating reports

#### **Time/Effort Estimate**
2 hour

#### **Implementation Details**
- Modify the generateReport function to use the custom id for each Agent if it exists, otherwise use their internal database id
- Ensure that the generated reports correctly display the appropriate id for each Agent

### **Ticket 4 - Update documentation**
#### **Acceptance Criteria**
- The documentation should accurately reflect the changes made to the system

#### **Time/Effort Estimate**
1 hour

#### **Implementation Details**
- Update the relevant sections of the documentation to reflect the changes made to the system, including the addition of the custom id field and its usage in the getShiftsByFacility and generateReport functions.

### **Ticket 5 - Test and deploy the changes**
#### **Acceptance Criteria**
- The changes should be thoroughly tested and deployed without any major issues

#### **Time/Effort Estimate**
3 hours

#### **Implementation Details**
- Update tests related to getShiftsByFacility function
- Update tests related to generateReport function
- Deploy the changes to a test environment for additional testing and validation

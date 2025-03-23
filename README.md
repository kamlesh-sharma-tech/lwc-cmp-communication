# lwc-cmp-communication
This Lightning Web Component (LWC) demonstrates parent-child-grandparent communication in Salesforce. It allows hierarchical selection of child components, updating the parent and grandparent components dynamically based on user interactions.

![Recording 2025-03-22 222629 (1)](https://github.com/user-attachments/assets/4bbf0352-557a-4d93-adc6-0bd4532201cb)

# Key Features:

✅ Grandparent-Parent-Child Relationship: Implements a structured component hierarchy where a grandparent component manages multiple parent components, each containing multiple child components.

✅ Selection Tracking: Users can select or deselect child components, which dynamically updates the parent and grandparent components.

✅ Real-Time Data Binding: The number of selected children updates instantly at the parent and grandparent levels.

✅ Reset Functionality: A "Reset All" button allows clearing all selections efficiently.

✅ Event Communication: Uses @api, @track, and custom events to facilitate data flow between components.

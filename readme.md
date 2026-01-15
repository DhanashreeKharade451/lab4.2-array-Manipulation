
Answers for reflection Questions

How did array methods like push() and filter() help you manipulate data in this activity?

Array methods such as push() and filter() made it easy to manage and manipulate the shopping list data. The push() method allowed me to add new items to the array dynamically as the user entered them, without needing to know the array size in advance.  Together, these methods helped keep the code clean, readable, and efficient while working with dynamic data.
**************************************************************************************************.
What challenges did you face when trying to filter and search for items in the array?

One challenge was ensuring that the search functionality was case-insensitive, so that items could be found regardless of how the user typed them. This required converting both the stored items and the search term to lowercase before comparing them. Another challenge was understanding that filter() does not modify the original array but instead returns a new one, which required careful handling of the returned results when displaying filtered data.

***********************************************************************************************************************************************************

How would you modify this code to make it more efficient or user-friendly?

To make the code more efficient and user-friendly, I would  replace inline onclick handlers with event listeners to improve separation of concerns and maintainability. Additionally, storing the shopping list in localStorage would allow the data to persist even after refreshing the page. Providing user feedback messages, such as confirming when an item is added or preventing duplicate entries visually, would further enhance the user experience.

******************************************************************************************
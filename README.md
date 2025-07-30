# React Coding Challenge: Book List

## Objective

In this challenge, you will build a React application that fetches and displays a list of books from the Open Library API. You will also implement filtering and selection features to demonstrate your ability to manage state, handle user interactions, and style components.

## Instructions

⏳ **Time Limit:** 45–60 minutes (recommended)

### **Requirements**

1. **Fetch Data**

   - Make a GET request to:
     ```
     https://openlibrary.org/subjects/world.json
     ```
   - Extract and display relevant book details.

2. **Display Books**

   - Render a list of book cards.
   - Each card should display:
     - **Title**
     - **Author(s)**

3. **Filter Books**

   - Add an **input field** at the top.
   - Filter books dynamically as the user types.
   - The search should match **either** the book title **or** the author's name.

4. **Selection Behavior**
   - When a user **clicks** on a book card:
     - Highlight its border in **red**.
     - Display the selected book on the **top** of the list.
   - If the same book is clicked again, it should be **deselected**.

### **Bonus (Optional)**

- Use **Flexbox** to center all content in the viewport.

## Evaluation Criteria

✅ Ability to fetch and process API data using **Axios** (or fetch).  
✅ Proper use of **React state & hooks** (`useState`, `useEffect`).  
✅ Implementation of **dynamic filtering** and **conditional rendering**.  
✅ Clean, readable **code structure** and **CSS styling**.  
✅ Handling **user interactions** (click events, highlighting, reordering).

## Submission

- **Fork** the following **[StackBlitz template](https://stackblitz.com/edit/vitejs-vite-rjbxxwzt?file=README.md)**
- Implement your solution.
- Share the **StackBlitz project link** as your submission on Drill platform.

Good luck! 🚀

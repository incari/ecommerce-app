# Frontend Technical Assignment - Product Cards Page

## Comments

Thank you for providing me with the opportunity to work on this assignment. I thoroughly enjoyed the challenge and am eager to discuss my solution with you. Should you have any feedback or questions, please feel free to reach out. I am looking forward to the next steps!

As mentioned in the email, I encountered difficulties installing JEST and experienced CORS errors during the API call. To address this, I simulated the API response using axios and React-Query, returning the JSON object from the API. Additionally, I incorporated a setTimeout to mimic the loading time.

Although the tests may not run successfully, the primary checks are in place. I could include some data-testid attributes in specific components if required.

This was my first experience working with images using the new NextJS 13, and I would invest more time to enhance responsiveness and better manage their sizing.

## Demo

[Demo app ](https://ecommerce-app-git-main-incari.vercel.app/)

## Goal

The goal of this assignment is to create a product cards page with TypeScript and tests. You have the option to use NextJS, and you are required to make components reusable. The assignment involves handling desktop and mobile views, fetching data from an API, and implementing a search feature for product cards.

## Features to Implement

1. **Show Product Cards**: Display product cards on the page.

2. **Fetch Data from API**: Use the API [https://api-us.exoticca.com/api/landing/v2/country/botswana](https://api-us.exoticca.com/api/landing/v2/country/botswana) to get product information. You can choose to use either `react-query` or Server-Side Rendering (SSR).

3. **Hover Effect**: In production, when hovering over the image, show the map of the product. Note: This part is out of scope for this assignment.

4. **Search for Product Cards by "Product Title"**: Implement a search feature in the header to search for product cards based on the product title.

5. **Bonus Feature**: Support searching product cards by any data in the product. For example, searching for "Cape" should return product cards that have "Cape Town" in highlights, and searching for "3799" should return product cards with a price of $3,799.

## Screenshots

- **Desktop View**:

  ![Desktop View](/public//desktop.png)

- **Mobile View**:

  ![Mobile View](/public//mobile.png)

## Instructions

1. **TypeScript**: Use TypeScript for the project.

2. **Tests**: Write tests for your components.

3. **NextJS (Optional)**: You have the option to use NextJS.

4. **Reusable Components**: Ensure that your components are reusable.

## Getting Started

1. Clone this repository.

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

```bash
 yarn dev
```

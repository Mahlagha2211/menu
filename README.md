# Digital Menu App

This is a **digital menu** web application for a cafe, built using **React**, **TailwindCSS**, and **TanStack Query**. The application features a **fixed category sidebar** and a **dynamic content area** that updates based on the selected category. Data is sourced from a local **JSON file** located in the `public/data` folder.

---
## 🔥 demo
You can see the live demo of the website [here](https://menu-nu-three.vercel.app/).

## 📚 Key Learnings

- How to use **z-index** to layer a fixed sidebar over dynamic content.
- How to use **outline** to highlight selected categories.
- How to fetch data from a local **db.json** file using **TanStack Query** for error handling and control.
- How to separate **fixed and dynamic UI parts** with React components.
- How to make the layout **responsive** for different screen sizes using TailwindCSS.

---

## 🚀 Technologies Used

- React
- TailwindCSS
- TanStack Query (React Query)
- JSON for data storage (`db.json` in `/public/data`)

---

## 🏗️ How It Works

1. **Categories Sidebar**:  
   A vertical fixed sidebar displays menu categories (e.g., Drinks, Food). This uses Tailwind’s **fixed positioning** and **z-index** to stay in place.

2. **Dynamic Content**:  
   The main content area updates to show food items based on the selected category. This part is dynamic and changes when a user clicks a category.

3. **Data Fetching**:  
   - Data is stored in a `db.json` file inside `/public/data`.
   - `useFetchData.js` uses **TanStack Query** to fetch this data and handle errors.
   - The app dynamically updates based on the selected category.
    
4. **Responsive Design**:  
   The layout adjusts for different screen sizes, ensuring usability on mobile, tablet, and desktop devices.

---

## 📑 Example JSON (`public/data/db.json`)

```json
{
  "categories": [
    {
      "id": 1,
      "name": "hotCoffee",
      "products": [
        {
          "id": 101,
          "name": "موکا",
          "image": "/coffee.jpg"
        },
        {
          "id": 102,
          "name": " لاته",
          "image": "/coffee.jpg"
        },
        {
          "id": 103,
          "name": "کاپوچینو",
          "image": "/coffee.jpg"
        },
        {
          "id": 104,
          "name": "فلت وایب",
          "image": "/coffee.jpg"
        },
        {
          "id": 105,
          "name": "ماکیاتو",
          "image": "/coffee.jpg"
        },
        {
          "id": 106,
          "name": "آمریکانو",
          "image":"/coffee.jpg"
        },
        {
          "id": 107,
          "name": "ترک",
          "image": "/coffee.jpg"
        },
        {
          "id": 108,
          "name": "اسپرسو عربیکا",
          "image":"/coffee.jpg"
        },
        {
          "id": 109,
          "name": "اسپرسو روبوستا",
          "image": "/coffee.jpg"
        },
        {
          "id": 110,
          "name": "کورتادو",
          "image": "/coffee.jpg"
        },
        {
          "id": 111,
          "name": "کن پانا",
          "image": "/coffee.jpg"
        },
        {
          "id": 112,
          "name": "یونانی",
          "image": "/coffee.jpg"
        }
      ]
    },
    {
      "id": 2,
      "name": "iceCoffee",
      "products": [
        {
          "id": 201,
          "name": "آیس لاته",
          "image": "/coffee.jpg"
        },
        {
          "id": 202,
          "name": "آیس آمریکانو",
          "image": "/coffee.jpg"
        },
        {
          "id": 203,
          "name": "کلد برو",
          "image": "/coffee.jpg"
        },
        {
          "id": 204,
          "name": "آیس رومانو",
          "image": "/coffee.jpg"
        },
        {
          "id": 205,
          "name": "آیس موکا",
          "image": "/coffee.jpg"
        },
        {
          "id": 206,
          "name": "آفوگاتو",
          "image": "/coffee.jpg"
        },
        {
          "id": 207,
          "name": "آیس ماچالاته",
          "image":"/coffee.jpg"
        }
      ]
    },
    {
      "id": 3,
      "name": "mocktail",
      "products": [
        {
          "id": 301,
          "name": "مامامیا",
          "image": "/coffee.jpg"
        },
        {
          "id": 302,
          "name": "پشیکاتی",
          "image": "/coffee.jpg"
        },
        {
          "id": 303,
          "name": "موهیتو",
          "image": "/coffee.jpg"
        },
        {
          "id": 304,
          "name": "بلو وارم",
          "image": "/coffee.jpg"
        },
        {
          "id": 305,
          "name": "اسکاچ برون",
          "image": "/coffee.jpg"
        }
      ]
    },
.....
 ]
}

```
## 📌 Conclusion
This project provided valuable hands-on experience with:
- React and TailwindCSS integration for building modern web applications.
- Implementing fixed and dynamic layouts using z-index and outline.
- Data fetching and error handling using TanStack Query.
- Managing data with a local JSON file (db.json) and rendering it dynamically.
- Creating a responsive design that works well across different devices and screen sizes.

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mahlagha2211/Menu.git
   cd Menu
   npm install
   npm run dev


/**
 * AD 320 In-Class Assignment
 * 
 */
import "./style.css";

const recipes = [
    {id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg"},
    {id: 2, title: "Baguette", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg"},
    {id: 3, title: "French Toast", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg"},
    {id: 4, title: "Frech Fries", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg"},
    {id: 5, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg"}
];


export const recipeList = recipes.map((recipe) => {
    return (
        <tr>
            <th>{recipe.title}</th>
            <th>{recipe.ingredients}</th>
            <th>{recipe.image}</th>    
        </tr>    
        )
});

export default function RecipeGallery() {
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Image</th>
          </tr> 
        </thead>
        <tbody>
            {recipeList}
        </tbody> 
      </table>
    );
}
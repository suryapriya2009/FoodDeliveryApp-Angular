
import { Restaurant } from "./Restaurant";
import { FoodItem } from "./FoodItem";
export interface FoodCataloguePage{
    foodItemsList:FoodItem[];
    restaurant:Restaurant;
}
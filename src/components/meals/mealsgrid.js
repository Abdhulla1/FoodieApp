import classes from './mealsgrid.module.css';
import MealItem from './mealitem';
export default function Mealsgrid({meals}) {
  return (
    <ul className={classes.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
    </ul>
  )
}

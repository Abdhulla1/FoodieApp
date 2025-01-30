import Link from "next/link";
import classes from "./page.module.css";
import Mealsgrid from "@/components/meals/mealsgrid.js";
import {getMeals} from "@/lib/meals.js";
import { Suspense } from "react";

export const metadata = {
  title: 'All Meals',
  description: 'Delicious meals, shared by a food-loving community.',
};
async function  Meals(){
  const meals=await getMeals();
  // throw new Error('error')
  return <Mealsgrid meals={meals}/>
}
export default  function mealspage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>

        <p>
          Choose your favorite recipe and cook it yourself at home! It is easy
          and fun!
        </p>

        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>loading Meals</p>}>
        <Meals/>
        </Suspense>
    
      </main>
    </>
  );
}

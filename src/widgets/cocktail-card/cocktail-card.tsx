import React from "react";

import { Cocktail } from "@/entities/cocktail";
import Image from "@/shared/ui/image";

import styles from "./cocktail-card.module.css";
import { CocktailCardProps } from "./types";

const CocktailCard: React.FC<CocktailCardProps> = ({ data }) => {
  const getIngredientsAndMeasures = () => {
    const ingredientsAndMeasures = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = data[`strIngredient${i}` as keyof Cocktail];
      const measure = data[`strMeasure${i}` as keyof Cocktail];

      if (ingredient) {
        ingredientsAndMeasures.push(
          <p key={`ingredient-${i}`}>
            {ingredient} - {measure || "to taste"}
          </p>,
        );
      }
    }
    return ingredientsAndMeasures;
  };

  return (
    <div className={styles.card}>
      <h3>{data.strDrink || "Unknown Cocktail"}</h3>

      <div className={styles.cardInfo}>
        <div>
          {data.strCategory && <p>{data.strCategory}</p>}
          {data.strAlcoholic && <p>{data.strAlcoholic}</p>}
          {data.strGlass && <p>{data.strGlass}</p>}
          <div className={styles.instructions}>
            <span className={styles.subTitle}>Instructions:</span>
            <p>{data.strInstructions || "No instructions available."}</p>
          </div>
        </div>
        {data.strDrinkThumb && (
          <div>
            <Image src={data.strDrinkThumb} alt={data.strDrink || "Cocktail"} />
          </div>
        )}
      </div>

      <div>
        <span className={styles.subTitle}>List of ingredients:</span>
        <div>{getIngredientsAndMeasures()}</div>
      </div>
    </div>
  );
};

export default CocktailCard;

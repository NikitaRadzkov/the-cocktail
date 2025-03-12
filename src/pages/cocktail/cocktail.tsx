import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { OutCocktails } from "@/entities/cocktail";
import { AppConfig } from "@/shared/config";
import CocktailCard from "@/widgets/cocktail-card";
import Layout from "@/widgets/layout";

const Cocktail: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { data } = useSWR<OutCocktails>(`${AppConfig.urls.api}?s=${query}`);

  const isDrinksExist = useMemo(() => {
    return (data && data?.drinks?.length > 0) || false;
  }, [data]);

  return (
    <Layout>
      {isDrinksExist ? (
        data?.drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} data={drink} />
        ))
      ) : (
        <div>Drinks not found</div>
      )}
    </Layout>
  );
};

export default Cocktail;

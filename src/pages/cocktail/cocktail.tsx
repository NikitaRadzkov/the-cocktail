import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { OutCocktails } from "@/entities/cocktail";
import { AppConfig } from "@/shared/config";
import CocktailCard from "@/widgets/cocktail-card";
import Layout from "@/widgets/layout";

import styles from "./cocktail.module.css";

const Cocktail: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { data } = useSWR<OutCocktails>(`${AppConfig.urls.api}?s=${query}`, {
    revalidateIfStale: false,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

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
        <div className={styles.notFound}>Drinks not found</div>
      )}
    </Layout>
  );
};

export default Cocktail;

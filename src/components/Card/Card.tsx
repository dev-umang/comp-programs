import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className={`${styles.cardWrapper} ${props.className}`}>
      <div className={styles.header}>{props.title}</div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export default Card;

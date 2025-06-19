import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.subtitle}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className={styles.button}>
        ⬅ Back to Home
      </Link>
    </motion.section>
  );
}

export default NotFound;

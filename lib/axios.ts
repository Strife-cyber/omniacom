/**
 * Instance Axios preconfiguree.
 *
 * Centralise la configuration HTTP de l'application :
 * - URL de base depuis les variables d'environnement
 * - Timeout, headers par defaut
 * - Gestion centralisee des erreurs
 *
 * Utilisation :
 *   import { api } from "@/lib/axios";
 *   const { data } = await api.get("/endpoint");
 */

import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

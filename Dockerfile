# ==========================================
# Étape 1 : Construction (Build) de l'application
# ==========================================
FROM node:20-alpine AS build

WORKDIR /app

# Optimisation du cache des dépendances
COPY package*.json ./
RUN npm install

# Copie du code source et compilation
COPY . .
RUN npm run build

# ==========================================
# Étape 2 : Image de production légère avec Nginx
# ==========================================
FROM nginx:alpine

# Configuration personnalisée Nginx pour React Router (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Récupération des fichiers statiques générés
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


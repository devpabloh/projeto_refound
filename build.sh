#!/bin/bash

# Build do frontend
cd web
npm install
npm run build
cd ..

# Build do backend
cd api
npm install
npm run vercel-build
cd ..

# Copiar o build do frontend para a raiz
cp -r web/dist/* .

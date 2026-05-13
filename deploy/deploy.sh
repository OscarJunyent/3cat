#!/bin/bash

# Script de deploy per a 3cat.elink.cat
# Uso: ./deploy.sh
# Prerequisits: rsync, npm

# ====== CONFIGURACIÓ ======
SERVER="elink.cat"           # Servidor destí
USER="deploy"                # Usuari SSH
REMOTE_PATH="/var/www/3cat.elink.cat"  # Ruta al servidor
LOCAL_BUILD="./dist"         # Carpeta compilada localment

# ===== FI CONFIGURACIÓ =====

echo "📦 Compilant Astro..."
npm run build

# Verificar que dist/ existeix i no està buit
if [ ! -d "$LOCAL_BUILD" ] || [ -z "$(ls -A $LOCAL_BUILD)" ]; then
    echo "❌ Error: $LOCAL_BUILD no existeix o està buit"
    exit 1
fi

echo "✅ Build completat correctament"
echo ""
echo "📤 Pujant a $SERVER:$REMOTE_PATH..."

# Rsync amb delete (eliminar fitxers que no existeixen localment)
rsync -avz --delete \
    "$LOCAL_BUILD/" \
    "$USER@$SERVER:$REMOTE_PATH/"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deploy completat!"
    echo ""
    echo "🌐 La web està disponible a:"
    echo "   https://3cat.elink.cat"
else
    echo "❌ Error en el deploy. Verifica que tens accés SSH a $USER@$SERVER"
    exit 1
fi

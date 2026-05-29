# ─────────────────────────────────────────────────────────────────
# ETAPA 1: Build — usar imagen completa solo para compilar
# ─────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
# alpine: imagen mínima (~5 MB vs ~900 MB de node:20 completa)
# AS builder: nombre de la etapa para multi-stage build


WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
# --only=production: no instala devDependencies en imagen final
COPY . .
RUN npm run build


# ─────────────────────────────────────────────────────────────────
# ETAPA 2: Runtime — imagen final mínima
# ─────────────────────────────────────────────────────────────────
FROM node:20-alpine AS runtime


# Crear usuario sin privilegios (no usar root)
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser


WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules


# Cambiar propietario de archivos al usuario sin privilegios
RUN chown -R appuser:appgroup /app
USER appuser
# Ejecutar el proceso como usuario sin privilegios


EXPOSE 3000
# EXPOSE es solo documentación; no abre el puerto automáticamente


HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1


CMD ["node", "dist/index.js"]

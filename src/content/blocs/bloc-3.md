---
blockId: "bloc-3"
number: 3
title: "MCP i Protocols de Connexió IA"
duration: "2h"
audience: "Tots els perfils"
dateOptions: ["8 de maig 2026", "9 de maig 2026"]
summary: "Model Context Protocol: arquitectura, integrations i casos d'ús per a sistemes distribuïts."
objective: "Entendre el Model Context Protocol (MCP), integrar connexions amb sistemes externs i construir pipelines d'IA distribuïts i escalables."
order: 3
keyTopics:
  - name: "Model Context Protocol: Fonaments"
    duration: "25 min"
  - name: "Arquitectura de connexions MCP"
    duration: "25 min"
  - name: "Casos d'ús: APIs, Databases, File Systems"
    duration: "30 min"
  - name: "Debugging i monitorització de MCP"
    duration: "20 min"
practiceExercise:
  title: "MCP Server: Connexió a API Externa"
  description: "Crearàs un servidor MCP que conecta amb una API REST pública (per ex., API de GitHub, Weather API, etc.) i exposa els recursos com a context per als agents d'IA."
commands:
  - label: "Inicialitzar servidor MCP"
    language: "bash"
    code: "npm init @modelcontextprotocol/server my-mcp-server"
  - label: "Implementar resource handler"
    language: "javascript"
    code: "server.resource('api:github/repos', async (args) => {\n  const repos = await fetchGitHubRepos(args.user);\n  return { resources: repos };\n});"
  - label: "Executar servidor"
    language: "bash"
    code: "node server.js --port 3000"
screenshots:
  - src: "/screenshots/bloc-3-mcp-diagram.png"
    alt: "Arquitectura de MCP"
    caption: "Comunicació entre client IA i servidor MCP"
  - src: "/screenshots/bloc-3-mcp-debug.png"
    alt: "Debugging de MCP al inspector"
    caption: "Monitorització de les crides a MCP en temps real"
artifact:
  - "Servidor MCP funcional"
  - "Client IA que utilitza el servidor"
  - "Tests d'integració"
  - "Documentació de API"
pdfFile: "bloc-3-mcp-protocols.pdf"
prevBlock: { id: "bloc-2", title: "Especialització d'Agents i Skills" }
nextBlock: { id: "bloc-4", title: "IA al Cicle de Vida del Software" }
---

## Contingut detallat

El Model Context Protocol (MCP) és la capa que permet als sistemes d'IA accedir a recursos externs de forma estandarditzada.

### Per què MCP?

Sense MCP, cada integració d'IA requereix code custom. Amb MCP:
- **Estandardització**: Protocol consistent
- **Escalabilitat**: Connectar grans sistemes
- **Seguretat**: Control granular d'accés
- **Interoperabilitat**: Agents comparteixen resources

### Arquitectura MCP

- **Client**: L'agent d'IA o aplicació
- **Server**: Exposa recursos (APIs, DB, etc.)
- **Transport**: Comunicació (stdio, HTTP, etc.)
- **Protocol**: Mensatgeria JSON-RPC

### Exemples pràctics

1. **GitHub MCP**: Lee repos, issues, PRs
2. **Database MCP**: Consultes SQL a través d'IA
3. **Slack MCP**: Interacció amb canals i missatges
4. **File System MCP**: Accés segur a arxius

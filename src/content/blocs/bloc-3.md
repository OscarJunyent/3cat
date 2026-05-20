---
blockId: "bloc-3"
order: 3
number: "3"
title: "MCP i Protocols de Connexió IA"
duration: "2h"
audience: "Tots els perfils"
dateOptions:
  - "11 de maig 2026 (Grup A)"
  - "12 de maig 2026 (Grup A — alternativa)"
  - "13 de maig 2026 (Grup B)"
  - "15 de maig 2026 (Grup B — alternativa)"
summary: "Construïm un servidor MCP real que correrà al vostre portàtil i el connectem a serveis reals."
objective: "Entendre MCP, provar servidors MCP existents i construir-ne dos de nous connectats a serveis reals. Al final del bloc, cada developer tindrà un MCP server operatiu i connectat al seu entorn de treball."
keyTopics:
  - name: "Entendre MCP"
    duration: "30 min"
    description: "El protocol que connecta models d'IA amb els nostres sistemes interns. L'analogia del USB-C: un estàndard que fa que qualsevol model parli amb qualsevol sistema. Dades del 2026: 15.000+ servers públics, 97M descàrregues/mes, adoptat per Anthropic, OpenAI, GitHub, Microsoft i Google."
  - name: "Anatomia del consum d'MCP"
    duration: "20 min"
    description: "Tres tipus de transports: STDIO (local, el més comú), HTTP (remot, el modern) i SSE (legacy, deprecat). Tres llocs de configuració: Workspace (.vscode/mcp.json), User profile (~/.config/) i Copilot CLI (~/.copilot/mcp-config.json)."
  - name: "Taller 1 — Provar 2 MCP servers"
    duration: "30 min"
    description: "MCP de GitHub Personal (issues del repo 3cat-shows-api), MCP de GitHub 3Cat (repositoris de l'organització) i Bonus (crear un repositori nou amb primer commit i README)."
  - name: "Anatomia d'un MCP server"
    duration: "15 min"
    description: "15 línies de TypeScript. Si saps fer un endpoint d'API, ja saps fer un MCP server. Imports, instanciar, definir tools, connectar transport. El mateix patró funciona en Java, C#/.NET, Python i altres."
  - name: "Taller 2 — Construir 2 MCP servers"
    duration: "35 min"
    description: "Dos repos starter amb scaffolding: 3cat-tvmaze-mcp (completar get_episodes) i 3cat-wikipedia-mcp (completar get_article_summary). Pregunta de prova combinada: sinopsi i episodis de Merlí."
practiceExercise:
  title: "Completar 2 MCP servers sobre APIs de contingut audiovisual"
  description: "No construïm des de zero — tenim dos repos starter. El 3cat-tvmaze-mcp té la tool search_show() feta; cal completar get_episodes() (endpoint: api.tvmaze.com/shows/:id/episodes — atenció: TVMaze té un rate limit baix i pot retornar 429). El 3cat-wikipedia-mcp té search_article() feta; cal completar get_article_summary() (endpoint: Wikipedia REST API). Un cop completats, la pregunta de prova és: «Quina és la sinopsi de Merlí, i quants episodis va tenir? Combina Wikipedia i TVMaze.»"
commands:
  - label: "El fitxer mcp.json — tres entrades, ja teniu MCP"
    language: "json"
    code: |
      {
        "servers": {
          "github": {
            "type": "http",
            "url": "https://api.githubcopilot.com/mcp"
          },
          "github-corporation": {
            "type": "http",
            "url": "https://api.githubcopilot.com/mcp"
          },
          "3cat-tvmaze": {
            "command": "node",
            "args": ["./dist/index.js"]
          }
        }
      }
      // HTTP remot → GitHub MCP oficial. OAuth automàtic.
      // HTTP remot corporatiu → Compte Enterprise de 3Cat.
      // STDIO local propi → El server que construïu avui.
  - label: "MCP server mínim — 15 línies de TypeScript"
    language: "typescript"
    code: |
      import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
      import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
      import { z } from "zod";

      const server = new McpServer({
        name: "3cat-tvmaze",
        version: "0.1.0",
      });

      server.tool(
        "search_show",
        "Search for a TV show by name on TVMaze",
        { query: z.string() },
        async ({ query }) => {
          const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
          const data = await res.json();
          return { content: [{ type: "text", text: JSON.stringify(data) }] };
        }
      );

      await server.connect(new StdioServerTransport());
      // 1–3: Imports · 4–8: Instanciar · 9–19: Definir tools · 20: Connectar transport
  - label: "El mateix patró en Java"
    language: "java"
    code: |
      McpServer server = McpServer.builder()
          .name("3cat-tvmaze").version("0.1.0").build();

      server.addTool("search_show",
          "Search for a TV show on TVMaze",
          schema -> schema.property("query", String.class).required(),
          (params) -> {
              String query = params.getString("query");
              String resp = HttpClient.newHttpClient()
                  .send(HttpRequest.newBuilder()
                      .uri(URI.create("https://api.tvmaze.com/search/shows?q=" + query))
                      .build(), BodyHandlers.ofString()).body();
              return McpResult.text(resp);
          });
      server.connect(new StdioServerTransport());
  - label: "El mateix patró en C# / .NET"
    language: "csharp"
    code: |
      var builder = McpServerBuilder.Create()
          .WithName("3cat-tvmaze").WithVersion("0.1.0")
          .WithTool<TvMazeTools>();
      var server = builder.Build();
      await server.RunAsync(new StdioTransport());

      public class TvMazeTools {
          [McpServerTool]
          [Description("Search for a TV show on TVMaze")]
          public static async Task<string> SearchShow(
              [Description("The show name")] string query) {
              using var http = new HttpClient();
              return await http.GetStringAsync(
                  $"https://api.tvmaze.com/search/shows?q={query}");
          }
      }
      // Instanciar · Registrar tools (nom + descripció + schema + handler) · Connectar.
      // EL MATEIX PATRÓ CONCEPTUAL.
screenshots:
  - src: "/screenshots/bloc-3-01.png"
    alt: "Diagrama Sense MCP vs Amb MCP"
    caption: "Sense MCP: N×M integracions a mida. Amb MCP: 1 integració per sistema, tots els models la aprofiten."
  - src: "/screenshots/bloc-3-02.png"
    alt: "Taula de transports MCP i llocs de configuració"
    caption: "Els tres transports (STDIO, HTTP, SSE) i els tres llocs de configuració. STDIO i HTTP són els que fem servir avui."
  - src: "/screenshots/bloc-3-03.png"
    alt: "Taller 1 — MCP de GitHub Personal i MCP de Github 3Cat"
    caption: "Taller 1: consumir els dos MCPs de GitHub. Atenció a la distinció entre compte personal i compte Enterprise."
  - src: "/screenshots/bloc-3-04.png"
    alt: "Taller 2 — repos starter 3cat-tvmaze-mcp i 3cat-wikipedia-mcp"
    caption: "Els dos repos starter: tool feta (verd) vs tool a completar (vermell). TVMaze pot retornar 429 amb 30 persones simultànies."
artifact:
  - "MCP server `3cat-tvmaze-mcp` completat: `search_show()` + `get_episodes()` funcionals"
  - "MCP server `3cat-wikipedia-mcp` completat: `search_article()` + `get_article_summary()` funcionals"
  - "Fitxer `.vscode/mcp.json` configurat al workspace amb els tres servers actius"
  - "Comprensió del patró Imports → Instanciar → Definir tools → Connectar, aplicable a TS, Java i .NET"
pdfFile: "bloc-3-mcp-connexio-ia.pdf"
prevBlock:
  id: "bloc-2"
  title: "Especialització d'Agents i Skills"
nextBlock:
  id: "bloc-4"
  title: "IA al Cicle de Vida del Software"
---

## MCP és el USB-C dels models d'IA

Un protocol estàndard perquè qualsevol model parli amb qualsevol sistema, sense que cada banda hagi d'aprendre o saber-ne de l'altre.

**Sense MCP:** per cada model i cada sistema cal una integració a mida. Copilot sap parlar amb el codi, però no amb Jira, Sentry ni la vostra DB. N×M plugins.

**Amb MCP:** una sola integració per sistema. Tots els models compatibles l'aprofiten. El server MCP que construïu avui funciona amb Copilot, Claude Code, Cursor, ChatGPT i tot el que vindrà. No és tecnologia propietària.

## No és experimental. És l'estàndard.

15.000+ MCP servers públics al GitHub MCP Registry · 97M descàrregues/mes del SDK oficial · Adoptat per Anthropic, OpenAI, GitHub, Microsoft i Google.

## Connexió pedagògica amb el Bloc 2

Les Skills del Bloc 2 i MCP funcionen exactament amb el mateix patró: definir un nom, una descripció i un handler. No és un mecanisme nou — és el mateix concepte aplicat a eines externes.

## Contingut generalista vs MCP propi — el contrast clau

**Contingut generalista de Copilot** llegeix HTML d'una URL pública. Text desestructurat, sense control del format, genèric. Útil per explorar contingut públic ràpidament.

**MCP server propi** retorna JSON estructurat (títol, gènere, episodis, dates). Copilot rep dades precises. Control total, autenticació i lògica de negoci integrades. Quan necessites estructura, autenticació o reutilització.

## Nota sobre comptes de GitHub al Taller 1

Distinció important a 3Cat: Copilot Chat usa el compte **Enterprise** de 3Cat (subscripció). El MCP de GitHub OAuth usa el compte **personal** (repo públic de la formació). Verificació: Cmd+Shift+P → 'Accounts: Manage Accounts'.

## Maduresa dels SDKs

TypeScript i Python tenen molts més exemples a la comunitat. Java i .NET són oficials i funcionals, però trobareu menys recursos a GitHub. Viable, però amb més investigació prèvia.

# Steam API

Maak een nieuwe nest js applicatie aan met de naam steam-api. Je kan hier het volgende commando voor gebruiken:

```bash
npx nest new steam-api
```

## Opdracht

Maak een Steam service aan die toegang waar je gebruik maakt van de `steam.json` file. Deze file bevat een lijst met games en genres. De service moet de volgende methodes bevatten:

- Een getter die alle games teruggeeft
- Een getter die alle genres teruggeeft
- Een getter die een game teruggeeft op basis van de id
- Een getter die een genre teruggeeft op basis van de id

Een service kan je aanmaken met het volgende commando:

```bash
npx nest g service steam
```

Vervolgens maak je een GamesController aan die de volgende endpoints heeft:
- Een GET endpoint die alle games teruggeeft (/games)
- Een GET endpoint die een game teruggeeft op basis van de id (/games/:id)

Een controller kan je aanmaken met het volgende commando:

```bash
npx nest g controller games
```

Vervolgens maak je een GenresController aan die de volgende endpoints heeft:
- Een GET endpoint die alle genres teruggeeft (/genres)
- Een GET endpoint die een genre teruggeeft op basis van de id (/genres/:id)
- Een GET endpoint die alle games teruggeeft die bij een genre horen (/genres/:id/games)

Als de game of genre niet gevonden kan worden moet je een 404 teruggeven met een gepaste error message.

Je kan de nest applicatie starten met het volgende commando:

```bash
npm run start:dev
```

Probeer je API uit met Postman.

# Jadłodzielnia Szczecin

## Struktura projektu

### `src/components`
Zawiera komponenty wielokrotnego użytku, takie jak `TopBar`, `TopNavigation`, `Footer`.

### `src/pages`
Zawiera strony aplikacji, np. `Home`, `Aktualnosci`, `Onas`, `Zasady`, `Kontakt`.

### `src/styles`
Zawiera globalne style aplikacji, np. `App.css`.

### `src/assets`
Zawiera zasoby statyczne, takie jak obrazy (`images`) i czcionki (`fonts`).

### `public`
Zawiera favicon i inne pliki publiczne dostępne dla serwera.

### `index.html`
Główny plik HTML aplikacji.  
W tym pliku powinny być dodawane lub modyfikowane m.in.:
- Zawartość sekcji `<head>`, np. tytuł strony (`<title>`), meta tagi (SEO, charset, viewport), linki do favicon i czcionek.
- Kontener `<div id="root">` lub podobny, w którym renderowana jest aplikacja.
- Linki do plików manifestu lub innych zasobów publicznych.
- Skrypty lub style globalne, które muszą być załadowane przed uruchomieniem aplikacji.
- Inne elementy wymagane przez framework lub narzędzia (np. Vite).

### `vite.config.ts`
Konfiguracja Vite dla projektu.

## Jak uruchomić projekt
1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Uruchom projekt:
   ```bash
   npm run dev
   ```


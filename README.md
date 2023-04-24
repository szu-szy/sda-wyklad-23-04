## How to run project

1. Install dependencies
 - npm install / npm i

2. Run project
 - npm start

## HOMEWORK

# Stworzenie listy zadań (TODO LIST)
- Zadanie polega na stworzeniu listy zadań w formie listy, użytkownik ma możliwość dodania nowego zadania przez formularz, usunięcia zadania z listy, edycje istniejącego zadania (po wcisnieciu przycisku edit) oraz przefiltrowaniu listy zadań wpisująć szukanego tekstu w input (minimum 3 znaki)

1. Komponent ToDo
- posiada tablice elementów listy (stan)
- posiada komponent List który odpowiada za wyświetlanie listy elementów
- posiada formularz do tworzenia nowych elementów
- posiada search input (HTML input) do wyszukiwania elementów
- w tym komponencie będą zawarte wszystkie funkcje odpowiadające za działanie aplikacji

2. Komponent List
- posiada komponenty ListItem które służą do wyświetlania informacji i pojedyńczym elemencie
- przyjmuje tablice elementów jako props

3. Komponent ListItem
- wyswietla informacje o pojedyńczym elemencie
- przyjmuje element (id: number, description: string) jako props
- posiada przycisk do usuwania elementu z listy poprzez id elementu
- posiada stan - zmienna typu boolean (isReadOnly) która odpowiada za możliwosc edycji jezeli jest ustawiona na false
- posiada przycisk edytuj który zmienia nam wartosc zmiennej isReadOnly na true lub false

4. Komponent Form
- posiada stan przetrzymujący wartości z formularza
- tworzy nam nowy element dodając go na koniec listy
- każdy nowo stworzony element listy powinien posiadać unikalne ID

5. Komponent SearchForm (Dla chętnych)
- posiada stan przetrzymujący wartość szukanej frazy
- po wpisaniu minimum 3 znaków lista TODO powinna zostać przefiltrowana


# Retake the Mainframe

Cybersecurity workshop site. Game 1 (Decoding), Game 2 (Prompt Engineering), Game 3 (The Poisoned Memo).

## Deploy
1. Push this folder to a GitHub repo.
2. Settings > Pages > Deploy from branch > `main` / root.
3. Site goes live at `https://<user>.github.io/<repo>/`.

Local preview works too: double-clicking `index.html` is fine — unlock progress
rides along in the link (`#u=N`), so the gate still works even when the browser
splits `file://` storage per page.

## Add your games
Paste your content into `tasks/task1.html` and `tasks/task2.html` between the marked comments.

## Codes
Game 2 unlocks with the passkey recovered from Game 1's memory dump (the PDF).
Game 3 unlocks with the flag hidden inside the Game 2 rogue-AI chatbot.
To change them, open the site, press F12, and run `await hashCode("new-code")` in the console, then paste the result into `assets/config.js`.

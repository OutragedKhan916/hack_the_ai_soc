// ---------------------------------------------------------------
// WORKSHOP CONFIG
// Each "unlock" is the SHA-256 hash of the code (lowercase, trimmed)
// that unlocks that task. Current codes:
//   Task 2 unlocks with:  decoded-01            (from Game 1)
//   Task 3 unlocks with:  the flag from the Game 2 rogue AI chatbot
// To change a code, open index.html in a browser, press F12, and in
// the console run:   await hashCode("your-new-code")
// then paste the result below.
// ---------------------------------------------------------------
window.WORKSHOP = {
  tasks: [
    { n: 1, title: "Decoding",              blurb: "The first lock on the mainframe. Crack the message.",              file: "tasks/task1.html", unlock: null },
    { n: 2, title: "Prompt Engineering",    blurb: "Talk to the machine. Make it say what you need.",                  file: "tasks/task2.html", unlock: "51dec52093fb5fe9e890a3fcd9a2bbd2cc3eec8e61b95ff62de7cc26b6603f56" },
    { n: 3, title: "The Poisoned Memo",     blurb: "Find the vulnerability. How did the rogue AI fool HELPER-9?",      file: "tasks/task3.html", unlock: "faa84e7449411af63dac89325699c743801f1d626ffb836f0e594eef4454f74c" }
  ]
};

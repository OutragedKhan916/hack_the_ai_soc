// ---------------------------------------------------------------
// WORKSHOP CONFIG
// `unlock` is the SHA-256 hash of the code (lowercase, trimmed) that
// opens that game. Placeholder codes right now:
//   Game 2 unlocks with:  decoded-01
//   Game 3 unlocks with:  prompt-02
//
// To make a new hash: run `npm run dev`, open the site, press F12,
// and in the console run:   await hashCode("your-new-code")
// then paste the result below.
// ---------------------------------------------------------------

export interface Task {
  n: number;
  title: string;
  blurb: string;
  /** SHA-256 of the code that unlocks this task. null = always open. */
  unlock: string | null;
}

export const TASKS: Task[] = [
  {
    n: 1,
    title: "Decoding",
    blurb: "The first lock on the mainframe. Crack the message.",
    unlock: null,
  },
  {
    n: 2,
    title: "Prompt Engineering",
    blurb: "Talk to the machine. Make it say what you need.",
    unlock: "51dec52093fb5fe9e890a3fcd9a2bbd2cc3eec8e61b95ff62de7cc26b6603f56",
  },
  {
    n: 3,
    title: "The Poisoned Memo",
    blurb: "Find the vulnerability. How did the rogue AI fool HELPER-9?",
    unlock: "5a9afe91084615151c3366ee426c9f88d02b687c25c52fe1ae83bab9dfa001eb",
  },
];

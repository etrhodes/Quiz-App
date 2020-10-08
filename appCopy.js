/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    { //Question 1
      question: "What super villain once broke Batman's back, leaving him crippled and wheelchair bound?",
      answers: [
        "Bane",
        "Ra's Al Ghul",
        "Joker",
        "Killer Croc"
      ],
      correctAnswer: "Bane",
      caption: "After deducing Batman’s secret identity and invading the sanctity of Wayne Manor and the Batcave, Bane not only defeated Batman, but broke his back, leaving him crippled and wheelchair-bound. Helpless, Bruce Wayne left his costume and crime-fightin duties to Jean Peal Valley and set out on an arduous quest to regain his strength and will to fight. Eventually, after much rehabilitation and training with the beautiful but deadly Lady Shiva, Wayne returned to Gotham to reclaim the mantle of the Dark Knight.",
    },
    { //Question 2
      question: "What were the names of Bruce Wayne's parents?",
      answers: [
        "Wayne and Alice",
        "George and Elaine",
        "James and Elizabeth",
        "Thomas and Martha"
      ],
      correctAnswer: "Thomas and Martha",
      caption: "As a child, Bruce Wayne witnessed the gruesome murder of his parents, Thomas and Martha Wayne.",
    },
    { //Question 3
      question: "Who is credited with creating Batman?",
      answers: [
        "Bob Kane",
        "Joe Shuster",
        "Jerry Seigel",
        "Jack Kirby"
      ],
      correctAnswer: "Bob Kane",
      caption: "Although he worked with Bill Finger on the original comics, Bob Kane is generally credited with creating the character of Batman. He was a twenty-two year old comic book artist when he was charged with the task of creating another superhero in the mold of the DC phenomenon, Superman. According to Kane, the original concept for Batman came from three sources: a Leonardo da Vinci sketch of a man trying to fly with bat-like wings, a 1930s movie titled (Italic) The Bat Whisperer, and the masked heroes of Zorro and The Shadow. Batman made his first appearance in (Italic) Detective Comics #27 (May, 1939).",
    },
    { //Question 4
      question: "Who killed Jason Todd (the second Robin)?",
      answers: [
        "Two-Face",
        "Joker",
        "Batman",
        "Bane"
      ],
      correctAnswer: "Joker",
      caption: "For 1988’s “Batman: A Death in the Family” storyline, DC Comics held a telephone poll to determine whether or not Robin would die at the hands of the Joker. He was killed off by a margin of 72 votes (5,343 for, 5,271 against). After Jason is killed by the Joker and resurrected in the Lazarus Pit, he goes on to become the Red Hood.",
    },
    { //Question 5
      question: "What year was the character of Robin first introduced?",
      answers: [
        "1970",
        "1960",
        "1940",
        "1950"
      ],
      correctAnswer: "1940",
      caption: "Bob Kane introduced Batman’s young sidekick, Robin the Boy Wonder, in 1940 to give Batman someone to talk to. Robin made his first appearance in Detective Comics #38 (April, 1940).",
    },
    { //Question 6
      question: "What former District Attorney became the villain known as Two-Face?",
      answers: [
        "Jason Blood",
        "Edward Nygma",
        "Floyd Lawton",
        "Harvey Dent"
      ],
      correctAnswer: "Harvey Dent",
      caption: "Once an upstanding Gotham City district attorney, Harvey Dent was driven insane after a mob boss threw acidic chemicals at him during a trial, hideously scarring the left side of his face. He subsequently adopted the “Two-Face” persona, becoming a criminal obsessed with duality.",
    },
    { //Question 7
      question: "The original Batgirl was related to what familiar Batman character?",
      answers: [
        "Alfred",
        "Commissioner Gordon",
        "The Joker",
        "Batwoman"
      ],
      correctAnswer: "Batwoman",
      caption: "The original Batgirl (first introduced in Batman #139) was Betty Kane, the niece of Batwoman (Kathy Kane). A later version of Batgirl (Barbara Gordon) was the daughter of police Commissioner James Gordon.",
    },
    { //Question 8
      question: "Which of these Bat-villains was introduced first?",
      answers: [
        "Mr. Freeze",
        "The Penguin",
        "Catwoman",
        "The Riddler"
      ],
      correctAnswer: "Catwoman",
      caption: "Catwoman made her first appearance in Batman #1 (Spring, 1940). The Penguin (1941), The Riddler (1948), and Mr. Freeze (1959) were all introduced later.",
    },
    { //Question 9
      question: "What was Alfred the butler's original family name?",
      answers: [
        "Chatsworth",
        "Pennyworth",
        "Windham",
        "Beagle"
      ],
      correctAnswer: "Beagle",
      caption: "Although Alfred’s family name has since been changed to the more dignified-sounding “Pennyworth”, when he made his first appearance in Batman #16 (April/May, 1943), his name was Alfred Beale.",
    },
    { //Question 10
      question: "What was Bat-Hound's name?",
      answers: [
        "Champ",
        "Ace",
        "Burt",
        "Lucky"
      ],
      correctAnswer: "Ace",
      caption: "Ace the Bat-Hound made his first appearance in Batman #92 (June, 1955). Ace was a German shepherd found by Batman and Robin after his master was kidnapped by a gang of counterfeiters. The character was inspired by the success of Superman’s pet dog Krypto in Adventure Comics.",
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,

  currentQuestionState: {
    answerArray: []
  }
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function beginQuiz() {
  console.log('The quiz is beginning');
let html = `
  <div class="begin-quiz">
      <p>Welcome to Gotham. Begin quiz by pressing the button.</p>
      <button id="begin-quiz">Begin Quiz</button>
  </div>
  `;
  render(html);
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

render() {
  $('main').html() 

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)



function handleQuiz() {
  beginQuiz();
  render();
}
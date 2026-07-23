// Knowledge base for the "Ask My CV" terminal on the homepage.
// Each entry is matched against the visitor's question by keyword overlap;
// see script.js wiring for how answers get picked and rendered.
var terminalKnowledgeBase = [
  {
    keywords: ['job', 'work', 'currently doing', 'role', 'employer', 'employed', 'position', 'doing now'],
    answer: "I'm currently a Junior Backend Developer at Code Café (part-time), leading backend work on a live production system for a manufacturing client and helping build a new client proof-of-concept."
  },
  {
    keywords: ['education', 'study', 'university', 'degree', 'school', 'studying', 'graduate'],
    answer: "I'm a third-year BSc Information Technology student at North-West University, expected to graduate in November 2026."
  },
  {
    keywords: ['skill', 'tech stack', 'technologies', 'language', 'programming', 'stack', 'know'],
    answer: "Mostly C#, ASP.NET Core, and Entity Framework Core on the backend, SQL Server and PostgreSQL for databases, plus React/TypeScript and Python when a project needs full-stack work. Check the Skills page for the full list."
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'touch'],
    answer: "Best way is email: marnevermaak1@gmail.com. There's also GitHub and LinkedIn in the footer, or head to the Contact page."
  },
  {
    keywords: ['github', 'repo', 'repositories', 'source code'],
    answer: "github.com/nowUCme22, that's where all my coursework and project repos live."
  },
  {
    keywords: ['linkedin'],
    answer: "linkedin.com/in/marné-vermaak"
  },
  {
    keywords: ['location', 'based', 'live', 'where'],
    answer: "Potchefstroom, North West, South Africa."
  },
  {
    keywords: ['agrisol', 'intern', 'internship', 'previous job', 'before code', 'history'],
    answer: "Before Code Café, I did a one-week internship at Agrisol's IT department, which turned into a full-time placement building a WhatsApp AI product, and eventually this ongoing part-time role."
  },
  {
    keywords: ['project', 'built', 'worked on', 'portfolio'],
    answer: 'Die Fabriek (a production manufacturing system), Dencity (a live venue busyness app), Elsa (a WhatsApp AI agent), plus several university projects. Full list on the Projects page.'
  },
  {
    keywords: ['certification', 'certificate', 'certified'],
    answer: "AI Foundations (LLMs, AI fundamentals & n8n workflow automation) from a Skool community course, plus a Data Entry Certificate."
  },
  {
    keywords: ['hobbies', 'fun fact', 'interest', 'free time', 'dog', 'pet'],
    answer: "Dog mum to Nacho & Pepper, currently deep in wedding planning, and low-key dreaming of working IT for an F1 team someday. Flip my photo above for more."
  },
  {
    keywords: ['leadership', 'lead a', 'manage a team', 'led'],
    answer: "I've led two university project teams (as Group Leader and Project Manager) and worked as a student assistant mentoring first-year students."
  },
  {
    keywords: ['why backend', 'passion', 'enjoy', 'love about'],
    answer: "I like getting the database schema right before anything gets built on top of it. Backend and data design are where I do my best work."
  },
  {
    keywords: ['help', 'command', 'what can', 'options'],
    answer: "Try asking about my current job, skills, education, projects, previous experience, or how to contact me."
  },
  {
    keywords: ['hi', 'hello', 'hey'],
    answer: "Hi there! Ask me anything about Marné's background, or click one of the suggestions below."
  }
];

var terminalFallbackAnswer = "I don't have an answer for that yet. Try asking about my job, skills, education, projects, or how to contact me.";

function terminalAnswerFor(question) {
  var q = question.toLowerCase();
  var best = null;
  var bestScore = 0;
  terminalKnowledgeBase.forEach(function (entry) {
    var score = 0;
    entry.keywords.forEach(function (kw) {
      if (q.indexOf(kw) !== -1) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });
  return best ? best.answer : terminalFallbackAnswer;
}

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('terminalForm');
  if (!form) return;

  var input = document.getElementById('terminalInput');
  var body = document.getElementById('terminalBody');

  function ask(question) {
    var trimmed = question.trim();
    if (!trimmed) return;

    var qLine = document.createElement('div');
    qLine.className = 'terminal-line terminal-question';
    qLine.textContent = trimmed;
    body.appendChild(qLine);

    var aLine = document.createElement('div');
    aLine.className = 'terminal-line terminal-answer';
    aLine.textContent = terminalAnswerFor(trimmed);
    body.appendChild(aLine);

    body.scrollTop = body.scrollHeight;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ask(input.value);
    input.value = '';
    input.focus();
  });
});

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Rendering facts in List
factsList.innerHTML = "";

// Load data from Supabase
loadfacts();
async function loadfacts() {
  const res = await fetch(
    "https://rqbrqazqhklwgljdohyq.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxYnJxYXpxaGtsd2dsamRvaHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNjg2ODcsImV4cCI6MjAwOTc0NDY4N30.ymRPhijy4Y07NBklc6j98uF4tuRFU9eeVuf18tTB0ek",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxYnJxYXpxaGtsd2dsamRvaHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNjg2ODcsImV4cCI6MjAwOTc0NDY4N30.ymRPhijy4Y07NBklc6j98uF4tuRFU9eeVuf18tTB0ek",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  //   const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (facts) => `<li class="fact">
      <p>
      ${facts.text}
        <a
          class="source"
          href="${facts.source}"
          target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === facts.category).color
      }">${facts.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle Form Visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

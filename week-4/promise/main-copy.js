(() => {
  const hobbies = [
    {
      name: "sporten",
      hours: 2,
    },
    {
      name: "klimmen",
      hours: 5,
    },
    {
      name: "voetbal",
      hours: 2,
    },
    {
      name: "gamen",
      hours: 8,
    },
    {
      name: "koken",
      hours: 8,
    },
  ];

  const $list = document.getElementById("list");

  /*let html = "";
  for (const hobby of hobbies) {
    html += `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
  }*/

  const html = hobbies
    .map((hobby) => {
      return `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
    })
    .join("");
  console.log(html);

  $list.innerHTML = html;
})();

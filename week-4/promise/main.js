(() => {
  const url = "https://www.pgm.gent/data/web-2/hobbies.json";

  const $list = document.getElementById("list");

  // optie 1 (then)
  fetch(url)
    .then((response) => response.json())
    .then((hobbies) => {
      const html = hobbies
        .map((hobby) => {
          return `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
        })
        .join("");
      console.log(html);

      $list.innerHTML = html;
    })
    .catch((error) => {
      window.alert(error);
    });

  // optie 2
  // async function loadData() {
  const loadData = async () => {
    const response = await fetch(url);
    const hobbies = await response.json();
    const html = hobbies
      .map((hobby) => {
        return `<li>${hobby.hours} uur ${hobby.name} per week</li>`;
      })
      .join("");
    console.log(html);

    $list.innerHTML = html;
  };

  loadData();

  console.log("Ik ben hier");
})();

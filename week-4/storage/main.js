(() => {
  const items = [
    {
      name: "1PGMb",
      amount: 30,
    },
    {
      name: "1PGMa",
      amount: 20,
    },
  ];

  localStorage.setItem("classes", JSON.stringify(items));

  const classes = localStorage.getItem("classes");
  if (classes) {
    console.log(JSON.parse(classes));
  }
})();

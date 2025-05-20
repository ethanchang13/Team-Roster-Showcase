document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");
  const modal = new bootstrap.Modal(document.getElementById("playerModal"));
  const modalBody = document.getElementById("modalBody");
  const modalTitle = document.getElementById("playerModalLabel");

  const render = (team) => {
    grid.innerHTML = "";
    team.players.forEach((player, i) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-lg-4";

      const cardBg =
        player.position === "Point Guard" ? "bg-light" : "bg-white";

      col.innerHTML = `
        <div class="card h-100 shadow-sm ${cardBg}">
          <img src="${player.image}" class="card-img-top" alt="${player.name}" />
          <div class="card-body text-center">
            <h5 class="card-title">${player.name}</h5>
            <p class="text-muted mb-2">${player.position}</p>
            <button class="btn btn-outline-primary w-100" data-id="${i}">More Info</button>
          </div>
        </div>
      `;

      col.querySelector("button").addEventListener("click", () => {
        modalTitle.textContent = player.name;
        modalBody.innerHTML = `
          <p><strong>Position:</strong> ${player.position}</p>
          <p>${player.detail}</p>
        `;
        modal.show();
      });

      grid.appendChild(col);
    });
  };

  render(warriors);
});

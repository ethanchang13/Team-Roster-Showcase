document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");
  const playerModal = new bootstrap.Modal(
    document.getElementById("playerModal")
  );
  const playerModalBody = document.getElementById("playerModalBody");
  const playerModalLabel = document.getElementById("playerModalLabel");
  const allPlayersBtn = document.getElementById("all-players");
  const starPlayersBtn = document.getElementById("star-players");
  const searchInput = document.getElementById("searchInput");

  // Debounce function to limit rapid search updates
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  const render = (list) => {
    grid.innerHTML = "";
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12">
          <div class="bg-white rounded-2xl p-6 shadow-xl">
            <i class="fas fa-search text-warriors-navy text-3xl mb-4"></i>
            <p class="text-gray-700 text-lg">No players found. Try a different search term or filter.</p>
          </div>
        </div>
      `;
      return;
    }

    list.forEach((player, index) => {
      const col = document.createElement("div");
      col.className = "animate-slide-up";
      col.style.animationDelay = `${index * 0.1}s`; // Stagger animations
      const card = document.createElement("div");
      card.className = `card bg-white shadow-xl rounded-2xl overflow-hidden ${
        player.starPlayer ? "star-player" : ""
      }`;
      card.innerHTML = `
        <div class="relative">
          <img src="${player.photo}" alt="${
        player.fullName
      }" class="w-full h-56 object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found';" />
          <span class="position-badge position-${player.position.toLowerCase()}">${
        player.position
      }</span>
        </div>
        <div class="p-6 text-center">
          <h5 class="font-poppins font-bold text-warriors-navy">${
            player.fullName
          }</h5>
          <p class="text-gray-600">Age: ${player.age}</p>
          <button class="btn bg-warriors-navy text-white rounded-full px-4 py-2 mt-4 hover:bg-gold hover:text-warriors-navy transition-all" data-player-index="${index}">
            <i class="fas fa-info-circle mr-1"></i>More Info
          </button>
        </div>
      `;
      col.appendChild(card);
      grid.appendChild(col);

      const moreInfoBtn = card.querySelector("button");
      moreInfoBtn.addEventListener("click", () => {
        playerModalLabel.textContent = player.fullName;
        const statusBadge = player.starPlayer
          ? '<span class="badge bg-gold text-warriors-navy px-3 py-1 rounded-full"><i class="fas fa-star mr-1"></i>Star Player</span>'
          : "";
        playerModalBody.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="text-center">
              <img src="${player.photo}" alt="${player.fullName}" class="rounded-full w-full max-h-72 object-cover mb-4 shadow-lg" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found';" />
              <div class="space-x-2">${statusBadge} <span class="badge bg-warriors-navy text-white px-3 py-1 rounded-full">${player.position}</span></div>
            </div>
            <div>
              <h4 class="font-poppins font-bold text-warriors-navy mb-4">${player.fullName}</h4>
              <p class="text-gray-700 mb-4"><strong>Age:</strong> ${player.age}</p>
              <div class="bg-gray-50 p-6 rounded-lg shadow">
                <h5 class="font-bold text-warriors-navy"><i class="fas fa-lightbulb text-gold mr-2"></i>Fun Fact</h5>
                <p class="text-gray-700">${player.hiddenDetail}</p>
              </div>
            </div>
          </div>
        `;
        playerModal.show();
      });
    });
  };

  // Initialize with all players
  render(players);

  allPlayersBtn.addEventListener("click", () => {
    allPlayersBtn.classList.add("active", "bg-warriors-navy", "text-white");
    starPlayersBtn.classList.remove("active", "bg-warriors-navy", "text-white");
    starPlayersBtn.classList.add("border-warriors-navy", "text-warriors-navy");
    searchInput.value = "";
    render(players);
  });

  starPlayersBtn.addEventListener("click", () => {
    starPlayersBtn.classList.add("active", "bg-warriors-navy", "text-white");
    allPlayersBtn.classList.remove("active", "bg-warriors-navy", "text-white");
    allPlayersBtn.classList.add("border-warriors-navy", "text-warriors-navy");
    searchInput.value = "";
    render(players.filter((player) => player.starPlayer));
  });

  // Debounced search handler
  const handleSearch = debounce(() => {
    const query = searchInput.value.trim().toLowerCase();
    const activeFilter = starPlayersBtn.classList.contains("active")
      ? "star"
      : "all";
    let filteredPlayers = players;

    if (activeFilter === "star") {
      filteredPlayers = players.filter((player) => player.starPlayer);
    }

    filteredPlayers = filteredPlayers.filter((player) =>
      player.fullName.toLowerCase().includes(query)
    );
    render(filteredPlayers);
  }, 300);

  searchInput.addEventListener("input", handleSearch);

  // Ensure grid updates when search is cleared
  searchInput.addEventListener("change", () => {
    if (searchInput.value.trim() === "") {
      const activeFilter = starPlayersBtn.classList.contains("active")
        ? "star"
        : "all";
      if (activeFilter === "star") {
        render(players.filter((player) => player.starPlayer));
      } else {
        render(players);
      }
    }
  });
});

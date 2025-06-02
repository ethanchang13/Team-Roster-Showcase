// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select key DOM elements
  const grid = document.getElementById("rosterGrid");
  const playerModal = new bootstrap.Modal(
    document.getElementById("playerModal")
  );
  const playerModalBody = document.getElementById("playerModalBody");
  const playerModalLabel = document.getElementById("playerModalLabel");
  const allPlayersBtn = document.getElementById("all-players");
  const searchInput = document.getElementById("searchInput");

  // Limit rapid input triggers with debounce
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  // Render player cards into the grid
  const render = (list) => {
    grid.innerHTML = "";

    // Show message if no players match
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

    // Create and display a card for each player
    list.forEach((player, index) => {
      const col = document.createElement("div");
      col.className = "animate-slide-up";
      col.style.animationDelay = `${index * 0.1}s`;
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

      // Select the "More Info" button within the card
      const moreInfoBtn = card.querySelector("button");

      // Add functionality to "More Info" button
      moreInfoBtn.addEventListener("click", function () {
        const index = this.getAttribute("data-player-index");
        const player = list[index];

        playerModalLabel.textContent = player.fullName;

        const statusBadge = player.starPlayer
          ? '<span class="badge bg-gold text-warriors-navy px-3 py-1 rounded-full"><i class="fas fa-star mr-1"></i>Star Player</span>'
          : "";

        // Populate modal with player details
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

  // "All Players" button resets view
  allPlayersBtn.addEventListener("click", () => {
    allPlayersBtn.classList.add("active", "bg-warriors-navy", "text-white");
    searchInput.value = "";
    render(players);
  });

  // Search input with debounce
  const handleSearch = debounce(() => {
    const query = searchInput.value.trim().toLowerCase();
    let filteredPlayers = players;

    filteredPlayers = filteredPlayers.filter((player) =>
      player.fullName.toLowerCase().includes(query)
    );
    render(filteredPlayers);
  }, 300);

  // Handle typing in search bar
  searchInput.addEventListener("input", handleSearch);

  // Reset grid when search is cleared
  searchInput.addEventListener("change", () => {
    if (searchInput.value.trim() === "") {
      render(players);
    }
  });
});

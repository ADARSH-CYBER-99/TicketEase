document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let seat = document.getElementById("seat").value;
    let date = document.getElementById("date").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    // Generate Unique Ticket ID
    let ticketId = "T" + Date.now().toString().slice(-5);

    let tableBody = document.getElementById("history-table-body");
    let newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${ticketId}</td>
        <td>${name}</td>
        <td>${seat}</td>
        <td>${date}</td>
        <td>${from}</td>
        <td>${to}</td>
        <td><span style="color:green;font-weight:bold;">Booked</span></td>
        <td><button class='delete-btn' data-ticket-id='${ticketId}'>Delete</button></td>
    `;

    alert("🎉 Ticket with ID " + ticketId + " booked successfully!");
    document.getElementById("ticket-form").reset();
});

document.getElementById("view-history-btn").addEventListener("click", function() {
    document.getElementById("ticket-history").style.display = "block";
    this.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("ticket-history").addEventListener("click", function(event) {
    if (event.target.classList.contains('delete-btn')) {
        let ticketIdToDelete = event.target.getAttribute('data-ticket-id');
        event.target.closest('tr').remove();
        alert("❌ Ticket with ID " + ticketIdToDelete + " has been deleted.");
    }
});

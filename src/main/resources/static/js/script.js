function confirmDelete() {
    return confirm("Are you sure you want to delete this student?");
}

function searchStudents() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("studentTable");
    let rows = table.getElementsByTagName("tr");

    // Start from 1 to skip table header
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < cells.length - 1; j++) { // skip Actions column
            if (cells[j].innerText.toLowerCase().includes(input)) {
                found = true;
                break;
            }
        }

        rows[i].style.display = found ? "" : "none";
    }
}

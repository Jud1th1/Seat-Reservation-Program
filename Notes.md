### 🪑 Seat Reservation

## Seat Generation Logic Notes

### Goal:

- Generate a seating layout dynamically using JavaScript:
  - 20 rows (a–t), 3 seats on the left, 9 seats in the middle, 3 seats on the right
  - Each seat has: Unique ID → row + seat number
- Seats are generated using:
  - An array of row labels and counter for numbering

### Rows Array:

const rows = ["a", "b", "c", ..., "t"];

Represents each seating row.

Used to iterate through layout structure.

Keeps layout scalable (add/remove rows easily).

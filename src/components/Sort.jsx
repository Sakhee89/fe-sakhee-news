import { Form } from "react-bootstrap";

export function Sort({
  sortbyQuery,
  orderQuery,
  setOrderQuery,
  setSortbyQuery,
}) {
  function handleOrderChange(event) {
    setOrderQuery(event.target.value);
  }
  function handleSortbyChange(event) {
    setSortbyQuery(event.target.value);
  }
  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="sortby">
          Sort Articles by:{" "}
          <select
            name="sortby"
            size="1"
            value={sortbyQuery}
            onChange={handleSortbyChange}
          >
            <option value="created_at">Created Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="order">
          Order by:{" "}
          <select
            name="order"
            size="1"
            value={orderQuery}
            onChange={handleOrderChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </Form.Label>
      </Form.Group>
    </Form>
  );
}

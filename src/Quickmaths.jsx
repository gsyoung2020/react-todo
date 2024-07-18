/* eslint-disable react/prop-types */
export default function Quickmaths({
  one,
  two,
  colour,
  colorChoosen,
}) {
  //console.log(num1);
  var operator = one + two;
  return (
    <div>
      <form>
        <label htmlFor="color">Choose a color:</label>
        <input
          type="color"
          id="color"
          onChange={(event) => colorChoosen(event.target.value)}
        />
      </form>

      <strong style={{ color: colour }}>{operator}</strong>
    </div>
  );
}

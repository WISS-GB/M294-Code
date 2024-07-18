export default function CategorySelection(props) {
  return (
    <div>
      <h1>CategorySelection</h1>
      {
        props.categories.map((category) => <Button name={category} key={category}/> )
      }
    </div>
  );
}
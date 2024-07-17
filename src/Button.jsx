export default function Button (props){
  return (
    <button
      className="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
export default function Estilo(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: props.numero >= 0 ? "#2d2" : "#d22" }}>
        Texto Qualquer
      </h1>
    </div>
  );
}

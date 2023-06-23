export default function lista1() {
  return <div>{montaLista(99)}</div>;
}

function montaLista(apoio = 10) {
  let lista = [];
  for (let i = 1; i <= apoio; i++) {
    if (i < apoio) {
      lista[i] = <span>{i},<br></br></span>;
    } else {
      lista[i] = <span>{i}</span>;
    }
  }
  return lista;
}

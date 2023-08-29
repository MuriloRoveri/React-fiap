export default function Rodape(props) {
  return (
    <>
      <footer>
        
      <ul>
          {props.listaProps.map( (li)=>{
              return li;
      })}
      </ul>

        <p>&copy; 2021, Vite.js and React.</p>
      </footer>
    </>
  );
}

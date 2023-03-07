import { useState } from "react";
import Banner from "./componentes/Banner";
import Category from "./componentes/Category";
import Form from "./componentes/Form";
import Rodape from "./componentes/Footer/footer";
function App() {
  const categorias = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];
  
  let categoriasFiltrar = [];

  const [livros, setLivros] = useState([]);

  const NovoLivroAdicionado = (livro) => {
    console.log(livro);
    setLivros([...livros, livro]);
  };

    for(let i = 0; i < categorias.length; i++){
    if(livros.filter(livro=> livro.categoria === categorias[i].nome).length > 0){
      categoriasFiltrar.push(categorias[i]);

    }else{
      continue;
    }
  }

  return (
    <div className="App">
      <Banner />
      <Form
        categorias={categorias.map((categoria) => categoria.nome)}
        LivroCadastrado={(livro) => NovoLivroAdicionado(livro)}
      />
      {categoriasFiltrar.map((categoria) => (
        <Category
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          livros={livros.filter((livro) => livro.categoria === categoria.nome)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;

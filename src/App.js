import React from "react";
//import useDelete from "./useDelete";
// import usePost from "./usePost";
//import useGet from "./useGet";

import Rest from "./rest";


const baseURL = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

//const url = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/movimentacoes/2022-10.json'



function App() {
  const data = useGet('movimentacoes/2022-10')

  // return [data,post] from usePost turn to [postData, post]
 const [postData, post] = usePost('movimentacoes/2022-10')

 const [deleteData, remove] = useDelete()



  const newSave = () => {
    post({valor: 44, descricao:'Victor'})
  }

  const doRemove = () => {
    remove('movimentacoes/2022-10/-NEG65cszRfrWj1V1jMw')
  }
  
  
  // const saveNew = () => {
  //   post({valor: 14, descricao: 'olá'})
  // }

  if(data.loading){
    return <h2>Loading...</h2>
  }

  return (
    <div >
     <h1>My Money</h1>
     {JSON.stringify(data)}
     <button onClick={newSave}>Salvar</button>
     <pre>{JSON.stringify(postData)}</pre>
     <button onClick={doRemove}>Remove</button>
     <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App;

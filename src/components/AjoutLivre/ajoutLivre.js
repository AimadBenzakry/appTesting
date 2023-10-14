import React from 'react'
import { Container,Form, Button, Alert} from 'react-bootstrap'
import api from '../../api/axioConfig'

export const AjoutLivre = () => {

    const [isbn, setIsbn] = React.useState('');
    const [titre, setTitre] = React.useState('');
    const [auteur, setAuteur] = React.useState('');
    const [show, setShow] = React.useState(false);
    const viderChamps = () => {
        setIsbn('');
        setTitre('');
        setAuteur('');
    }
    const ajouterLivre = async (e) => { 
        e.preventDefault();
        
            if(isbn=='' || titre=='' || auteur==''){
                setShow(true);
            }else{
                setShow(false);
                try{
                const response = await api.post('/api/v1/livres/addLivre',
                {'isbn':isbn,'titre':titre,'auteur':auteur});
                console.log(response.data);
            } catch(error){
                console.log(error);
              }
              viderChamps();

            }
        
      }
  return (
    <Container  style={{ 'marginTop': '2rem', "maxWidth":"40rem"}}>
        <h2 style={{ 'marginBottom': '1.5rem' }}>Ajouter un livre</h2>
        {show && <Alert variant={"danger"}> 
                Veuillez remplir tous les champs!</Alert>}
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={isbn} type="text" placeholder="isbn" onChange={e=>setIsbn(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={titre} type="text" placeholder="titre" onChange={e=>setTitre(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={auteur} type="text" placeholder="auteur" onChange={e=>setAuteur(e.target.value)}/>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" type="button" size="lg" onClick={e=>ajouterLivre(e)}>Ajouter</Button>
            </div>
            
        </Form>
        
    </Container>
  )
}

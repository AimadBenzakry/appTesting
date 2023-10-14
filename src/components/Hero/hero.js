import React from 'react'
import { Table } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export const Hero = ({livres}) => {
  
  return (
    <div>
        <Container  style={{ 'marginTop': '2rem' }}>
        <h2 style={{ 'marginBottom': '1.5rem' }}>La liste des livres</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>ISBN</th>
                    <th>Titre</th>
                    <th>Auteur</th>
                </tr>
            </thead>

            <tbody>
                {livres.map((livre) => (
                    <tr key={livre.id}>
                        <td>{livre.id}</td>
                        <td>{livre.isbn}</td>
                        <td>{livre.titre}</td>
                        <td>{livre.auteur}</td>
                    </tr>
                ))}
            </tbody>

            </Table>
            </Container>
    </div>
   
  
  )
}

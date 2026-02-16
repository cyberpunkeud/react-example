import Card from 'react-bootstrap/Card';
function KitchenSinkExample() {
  return (
    <Card style={{ width: '18rem', backgroundColor: 'black', height: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          bleu
        </Card.Text>
      </Card.Body>
    
    </Card>
  );
}

export default KitchenSinkExample;
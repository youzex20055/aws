const products = [
    {
      id: 1,
      title: 'PC Portable Gamer HP VICTUS',
      price: '7490 DH',
      thumbnail : 'HP16D0195NF.jpg'
    },
    {
      id: 2,
      title: 'PC Portable Gamer HP VICTUS',
      price: '2190 DH',
      thumbnail : 'HP14424U3EA.jpg'
    },
    {
      id: 3,
      title: 'Pc Portable Chromebook Acer',
      price: '3640 DH',
      thumbnail: 'NXATHEF002.jpg'
    },
    {
      id: 4,
      title: 'PC Portable - HUAWEI',
      price: '1270 DH',
      thumbnail: 'HUA6901443442959.jpg'
    },
  ];
  function Product(props) {
    const { title, price, thumbnail } = props;
    let thumbnailsrc = "pictures/"+thumbnail;
    return (
      <div className="col">
        <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" src={thumbnailsrc} alt="" />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p className="card-text">{price}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 export default function Products(props) {
      return (
        <main className="container">
          <h1>Ordinateurs portables</h1>
          <div className="row mb-2">
            {products.map((product) => (
                <Product key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />
            ))}
          </div>
        </main>
      )
  }
  



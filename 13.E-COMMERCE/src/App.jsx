
import './App.css'
import Header from './components/Header'
import PageContainer from './container/PageContainer'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, calculateBasket, deleteBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect } from 'react'


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  },[])



  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer anchor='right' onClose={() => dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img src={product.image} width={50} height={50} />
                    <p style={{ width: '350px', marginRight: '5px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px' }}>{product.price}TL</p>
                    <button onClick={()=>dispatch(deleteBasket(product.id))} style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185,76,76)', color: 'white', border: 'none', width: '50px' }}>Sil</button>
                  </div>

                </div>

              )
            })

          }
           <div>
              <p style={{textAlign:'center'}}>toplam tutar : {totalAmount}</p>
            </div>
        </Drawer>

      </PageContainer>
    </div>
  )
}

export default App

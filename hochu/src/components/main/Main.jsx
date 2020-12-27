import ProductsList from './productList/ProductsList'

function Main() {
    return (
        <div>
            <ProductsList title = {'Минимальная цена'} description ={'Последний шанс! Успей купить по выгодной цене'}/>
            <ProductsList title = {'По популярности'}/>
        </div>
    );
}

export default Main;

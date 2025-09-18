import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/skeleton';
import axios from 'axios';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const {searchValue} = React.useContext(SearchContext)

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [sort, setSort] = React.useState({
      name: 'популярности',
      sortProperty: 'rating',
    })
    const [categoryId, setCategoryId] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(1)

useEffect(() => {
  setIsLoading(true);

  const sortBy = sort.sortProperty.replace('-', '');
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `&category=${categoryId}` : '';
  const searchBy = searchValue ? `&search=${searchValue}` : '';

  axios
    .get(
      `https://68c1449598c818a69401434d.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}${category}${searchBy}`
    )
    .then((res) => {
      setItems(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error('ошибка', err);
      setItems([])
      setIsLoading(false)
    });

  window.scrollTo(0, 0);
}, [categoryId, sort, searchValue,currentPage]);




  
  

  return (
    <div className='container'>
    <div className="content__top">
              <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
              <Sort value={sort} onClickSort={(i) => setSort(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
            <Pagination
              onChangePage={(num) => setCurrentPage(num)}
            />
    </div>
  )
}

export default Home
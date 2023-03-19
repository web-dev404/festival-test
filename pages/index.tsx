import { Wrapper } from '@components/layout'
import Head from 'next/head'

import Content from '@components/common/Content/Content'
import ContentHelp from '@components/common/ContentHelp/ContentHelp'
import ContentItem from '@components/common/ContentItem/ContentItem'
import FirstScreen from '@components/common/FirstScreen/FirstScreen'
import Offer from '@components/common/Offer/Offer'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <Head>
        <title>Фестивали</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FirstScreen />
      <main className='page'>
        <Content className={'md:grid-cols-6'}>
          <ContentItem
            className={'col-span-6 md:col-span-6'}
            name={'Карнавальные'}
            img={'/img/photo-1.png'}
            buttons={[
              {
                text: 'Карнавал',
              },
              {
                text: 'Новый год',
              },
              {
                text: 'Хэллуин',
              },
              {
                text: 'Аниме',
              },
            ]}
          />
          <ContentItem
            className={'col-span-3 md:col-span-3'}
            name={'Кино и сказки'}
            img={'/img/photo-2.png'}
            buttons={[
              {
                text: 'Отечественные',
              },
              {
                text: 'Зарубежные',
              },
            ]}
          />
          <ContentItem
            className={'col-span-3'}
            name={'Национальные'}
            img={'/img/photo-3.png'}
            buttons={[
              {
                text: 'Россия',
              },
              {
                text: 'Европа',
              },
            ]}
          />
          <ContentHelp className={'col-span-12 md:col-span-6'} />
          <ContentItem
            className={'col-span-3'}
            name={'Исторические'}
            img={'/img/photo-4.png'}
            buttons={[
              {
                text: 'Средневековье',
              },
              {
                text: 'Военные',
              },
            ]}
          />
          <ContentItem
            className={'col-span-3'}
            name={'Вечерние'}
            img={'/img/photo-5.png'}
            buttons={[
              {
                text: 'Костюмы, платья',
              },
              {
                text: 'Смокинги',
              },
            ]}
          />
          <ContentItem
            className={'col-span-3'}
            name={'Промо костюмы'}
            img={'/img/photo-6.png'}
            buttons={[
              {
                text: 'Аниматоры',
              },
              {
                text: 'Ростовые куклы',
              },
            ]}
          />
          <ContentItem
            className={'col-span-3'}
            name={'AR-костюмы'}
            img={'/img/photo-7.png'}
            buttons={[
              {
                text: 'Космические',
              },
              {
                text: 'Подиумные',
              },
            ]}
          />
        </Content>
        <Content className={'md:grid-cols-6'}>
          <ContentItem
            order={true}
            name={'Сценические костюмы'}
            img={'/img/photo-8.png'}
            className={'col-span-3'}
          />
          <ContentItem
            order={true}
            name={'Фраки и смокинги'}
            img={'/img/photo-9.png'}
            className={'col-span-3'}
          />
          <ContentItem
            order={true}
            name={'Театральные костюмы'}
            img={'/img/photo-10.png'}
            className={'col-span-3'}
          />
          <ContentItem
            order={true}
            name={'Изготовление ростовых кукол'}
            img={'/img/photo-11.png'}
            className={'col-span-3'}
          />
          <ContentHelp className={'col-span-12 md:col-span-6'} />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Исторические и национальные костюмы'}
            img={'/img/photo-12.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Костюмы Деда Мороза и Снегурочки'}
            img={'/img/photo-13.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Костюмы для детских центров и аниматоров'}
            img={'/img/photo-14.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Костюмы для городских театров'}
            img={'/img/photo-15.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Игровой реквизит'}
            img={'/img/photo-16.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Сувенироная продукция'}
            img={'/img/photo-17.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Промо одежда и униформа'}
            img={'/img/photo-18.png'}
          />
          <ContentItem
            order={true}
            className={'col-span-3'}
            name={'Брендирование машинной вышивкой'}
            img={'/img/photo-19.png'}
          />
        </Content>
        <Content
          className={'grid-cols-4 gap-x-[70px] md:grid-cols-2'}
        >
          <ContentItem
            className={'col-span-2'}
            order={true}
            name={'Выездная фотостудия'}
            img={'/img/photo-20.png'}
          />
          <ContentItem
            className={'col-span-1'}
            name={'Выездная костюмерка'}
            order={true}
            img={'/img/photo-21.png'}
          />
          <ContentItem
            className={'col-span-1'}
            name={'Выездная гримерка'}
            order={true}
            img={'/img/photo-22.png'}
          />
          <ContentHelp
            className={'col-span-4 md:col-span-2'}
            blue={true}
          />
          <ContentItem
            name={'Балы исторические'}
            img={'/img/photo-23.png'}
            order={true}
            className={'col-span-1'}
          />
          <ContentItem
            name={'Интерактивные программы. Аниматоры'}
            img={'/img/photo-24.png'}
            order={true}
            className={'col-span-1'}
          />
          <ContentItem
            name={'Фотодни. Фотосессии'}
            order={true}
            img={'/img/photo-25.png'}
            className={'col-span-2'}
          />
        </Content>
        <Offer />
      </main>
    </Wrapper>
  )
}

export default Home

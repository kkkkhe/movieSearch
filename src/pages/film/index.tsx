import { Layout } from "../../shared/ui/Layout/Layout"
import { useParams } from "react-router-dom"
import { validValue } from "../../utils/validValue/validValue"
import { dateConverter } from "../../utils/stringToDate/dateConverter"
import { SwiperSlider } from "../../widgets/sliderBlock/Slider"
import style from './styles.module.scss'
import { Facts } from "../../shared/ui/Facts/Facts"
import { BackButton } from "../../shared/ui/BackButton/BackButton"
import { Rating } from "../../shared/ui/Rating/Rating"
import { ButtonWatch } from "./ui"
import { InfoTable } from "../../shared/ui/AboutFilm/FactsAboutFilm"
import { ButtonStore } from "./ui/Button/ButtonStore"
import { FooterTabs } from "../../shared/ui/Tabs/FooterTabs"
import { Review,filmModel } from "../../Entities/film"
import { LoadMoreButton, loadMoreModel } from "../../features/loadMore"
export const MoviePage = () => {
	const {id} = useParams<string>()
	const {data, isLoading} = filmModel.useGetMovieByIdQuery(id)
	//@ts-ignore
	const {name,description,similarMovies,countries,rating,genres,slogan,ageRating,budget,alternativeName,movieLength,premiere,fees,poster,persons,facts
	}= {...data}
	const items = [
		{leftItem: 'Страны', rightItem: countries?.map((action:{name: string}) => action.name).join(', ')},
		{leftItem: 'Жанр', rightItem: genres?.map((action:any) => action.name).join(', ')},
		{leftItem: 'Слоган', rightItem: slogan || '—'},
		{leftItem: 'Возраст', rightItem: ageRating || '—'},
		{leftItem: 'Бюджет', rightItem: `${budget?.currency || ``} ${validValue(budget?.value || '—')}`},
		{leftItem: 'Время', rightItem: `${movieLength} 	min`},
		{leftItem: 'Сборы в США', rightItem: `${fees?.usa?.currency || ''} ${validValue(fees?.usa?.value || '—')}`},
		{leftItem: 'Сборы в мире', rightItem: `${fees?.world?.currency || ''} ${validValue(fees?.world?.value || '—')}`},
		{leftItem: 'Премьера в мире', rightItem: dateConverter(premiere?.world)},
	]
	const actors = persons?.filter(item => {
		if (item.enProfession === 'actor' && item?.name?.length) {
			return item
        }
	})
	const tabInfo = [
		{title: 'Описание', content: <h2 className={style.description}>{description}</h2>, condition: description?.length},
		{title: 'Актёры', content:  <SwiperSlider content={actors} title={'Актёры'} redirect={'name'}/>, condition:actors?.length},
		{title: 'Факты', content:  <Facts facts={facts}/>, condition: facts?.length}
	]
	const titleName = isLoading? 'Загрузка..' : name
	const alternativeTitleName = isLoading? 'Загрузка..' : alternativeName
	return (
		<Layout>
			<div className={style.wrapper}>
			<div className={style.section__body}>
				<BackButton/>
				<section className={style.box__body}>
					<div className={style.body__poster}>
						<div className={style.image__container}>
							<img className={style.poster} src={poster?.url} alt="" />
						</div>
						<Rating ratingStyle={style.body__rating} rating={rating?.kp? rating.kp : 0}/>
					</div>
					<div className={style.body__info}>
						<h1 className={style.body__title}>{titleName}</h1>
						<p className={style.body__secondTitle}>{alternativeTitleName}</p>
						<div className={style.body__buttons}>
							<ButtonWatch title={'Смотреть'}/>
							<ButtonStore title={'Буду смотреть'}/>
						</div>
							<InfoTable items={items}/>
					</div>
				</section>	
			<FooterTabs tabInfo={tabInfo}/>
			{similarMovies?.length !=0 && <SwiperSlider content={similarMovies} title={'Похожее кино'} redirect={'film'}/>}
			<Review id={id}/>
			<LoadMoreButton action={loadMoreModel.showMoreReview}/>
			</div>
		</div>
		</Layout>
	)
}

// export default MoviePage
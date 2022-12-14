import classnames from "classnames"
import { Link } from "react-router-dom"
import { arountNumber } from "@/shared/lib"
import { ratingColor, textSplitter } from "./lib"
import style from './styles.module.scss'
import { ReactNode } from "react"
type propsTypes = {
	poster: {url:string}
	id: number
	name: string
	movieLength: number
	year: number
	description: string
	rating: {kp: number}
	children: ReactNode
}
export const InfoCard = ({poster,id, name, movieLength,year,description,rating, children}:propsTypes) => {
return (
		<div className={style.body__card} key={id}>
			<div className={style.body__container}>
				<Link to={`/film/${id}`}>
					<div className={style.body__image}>
						<img className={style.image} src={poster?.url} alt={`${name}`} />
					</div>
				</Link>
				<article className={style.body__article}>
					<Link to={`/film/${id}`}>
						<h3 className={style.body__name}>{name}</h3>
					</Link>
					<div className={style.body__info}>
						<div>{year},</div>
						<div>{movieLength} min</div>
					</div>
						<div className={style.body__description}>
							<Link to={`/film/${id}`}>
								{textSplitter(description)}
							</Link>
						</div>
				</article>
			</div>
			<div className={style.body__fav}>
				<div className={classnames(style[ratingColor(rating?.kp)], style.mark)}>{arountNumber(rating?.kp)}</div>
				{children}
			</div>
		</div>
)
}
import { FactsType } from "./FactsType"
import { RatingType } from "./someTypes/RatingType"

type BackdropType = {
	_id: string
	url: string
	previewUrl: string
}

type BudgetType = {
	_id:string
	value: number
	currency: string
}

type CountriesType = {
	name: string
}

type DistributorsType ={
	distributor: string
	distributorRelease: null | string
}
type ExternalIdType = {
	_id: string
	imdb: string
}
type FeesType = {
	russia: {
		currency: string
		value: number
		_id: string
	}
	usa: {
		currency: string
		value: number
		_id: string
	}
	world: {
		currency: string
		value: number
		_id: string
	}
	_id: string
}
type GenresType = {
	name: string
}

type ImagesInfoType = {
	_id: string
	framesCount: number
} 
type LogoType = {
	url: string
	_id: string
}
type NamesType = {
	name: string
}
type PosterType = {
	previewUrl: string
	url: string
	_id: string
}
type PremiereType = {
	bluray: string
	cinema: string
	country: string
	dvd: string
	russia: string
	world: string
	_id: string
}
type ProductionCompaniesType = {
	name: string
	previewUrl: string
	url: string
}
type SequelsAndPrequels = {
	alternativeName: string
	enName: string
	id: number
	name: string
	poster: PosterType
}
export type SimilarMoviesType = {
	alternativeName: string
	enName: string
	id: number
	name: string
	poster: PosterType
	_id: string
}  | undefined
type SpokenLanguages = {
	name: string
	nameEn: string
}
type TechnologyType = {
	has3D: boolean
	hasImax: boolean
	_id: string
}
type PersonType = {
	description: null | string
	enName: string
	enProfession: string
	id: number
	name:string
	photo: string
}

type VideosType = {
	teasers: []
	trailers: {
		name: string
		site: string
		url: string
		_id: string
		size: number
		type: string
	}[]
}
type WatchabilityType = {
	items: {
			logo:{
		url: string
		_id: string
	}
	name: string
	url: string
	_id: string
	}[]
}
type ImagesType = {
	postersCount: number
	backdropsCount: number
	framesCount: number
}

export type movieTypes = {
	alternativeName: string
	description: string
	enName: null | string
	externalId: ExternalIdType
	id: number
	logo: LogoType
	movieLength: number
	name: string | null
	names: NamesType[]
	poster: PosterType
	rating: RatingType
	shortDescription: string | null
	type: string
	votes: RatingType
	year: number
}

export interface FilmType extends movieTypes{
	ageRating: number
	backdrop:BackdropType
	budget: BudgetType
	collections: []
	countries: CountriesType[]
	createDate: string
	distributors: DistributorsType
	facts: FactsType[]
	fees: FeesType
	genres:GenresType[]
	images: ImagesType
	imagesInfo: ImagesInfoType
	lists: []
	persons: PersonType[]
	premiere: PremiereType
	productionCompanies: ProductionCompaniesType[]
	ratingMpaa: string
	seasonsInfo: []
	sequelsAndPrequels: SequelsAndPrequels[]
	similarMovies: SimilarMoviesType[] | undefined
	slogan: string
	spokenLanguages: SpokenLanguages[]
	status: string
	technology: TechnologyType
	ticketsOnSale: false
	typeNumber: number
	updateDates: string[]
	updatedAt: string
	videos: VideosType
	watchability: WatchabilityType
}
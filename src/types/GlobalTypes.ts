export enum FeaturesENUM {
	PRODUCT_NAME,
	GENERIC_NAME,
	BRANDS,
	CATEGORIES_EN,
	INGREDIENTS_TEXT,
	ALLERGENS,
	ENERGY_100G,
	FAT_100G,
	SATURATED_FAT_100G,
	CARBOHYDRATES_100G,
	SUGARS_100G,
	FIBER_100G,
	PROTEINS_100G,
	SALT_100G,
	NUTRI_SCORE,
	NUTRISCORE_GRADE,
	ECOSCORE_SCORE,
	ECOSCORE_GRADE,
}

export type Feature = {
	name: FeaturesENUM
	displayName: string
	type: 0 | 1
	prefillList?: string[]
}

export enum ConditionTypeString {
	EGAL,
	CONTIENT
}

export enum ConditionTypeNumber {
	PLUS,
	MOINS,
	EGAL
}

export type Condition = {
	feature: Feature,
	selected: ConditionTypeString | ConditionTypeNumber
	value: number | string
}

export type Display = {
	feature: Feature,
	value: string | number
}
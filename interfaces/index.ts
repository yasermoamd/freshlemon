export interface IUser {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
}

export interface IUserProfile {
	first_name: string;
	last_name: string;
	profile_img: string;
	createdAtByHour: number;
	recipe_title: string;
	recipe_description: string;
	recipe_img: string;
	like: number;
	comments: number;
}

import { Category } from 'src/pages/client/pages/home/components/categories/common';

export interface Product {
	category: Category;
	creationAt: Date;
	description: string;
	id: number;
	images: string[];
	price: number;
	title: string;
	updatedAt: Date;
}

import { Marca } from "./marca.model";
import { Pais} from "./pais.model";

export class Producto {
	
	idProducto?:number;
	nombre?:string;
	serie?:number;
	precio?:number;
	stock?:number;
	
	Marca?:Marca
	Pais?:Pais
}

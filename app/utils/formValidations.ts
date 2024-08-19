import { verifyProductId } from "../services/productService";
import { parseDate } from "./parseDate";

export const validateId = async (id: string): Promise<string | null> => {
    if (!id) {
      return 'Este campo es requerido!';
    }
    if (id.length < 3 || id.length > 10) {
      return 'El ID debe tener entre 3 y 10 caracteres.';
    }
  
    try {
      const idExists = await verifyProductId(id);
      if (idExists) {
        return 'El ID ya existe en el sistema.';
      }
    } catch (error) {
      console.error('Error al verificar la existencia del ID:', error);
      return 'Error al verificar el ID.';
    }
  
    return null;
  };
  
  export const validateName = (name: string) => {
    if (!name) {
      return "Este campo es requerido!";
    }
    if (name.length < 5 || name.length > 100) {
      return "El nombre debe tener entre 5 y 100 caracteres.";
    }
    return "";
  };
  
  export const validateDescription = (description: string) => {
    if (!description) {
      return "Este campo es requerido!";
    }
    if (description.length < 10 || description.length > 200) {
      return "La descripción debe tener entre 10 y 200 caracteres.";
    }
    return "";
  };
  
  export const validateLogo = (logo: string) => {
    if (!logo) {
      return "Este campo es requerido!";
    }
    return "";
  };
  
  export const validateReleaseDate = (releaseDate: string) => {
    if (!releaseDate) {
      return "Este campo es requerido!";
    }
  
    const releaseDateObj = parseDate(releaseDate); // Convierte el string a Date correctamente
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Asegura que se compara solo la fecha, sin horas
  
    if (isNaN(releaseDateObj.getTime())) {
      return "La fecha de liberación no es válida.";
    }
    if (releaseDateObj < today) {
      return "La fecha de liberación debe ser igual o mayor a la fecha actual.";
    }
  
    return "";
  };
  
  export const validateReviewDate = (reviewDate: string, releaseDate: string) => {
    if (!reviewDate) {
      return "Este campo es requerido!";
    }
  
    const reviewDateObj = parseDate(reviewDate);
    const releaseDateObj = parseDate(releaseDate);
  
    if (isNaN(reviewDateObj.getTime()) || isNaN(releaseDateObj.getTime())) {
      return "La fecha de revisión o liberación no es válida.";
    }
  
    // Calcula la fecha exacta un año después de la liberación
    const oneYearLater = new Date(releaseDateObj);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    if (
      reviewDateObj.getDate() !== oneYearLater.getDate() ||
      reviewDateObj.getMonth() !== oneYearLater.getMonth() ||
      reviewDateObj.getFullYear() !== oneYearLater.getFullYear()
    ) {
      return "La fecha de revisión debe ser exactamente un año posterior a la fecha de liberación.";
    }
  
    return "";
  };
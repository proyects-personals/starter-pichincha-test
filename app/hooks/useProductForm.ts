import { useState, useEffect } from "react";
import { validateDescription, validateId, validateLogo, validateName, validateReleaseDate, validateReviewDate } from "@/app/utils/formValidations";
import { ProductFinancial } from "@/app/interface/ProductFinancial";
import { useCreateProduct } from "@/app/hooks/useCreateProduct";
import { useUpdateProduct } from "./useUpdateProduct";
import { convertToBackendDate, formatDateToUser } from "../utils/formatDate";

export const useProductForm = (product?: ProductFinancial) => {
  const [formData, setFormData] = useState<ProductFinancial>({
    id: "",
    name: "",
    description: "",
    logo: "",
    date_release: "",
    date_revision: "",
  });

  const [initialId, setInitialId] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const { handleCreateProduct, loading: loadingCreate } = useCreateProduct();
  const { updateProductById, loading: loadingUpdate } = useUpdateProduct();
  const isEditing = !!product;

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        date_release: formatDateToUser(product.date_release),
        date_revision: formatDateToUser(product.date_revision),
      });
      setInitialId(product.id);
    } else {
      resetForm();
    }
  }, [product]);

  const handleChange = (name: keyof ProductFinancial, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value).then((error) => {
      setErrors((prevState) => ({ ...prevState, [name]: error }));
    });
  };

  const validateField = async (name: keyof ProductFinancial, value: string) => {
    switch (name) {
      case "id":
        return await validateId(value);
      case "name":
        return await validateName(value);
      case "description":
        return await validateDescription(value);
      case "logo":
        return await validateLogo(value);
      case "date_release":
        return validateReleaseDate(value);
      case "date_revision":
        return validateReviewDate(value, formData.date_release);
      default:
        return "";
    }
  };

  const handleSubmit = async (callback: () => void) => {
    try {
      const formDataToSubmit = {
        ...formData,
        date_release: convertToBackendDate(formData.date_release),
        date_revision: convertToBackendDate(formData.date_revision),
      };

      if (isEditing) {
        await updateProductById(formDataToSubmit);
      } else {
        await handleCreateProduct(formDataToSubmit);
      }
      callback();
    } catch (error) {
      console.error("Error handling product", error);
    }
  };

  const resetForm = () => {
    setFormData({
      id: initialId,
      name: "",
      description: "",
      logo: "",
      date_release: "",
      date_revision: "",
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    loading: loadingCreate || loadingUpdate,
    isEditing,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
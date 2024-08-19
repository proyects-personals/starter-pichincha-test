export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

export const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
};
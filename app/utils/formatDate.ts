export const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
};
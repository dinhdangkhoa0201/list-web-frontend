const formatDateTime = (value: any) => {
    const temp = new Date(value);
    return temp.toLocaleString("vi-VN");
}

export const dateTimeUtil = {
    formatDateTime
}
